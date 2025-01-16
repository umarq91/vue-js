<script setup>
import { ref } from 'vue'
import Showname from './components/ShowName.vue'
const name = ref('arham')
</script>

<template>
  <Showname :heading="name" />
  <button @click="name = 'arham2'">Click</button>
</template>
