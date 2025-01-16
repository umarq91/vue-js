<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'
</script>

<template>
<div class="navbar text-red-400 text-4xl"> 
<Navbar/>
</div>
  <RouterView />
</template>

