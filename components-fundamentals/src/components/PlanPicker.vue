<script setup>

import CoffeePlan from "@/components/CoffeePlan.vue";
import {ref, onMounted, onUnmounted} from "vue";

const plans = ref([
  {name: "The Single", description: "A single origin coffee from a specific region."},
  {name: "The Curious", description: "A selection of different origins to explore."},
  {name: "The Addict", description: "A subscription for the true coffee lover."},
  {name: "The Hacker", description: "A plan for those who love to experiment."}
]);

const selectedPlan = ref()
const plansRef = ref(null);
const count = ref(0);
const interval = setInterval(() => {
  count.value++;
  console.log(count.value);
}, 1000);

function selectPlan(name) {
  selectedPlan.value = name;
}

onMounted(() => {
  console.log(plansRef.value);
})
onUnmounted(() => {
  clearInterval(interval)
  console.log('Bye bye plan picker');
})
</script>

<template>
  <div class="plans" ref="plansRef">
    <CoffeePlan v-for="plan in plans" :name="plan.name" :selected="plan.name===selectedPlan"
                @selected="selectPlan"/>
  </div>
</template>

<style scoped>

</style>