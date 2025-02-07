<script setup>
import H1 from '@/components/typographie/H1.vue';
import TwoColumnForm from '@/components/form/TwoColumnForm.vue';
import FormItem from '@/components/form/FormItem.vue';
import Breadcrumbs from '@/components/navigation/Breadcrumbs.vue';
import BreadcrumbHomeItem from '@/components/navigation/BreadcrumbHomeItem.vue';
import BreadcrumbItem from '@/components/navigation/BreadcrumbItem.vue';
import { ref } from 'vue'

import { storeToRefs } from 'pinia'
import { useProjectsStore } from '@/stores/projects'
import { useCreditsStore } from '@/stores/credits'
import { useRouter, useRoute } from 'vue-router';

const props = defineProps({
    projectId: {
        required: true,
    }
})

const router = useRouter();
const route = useRoute();

const projects = useProjectsStore()
const { findProjectById } = storeToRefs(projects)
const currentProject = findProjectById.value(props.projectId);

const credits = useCreditsStore();
const { findCreditById } = storeToRefs(credits);
var currentCredit = null;

const bank = ref('Kreissparkasse Köln');
const verwendetesEigenkapital = ref(10000);
const zinsen = ref(2,5);
const tilgung = ref(2,5);
const zinsbindung = ref(10);

var pageTitle = 'Neue Finanizierugsoption';

if ("edit" in route.query) {
    var pageTitle = 'Finanizierugsoption bearbeiten';
    currentCredit = findCreditById.value(route.query.edit);

    if (!currentCredit) {
        router.push({
            name: 'project',
            params: {
                projectId: currentProject.id
            }
        });
    }

    bank.value = currentCredit.bankname;
    verwendetesEigenkapital.value = currentCredit.verwendetesEigenkapital;
    zinsen.value = currentCredit.zinsen;
    tilgung.value = currentCredit.tilgung;
    zinsbindung.value = currentCredit.zinsbindung;
}

function addCredit() {
    if (!bank.value ||
        !verwendetesEigenkapital.value ||
        !zinsen.value ||
        !tilgung.value ||
        !zinsbindung.value
    ) {
        alert("Bitte füllen Sie alle Felder aus");
        return;
    }

    if (currentCredit) {
        credits.updateCredit(
            currentCredit.id,
            Number(currentProject.id),
            bank.value,
            Number(verwendetesEigenkapital.value),
            Number(zinsen.value),
            Number(tilgung.value),
            Number(zinsbindung.value),
        );
    }
    else{
        credits.addCredit(
            Number(currentProject.id),
            bank.value,
            Number(verwendetesEigenkapital.value),
            Number(zinsen.value),
            Number(tilgung.value),
            Number(zinsbindung.value),
        );
    }

    router.push({
        name: 'project',
        params: {
            projectId: currentProject.id
        }
    });
}

function cancelButton() {
    router.push({
        name: 'project',
        params: {
            projectId: currentProject.id
        }
    });
}
</script>

<template>
    <Breadcrumbs>
        <BreadcrumbHomeItem />
        <BreadcrumbItem title="Projekte" link="/" />
        <BreadcrumbItem :title="currentProject.name" :link="'/projects/' + currentProject.id" />
        <BreadcrumbItem :title="pageTitle" />
    </Breadcrumbs>

    <H1 class="mb-6">{{ pageTitle }}</H1>

    <TwoColumnForm title="Kreditinformationen" description="">
        <template v-slot:form>
            <FormItem v-model="bank" label="Name der Bank" identifier="bank" />
            <FormItem v-model="verwendetesEigenkapital" label="Zu verwendendes Eigenkapital" identifier="kapital"
                type="number" />
            <FormItem v-model="zinsen" label="Zinsen in Prozent" identifier="zinsen" type="number" />
            <FormItem v-model="tilgung" label="Tilgung in Prozent" identifier="tilgung" type="number" />
            <FormItem v-model="zinsbindung" label="Zinsbindung in Jahren" identifier="zinsbindung" type="number" />
        </template>
        <div class="mt-6 flex items-center justify-end gap-x-6">
            <button v-on:click.prevent="cancelButton()" type="button"
                class="text-sm/6 font-semibold text-gray-900">Abbrechen</button>
            <button v-on:click.prevent="addCredit()" type="submit"
                class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Speichern</button>
        </div>
    </TwoColumnForm>
</template>
