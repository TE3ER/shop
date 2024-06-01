<script setup>
import CategoryHead from './CategoryHead.vue'
import CardItemList from './CardItemList.vue'
import { ref, inject } from 'vue'

const { CloseCategory } = inject('cart')
defineProps({
  totalPrice: Number
})

let startX = 0
let currentX = 0

const handleTouchStart = (event) => {
  startX = event.touches[0].clientX
  currentX = startX // Початкова позиція така ж, як і поточна позиція пальця
}

const handleTouchMove = (event) => {
  currentX = event.touches[0].clientX
}

const handleTouchEnd = () => {
  const diffX = currentX - startX
  if (diffX < -100) {
    // Викликати метод CloseCategory через inject
    CloseCategory()
  }
}
</script>

<template>
  <div
    class="z-20 fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"
    @click="CloseCategory"
  ></div>
  <div
    class="bg-white w-96 h-full fixed left-0 top-0 z-20 p-10 overflow-y-auto"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
  >
    <CategoryHead />
  </div>
</template>
