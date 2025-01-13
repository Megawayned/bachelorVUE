<script setup>
import H1 from '@/components/typographie/H1.vue';
import Button from '@/components/Button.vue';
import H3 from '@/components/typographie/H3.vue';
import Stats from '@/components/stats/Stats.vue';
import StatItem from '@/components/stats/StatItem.vue';
</script>


<template>
<div>
    <RouterLink to="new-project">
        <Button>
        Bearbeiten
    </Button>
    </RouterLink>
    
    <H1>Project name here</H1>
    <form>
        <Stats>
      <StatItem title="Kaufpreis" value="320.000 €" />
      <StatItem title="AFA" value="2%"></StatItem>
      <StatItem title="Sarnierungskosten" value="16.000 €" />
      <StatItem title="kaltmiete" value="1.088 €" />
      <StatItem title="Köln NRW" value="1" />
    </Stats>
    </form>
    <div>
        <H3>Finanzierungsoptionen</H3>
    </div>
    <div>
        <RouterLink to="project-id">
            <Button>
            Anlegen
        </Button>
        </RouterLink>
        <div>
        <RouterLink to="project-id">
            <Button>
            Anlegen
        </Button>
        </RouterLink>
        </div>
       
    </div>
  </div>
</template>
<script setup>
</script>