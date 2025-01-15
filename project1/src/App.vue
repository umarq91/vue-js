<script setup>
import { Button } from '@/components/ui/button'
const color = 'bg-green-500'
</script>

<template>
  <h1 :class="`text-red-600 ${color} uppercase`">Hello World</h1>
  <Button>Click me</Button>
</template>
