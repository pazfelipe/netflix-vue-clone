<template>
  <div class="fixe w-full h-screen bg-black">
    <div v-if="!showFullVideo" class="flex z-40 items-center w-[120px] h-screen bg-black relative">
      <NuxtImg src="/images/netflix-logo.png" class="absolute top-0 w-[35px] mt-10 ml-10" />
      <MainMenu />
    </div>
    <div v-if="!showFullVideo">
      <div class="fixed flex z-20 top-0 right-0 w-full h-[50%] bg-black pl-[120px] bg-clip-border">
        <MovieDetails :movie="movie" />
        <video v-if="movie" :src="video" autoplay loop class="absolute z-0 h-[600px] right-0 top-0" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { useMovieStore } from "@/stores/movie"

const store = useMovieStore()
const { movie, showFullVideo } = storeToRefs(store)

const video = computed(() => {
  return movie.value ? `/videos/${movie.value.name}.mp4` : ''
})

onMounted(() => {
  store.setMovie(mockedMovies[0][0])
})

</script>
