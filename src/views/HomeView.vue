<script setup>
import Breadcrumbs from '@/components/navigation/Breadcrumbs.vue';
import BreadcrumbHomeItem from '@/components/navigation/BreadcrumbHomeItem.vue';
import H1 from '@/components/typographie/H1.vue';
import H3 from '@/components/typographie/H3.vue';
import Stats from '@/components/stats/Stats.vue';
import StatItem from '@/components/stats/StatItem.vue';
import Button from '@/components/Button.vue';
import EmptyStates from '@/components/EmptyStates.vue';
import StackedList from '@/components/list/StackedList.vue';
import StackedListItem from '@/components/list/StackedListItem.vue';
import ContextMenu from '@/components/contextMenu/ContextMenu.vue';
import ContextMenuItem from '@/components/contextMenu/ContextMenuItem.vue';

import { storeToRefs } from 'pinia'

import { useProjectsStore } from '@/stores/projects'
import { useUserStore } from '@/stores/user';
import { formatNumber } from '@/functions';

const userStore = useUserStore();
const { user } = storeToRefs(userStore);

const projects = useProjectsStore();
const { allProjects } = storeToRefs(projects);

function deleteProject(projectId) {
    projects.deleteProject(projectId);
}

</script>

<template>
    <main>
        <Breadcrumbs>
            <BreadcrumbHomeItem />
        </Breadcrumbs>
    
        <H1>{{ user.name }}'s Immobilien Portfolio</H1>

        <div class="flex mt-6 items-center justify-between">
            <H3>Deine Infos</H3>
            <RouterLink to="/edit-profile">
                <Button>
                    Bearbeiten
                </Button>
            </RouterLink>
        </div>
        <Stats>
            <StatItem title="Eigenkapital" :value="formatNumber(user.kapital)" />
            <StatItem title="Jahreseinkommen" :value="formatNumber(user.einkommen)" />
            <StatItem title="Steuerklasse" :value="user.steuerklasse" />
        </Stats>
        <div class="flex mt-6 items-center justify-between">
            <H3>Deine Projekte</H3>
            <RouterLink to="/new-project">
                <Button>
                    Neues Projekt
                </Button>
            </RouterLink>
        </div>
        <div v-if="allProjects.length === 0">
            <EmptyStates title="Keine Projekte" description="Starte mit deinem ersten Projekt">
                <RouterLink to="/new-project">
                    <Button>
                        Neues Projekt
                    </Button>
                </RouterLink>
            </EmptyStates>
            
        </div>

        <StackedList>
            <StackedListItem v-for="project in allProjects" :name="project.name" :kaufpreis="project.anschaffungskosten"
                :sarnierungskosten="formatNumber(project.sarnierungskosten)" :miete="formatNumber(project.miete)" :stadt="project.stadt"
                :plz="project.plz" :bundesland="project.bundesland">
                <template v-slot:onItemOptions>
                    <RouterLink :to="'/projects/' + project.id"
                        class="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block">
                        Projektdetails
                    </RouterLink>
                </template>
                <ContextMenu>
                    <ContextMenuItem :link="'/new-project?edit=' + project.id" name="Edit" />
                    <ContextMenuItem v-on:click="deleteProject(project.id)" link="/" name="Delete" />
                </ContextMenu>
            </StackedListItem>
        </StackedList>
    </main>
</template>