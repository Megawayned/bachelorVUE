import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    name: null,
    kapital: null,
    steuerklasse: null,
    einkommen: null,

  }),
  getters: {
    user(state) {
      return {
        name: state.name,
        kapital: state.kapital,
        steuerklasse: state.steuerklasse,
        einkommen: state.einkommen
      };
    },
    
  },
  actions: {
    updateUser(name, kapital, steuerklasse, einkommen) {
      this.name = name;
      this.kapital = kapital;
      this.steuerklasse = steuerklasse;
      this.einkommen = einkommen
    }
  },
  persist: true,
});
