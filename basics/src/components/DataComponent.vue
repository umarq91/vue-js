<script setup>

import { onMounted, ref } from 'vue';

const data = ref([]);

const fetchData = ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>res.json())
    .then((res)=> data.value = res)
}

onMounted(fetchData)
</script>


<template>
    <div class="px-3 py-2 mb-10 bg-gray-600">
        Hello from DataComponent
    </div>
    <button
    @click="fetchData"
    >
        Fetch Data
    </button>

    <div>
        {{ data }}
    </div>
</template>