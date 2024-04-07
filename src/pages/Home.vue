<template>
  <Carrousel :movies-data="featuredMovies" />
  <MoviesList :movies="movies" />
</template>

<script setup>
import Carrousel from "../components/Carrousel.vue";
import MoviesList from "../components/MoviesList.vue";
import movies from "../data/movies";

const featuredMovies = movies.filter((movie) => movie.featured);
</script>

<style scoped></style>
