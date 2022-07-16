<script setup>
import { ref } from "vue";
import { useMouse } from "../composables/mouse";
import { useTitle, useRefHistory } from "@vueuse/core";

const { x, y } = useMouse();

const title = useTitle("Hello World!", { titleTemplate: "%s | My Store" });

const count = ref(0);
const { undo } = useRefHistory(count, {
  deep: true, // tracks changes inside of arrays and objects
  capacity: 15, // limits how many steps we track
});

const handleUndo = () => {
  count.value += 1;
  console.log(count.value);
  undo();
  console.log(count.value);
};

const date = new Date();

const [day, month, year] = [
  date.getDate(),
  String(date.getMonth() + 1).padStart(2, "0"),
  date.getFullYear(),
];
</script>

<template>
  <h3>{{ day }}.{{ month }}.{{ year }}</h3>
  <h2 @click="handleUndo">Title is {{ title }}</h2>
  <h1>Mouse position is at: {{ x }}, {{ y }}</h1>
  <input type="text" v-model="title" />
</template>

<style scoped>
h3 {
  color: orange;
  text-align: center;
  margin: 20px;
}
</style>
