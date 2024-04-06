<template>
  <Navbar />
  <Carrousel :movies-data="featuredMovies" />
  <MoviesList :movies="movies" />
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Carrousel from "./components/Carrousel.vue";
import MoviesList from "./components/MoviesList.vue"

const featuredMovies = [
  {
    title: "John Wick 4",
    score: 8,
    trailer: "https://www.youtube.com/watch?v=L0anWmmd8TI",
    synopsis:
      "El marqués Vincent de Gramont pretende matar a John Wick para afianzar su poder en la Orden Suprema. \nSin embargo, John tratará de adelantarse a cada uno de sus movimientos hasta lograr enfrentarse cara a cara con su peor enemigo.",
    image: "/images/john-wick.jpeg",
    banner: "/images/john-wick-banner.png",
  },
  {
    title: "John Wick 13123",
    score: 8,
    trailer: "https://www.youtube.com/watch?v=L0anWmmd8TI",
    synopsis:
      "El marqués Vincent de Gramont pretende matar a John Wick para afianzar su poder en la Orden Suprema. \n Sin embargo, John tratará de adelantarse a cada uno de sus movimientos hasta lograr enfrentarse cara a cara con su peor enemigo.",
    image: "/images/john-wick.jpeg",
    banner: "/images/john-wick-banner.png",
  },
  {
    title: "John Wick 1283u18",
    score: 8,
    trailer: "https://www.youtube.com/watch?v=L0anWmmd8TI",
    synopsis:
      "El marqués Vincent de Gramont pretende matar a John Wick para afianzar su poder en la Orden Suprema. \nSin embargo, John tratará de adelantarse a cada uno de sus movimientos hasta lograr enfrentarse cara a cara con su peor enemigo.",
    image: "/images/john-wick.jpeg",
    banner: "/images/john-wick-banner.png",
  },
];

const movies = [
  {
    title: "John Wick 4",
    image: "/images/john-wick.jpeg",
  },
  {
    title: "John Wick 4",
    image: "/images/john-wick.jpeg",
  },
  {
    title: "John Wick 4",
    image: "/images/john-wick.jpeg",
  },
  {
    title: "John Wick 4",
    image: "/images/john-wick.jpeg",
  },
  {
    title: "John Wick 4",
    image: "/images/john-wick.jpeg",
  },
  {
    title: "John Wick 4",
    image: "/images/john-wick.jpeg",
  },
  {
    title: "John Wick 4",
    image: "/images/john-wick.jpeg",
  },
  {
    title: "John Wick 4",
    image: "/images/john-wick.jpeg",
  },
  {
    title: "John Wick 4",
    image: "/images/john-wick.jpeg",
  },
  {
    title: "John Wick 4",
    image: "/images/john-wick.jpeg",
  },
  {
    title: "John Wick 4",
    image: "/images/john-wick.jpeg",
  },
  {
    title: "John Wick 4",
    image: "/images/john-wick.jpeg",
  },
];
</script>

<style scoped></style>
