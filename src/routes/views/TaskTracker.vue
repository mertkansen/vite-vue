<script setup>
import { useTasksStore } from "../../stores/tasksStore";

import Header from "../../components/common/TaskTracker/Header.vue";
import Tasks from "../../components/common/TaskTracker/Tasks.vue";

const store = useTasksStore();
</script>

<template>
  <div class="container">
    <Header />
    <Tasks :tasks="store.tasks" />
  </div>
</template>

<style scoped>
.container {
  margin: 20px;
  padding: 20px;
  outline: 1px solid rgba(0, 0, 0, 0.497);
  height: 400px;
}
</style>
