import { defineStore } from "pinia";

const dummyTasks = [
  { id: 0, text: "Doctors Appointment", day: "today", reminder: true },
];

export const useTasksStore = defineStore("tasks", {
  state: () => ({ tasks: dummyTasks, showAddTask: false }),

  actions: {
    removeItem(id) {
      this.tasks = this.tasks.filter((item) => item.id !== id);
    },
    toggleReminder(id) {
      const itemId = this.tasks.findIndex((item) => item.id === id);

      this.tasks[itemId].reminder = !this.tasks[itemId].reminder;
    },
    addTask(model) {
      this.tasks.push(model);
    },
    toggleShowAddTask() {
      this.showAddTask = !this.showAddTask;
    },
  },
});
