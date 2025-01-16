<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  heading: {
    type: String,
    required: true
  },
})
</script>

<template>
    <h1> Hey,{{ heading }}</h1>
  
</template>
