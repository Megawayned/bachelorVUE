import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { storeToRefs } from 'pinia'
import { useTaxStore } from '@/stores/tax';

const notarkosten = 0.02;

function anschaffungskostenRechner(kaufpreis, sarnierungskosten, steuersatz, notarsatz, marklersatz) {
 return kaufpreis * (1 + steuersatz + notarsatz + marklersatz) + sarnierungskosten;
}

export const useProjectsStore = defineStore("projects", {
    state: () => ({
        projects: [],
        nextId: 2,
    }),
    getters: {
        allProjects(state) {
            return state.projects;
        },
        findProjectById: (state) => {
            return (projectId) =>
                state.projects.find((project) => project.id == projectId);
        },
    },
    actions: {
        addProject(name, kaufpreis, sarnierungskosten, bundesland, stadt, plz, miete, marklerkostenProzent) {

            const tax = useTaxStore();
            const { steuerByBundesland } = storeToRefs(tax);

            const steuersatz = steuerByBundesland.value(bundesland);
            const anschaffungskosten = anschaffungskostenRechner(
                kaufpreis, sarnierungskosten, steuersatz, notarkosten, marklerkostenProzent / 100
            );

            this.projects.push({
                id: this.nextId++,
                name,
                kaufpreis,
                sarnierungskosten,
                bundesland,
                stadt,
                plz,
                miete,
                marklerkostenProzent,
                anschaffungskosten,
            });
        },
        updateProjects(id, name,
            kaufpreis,
            sarnierungskosten,
            bundesland,
            stadt,
            plz,
            miete,
            marklerkostenProzent,
        ) {
            const projectIndex = this.projects.findIndex(
                (project) => project.id == id
            );
            if (projectIndex !== -1) {
                const tax = useTaxStore();
                const { steuerByBundesland } = storeToRefs(tax);

                const steuersatz = steuerByBundesland.value(bundesland);
                const anschaffungskosten = kaufpreis * (1 + steuersatz + notarkosten + marklerkostenProzent / 100) + sarnierungskosten;

                this.projects[projectIndex] = {
                    id,
                    name,
                    kaufpreis,
                    sarnierungskosten,
                    bundesland,
                    stadt,
                    plz,
                    miete,
                    marklerkostenProzent,
                    anschaffungskosten,
                };
            }
        },
        deleteProject(id) {
            const projectIndex = this.projects.findIndex(
                (project) => project.id == id
            );
            if (projectIndex !== -1) {
                this.projects.splice(projectIndex, 1);
            }
        },
    },
    persist: true,
});
