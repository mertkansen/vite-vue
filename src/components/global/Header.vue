<script setup>
import { PATHS } from "../../routes/routeConfig";
</script>

<template>
  <nav class="navbar">
    <router-link :to="PATHS.HOME">Home</router-link>
    <router-link :to="PATHS.ABOUT">About</router-link>
    <router-link :to="PATHS.TASK_TRACKER">Task Tracker</router-link>
    <router-link :to="PATHS.IMAGE">Images</router-link>
    <router-link :to="PATHS.USER + '/123'">User</router-link>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #333;
  display: flex;
  justify-content: flex-end;
}

.navbar a {
  display: inline-block;
  text-decoration: none;
  color: bisque;
  margin: 20px;
}

.navbar a:hover,
.navbar a:focus {
  text-decoration: underline;
}
</style>
