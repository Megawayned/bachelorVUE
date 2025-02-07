<script setup>
import H1 from '@/components/typographie/H1.vue';
import TwoColumnForm from '@/components/form/TwoColumnForm.vue';
import Breadcrumbs from '@/components/navigation/Breadcrumbs.vue';
import BreadcrumbHomeItem from '@/components/navigation/BreadcrumbHomeItem.vue';

import FormDropDown from '@/components/form/FormDropDown.vue';
import FormItem from '@/components/form/FormItem.vue';

import { ref } from 'vue';

import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router'

const userStore = useUserStore();
const { user } = storeToRefs(userStore);

const router = useRouter();
const name = ref(user.value.name);
const kapital = ref(user.value.kapital);
const steuerklasse = ref(user.value.steuerklasse);
const einkommen = ref(user.value.einkommen);

function updateUser() {
  userStore.updateUser(
    name.value,
    kapital.value,
    steuerklasse.value,
    einkommen.value
  );
  router.push('/');
}
function cancel() {
  router.push('/');
}
</script>
<template>
   <Breadcrumbs>
            <BreadcrumbHomeItem />
        </Breadcrumbs>
  <div>
    <H1 class="mb-6">Informationen über {{ name }}</H1>
    <TwoColumnForm title="" description="">

      <template v-slot:form>
        <FormItem v-model="name" label="Name" size="sm:col-span-6" identifier="name"/>
        <FormItem v-model="kapital" label="Eigenkapital" size="sm:col-span-6" type="number" identifier="Eigenkapital"/>
        <FormDropDown v-model="steuerklasse" label="Steuerklasse" identifier="steuerklasse">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
        </FormDropDown>
        <FormItem v-model="einkommen" label="Jahresbruttoeinkommen" size="sm:col-span-6" type="number" identifier="einkommen" name="einkommen" placeholder="Jahreseinkommen $" />

      </template>
    </TwoColumnForm>
    <form>
      <div class="mt-6 flex items-center justify-end gap-x-6">
                <button v-on:click.prevent="cancel" type="button"
                    class="text-sm/6 font-semibold text-gray-900">Abbrechen</button>
                <button v-on:click.prevent="updateUser" type="submit"
                    class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Speichern</button>
            </div>
    </form>
  </div>
</template>
