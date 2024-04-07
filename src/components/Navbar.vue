<template>
  <nav class="navbar-container">
    <img src="/images/logo.svg" class="logo" @click="goHome" />
    <div class="buttons-container">
      <a v-if="!isMobile()" href="#carrousel" class="bold"> Destacadas </a>
      <a v-if="!isMobile()" href="#movie-list"> Cartelera </a>
      <BuyTicketButton :is-button="!isMobile()"/>
    </div>
  </nav>
</template>
<script setup>
import { useRouter } from "vue-router";

import BuyTicketButton from "./BuyTicketButton.vue";
const router = useRouter();

const goHome = () => {
  router.push({ path: "/" });
};

function isMobile() {
  if (screen.width <= 800) {
    return true;
  } else {
    return false;
  }
}
</script>
<style lang="scss" scoped>
.navbar-container {
  display: flex;
  min-height: 40px;
  background-color: rgba(40, 40, 40, 0.9);
  height: fit-content;
  position: sticky;
  top: 0;
  padding: 8px 40px;
  justify-content: space-between;
  align-items: center;
  z-index: 2;

  .logo {
    height: 50px;
    cursor: pointer;
  }

  .buttons-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;

    .bold {
      font-weight: bold;
    }

    a {
      font-size: 20px;
      color: white;
      cursor: pointer;
      text-decoration: none;
    }
  }
}
</style>
