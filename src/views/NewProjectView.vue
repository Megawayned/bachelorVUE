<script setup>
import H1 from '@/components/typographie/H1.vue';
import Button from '@/components/Button.vue';
import TwoColumnForm from '@/components/form/TwoColumnForm.vue';
import FormItem from '@/components/form/FormItem.vue';
import FormDropdown from '@/components/form/FormDropDown.vue';


import { storeToRefs } from 'pinia'
import { useProjectsStore } from '@/stores/projects'
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter();
const route = useRoute();
const standort = ref();
const kaufpreis = ref();
const sarnierungskosten = ref();
const plz = ref();
const stadt = ref();
const bundesland = ref('Nordrhein-Westfalen');
var currentProject = null;

const projects = useProjectsStore()
const { findProjectById } = storeToRefs(projects)

var pageTitle = 'Neues Projekt erstellen';

if ("edit" in route.query) {
  var pageTitle = 'Projekt Bearbeiten';
  currentProject = findProjectById.value(route.query.edit);
  if (!currentProject) {
    router.push('/');
  }
  standort.value = currentProject.name;
  kaufpreis.value = currentProject.kaufpreis;
  sarnierungskosten.value = currentProject.sarnierungskosten;
  plz.value = currentProject.plz;
  stadt.value = currentProject.stadt;
  bundesland.value = currentProject.bundesland;

}






function addProject() {
  if (!standort.value ||
    !kaufpreis.value ||
    !sarnierungskosten.value ||
    !plz.value ||
    !stadt.value ||
    !bundesland.value
  ) {
    alert("Bitte füllen Sie alle Felder aus");
    return;
  }
  if (currentProject) {
    projects.updateProjects(
      currentProject.id,
      standort.value,
      Number(kaufpreis.value),
      Number(sarnierungskosten.value),
      bundesland.value,
      stadt.value,
      Number(plz.value),
    )

  } else {
    projects.addProject(
      standort.value,
      Number(kaufpreis.value),
      Number(sarnierungskosten.value),
      bundesland.value,
      stadt.value,
      Number(plz.value),
    );
  }
  router.push('/');
}


function cancelButton() {
  standort.value = "";
  kaufpreis.value = "";
  sarnierungskosten.value = "";
  bundesland.value = "";
  stadt.value = "";
  plz.value = "";
  router.push('/');
}

</script>
<template>
  <div>
    <H1 class="mb-6">{{ pageTitle }}</H1>
    <TwoColumnForm title="Projekt Informationen" description="TBD: Hier einen beschreibenden Text einfügen.">
      <template v-slot:form>
        <FormItem v-model="standort" label="Standort/Name" identifier="street" size="sm:col-span-6" />
        <FormItem v-model="kaufpreis" label="Kaufpreis" identifier="kaufpreis" type="number" />
        <FormItem v-model="sarnierungskosten" label="Sarnierungskosten" identifier="sarnierungskosten" type="number" />
        <FormItem v-model="plz" label="PLZ" identifier="plz" type="number" />
        <FormItem v-model="stadt" label="Stadt" identifier="stadt" />

        <FormDropdown v-model="bundesland" label="Bundesland" identifier="bundesland">
          <option>Baden-Württemberg</option>
          <option>Bayern</option>
          <option>Berlin</option>
          <option>Brandenburg</option>
          <option>Bremen</option>
          <option>Hamburg</option>
          <option>Hessen</option>
          <option>Niedersachsen</option>
          <option>Mecklenburg-Vorpommern</option>
          <option>Nordrhein-Westfalen</option>
          <option>Rheinland-Pfalz</option>
          <option>Saarland</option>
          <option>Sachsen</option>
          <option>Sachsen-Anhalt</option>
          <option>Schleswig-Holstein</option>
          <option>Thüringen</option>
        </FormDropdown>


      </template>
      <div class="mt-6 flex items-center justify-end gap-x-6">
        <button v-on:click.prevent="cancelButton()" type="button"
          class="text-sm/6 font-semibold text-gray-900">Cancel</button>
        <button v-on:click.prevent="addProject()" type="submit"
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
      </div>
    </TwoColumnForm>
  </div>
</template>
<script setup>
</script>
