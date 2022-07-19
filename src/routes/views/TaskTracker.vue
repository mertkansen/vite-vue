<script setup>
import { useTasksStore } from "../../stores/tasksStore";

import Header from "../../components/common/TaskTracker/Header.vue";
import Tasks from "../../components/common/TaskTracker/Tasks.vue";
import AddTask from "../../components/common/TaskTracker/AddTask.vue";

const store = useTasksStore();
</script>

<template>
  <div class="container">
    <Header />
    <div v-show="store.showAddTask">
      <AddTask />
    </div>
    <Tasks :tasks="store.tasks" />
  </div>
</template>

<style scoped>
.container {
  margin: 20px;
  padding: 20px;
  outline: 1px solid rgba(0, 0, 0, 0.497);
  height: 400px;
  width: 600px;
  margin: 0 auto;
  margin-top: 20px;
}
</style>
