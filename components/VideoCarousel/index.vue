<template>
  <div class="min-w-[1200px] relative">
    <div class="flex justify-between mr-6">
      <div class="flex items-center font-semibold text-white text-2xl cursor-pointer">
        {{ category }}
      </div>
    </div>
    <Carousel ref="carousel" v-model="currentSlide" :items-to-show="8" :items-to-scroll="1" :wrap-around="true"
      :transition="500" snapAlign="start" class="bg-transparent">
      <Slide v-for="(slide, index) in movies" :key="index" class="flex items-center text-white bg-transparent">
        <div @click="$event => fullScreenVideo(index)" class="object-cover h-[100%] hover:brightness-125 cursor-pointer"
          :class="currentSlide !== index ? 'border-4 border-transparent' : 'border-4 border-white',
            currentSlideObject(slide, index)
            ">
          <NuxtImg :src="'/images/' + slide.name + '.png'" class="pointer-events-none h-[100%] z-[-1]" />
        </div>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script setup lang="ts">

import 'vue3-carousel/dist/carousel.css'

import { useMovieStore } from "@/stores/movie"

// @ts-ignore
const props = defineProps({
  movies: {
    type: Array,
    required: true
  },
  category: {
    type: String,
    required: true
  }
})

const store = useMovieStore()
const { movie, showFullVideo } = storeToRefs(store)

const currentSlide = ref(0)
const { movies, category } = toRefs(props)

const currentSlideObject = (slide: Record<string, any>, index: number) => {
  if (index === currentSlide.value) {
    store.setMovie(slide)
  }
}

const fullScreenVideo = (index: number) => {
  currentSlide.value = index
  setTimeout(() => {
    store.setShowFullVideo(true)
  }, 100)
}

</script>

<style>
.carousel__prev,
.carousel__next,
.carousel__prev:hover,
.carousel__next:hover {
  color: #FFFFFF;
}
</style>
