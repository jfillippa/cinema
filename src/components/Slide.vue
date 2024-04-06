<template>
  <div class="slide-container">
    <Score :score="movieData.score"/>
    <div class="movie-image-container">
      <img :src="movieData?.image" class="movie-image" alt="Movie image" />
    </div>
    <div class="info-container">
      <div class="info-movie">
        <div>
          <span class="movie-title">
            {{ `${movieData.title}` }}
          </span>
        </div>
        <div class="movie-synopsis-container">
          <span class="movie-synopsis">
            {{ `${movieData.synopsis}` }}
          </span>
        </div>
      </div>
      <div class="buttons-container">
        <div>
          <div class="button-container">
            <img
              src="/images/see-trailer.svg"
              class="button"
              alt="See trailer"
            />
          </div>
          <div>
            <span class="buttons-text"> Ver trailer </span>
          </div>
        </div>
        <div>
          <div class="button-container">
            <img
              src="/images/buy-ticket.svg"
              class="button"
              alt="Buy ticket"
            />
          </div>
          <div>
            <span class="buttons-text"> Comprar ticket </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Score from './Score.vue';
defineProps({
  movieData: { type: Object, default: {} },
});
</script>
<style lang="scss" scoped>
.slide-container {
  width: 100%;
  display: grid;
  grid-template-columns: 35fr 65fr;

  .movie-image-container {
    display: flex;
    width: 100%;
    margin-top: 30px;
    margin-left: 15px;
    justify-content: right;

    .movie-image {
      height: 80vh;
    }
  }

  .info-container {
    display: flex;
    flex-direction: column;
    gap: 50px;
    margin-left: 15px;
    padding-block: 50px;

    .info-movie {
      background-color: rgba(217, 217, 217, 0.5);
      padding: 10px;
      border: 5px solid #554f95;
      border-radius: 0 15px 15px 0;
      border-left: 0;
      height: 70%;

      .movie-title {
        font-size: 60px;
        padding-right: 20px;
        border-bottom: 1px solid;
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

      .button-container {
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
