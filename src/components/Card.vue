<template>
  <div>
    <span class="movie-title">
      {{ `${movieData.title}` }}
    </span>
    <img
      :src="movieData?.image"
      class="movie-image"
      alt="Movie poster"
    />
    <BuyTicketButton />
  </div>
</template>
<script setup>
import BuyTicketButton from "./BuyTicketButton.vue"
defineProps({
  movieData: { type: Object, default: {} },
});
</script>
<style lang="scss" scoped></style>
