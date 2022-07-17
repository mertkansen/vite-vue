<script setup>
import Button from "../global/Button.vue";
defineProps({});
</script>

<template>
  <header>
    <h1>Task Tracker</h1>
    <Button color="green" title="Add Task" />
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
