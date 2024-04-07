<template>
  <div class="page-container">
    <div v-if="!formData">
      <h1 class="title">Comprar ticket</h1>
      <BuyTicketForm :movies="movies" :seats="seats" @form-data="setFormData" />
    </div>
    <div v-else class="congratulations-container">
      <Congratulations :form-data="formData" />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

import Congratulations from "../components/Congratulations.vue";
import BuyTicketForm from "../components/BuyTicketForm.vue";
import movies from "../data/movies";
import seats from "../data/seats";

const formData = ref(null);

const setFormData = (data) => {
  formData.value = data;
};
</script>
<style lang="scss" scoped>
.page-container {
  background-color: #282828;
  width: 100vw;
  height: 85vh;
  padding-left: 40px;
  padding-top: 50px;
  @media (width <= 800px) {
    padding-left: 10px;
    padding-top: 15px;
  }

  .title {
    color: white;
    font-size: 35px;
    font-weight: bold;
    margin: 0;
  }
}
.congratulations-container {
  height: 100%;
}
</style>
