<script setup>
import { useTasksStore } from "../../../stores/tasksStore";

defineProps({
  task: Object,
});

const { removeItem } = useTasksStore();

const deleteItem = (id) => {
  removeItem(id);
};
</script>

<template>
  <div :class="{ reminder: task.reminder, task }">
    <h3>
      {{ task?.text }}
      <i @click="deleteItem(task.id)" class="fas fa-times"></i>
    </h3>
    <p>{{ task?.day }}</p>
  </div>
</template>

<style scoped>
.fas {
  color: red;
}
.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.task.reminder {
  border-left: 5px solid green;
}
.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
