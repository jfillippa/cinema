<template>
  <div class="carrousel-container">
    <div class="arrow">
      <img
        v-if="index !== 0"
        src="/images/arrow.svg"
        class="arrow-svg left"
        alt="Carrousel arrow"
        @click="() => index--"
      />
    </div>
    <div class="slides-container" :style="transform">
      <div v-for="(movie, i) in moviesData" :key="i" class="slide">
        <Slide :movieData="movie" />
      </div>
    </div>
    <div class="arrow">
      <img
        v-if="index !== 2"
        src="/images/arrow.svg"
        class="arrow-svg"
        alt="Carrousel arrow"
        @click="() => index++"
      />
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
import Slide from "./Slide.vue";

defineProps({
  moviesData: { type: Array, default: [] },
});

const index = ref(0);

const widthPercentage = ref(0);
const marginPercentage = ref(0);
const transform = ref(`transform: translateX(calc(${widthPercentage.value}% + ${marginPercentage.value}%));`);

watch(index, (newIndex) => {
  widthPercentage.value = -100 * newIndex;
  marginPercentage.value = -20 * newIndex;
  transform.value = `transform: translateX(calc(${widthPercentage.value}% + ${marginPercentage.value}%));`;
});
</script>
<style scoped>
.carrousel-container {
  display: flex;
  width: 100%;

  .slides-container {
    width: 100%;
    display: grid;
    grid-gap: 0 20%;
    gap: 0 20%;
    grid-auto-flow: column;
    grid-auto-columns: 100%;
    transition: transform 0.75s ease;

    .slide {
      background-color: black;
      position: relative;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }

  .arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10%;

    .arrow-svg {
      width: 50px;
      cursor: pointer;
    }

    .left {
      transform: rotate(180deg);
    }
  }
}
</style>
