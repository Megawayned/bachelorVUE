import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { storeToRefs } from "pinia";

export const useCreditsStore = defineStore("credits", {
    state: () => ({
        credits: [],
        nextId: 1,
    }),
    getters: {
        findCreditById: (state) => {
            return (creditId) => state.credits.find((credit) => credit.id == creditId);
        },
        findCreditsByProjectId: (state) => {
            return (projectId) => state.credits.filter((credit) => credit.projectId == projectId);
        },
    },
    actions: {
        addCredit(projectId, bankname, verwendetesEigenkapital, zinsen, tilgung, zinsbindung) {
            this.credits.push({
                id: this.nextId++,
                projectId,
                bankname,
                verwendetesEigenkapital,
                zinsen,
                tilgung,
                zinsbindung,
            });
        },
        updateCredit(
            id,
            projectId,
            bankname,
            verwendetesEigenkapital,
            zinsen,
            tilgung,
            zinsbindung
        ) {

            const creditIndex = this.credits.findIndex(
                (credit) => credit.id == id
            );
            if (creditIndex !== -1) {
                this.credits[creditIndex] = {
                    id,
                    projectId,
                    bankname,
                    verwendetesEigenkapital,
                    zinsen,
                    tilgung,
                    zinsbindung
                };
            }
        },
        deleteCredit(id) {
            const creditIndex = this.credits.findIndex(
                (credit) => credit.id == id
            );
            if (creditIndex !== -1) {
                this.credits.splice(creditIndex, 1);
            }
        },
    },
    persist: true,
});
