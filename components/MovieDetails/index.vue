<template>
  <div class="z-40 text-white w-[53% pt-20]">
    <div class="text-[55px] font-semibold font-serif">
      {{ movie.name }}
    </div>
    <div class="flex items-center text-lg pt-4">
      <div>{{ movie.year }}</div>
      <MovieDetailsGenre :genre="movie?.genre?.one" />
      <MovieDetailsGenre :genre="movie?.genre?.two" />
      <MovieDetailsGenre :genre="movie?.genre?.three" />
    </div>
    <div class="text-2xl pt-6">
      {{ movie.description }}
    </div>
  </div>
</template>

<script setup lang="ts">

// @ts-ignore
const props = defineProps({
  movie: {
    type: Object,
    required: true
  }
})
</script>
