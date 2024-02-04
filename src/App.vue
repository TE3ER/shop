<script setup>
import { computed, provide, ref } from 'vue'

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Basket from './components/Basket.vue'

const cart = ref([])

const totalPrice = computed(() => cart.value.reduce((acc, item) => acc + item.price, 0))

const addToCart = (item) => {
  cart.value.push(item)
  console.log(cart)
}

const removeToCart = (item) => {
  cart.value.splice(cart.value.indexOf(item), 1)
  console.log(cart)
}

const basketOpen = ref(false)

const CloseBasket = () => {
  basketOpen.value = false
}

const OpenBasket = () => {
  basketOpen.value = true
}

provide('cart', {
  cart,
  CloseBasket,
  OpenBasket,
  addToCart,
  removeToCart
})
</script>

<template>
  <Basket v-if="basketOpen" :total-price="totalPrice" />

  <div class="bg-white w-4/5 m-auto rounded-xl shadow-xl mt-14">
    <Header :total-price="totalPrice" @Open-Basket="OpenBasket" />
    <div class="p-10">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>
