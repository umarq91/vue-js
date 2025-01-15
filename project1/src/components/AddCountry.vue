<script setup>
import { ref, defineEmits } from 'vue'

const emit = defineEmits(['addCountry3'])
const newcountry = ref('')

const addcountry = () => {
  emit('addCountry3', newcountry.value)
  newcountry.value = ''
}
</script>

<template>
  <div class="container max-w-5xl mx-auto">
    <h1 class="text-black text-2xl">Add Component</h1>
    <input v-model="newcountry" type="text" class="border border-black px-10 py-3" />
    <button @click="addcountry" class="bg-black text-white px-10 py-3">Add2</button>
  </div>
</template>
