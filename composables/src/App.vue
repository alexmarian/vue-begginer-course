<script setup>
import {useCycleList} from "@/composables/useCycleList.js";
import {computed, ref} from "vue";

const list = ref([
  'Dog',
  'Cat',
  'Fish',
  'Bird',
  'Lizard',
  'Turtle'
]);
const selectedIndex = ref(0);
const maxIndex = computed(() => list.length - 1);
const {state, prev, next, go} = useCycleList(list,{
  fallbackIndex: 1,
  fallbackValue:'Lizard'
});
state.value = 'Ananas'
</script>

<template>
  <div class="wrapper">
    {{state}}
    <br/>
    <button @click="prev">Previous</button>
    <button @click="next">Next</button>
    <input  type="number" v-model="selectedIndex" min="0" :max="maxIndex"/>
    <button @click="go(selectedIndex)">Jump to {{selectedIndex}}</button>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
