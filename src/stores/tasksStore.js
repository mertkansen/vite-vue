import { defineStore } from "pinia";

const dummyTasks = [
  { id: 0, text: "Doctors Appointment", day: "today", reminder: true },
  { id: 1, text: "Meeting at School", day: "tomorrow", reminder: false },
  { id: 2, text: "Food Shopping", day: "day after tomorrow", reminder: true },
  { id: 3, text: "Shopping", day: "two days later", reminder: false },
];

export const useTasksStore = defineStore("tasks", {
  state: () => {
    return { tasks: dummyTasks };
  },

  actions: {
    removeItem(id) {
      this.tasks = this.tasks.filter((item) => item.id !== id);
    },
    toggleReminder(id) {
      const itemId = this.tasks.findIndex((item) => item.id === id);

      this.tasks[itemId].reminder = !this.tasks[itemId].reminder;
    },
  },
});
