<script setup>
import {ref} from 'vue'
import GithubCard from "@/components/GithubCard.vue";

const show = ref(true)
</script>

<template>
  <GithubCard username="alexmarian"/>
  <GithubCard username="danielkellyio"/>
  <GithubCard username="hootalex"/>
</template>

<style scoped>
</style>
