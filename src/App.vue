<script setup>
import { ref } from "vue";
import { useMouse } from "./composables/mouse";
import { useTitle, useRefHistory } from "@vueuse/core";

const { x, y } = useMouse();

const title = useTitle("Hello World!", { titleTemplate: "%s | My Store" });

const count = ref(0);
const { undo } = useRefHistory(count, {
  deep: true, // tracks changes inside of aarrays and objects
  capacity: 15, // llimits how many steps we track
});

const handleUndo = () => {
  count.value += 1;
  console.log(count.value);
  undo();
  console.log(count.value);
};
</script>

<template>
  <h2 @click="handleUndo">Title is {{ title }}</h2>
  <h1>Mouse position is at: {{ x }}, {{ y }}</h1>
  <input type="text" v-model="title" />
</template>

<style scoped></style>

<!-- 
  Bu şekilde prop alıyoruz
  defineProps({
    msg: String,
  });

***************************************
  useMemo
  computed -> useMemo

  useEffect
  watch -> useEffect [a,b,c]
  onMounted -> useEffect []
  onUnmounted -> useEffect [] return

  const value = computed(() => "state stuff")
  onMounted(() => { doStuff })
  onUnmounted(() => { doStuff on unmont})
  watch([state], () => {
    doStuff when state changes
  })
 -->
