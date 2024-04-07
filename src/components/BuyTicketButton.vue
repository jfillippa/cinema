<template>
  <button v-if="isButton" class="button" @click="goToBuyTicket">
    Comprar ticket
  </button>
  <div v-else @click="goToBuyTicket">
    <img src="/images/buy-ticket.svg" class="buy-ticket-img" alt="Buy ticket" />
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const props = defineProps({
  width: { type: String, default: "150px" },
  borderRadius: { type: String, default: "5px" },
  isButton: { type: Boolean, default: true },
});

const goToBuyTicket = () => {
  router.push({ path: "/buy" });
};
</script>
<style lang="scss" scoped>
.button {
  width: v-bind("props.width");
  font-size: 15px;
  background-color: #554f95;
  padding: 10px;
  color: white;
  border-radius: v-bind("props.borderRadius");
  border: 0;
  cursor: pointer;
  &:hover {
    background-color: darken(#554f95, 5%);
  }
}

.buy-ticket-img {
  filter: drop-shadow(-3px 3px 0px #554f95);
  width: 80px;
}
</style>
