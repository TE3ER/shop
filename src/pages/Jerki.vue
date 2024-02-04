<script setup>
import CardList from '../components/JerkiList.vue'

import { inject, provide, ref } from 'vue'

const { addToCart, removeToCart } = inject('cart')

const onClickAddPlus = (item) => {
  if (!item.isAdded) {
    addToCart(item)
  } else {
    removeToCart(item)
  }
}

const jerkis = [
  {
    id: 14,
    title: 'Курячі ковбаски',
    compound:
      'Склад: філе куряче,нітритна сіль, соєвий соус,спеції. Умови зберігання: 0 +5°С в герметичній упаковці.',
    imageUrl: '/Jerki/Kovbasky-chiken.jpg',
    price: 120
  },
  {
    id: 15,
    title: 'Свинина з кунжутом',
    compound: 'Склад: свинина(балик),нітритна сіль,соєвий соус, гірчиця,кунжут,спеції.',
    imageUrl: '/Jerki/Jerki-sv-kyn.jpg',
    price: 240
  },
  {
    id: 16,
    title: 'Свині джерки',
    compound: 'Склад: свинина(балик),нітритна сіль,соєвий соус, гірчиця,спеції.',
    imageUrl: '/Jerki/Jerki-sv.jpg',
    price: 240
  }
]
</script>

<template>
  <div class="flex justify-between items=center">
    <h2 class="text-3xl font-bold mb-8">Джерки</h2>
  </div>
  <CardList :jerkis="jerkis" @add-to-cart="onClickAddPlus" />
</template>
