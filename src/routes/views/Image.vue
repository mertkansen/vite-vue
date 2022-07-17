<script setup>
import trees from "../../styles/assets/trees.jpg";
import ange from "../../styles/assets/ange.jpg";
</script>

<template>
  <div class="container">
    <div class="item">
      <img :src="ange" alt="angel" />
      <div class="sub-text">
        <h3>Angel</h3>
      </div>
    </div>
    <div class="item">
      <img :src="trees" alt="angel" />
      <div class="sub-text">
        <h3>Trees</h3>
      </div>
    </div>
    <div class="item">
      <img :src="ange" alt="angel" />
      <div class="sub-text">
        <h3>Angel</h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 20px;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
}

.item {
  display: flex;
  flex-direction: column;
  width: 400px;
  overflow: hidden;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.container img {
  width: 100%;
  height: 265px;
  object-fit: cover;
  object-position: center center;
}

.sub-text {
  text-align: center;
  height: 50px;
  display: grid;
  place-items: center;
}
</style>
