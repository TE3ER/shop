<script setup>
import axios from 'axios'
import Home from './Home.vue'
import ChipsList from '../components/ChipsList.vue'
import CardList from '../components/CardList.vue'

import { onMounted, inject, provide, ref, computed } from 'vue'

const items = ref([])
onMounted(async () => {
  try {
    const { data } = await axios.get('https://6627feb7b625bf088c0a8049.mockapi.io/items')

    items.value = data
  } catch (err) {
    console.log(err)
  }
})
/*const filteredItems = computed(() => items.value.filter((item) => item.type === 'frips'))*/

const { addToCart, removeToCart } = inject('cart')

const onClickAddPlus = (item) => {
  if (!item.isAdded) {
    addToCart(item)
  } else {
    removeToCart(item)
  }
}

/*const chips = [
  {
    id: 1,
    title: 'Яблучні чіпси',
    compound: 'Склад: Яблука.',
    imageUrl: '/Chips/AppleChips.jpg',
    price: 120
  },
  {
    id: 2,
    title: 'Чіпси із бананів',
    compound: 'Склад: Банани.',
    imageUrl: '/Chips/BananaChips.jpg',
    price: 160
  },
  {
    id: 3,
    title: 'Чіпси із ківі',
    compound: 'Склад: Ківі.',
    imageUrl: '/Chips/KiwiChips.jpg',
    price: 160
  },
  {
    id: 4,
    title: 'Чіпси із апельсинів',
    compound: 'Склад: Апельсини.',
    imageUrl: '/Chips/OrangeChips.jpg',
    price: 160
  },
  {
    id: 5,
    title: 'Чіпси із груши',
    compound: 'Склад: Груши.',
    imageUrl: '/Chips/PearChips.jpg',
    price: 150
  },
  {
    id: 6,
    title: 'Чіпси із ананасів',
    compound: 'Склад: Ананаси.',
    imageUrl: '/Chips/PineAppleChips.jpg',
    price: 210
  },
  {
    id: 7,
    title: 'Чіпси із полуниці',
    compound: 'Склад: Полуниці.',
    imageUrl: '/Chips/StrawberryChips.jpg',
    price: 240
  }
]*/
</script>

<template>
  <!--<div v-for="item in filteredItems" :key="item.id"></div>-->
  <div class="flex justify-between items=center max-sm:grid max-sm:grid-cols-1">
    <h2 class="text-3xl font-bold mb-8">Фріпси</h2>
  </div>
  <CardList :items="items" @add-to-cart="onClickAddPlus" />
</template>
