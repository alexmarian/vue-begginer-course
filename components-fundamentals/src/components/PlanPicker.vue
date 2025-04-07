<script setup>

import CoffeePlan from "@/components/CoffeePlan.vue";
import {ref} from "vue";

const plans = ref([
  { name: "The Single", description: "A single origin coffee from a specific region." },
  { name: "The Curious", description: "A selection of different origins to explore." },
  { name: "The Addict", description: "A subscription for the true coffee lover." },
  { name: "The Hacker", description: "A plan for those who love to experiment." }
]);
</script>

<template>
  <div class="plans">
    <CoffeePlan v-for="plan in plans" :name="plan.name"/>
  </div>
</template>

<style scoped>

</style>