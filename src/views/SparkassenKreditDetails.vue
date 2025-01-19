<script setup>
import H1 from '@/components/typographie/H1.vue';
import Button from '@/components/Button.vue';
import Stats from '@/components/stats/Stats.vue';
import StatItem from '@/components/stats/StatItem.vue';
</script>


<template>
    <div>
        <H1>Sparkassen Kredit</H1>
        <RouterLink to="project-id">
            <Button>
            Bearbeiten
        </Button>
        </RouterLink>
        </div>
        <form>
        <Stats>
      <StatItem title="Eigenkapital" value="20.000 €" />
      <StatItem title="Zinsen" value="3.2%"></StatItem>
      <StatItem title="Tilgung" value="2.0%" />
      <StatItem title="Zinsbindung" value="10 Jahre" />
    </Stats>
    </form>
</template>
<script setup>
</script>