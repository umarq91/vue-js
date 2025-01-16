<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';
import TheWelcome from '../components/TheWelcome.vue'
const counterStore = useCounterStore();
</script>

<template>
  <main>
    {{counterStore.count}}
    <TheWelcome />
  </main>
</template>
