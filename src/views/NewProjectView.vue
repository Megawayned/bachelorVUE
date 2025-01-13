<script setup>
import H1 from '@/components/typographie/H1.vue';
import Button from '@/components/Button.vue';
import H3 from '@/components/typographie/H3.vue';
</script>


<template>
  <div>
    <H1>Projekte</H1>
    <form>
      <div>
        <H3>Neues Projekt erstellen</H3>
        <input type="text" id="standort" name="standort" placeholder="Standort/Name">
      </div>
      <div>
        <input type="number" id="kaufpreis" name="kaufpreis" placeholder="Kaufpreis">
      </div>
      <div>
        <input type="number" id="sarnierungskosten" name="sarnierungskosten" placeholder="Geplante Sarnierungskosten">
      </div>
      <div>
        <input type="text" id="bundesland" name="bundesland" placeholder="Bundesland">
      </div>
      <div>
        <input type="text" id="stadt" name="stadt" placeholder="Stadt">
      </div>
      <RouterLink to="/">
        <Button>
          Projekt anlegen
        </Button>
      </RouterLink>
    </form>
  </div>
</template>


<script setup>
</script>