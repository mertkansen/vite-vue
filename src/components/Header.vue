<script setup></script>

<template>
  <nav class="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/user/11">User</router-link>
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
