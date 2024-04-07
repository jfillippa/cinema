<template>
  <div class="score-container">
    <div>
      <img src="/images/star.svg" class="star" alt="Star" />
    </div>
    <div>
      <span class="movie-title">
        {{ `${score}/10` }}
      </span>
    </div>
    <div>
      <span class="movie-title"> IMDB </span>
    </div>
  </div>
</template>
<script setup>
defineProps({
  score: { type: Number, default: 0 },
});
</script>
<style lang="scss" scoped>
.score-container {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #554f95;
  height: 70px;
  width: 90px;
  border-radius: 10px;
  left: 0vw;
  top: -20px;
  color: white;

  @media (width <= 800px) {
    left: calc(50% - 220px);
  }
}
</style>
