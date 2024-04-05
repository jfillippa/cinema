<template>
  <div class="slide-container">
    <img :src="movieData?.image" class="movie-image" alt="Movie image" />
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
    </div>
  </div>
</template>
<script setup>
defineProps({
  movieData: { type: Object, default: {} },
});
</script>
<style lang="scss" scoped>
.slide-container {
  width: 100%;
  display: grid;
  grid-template-columns: 35fr 65fr;

  .movie-image {
    width: 100%;
    margin: 20px 0px 0px 30px
  }

  .info-movie {
    background-color: rgba(217, 217, 217, 0.5);
    margin-top: 45px;
    margin-left: 30px;
    padding: 10px;
    border: 5px solid #554f95;
    border-radius: 0 15px 15px 0;
    border-left: 0;

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
}
</style>
