<script setup>
import CardList from '../components/CardList.vue'
import { inject, provide, ref } from 'vue'

const { addToCart, removeToCart } = inject('cart')

const onClickAddPlus = (item) => {
  if (!item.isAdded) {
    addToCart(item)
  } else {
    removeToCart(item)
  }
}

const items = [
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
  },
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
  },
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
  },
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
    <h2 class="text-3xl font-bold mb-8">Всі товари</h2>
    <div>
      <div class="relative">
        <img class="absolute left-4 top-3" src="/public/search.svg" alt="" />
        <input
          class="border rounded-md py-2 pl-11 pr-4 outline-none focus:border-gay-400"
          placeholder="Шукати"
        />
      </div>
    </div>
  </div>
  <CardList :items="items" @add-to-cart="onClickAddPlus" />
</template>
