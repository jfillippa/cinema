<template>
  <div class="container">
    <p>{{ `¡Felicitaciones ${formData.name}` }}</p>
    <img src="/images/ticket.svg" class="ticket-img" alt="Ticket" />
    <p>
      {{
        `Tu entrada para la function ${formData.date} \na las ${formData.time} ha sido canjeada.\n\n ¡Te esperamos!`
      }}
    </p>
  </div>
</template>
<script setup>
defineProps({
  formData: { type: Object, default: {} },
});
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
p {
  white-space: pre-line;
  color: white;
  text-align: center;
  font-weight: 500;
}
</style>
