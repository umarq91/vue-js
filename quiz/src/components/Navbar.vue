<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { watch } from 'vue'
import { useCounterStore } from '@/stores/counter';
const links = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
]

const isActiveLink = (path) => path === useRoute().path;
const counterStore = useCounterStore();
</script>

<template>
  <div class="flex gap-3">
    <div class="" v-for="link in links">
      <RouterLink :to="link.path" :class="isActiveLink(link.path) ? 'text-red-400' : 'text-black'">
        {{ link.name }}
      </RouterLink>
    </div>
  </div>
  <button @click="counterStore.increment">
    increment
  </button>
  {{ counterStore.count }}
</template>
