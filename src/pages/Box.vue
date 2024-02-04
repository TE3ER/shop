<script setup>
import BoxList from '../components/BoxList.vue'
import { inject, provide, ref } from 'vue'

const { addToCart, removeToCart } = inject('cart')

const onClickAddPlus = (item) => {
  if (!item.isAdded) {
    addToCart(item)
  } else {
    removeToCart(item)
  }
}

const boxs = [
  {
    id: 17,
    title: 'Бокс із фріпсів',
    compound:
      'Склад: Яблучні фріпси, фріпси  із ківі, фріпси із полуниці, фріпси із бананів, фріпси із апельсинів.',
    imageUrl: '/Fripsu.jpg',
    price: 2000
  },
  {
    id: 18,
    title: 'Бокс із пастили',
    compound:
      'Склад: Пастила із яблук, пастила із малини, пастила із персиків, пастила із вишні, пастила із чорної смородини.',
    imageUrl: '/Pastula.jpg',
    price: 1600
  },
  {
    id: 19,
    title: "М'ясний бокс",
    compound: 'Склад: Курячі джерки, свині джерки, свині джеркі з кунджутом, курячі ковбаски.',
    imageUrl: '/Jerki.jpg',
    price: 1600
  }
]
</script>

<template>
  <div class="flex justify-between items=center">
    <h2 class="text-3xl font-bold mb-8">Бокси</h2>
  </div>
  <BoxList :boxs="boxs" @add-to-cart="onClickAddPlus" />
</template>
