<script setup>
import {ref} from 'vue'
import AlertBar from "@/components/AlertBar.vue";

const alerts = ref([
  {id: 1, type: "success", message: "Success!"},
  {id: 2, type: "error", message: "Error!"},
  {id: 3, type: "warning", message: "Warning!"},
  {id: 4, type: "info", message: "Info!"}
])

function closeAlert(id) {
  alerts.value = alerts.value.filter(alert => alert.id !== id)
}


</script>

<template>
  <div class="p-5">
    <AlertBar v-for="alert in alerts" :key="alert.type" :type="alert.type" :id="alert.id"
              @closed="closeAlert">
      {{ alert.message }}
    </AlertBar>
  </div>
</template>

<style scoped>
</style>
