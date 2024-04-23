<script setup>
import axios from 'axios'

import { onMounted, computed, provide, ref } from 'vue'

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Basket from './components/Basket.vue'
import CardItemList from './components/CardItemList.vue'

const cart = ref([])

const totalPrice = computed(() => cart.value.reduce((acc, item) => acc + item.price, 0))

const addToCart = (item) => {
  cart.value.push(item)
  //console.log(cart)
  message.value = `Додано в кошик`
  showMessage()
}

const removeToCart = (item) => {
  cart.value.splice(cart.value.indexOf(item), 1)
  //console.log(cart)
  message.value = `Видалено з кошика`
  showMessage()
}

const basketOpen = ref(false)

const CloseBasket = () => {
  basketOpen.value = false
  document.body.style.overflow = 'auto'
}

const OpenBasket = () => {
  basketOpen.value = true
  document.body.style.overflow = 'hidden'
}

const message = ref('')

const showMessage = () => {
  setTimeout(() => {
    message.value = '' // Після певного часу приховати повідомлення
  }, 7000) // Час показу повідомлення у мілісекундах (наприклад, 3000 = 3 секунди)
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
  <div
    :class="{
      'bg-green-500': message,
      'text-white': message,
      'p-2': message,
      'rounded-md': message,
      fixed: message,
      'top-0': message,
      'left-1/2': message,
      transform: message,
      '-translate-x-1/2': message,
      'z-50': message,
      hidden: !message,
      block: message
    }"
  >
    {{ message }}
  </div>
</template>
