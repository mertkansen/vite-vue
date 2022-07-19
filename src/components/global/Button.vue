<script setup>
defineProps({
  title: String,
  color: String,
});
</script>

<template>
  <button :style="{ background: color }" class="btn">
    {{ title }}
  </button>
</template>

<style scoped>
.btn {
  width: 120px;
  line-height: 2;
  border: none;
  border-radius: 5px;
  outline: none;
  font-size: 18px;
  font-family: monospace;
  color: whitesmoke;
}
</style>
