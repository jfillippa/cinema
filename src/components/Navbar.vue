<template>
  <nav class="navbar-container">
    <img src="/images/logo.svg" class="logo" />
    <div class="buttons-container">
      <a class="bold"> Destacadas </a>
      <a> Cartelera </a>
      <BuyTicketButton />
    </div>
  </nav>
</template>
<script setup>
import BuyTicketButton from "./BuyTicketButton.vue";
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
  }

  .buttons-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 25px;

    .bold {
      font-weight: bold;
    }

    a {
      color: white;
      cursor: pointer;
    }
  }
}
</style>
