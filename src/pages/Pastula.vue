<script setup>
import PastulaList from '../components/PastulaList.vue'

import { inject, provide, ref } from 'vue'

const { addToCart, removeToCart } = inject('cart')

const onClickAddPlus = (item) => {
  if (!item.isAdded) {
    addToCart(item)
  } else {
    removeToCart(item)
  }
}

const pastulas = [
  {
    id: 8,
    title: 'Пастила із яблук',
    compound: 'Склад: Яблучне пюре.',
    imageUrl: '/Pastula/Pastula-apple.jpg',
    price: 160
  },
  {
    id: 9,
    title: 'Пастила із чорної смородини',
    compound: 'Склад: Чорна смородина, яблучне пюре.',
    imageUrl: '/Pastula/Pastula-blackberry.jpg',
    price: 150
  },
  {
    id: 10,
    title: 'Пастила із вишні',
    compound: 'Склад: Вишня, яблучне пюре.',
    imageUrl: '/Pastula/Pastula-cherry.jpg',
    price: 160
  },
  {
    id: 11,
    title: 'Пастила із малини',
    compound: 'Склад: Малина , яблучне пюре.',
    imageUrl: '/Pastula/Pastula-malina.jpg',
    price: 240
  },
  {
    id: 12,
    title: 'Пастила із апельсинів',
    compound: 'Склад: фАпельсини, яблучне пюре.',
    imageUrl: '/Pastula/Pastula-orange.jpg',
    price: 160
  },
  {
    id: 13,
    title: 'Пастила із персиків',
    compound: 'Склад: Персики, яблучне пюре.',
    imageUrl: '/Pastula/Pastula-peach.jpg',
    price: 160
  }
]
</script>

<template>
  <div class="flex justify-between items=center max-sm:grid max-sm:grid-cols-1">
    <h2 class="text-3xl font-bold mb-8">Пастила</h2>
  </div>
  <PastulaList :pastulas="pastulas" @add-to-cart="onClickAddPlus" />
</template>
