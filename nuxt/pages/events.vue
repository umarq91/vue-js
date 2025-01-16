<script setup>
definePageMeta({
  layout: "events",
});

const { sayHello } = useTest();
sayHello("Umer evets");
</script>

<template>
  <div>This is Events Page</div>
</template>
