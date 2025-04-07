<script setup>
import IconInfo from "@/components/icons/IconInfo.vue";
import IconWarning from "@/components/icons/IconWarning.vue";
import IconSuccess from "@/components/icons/IconSuccess.vue";
import IconError from "@/components/icons/IconError.vue";

import {computed, ref} from "vue";

const props = defineProps(
    {
      id: {
        type: Number,
        required: true
      },
      type:
          {
            type: String,
            default:
                "info",
            validator(value) {
              return ["info", "success", "warning", "error"].includes(
                  value);
            }
          }
    }
)

const emit = defineEmits({
  closed: (value) => {
    return typeof value === "number";
  }
})
const alertType = computed(() => {
  return {
    info: 'alert-info',
    warning: 'alert-warning',
    error: 'alert-error',
    success: 'alert-success'
  }[props.type]
})
const icon = computed(() => {
  return {
    info: IconInfo,
    warning: IconWarning,
    success: IconSuccess,
    error: IconError
  }[props.type]
})

const closed = ref(false)

function close() {
  closed.value = true
  emit('closed', props.id)
}

</script>

<template>
  <div role="alert" class="alert alert-soft margin:5" :class="alertType">
    <component :is="icon"></component>
    <span><slot>Default Alert</slot></span>
    <button @click="close">ⅹ</button>
  </div>
</template>

<style scoped>

</style>