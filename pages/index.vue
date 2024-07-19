<template>
  <div class="fixe w-full h-screen bg-black">
    <div v-if="!showFullVideo" class="flex z-40 items-center w-[120px] h-screen bg-black relative">
      <NuxtImg src="/images/netflix-logo.png" class="absolute top-0 w-[35px] mt-10 ml-10" />
      <MainMenu />
    </div>
  </div>
</template>

<script setup lang="ts">

import { useMovieStore } from "@/stores/movie"

const store = useMovieStore()
const { movie, showFullVideo } = storeToRefs(store)

</script>
