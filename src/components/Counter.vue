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

<!-- 
  Bu şekilde prop alıyoruz
  defineProps({
  msg: String,
  });

***************************************
  useMemo
  counted -> useMemo

  useEffect
  watch -> useEffect [a,b,c]
  onMounted -> useEffect []
  onUnmounted -> useEffect [] return

  const value = counted(() => "state stuff")
  onMounted(() => { doStuff })
  onUnmounted(() => { doStuff on unmont})
  watch([state], () => {
    doStuff when state changes
  })
 -->
