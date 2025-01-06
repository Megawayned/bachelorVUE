<script setup>
import H1 from '@/components/typographie/H1.vue';
//import TextField from '@/components/form/TextField.vue';
</script>


<template>
    <div>
      <H1>Infos here</H1>
      <form>
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name">
        </div>
        <div>
          <label for="eigenkapital">Verfügbares Eigenkapital:</label>
          <input type="number" id="eigenkapital" name="eigenkapital">
        </div>
        <div>
          <label for="steuerklasse">Steuerklasse:</label>
          <input type="text" id="steuerklasse" name="steuerklasse">
        </div>
        <div>
          <label for="einkommen">Jahres Einkommen:</label>
          <input type="number" id="einkommen" name="einkommen">
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  </script>