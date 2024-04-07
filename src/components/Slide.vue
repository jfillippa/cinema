<template>
  <div class="slide-container">
    <div class="movie-image-container">
      <img :src="movieData?.image" class="movie-image" alt="Movie image" />
      <Score :score="movieData.score" />
    </div>
    <div class="info-container">
      <div class="info-movie">
        <div>
          <span class="movie-title">
            {{ `${movieData.title}` }}
          </span>
        </div>
        <div v-if="!isMobile()" class="movie-synopsis-container">
          <span class="movie-synopsis">
            {{ `${movieData.synopsis}` }}
          </span>
        </div>
      </div>
      <div class="buttons-container">
        <div>
          <div class="button-container" @click="openTrailer">
            <img
              src="/images/see-trailer.svg"
              class="button"
              alt="See trailer"
            />
          </div>
          <div class="text-container">
            <span class="buttons-text"> Ver trailer </span>
          </div>
        </div>
        <div>
          <div class="button-container">
            <BuyTicketButton :is-button="false" />
          </div>
          <div class="text-container">
            <span class="buttons-text"> Comprar ticket </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import BuyTicketButton from "./BuyTicketButton.vue";
import Score from "./Score.vue";
const props = defineProps({
  movieData: { type: Object, default: {} },
});

const openTrailer = () => {
  window.open(props.movieData.trailer, "_blank");
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
.slide-container {
  width: 100%;
  display: grid;
  grid-template-columns: 35fr 65fr;
  @media (width <= 800px) {
    grid-template-columns: 100fr;
  }

  .movie-image-container {
    position: relative;
    display: flex;
    width: fit-content;
    margin-top: 30px;
    margin-left: 15px;
    justify-self: right;
    @media (width <= 800px) {
      justify-content: center;
      justify-self: center;
      margin-left: 0;
    }

    .movie-image {
      height: auto;
      width: 26vw;
      @media (width <= 800px) {
        width: 400px;
        // height: 65vh;
      }
      @media (width <= 500px) {
        width: 80%;
        height: auto;
      }
    }
  }

  .info-container {
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding-block: 50px;
    @media (width <= 800px) {
      padding-block: 0;
      gap: 0;
    }

    .info-movie {
      background-color: rgba(217, 217, 217, 0.5);
      padding: 10px 10px 10px 25px;
      border: 5px solid #554f95;
      border-radius: 0 15px 15px 0;
      border-left: 0;
      height: 70%;
      @media (width <= 800px) {
        border: 0;
        background-color: transparent;
        display: flex;
        justify-content: center;
      }

      .movie-title {
        font-size: 60px;
        padding-right: 20px;
        border-bottom: 1px solid;
        @media (width <= 800px) {
          color: white;
          border-bottom: 0;
          font-size: 40px;
        }
      }

      .movie-synopsis-container {
        margin-top: 15px;

        .movie-synopsis {
          white-space: pre-line;
          font-size: 20px;
        }
      }
    }
    .buttons-container {
      display: flex;
      justify-content: center;
      align-items: end;
      gap: 50px;
      cursor: pointer;
      @media (width <= 800px) {
        margin-bottom: 20px;
      }

      .button-container {
        display: flex;
        justify-content: center;
      }

      .text-container {
        display: flex;
        justify-content: center;
      }

      .buttons-text {
        color: white;
      }

      .button {
        filter: drop-shadow(-3px 3px 0px #554f95);
        width: 80px;
      }
    }
  }
}
</style>
