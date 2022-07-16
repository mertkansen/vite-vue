<script setup>
import { useCounterStore } from "../stores/counterStore";
const store = useCounterStore();

const handleClick = (event) => {
  if (event.target.name === "inc") {
    store.increment();
  } else {
    store.decrement();
  }
};
</script>

<template>
  <h1>Global State</h1>
  <h2>Count: {{ store.count }}</h2>
  <button name="inc" class="btn" @click="handleClick">Inc</button>
  <button name="dec" class="btn" @click="handleClick">Dec</button>
</template>

<style scoped>
h1 {
  margin-top: 20px;
}
.btn {
  font-size: 22px;
  width: 150px;
  height: 50px;
  background-color: orange;
  color: white;
  border-radius: 10px;
  margin-right: 10px;
}
</style>
