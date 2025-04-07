<script setup>
import {ref} from 'vue';

const hover = ref(false);
</script>

<template>
  <button @mouseenter="hover=true" @mouseleave="hover=false">
    <slot name="icon" :hover="hover"></slot>
    <slot>Click Me</slot>
  </button>
</template>

<style scoped>

</style>