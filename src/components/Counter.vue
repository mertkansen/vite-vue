<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
const setCount = (val) => (count.value += val);
</script>

<template>
  <h1>{{ msg }}</h1>
  <button @click="setCount(1)">++</button>
  <h2>{{ count }}</h2>
  <button @click="setCount(-1)">--</button>
</template>

<style scoped></style>

