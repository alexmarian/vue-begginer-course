<script setup>
import PlanPicker from "@/components/PlanPicker.vue";
import {ref} from 'vue'
import FancyButton from "@/components/FancyButton.vue";

const show = ref(true)
</script>

<template>
  <div class="content">
    <FancyButton>
      <template #icon="{hover}"  >
        {{ hover ? '👋' : '💪' }}
      </template>
      Submit
    </FancyButton>
  </div>
</template>

<style scoped>
</style>
