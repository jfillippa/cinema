<template>
  <div class="billboard-container">
    <a class="title"> En cartelera </a>
    <div class="card-container">
      <Card v-for="(movie, index) in movies" :key="index" :movie-data="movie" />
    </div>
  </div>
</template>
<script setup>
import Card from "./Card.vue";
defineProps({
  movies: { type: Array, default: [] },
});
</script>
<style lang="scss" scoped>
.billboard-container {
  background-color: #2a303c;
  padding: 40px 80px;
  width: 100vw;
  min-height: 90vh;
  @media (width <= 800px) {
    padding: 10px;
  }

  .title {
    color: white;
    font-size: 35px;
    font-weight: bold;
  }

  .card-container {
    padding: 30px 50px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 200px);
    grid-gap: 40px;
    @media (width <= 800px) {
      padding: 10px 0 0 0;
      justify-content: center;
    }
  }
}
</style>
