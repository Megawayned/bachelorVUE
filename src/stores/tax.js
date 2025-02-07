import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useTaxStore = defineStore("tax", {
  state: () => ({
    "Baden-Württemberg": 0.05,
    Bayern: 0.035,
    Berlin: 0.06,
    Brandenburg: 0.065,
    Bremen: 0.05,
    Hamburg: 0.055,
    Hessen: 0.06,
    "Mecklenburg-Vorpommern": 0.06,
    Niedersachsen: 0.05,
    "Nordrhein-Westfalen": 0.065,
    "Rheinland-Pfalz": 0.05,
    Saarland: 0.065,
    Sachsen: 0.055,
    "Sachsen-Anhalt": 0.05,
    "Schleswig-Holstein": 0.065,
    Thüringen: 0.05,
  }),
  getters: {
    steuerByBundesland: (state) => {
      return (budesland) => state[budesland];
    },
  },
});
