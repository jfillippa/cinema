<template>
  <div
    class="carrousel-container"
    :style="{
      background: `center / cover no-repeat url(${moviesData[index].banner})`,
    }"
    id="carrousel"
  >
    <div class="arrow left">
      <img
        v-if="index !== 0"
        src="/images/arrow.svg"
        class="arrow-svg-left"
        alt="Carrousel arrow"
        @click="() => index--"
      />
    </div>
    <div class="slides-container" :style="transform">
      <div v-for="(movie, i) in moviesData" :key="i" class="slide">
        <Slide :movieData="movie" />
      </div>
    </div>
    <div class="arrow right">
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
const transform = ref(
  `transform: translateX(calc(${widthPercentage.value}% + ${marginPercentage.value}%));`
);

watch(index, (newIndex) => {
  widthPercentage.value = -100 * newIndex;
  marginPercentage.value = -20 * newIndex;
  transform.value = `transform: translateX(calc(${widthPercentage.value}% + ${marginPercentage.value}%));`;
});
</script>
<style scoped>
.carrousel-container {
  position: relative;
  width: 100%;

  .slides-container {
    width: 100%;
    height: 90vh;
    display: grid;
    grid-gap: 0 20%;
    gap: 0 20%;
    grid-auto-flow: column;
    grid-auto-columns: 100%;
    transition: transform 0.75s ease;

    .slide {
      padding: 40px 80px 20px 80px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }

  .arrow {
    position: absolute;
    justify-content: center;
    z-index: 1;

    .arrow-svg {
      width: 50px;
      cursor: pointer;
    }

    .arrow-svg-left {
      width: 50px;
      cursor: pointer;
      transform: rotate(180deg);
    }
  }
  .right {
    top: 50%;
    right: 10px;
  }

  .left {
    top: 50%;
    left: 10px;
  }
}

.carrousel-container::before {
  content: "";
  width: 100%;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  backdrop-filter: blur(10px);
}
</style>
