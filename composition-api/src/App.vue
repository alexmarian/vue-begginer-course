<script setup>
import {ref, computed} from 'vue'

const header = ref('Shopping List App')
const editMode = ref(false)
const items = ref([
  {id: 1, label: "Apples", quantity: 2, purchased: false, priority: false},
  {id: 2, label: "Bananas", quantity: 3, purchased: false, priority: false},
  {id: 3, label: "Cherries", quantity: 5, purchased: true, priority: true},
  {id: 4, label: "Dates", quantity: 4, purchased: true, priority: false}
])
const reversedItems = computed(() =>
    items.value.slice().reverse()
)

function initItem() {
  newItem.value = ""
  newItemQuantity.value = 1
  newItemPriority.value = false
}

function pushNewItem() {
  if (newItem.value.trim() === "") {
    return
  }
  items.value.push({
    id: items.value.length + 1,
    label: newItem.value,
    quantity: newItemQuantity.value,
    priority: newItemPriority.value
  })
  initItem()
}

const newItem = ref("")
const newItemPriority = ref(false)
const newItemQuantity = ref(1)

const doEdit = (e) => {
  editMode.value = e
  initItem()
}

const togglePurchased = (item) => {
  item.purchased = !item.purchased
}
const link = ref("")
</script>

<template>
  <div class="header">
    <h1>{{ header }}</h1>
    <button class="btn" v-if="editMode" @click="doEdit(false)">Cancel</button>
    <button class="btn btn-primary" v-else @click="doEdit(true)">Edit</button>

  </div>
  <form class="add-item-form" @submit.prevent="pushNewItem" v-if="editMode">
    <input v-model.trim="newItem" type="text" placeholder="Add item"/>
    High Priority:
    <input type="checkbox" v-model="newItemPriority"/>
    <input v-model.number="newItemQuantity" type="number" min="1" placeholder="Quantity"/>
    <button class="btn btn-primary" v-bind:disabled="newItem.length<5">Add item</button>
  </form>
  <ul>
    <li v-for="(item,index) in reversedItems" :key="item.id" :class="{strikeout:item.purchased, priority:item.priority}"
        @click="togglePurchased(item)">
      {{ item.quantity }} {{ item.label }}
      <button class="btn btn-danger" @click.stop="items.splice(index, 1)">Delete</button>
    </li>

  </ul>
  <p v-if="items.length === 0">
    Nothing to see here
  </p>
</template>

<style scoped>
header {
  line-height: 1.5;
}
</style>
