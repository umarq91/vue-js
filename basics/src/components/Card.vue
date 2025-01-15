<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  bg: string;
}>();

const bgColor = props.bg 
</script>

<template>
  <div 
  :class="`px-3 py-2 m-4 h-24 w-24 ${bgColor}`">
    <slot></slot> 
  </div>
</template>
