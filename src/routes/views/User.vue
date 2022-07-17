<script setup>
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
</script>

<template>
  <h1>This is User page</h1>
  <h2>Param id: {{ route.params.id }}</h2>
  <button @click="router.push('/')">Go Home</button>
</template>

<style scoped></style>
