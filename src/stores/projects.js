import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useProjectsStore = defineStore("projects", {
  state: () => ({
    /** @type {{id: number, name: string, kaufpreis: number, sarnierungskosten: number, bundesland: string, stadt: string, plz: number }[]} */
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
    addProject(name, kaufpreis, sarnierungskosten, bundesland, stadt, plz) {
      this.projects.push({
        id: this.nextId++,
        name,
        kaufpreis,
        sarnierungskosten,
        bundesland,
        stadt,
        plz,
      });
    },
    updateProjects(
      id,
      name,
      kaufpreis,
      sarnierungskosten,
      bundesland,
      stadt,
      plz
    ) {
      const projectIndex = this.projects.findIndex(
        (project) => project.id == id
      );
      if (projectIndex !== -1) {
        this.projects[projectIndex] = {
          id,
          name,
          kaufpreis,
          sarnierungskosten,
          bundesland,
          stadt,
          plz,
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
