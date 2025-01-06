<script setup>
import Breadcrumbs from '@/components/navigation/Breadcrumbs.vue';
import BreadcrumbItem from "../components/navigation/BreadcrumbItem.vue";
import BreadcrumbHomeItem from '@/components/navigation/BreadcrumbHomeItem.vue';

</script>

<template>
  <div class="about">
    <Breadcrumbs>
      <BreadcrumbHomeItem />
      <BreadcrumbItem link="/about" title="About" />
    </Breadcrumbs>
  </div>
</template>