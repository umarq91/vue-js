<script setup>
import { ref } from 'vue'
const data = ref(['arham', 'arham2', 'arham3'])
const newName = ref('')
const addData = () => {
  const dat = newName.value
  data.value.push(dat)
  newName.value = ''
}

const delteData = (index) => {
    data.value.splice(index,1)
}
</script>

<template>
  <input class="px-3 py-2 border border-black m-3" v-model="newName" />
  <button class="px-3 py-2" @click="addData">Add</button>

  <div class="px-3 py-2 bg-gray-600" v-for="(name, index) in data" :key="name">
    {{ name.toUpperCase() }}
    <button 
    @click="delteData(index)"
    class="bg-red-500 px-3 py-1"> x </button>
  </div>

</template>
