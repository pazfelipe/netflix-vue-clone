<template>
  <div class="fixe w-full h-screen bg-black">
    <div v-if="!showFullVideo" class="flex z-40 items-center w-[120px] h-screen bg-black relative">
      N
      <div>
        <div class="py-2 mx-10 my-6">
          <Icon name="mdi:magnify" class="text-white text-5xl" />
        </div>
        <div class="py-2 mx-10 my-6 border-b-4 border-b-red-500">
          <Icon name="mdi:home-outline" class="text-white text-5xl" />
        </div>
        <div class="py-2 mx-10 my-6">
          <Icon name="mdi:trending-up" class="text-white text-5xl" />
        </div>
        <div class="py-2 mx-10 my-6">
          <Icon name="mdi:television" class="text-white text-5xl" />
        </div>
        <div class="py-2 mx-10 my-6">
          <Icon name="mdi:movie-outline" class="text-white text-5xl" />
        </div>
        <div class="py-2 mx-10 my-6">
          <Icon name="mdi:plus" class="text-white text-5xl" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { useMovieStore } from "@/stores/movie"

const store = useMovieStore()
const { movie, showFullVideo } = storeToRefs(store)

</script>
