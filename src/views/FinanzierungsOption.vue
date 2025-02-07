<script setup>
import H1 from '@/components/typographie/H1.vue';
import Button from '@/components/Button.vue';
import H3 from '@/components/typographie/H3.vue';
import Stats from '@/components/stats/Stats.vue';
import StatItem from '@/components/stats/StatItem.vue';
import Breadcrumbs from '@/components/navigation/Breadcrumbs.vue';
import BreadcrumbHomeItem from '@/components/navigation/BreadcrumbHomeItem.vue';
import BreadcrumbItem from '@/components/navigation/BreadcrumbItem.vue';
import EmptyStates from '@/components/EmptyStates.vue';
import StackedList from '@/components/list/StackedList.vue';
import StackedListCreditItem from '@/components/list/StackedListCreditItem.vue';
import ContextMenu from '@/components/contextMenu/ContextMenu.vue';
import ContextMenuItem from '@/components/contextMenu/ContextMenuItem.vue';
import { formatNumber } from '@/functions';

import { storeToRefs } from 'pinia';
import { useProjectsStore } from '@/stores/projects';
import { useCreditsStore } from '@/stores/credits';

const props = defineProps({
    projectId: {
        required: true,
    }
})

const projects = useProjectsStore()
const { findProjectById } = storeToRefs(projects)

const currentProject = findProjectById.value(props.projectId);

const credits = useCreditsStore()
const { findCreditsByProjectId } = storeToRefs(credits)

var projectCredits = findCreditsByProjectId.value(currentProject.id);

var afa = currentProject.anschaffungskosten * 0.02;

function deleteCredit(creditId) {
    credits.deleteCredit(creditId);
    location.reload();
}
</script>

<template>
    <div>
        <Breadcrumbs>
            <BreadcrumbHomeItem />
            <BreadcrumbItem title="projects" link="/" />
            <BreadcrumbItem :title="currentProject.name" :link="'/projects/' + currentProject.id" />
        </Breadcrumbs>
        <H1>{{ currentProject.name }}</H1>

        <div class="flex mt-6 items-center justify-between">
            <H3>Immobilieninformationen</H3>
            <RouterLink :to="'/new-project?edit=' + currentProject.id">
                <Button>
                    Bearbeiten
                </Button>
            </RouterLink>
        </div>

        <Stats>
            <StatItem title="Anschaffungskosten" :value="formatNumber(currentProject.anschaffungskosten) + ' €'" />
            <StatItem title="Miete" :value="formatNumber(currentProject.miete) + ' €'" />
            <StatItem title="Abschreibung für Abnutzung (AfA)" :value="formatNumber(afa) + ' €'" />
        </Stats>
    </div>

    <div class="flex mt-6 items-center justify-between">
        <H3>Deine Finanzierungsoptionen</H3>
        <RouterLink :to="'/projects/' + currentProject.id + '/credit'">
            <Button>
                Neuer Kredit
            </Button>
        </RouterLink>
    </div>

    <div v-if="projectCredits.length === 0">
        <EmptyStates title="Keine Finanierungsoption" description="Füge eine neue Finanzierungsoption hinzu">
            <RouterLink :to="'/projects/' + currentProject.id + '/credit'">
                <Button>
                    Neuer Kredit
                </Button>
            </RouterLink>
        </EmptyStates>
    </div>

    <StackedList>
        <StackedListCreditItem v-for="credit in projectCredits" :bankname="credit.bankname"
            :kapital="credit.verwendetesEigenkapital" :zinsen="credit.zinsen" :tilgung="credit.tilgung"
            :zinsbindung="credit.zinsbindung">
            <template v-slot:onItemOptions>
                <RouterLink :to="'/projects/' + credit.projectId + '/credits/' + credit.id"
                    class="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block">
                    Kreditdetails
                </RouterLink>
            </template>
            <ContextMenu>
                <ContextMenuItem :link="'/projects/' + currentProject.id + '/credit?edit=' + credit.id" name="Edit" />
                <ContextMenuItem v-on:click="deleteCredit(credit.id)" link="#" name="Delete" />
            </ContextMenu>
        </StackedListCreditItem>
    </StackedList>

</template>
