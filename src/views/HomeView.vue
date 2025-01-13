<script setup>
import Breadcrumbs from '@/components/navigation/Breadcrumbs.vue';
import BreadcrumbHomeItem from '@/components/navigation/BreadcrumbHomeItem.vue';
import H1 from '@/components/typographie/H1.vue';
import H3 from '@/components/typographie/H3.vue';
import Stats from '@/components/stats/Stats.vue';
import StatItem from '@/components/stats/StatItem.vue';
import Button from '@/components/Button.vue';

</script>

<template>
  <main>
    <Breadcrumbs>
      <BreadcrumbHomeItem />
    </Breadcrumbs>
    <H1>Sonjas Immobilien Portfolio</H1>

    <div class="flex mt-6 items-center justify-between">
      <H3>Deine Infos</H3>
      <RouterLink to="/edit-profile">
        <Button>
          Bearbeiten
        </Button>
      </RouterLink>
    </div>


    <Stats>
      <StatItem title="Eigenkapital" value="100.000 €" />
      <StatItem title="Jahreseinkommen" value="65.000 €" />
      <StatItem title="Steuerklasse" value="1" />
    </Stats>
    <div class="flex mt-6 items-center justify-between">
      <H3>Deine Projekte</H3>
      <RouterLink to="/new-project">
        <Button>
          New Project
        </Button>
      </RouterLink>
    </div>
    <div>
    <RouterLink to="/new-project">
      <Button>
        New Project
      </Button>
    </RouterLink>
  </div>
    <div>
    <RouterLink to="/projects">
        <Button>
          Details
        </Button>
        </RouterLink>
      </div>
  </main>
</template>
