<template>
  <div class="container">
    <p>
      {{
        movieDataForm
          ? "Seleccione su funcion"
          : "Complete su informacion personal"
      }}
    </p>
    <div v-if="movieDataForm" class="form-container">
      <div class="field">
        <label> Seleccione pelicula </label>
        <select v-model="selectedMovie">
          <option v-for="(movie, index) in movies" :value="movie" :key="index">
            {{ movie.title }}
          </option>
        </select>
      </div>
      <div class="field">
        <label> Seleccione funcion </label>
        <select v-model="selectedDate">
          <option
            v-for="(date, index) in selectedMovie.dates"
            :value="date"
            :key="index"
          >
            {{ date }}
          </option>
        </select>
      </div>
      <div class="field">
        <label> Seleccione asiento </label>
        <select v-model="selectedSeat">
          <option v-for="(seat, index) in seats" :value="seat" :key="index">
            {{ seat }}
          </option>
        </select>
      </div>
      <div class="buttons-container">
        <button class="continue-button" @click="() => (movieDataForm = false)">
          Continuar
        </button>
        <button class="reset-button" @click="resetForm">Reiniciar</button>
      </div>
    </div>
    <div v-else class="form-container">
      <div class="field">
        <label> Nombre completo </label>
        <input v-model="name" pattern=".{4,}" required />
      </div>
      <div class="field">
        <label> E-mail </label>
        <input type="email" v-model="email" required />
      </div>
      <div class="field">
        <label> Telefono </label>
        <input v-model="cellphone" required />
      </div>
      <div class="buttons-container">
        <button class="submit-button" @click="submitForm">Finalizar</button>
        <button class="reset-button" @click="resetForm">Volver</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, watch, watchEffect, defineEmits } from "vue";

const props = defineProps({
  movies: { type: Array, default: [] },
  seats: { type: Array, default: [] },
});

const emit = defineEmits(["form-data"]);

const movieDataForm = ref(true);
const selectedMovie = ref(props.movies[0]);
const selectedDate = ref(selectedMovie.value.dates[0]);
const selectedSeat = ref(props.seats[0]);

const name = ref("");
const email = ref("");
const cellphone = ref("");

watch(selectedMovie, (newSelectedMovie) => {
  selectedDate.value = newSelectedMovie.dates[0];
});

const resetForm = () => {
  selectedMovie.value = props.movies[0];
  selectedSeat.value = props.seats[0];
};

function aplicarmask(value, mask) {
  value = value.toString().replace(/\D/g, "");
  let valueFormatted = "";
  let valueIndex = 0;

  for (let i = 0; i < mask.length; i++) {
    if (mask.charAt(i) === "#") {
      if (value.length > valueIndex) {
        valueFormatted += value.charAt(valueIndex++);
      } else {
        break;
      }
    } else {
      valueFormatted += mask.charAt(i);
    }
  }

  return valueFormatted;
}

watchEffect(() => {
  cellphone.value = aplicarmask(cellphone.value, "###-###-####");
});

const submitForm = () => {
  const dateArray = selectedDate.value.split(" ");
  const date = dateArray[0];
  const time = dateArray[1];
  const formData = {
    movie: selectedMovie.value,
    date: date,
    time: time,
    name: name,
  };
  emit("form-data", formData);
};
</script>
<style lang="scss" scoped>
.container {
  margin-top: 15px;
}
.form-container {
  width: 100%;
  margin-top: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;

  .field {
    position: relative;
    border-radius: 4px;
    border: 2px solid #554f95;
    padding: 10px;
    color: white;
    margin-top: 15px;
    width: 100%;
    max-width: 450px;

    label {
      background-color: #282828;
      font-size: 14px;
      position: absolute;
      top: -10px;
      padding-inline: 5px;
    }

    input,
    select {
      background-color: transparent;
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
      color: white;
    }
  }
  .buttons-container {
    display: flex;
    margin-top: 50px;

    button {
      height: 40px;
      font-size: 15px;
      background-color: transparent;
      padding: 10px;
      color: white;
      border-radius: 5px;
      border: 0;
      cursor: pointer;
    }

    .continue-button {
      width: 200px;
      border: 2px solid #554f95;
      &:hover {
        background-color: darken(#554f95, 5%);
      }
    }

    .reset-button {
      width: 100px;
      color: grey;
    }

    .submit-button {
      width: 200px;
      background-color: #91c870;
      color: #554f95;
      border: 2px solid #554f95;
      &:hover {
        background-color: darken(#91c870, 10%);
      }
    }
  }
}
p {
  color: white;
  font-size: 19px;
  margin: 0;
}
</style>
