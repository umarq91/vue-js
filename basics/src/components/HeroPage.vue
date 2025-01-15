<script setup>
import { defineProps } from 'vue'
defineProps({
  title: {
    type: String,
    default: 'some random Title',
  },
})
</script>

<template>
  <div class="text-red-600 mt-30">
    {{ title }}
  </div>
</template>
