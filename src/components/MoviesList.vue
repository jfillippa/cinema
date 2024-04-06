<template>
  <div class="billboard-container">
    <a class="title"> En cartelera </a>
    <div class="card-container"></div>
  </div>
</template>
<script setup>
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

  .title {
    color: white;
    font-size: 35px;
    font-weight: bolud;
  }

  .card-container {
    padding: 30px;
  }
}
</style>
