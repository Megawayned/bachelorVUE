<script setup>
import H1 from '@/components/typographie/H1.vue';
import Button from '@/components/Button.vue';
import TwoColumnForm from '@/components/form/TwoColumnForm.vue';
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
</script>





<template>
  <div>
    <H1 class="mb-6">Infos über {{ name }}</H1>
    <TwoColumnForm title="" description="">

      <template v-slot:form>
        <FormItem v-model="name" label="Name" size="sm:col-span-6" identifier="name"/>
        <FormItem v-model="kapital" label="Eigenkapital" size="sm:col-span-6" type="number" identifier="Eigenkapital"/>
        <FormItem v-model="steuerklasse" label="Steuerklasse" size="sm:col-span-6" type="text" identifier="steuerklasse" />
        <FormItem v-model="einkommen" label="Jahreseinkommen" size="sm:col-span-6" type="number" identifier="einkommen" name="einkommen" placeholder="Jahreseinkommen $" />

      </template>
    </TwoColumnForm>

    <form>


      <Button v-on:click="updateUser">
        Speichern
      </Button>

    </form>
  </div>
</template>

<script setup>
  </script>