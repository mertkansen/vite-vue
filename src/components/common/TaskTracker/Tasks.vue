<script setup>
import Task from "./Task.vue";

defineProps({
  tasks: Array,
});
</script>

<template>
  <div v-for="task in tasks" :key="task.id">
    <Task :task="task" />
  </div>
</template>

<style scoped></style>
