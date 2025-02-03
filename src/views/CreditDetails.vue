<script setup>
import H1 from '@/components/typographie/H1.vue';
import Button from '@/components/Button.vue';
import H3 from '@/components/typographie/H3.vue';
import Stats from '@/components/stats/Stats.vue';
import StatItem from '@/components/stats/StatItem.vue';
import Breadcrumbs from '@/components/navigation/Breadcrumbs.vue';
import BreadcrumbHomeItem from '@/components/navigation/BreadcrumbHomeItem.vue';
import BreadcrumbItem from '@/components/navigation/BreadcrumbItem.vue';
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { ref } from 'vue'
import { restSchuldBerechung, toEuro } from "@/functions";

import { storeToRefs } from 'pinia';
import { useProjectsStore } from '@/stores/projects';
import { useCreditsStore } from '@/stores/credits';

const props = defineProps({
    projectId: {
        required: true,
    },
    creditId: {
        required: true,
    }
})

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const projects = useProjectsStore()
const { findProjectById } = storeToRefs(projects)

const currentProject = findProjectById.value(props.projectId);

const credits = useCreditsStore()
const { findCreditById } = storeToRefs(credits)

const currentCredit = findCreditById.value(props.creditId);

const chartLabels = [];
const chartDataset = [];

for (var i = 1; i <= currentCredit.zinsbindung; i++) {
    chartLabels.push("N + " + i + "J");
}

var restSchuld = currentProject.anschaffungskosten - currentCredit.verwendetesEigenkapital;
const monatsRate = restSchuld * (currentCredit.zinsen + currentCredit.tilgung) / 1200;

for (var i = 1; i <= currentCredit.zinsbindung; i++) {
    restSchuld = restSchuldBerechung(restSchuld, 12, monatsRate, currentCredit.zinsen);

    chartDataset.push(restSchuld);
}

const chartData = {
    labels: chartLabels,
    datasets: [{
        label: 'Restschuld',
        data: chartDataset
    }]
};
const chartOptions = {
    responsive: true
};

const zinsenNeu = ref(3);

</script>

<template>
    <Breadcrumbs>
        <BreadcrumbHomeItem />
        <BreadcrumbItem title="projects" link="/" />
        <BreadcrumbItem :title="currentProject.name" :link="'/projects/' + currentProject.id" />
        <BreadcrumbItem :title="currentCredit.bankname" />
    </Breadcrumbs>
    <H1>{{ currentCredit.bankname }} Kredit für {{ currentProject.name }}</H1>
    <div class="flex mt-6 items-center justify-between">
        <H3>Kredit Infos</H3>
        <RouterLink :to="'/projects/' + currentProject.id + '/credit?edit=' + currentCredit.id">
            <Button>
                Bearbeiten
            </Button>
        </RouterLink>
    </div>

    <Stats>
        <StatItem title="Benötigter Kredit"
            :value="currentProject.anschaffungskosten - currentCredit.verwendetesEigenkapital + ' €'" />
        <StatItem title="Zinsen" :value="currentCredit.zinsen + ' %'" />
        <StatItem title="Tilgung" :value="currentCredit.tilgung + ' %'" />
        <StatItem title="Zinsbindung" :value="currentCredit.zinsbindung + ' Jahre'" />
        <StatItem title="Monatsrate" :value="toEuro(monatsRate) + ' €'" />
        <StatItem title="Restschuld nach Zinsbindung" :value="toEuro(restSchuld) + ' €'" />
    </Stats>

    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />

    <div class="flex mt-6 items-center justify-between">
        <H3>Anschluss Finanzierung</H3>
        <div class="felx flex-row">
            <label class="block" for="zinsenPessimistisch">Zinsen in %</label>
            <input v-model="zinsenNeu" type="number" name="zinsenPessimistisch" id="zinsenPessimistisch"
            class="block rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
        </div>
    </div>
    <Stats>
        <StatItem title="Benötigter Kredit"
            :value="toEuro(restSchuld) + ' €'" />
        <StatItem title="Zinsen" :value="zinsenNeu + ' %'" />
        <StatItem title="Tilgung" :value="currentCredit.tilgung + ' %'" />
        <StatItem title="Monatsrate" :value="toEuro(restSchuld * ((zinsenNeu + currentCredit.tilgung) / 100) / 12)  + ' €'" />
        <StatItem title="Angenommene Zinsbindung" value="10 Jahre" />
        <StatItem title="Restschuld nach Zinsbindung" :value="restSchuldBerechung(
            restSchuld,
            120,
            restSchuld * ((zinsenNeu + currentCredit.tilgung) / 100) / 12,
            zinsenNeu
        ) + ' €'" />
    </Stats>

</template>
