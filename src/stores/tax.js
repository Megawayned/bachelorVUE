import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useTaxStore = defineStore("tax", {
  state: () => ({
    "Baden-Württemberg": 0.05,
    "Bayern": 0.035,
    "Berlin": 0.060,
    "Brandenburg": 0.065,
    "Bremen": 0.050,
    "Hamburg": 0.055,
    "Hessen": 0.060,
    "Mecklenburg-Vorpommern": 0.060,
    "Niedersachsen": 0.050,
    "Nordrhein-Westfalen": 0.065,
    "Rheinland-Pfalz": 0.050,
    "Saarland": 0.065,
    "Sachsen": 0.055,
    "Sachsen-Anhalt": 0.050,
    "Schleswig-Holstein": 0.065,
    "Thüringen": 0.050
  }),
  getters: {
    steuerByBundesland: (state) => {
        return (budesland) => state[budesland];
    },
  },
});
