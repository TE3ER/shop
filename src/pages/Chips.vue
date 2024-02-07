<script setup>
import ChipsList from '../components/ChipsList.vue'

import { inject, provide, ref } from 'vue'

const { addToCart, removeToCart } = inject('cart')

const onClickAddPlus = (item) => {
  if (!item.isAdded) {
    addToCart(item)
  } else {
    removeToCart(item)
  }
}

const chips = [
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
]
</script>

<template>
  <div class="flex justify-between items=center max-sm:grid max-sm:grid-cols-1">
    <h2 class="text-3xl font-bold mb-8">Фріпси</h2>
  </div>
  <ChipsList :chips="chips" @add-to-cart="onClickAddPlus" />
</template>
