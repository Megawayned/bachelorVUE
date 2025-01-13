<script setup>
import H1 from '@/components/typographie/H1.vue';
import Button from '@/components/Button.vue';
//import TextField from '@/components/form/TextField.vue';
</script>


<template>
    <div>
      <H1>Infos über dich</H1>
      <form>
        <div>
          
          <input type="text" id="name" name="name" placeholder ="Name">
        </div>
        <div>
          <input type="number" id="eigenkapital" name="eigenkapital" placeholder="Verfügbares Eigenkapital">
        </div>
        <div>
          <input type="text" id="steuerklasse" name="steuerklasse" placeholder="Steuerklasse">
        </div>
        <div>
            <input type="number" id="einkommen" name="einkommen" placeholder="Jahreseinkommen $">
        </div>
        <RouterLink to="/">
        <Button>
          Speichern
          </Button>
        </RouterLink>
      </form>
    </div>
  </template>
  
  <script setup>
  </script>