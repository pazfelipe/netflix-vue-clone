<template>
  <div class="fixe w-full h-screen bg-black">
    <div v-if="!showFullVideo" class="flex z-40 items-center w-[120px] h-screen bg-black relative">
      <NuxtImg src="/images/netflix-logo.png" class="absolute top-0 w-[35px] mt-10 ml-10" />
      <MainMenu />
    </div>
    <div v-if="!showFullVideo">
      <div class="fixed flex z-20 top-0 right-0 w-full h-[50%] bg-black pl-[120px] bg-clip-border">
        <div class="absolute z-30 h-[600px] left-[120px] w-[77%] right-0 top-0 bg-gradient-to-r from-black via-black" />
        <video v-if="movie" :src="video" autoplay controls loop class="absolute z-0 w-[100vw] h-full object-fit" />
        <MovieDetails :movie="movie" />

      </div>

      <div class="fixed z-30 bottom-0 right-0 w-full h-[55%] pl-[120px] overflow-y-auto">
        <VideoCarousel class="pb-14 pt-14" category="Popular Movies" :movies="movies[0]" />
        <VideoCarousel class="pb-14" category="Horror Movies" :movies="movies[1]" />
        <VideoCarousel class="pb-32" category="Featured Movies" :movies="movies[2]" />
      </div>
    </div>

    <div v-if="!showFullVideo" class="absolute z-20 h-[70%] left-[120px] w-[100%] right-0 bottom-0 bg-gradient-to-t from-black via-black" />
    <div v-if="showFullVideo">
      <div
        class="absolute z-50 p-2 flex items-center justify-center m-4 bg-white bg-opacity-50 rounded-full cursor-pointer"
        @click="hideVideo">
        <Icon name="mdi:chevron-left" class="text-white text-2xl" />
      </div>
      <video v-if="movie" :src="video" autoplay controls loop class="absolute z-0 w-[100vw] h-full object-fit" />
    </div>
  </div>
</template>

<script setup lang="ts">

import { useMovieStore } from "@/stores/movie"

const store = useMovieStore()
const { movie, showFullVideo } = storeToRefs(store)
import { mockedMovies as movies } from "@/utils/movies"

const video = computed(() => {
  return movie?.value?.name ? `/videos/${movie.value.name}.mp4` : `/videos/${movies[0][0].name}.mp4`
})

const hideVideo = () => {
  store.setShowFullVideo(false)
}

onMounted(() => {
  console.log(movies[0][0].name)
  store.setMovie(mockedMovies[0][0])
})

</script>
