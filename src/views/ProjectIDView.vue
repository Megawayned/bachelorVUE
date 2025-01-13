<script setup>
import H1 from '@/components/typographie/H1.vue';
import Button from '@/components/Button.vue';
import H3 from '@/components/typographie/H3.vue';
</script>


<template>
<div>
    <H1>Neue Finanzierungsoptionen</H1>
    <form>
      <div>
        <input type="text" id="bank" name="bank" placeholder="Bank / Provider">
      </div>
      <div>
        <input type="number" id="zuVerwendendesEigenkapital" name="zuVerwendendesEigenkapital" placeholder="Zu verwendendes Eigenkapital">
      </div>
      <div>
        <input type="number" id="zinsen" name="zinsen" placeholder="Zinsen %">
      </div>
      <div>
        <input type="number" id="tilgung" name="tilgung" placeholder="Tilgung %">
      </div>
      <div>
        <input type="number" id="zinsbindungJahre" name="zinsbindungJahre" placeholder="Zinsbindung in Jahren">
      </div>
      <div>
        <input type="number" id="miete" name="miete" placeholder="Zu erwartende Miete pro Monat">
      </div>
      <div>
        <input type="number" id="mietsteigerung" name="mietsteigerung" placeholder="Mietsteigerung pro Jahr in %">
      </div>
      <RouterLink to="/">
        <Button>
          Finanzierung
        </Button>
      </RouterLink>
    </form>
  </div>


</template>
<script setup>
</script>