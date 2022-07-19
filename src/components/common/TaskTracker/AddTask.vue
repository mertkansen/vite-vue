<script setup>
import { ref } from "vue";
import { useTasksStore } from "../../../stores/tasksStore";

const { addTask } = useTasksStore();
const model = ref({
  text: "",
  day: "",
  reminder: false,
});

const cleanUpModel = () => {
  model.value.text = "";
  model.value.day = "";
  model.value.reminder = false;
};

const onSubmit = (event) => {
  event.preventDefault();

  if (!model.value.text) {
    alert("Please add a task");
    return;
  }

  addTask({ ...model.value, id: Math.floor(Math.random() * 100000) });

  cleanUpModel();
};
</script>

<template>
  <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>Task</label>
      <input
        v-model="model.text"
        type="text"
        name="text"
        placeholder="Add Task"
      />
    </div>
    <div class="form-control">
      <label>Day & Time</label>
      <input
        v-model="model.day"
        type="text"
        name="day"
        placeholder="Add Day & Time"
      />
    </div>
    <div class="form-control form-control-check">
      <label>Set Reminder</label>
      <input v-model="model.reminder" type="checkbox" name="reminder" />
    </div>

    <input type="submit" value="Save Task" class="btn btn-block" />
  </form>
</template>

<style scoped>
.add-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-control-check label {
  flex: 1;
}
.form-control-check input {
  flex: 2;
  height: 20px;
}

.btn {
  width: 100%;
  background-color: black;
  color: white;
  height: 50px;
  border-radius: 5px;
  font-size: 18px;
}
</style>
