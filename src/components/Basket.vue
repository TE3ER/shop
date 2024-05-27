<script setup>
import BasketHead from './BasketHead.vue'
import { inject } from 'vue'
import CardItemList from './CardItemList.vue'

const { CloseBasket } = inject('cart')
defineProps({
  totalPrice: Number
})

const scrollToTop = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const closeBasketAndScrollToTop = () => {
  CloseBasket()
  scrollToTop()
}

// Змінні для відстеження жесту свайпу
let startX = 0
let currentX = 0

const handleTouchStart = (event) => {
  startX = event.touches[0].clientX
}

const handleTouchMove = (event) => {
  currentX = event.touches[0].clientX
}

const handleTouchEnd = () => {
  const diffX = currentX - startX
  if (diffX > 100) {
    // Закрити корзину, якщо свайп вправо більше ніж на 100px
    CloseBasket()
  }
}
</script>

<template>
  <div
    class="z-20 fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"
    @click="CloseBasket"
  ></div>
  <div
    class="bg-white w-96 h-full fixed right-0 top-0 z-20 p-10 overflow-y-auto"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
  >
    <BasketHead />

    <CardItemList />

    <div class="flex flex-col gap-4 mt-7">
      <div class="flex gap-2">
        <span>До оплати:</span>
        <div class="flex-1 border-b border-dashed"></div>
        <b>{{ totalPrice }} ₴</b>
      </div>
      <router-link to="/placing">
        <button
          @click="closeBasketAndScrollToTop"
          :disabled="totalPrice ? false : true"
          class="mt-4 transition bg-lime-500 w-full rounded-xl py-3 text-white disabled:bg-slate-300 hover:bg-lime-600 active:700 cursor:pointer"
        >
          Оформити замовлення
        </button>
      </router-link>
    </div>
  </div>
</template>
