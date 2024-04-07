<template>
  <div id="movie-list">
    <span class="movie-title">
      {{ `${movieData.title}` }}
    </span>
    <img :src="movieData?.image" class="movie-image" alt="Movie poster" />
    <div class="button-container">
      <BuyTicketButton :width="'200px'" :border-radius="'0 0 15px 15px'" />
    </div>
  </div>
</template>
<script setup>
import BuyTicketButton from "./BuyTicketButton.vue";
defineProps({
  movieData: { type: Object, default: {} },
});
</script>
<style lang="scss" scoped>
.movie-title {
  color: white;
}
.movie-image {
  width: 200px;
  height: 350px;
  margin-top: 5px;
}
.button-container {
  position: relative;
  top: -4px;
}
</style>
