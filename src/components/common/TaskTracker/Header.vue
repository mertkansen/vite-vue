<script setup>
import Button from "../../global/Button.vue";
import { useTasksStore } from "../../../stores/tasksStore";

const store = useTasksStore();
const { toggleShowAddTask } = store;
</script>

<template>
  <header>
    <h1>Task Tracker</h1>
    <Button
      @click="toggleShowAddTask"
      :color="store.showAddTask ? 'red' : 'green'"
      :title="store.showAddTask ? 'Close' : 'Add Task'"
    />
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
