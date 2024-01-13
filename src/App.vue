<script setup>
import { provide, ref } from 'vue'

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Basket from './components/Basket.vue'

const basketOpen = ref(false)

const CloseBasket = () => {
  basketOpen.value = false
}

const OpenBasket = () => {
  basketOpen.value = true
}

provide('cartActions', {
  CloseBasket,
  OpenBasket
})
</script>

<template>
  <Basket v-if="basketOpen" />

  <div class="bg-white w-4/5 m-auto rounded-xl shadow-xl mt-14">
    <Header @Open-Basket="OpenBasket" />
    <div class="p-10">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>
