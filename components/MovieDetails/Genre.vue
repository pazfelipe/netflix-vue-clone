<template>
  <div class="relative">
    <span class="absolute left-[2px] -top-[12px] text-[40px]">.</span>
    <span class="pl-4">{{ props.genre }}</span>
  </div>
</template>

<script setup lang="ts">

// @ts-ignore
const props = defineProps({
  genre: {
    type: String
  }
})

</script>
