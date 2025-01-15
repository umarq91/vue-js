<!-- <script setup lang="ts">
import Card from './components/Card.vue';
import HeroPage from './components/HeroPage.vue';
import Navbar from './components/Navbar.vue';

const colors = ["bg-gray-500","bg-red-600","bg-green-500","bg-blue-500"]
</script>

<template>
  <Navbar/>
<HeroPage  title="Hello World"/>

<div
v-for="color in colors" :bg="color"
>
<Card 
:bg="color"
/>
</div>

</template> -->


<script setup>

import DataComponent from './components/DataComponent.vue';

const name = ""
const color = "bg-red-600"
const colors =["bg-gray-500","bg-red-600","bg-green-500","bg-blue-500"]
const changeColor=(color)=>{

}
</script>

<template>
  <h1 class="text-red-600">Hello World</h1>
  <h1 class="text-red-600">{{ color,name }}</h1>

  <button
  v-for="color in colors" 
  @click="changeColor(color)"
  :class="color"  
  >{{ color }}</button>
  <DataComponent/>
</template>

