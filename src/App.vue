<script>
export default {
  data() {
    return {
      name: 'John doe',
      status: false,
      data: ['Umar', 'ali', 'omer', 'arham'],
    }
  },
  methods:{
    toggleName(){
      this.data.push('arham')
    }
  }
}
</script>

<template>
  <h1>Hello</h1>
  <p v-if="status === true">{{ name }} is active</p>
  <p v-else="status">{{ name }} is Inactive</p>

  <h1>Names</h1>
  <p v-for="name1 in data" :key="name1">{{ name1.toUpperCase() }}</p>
  <button v-on:click="toggleName">Click</button>
</template>
