<script setup>
import Card from './Card.vue'
defineProps({
  jerkis: Array
})

const emit = defineEmits(['addToCart'])

const onClickAdd = () => {
  alert('Добавити!')
}
</script>

<template>
  <div class="grid grid-cols-3 gap-5 max-sm:grid-cols-1 max-md:grid-cols-2">
    <Card
      v-for="item in jerkis"
      :key="item.id"
      :compound="item.compound"
      :title="item.title"
      :imageUrl="item.imageUrl"
      :price="item.price"
      :isAdded="true"
      :onClickAdd="() => emit('addToCart', item)"
    />

    <!--<Card
      compound="Склад: філе куряче,нітритна сіль, соєвий соус,спеції. Умови зберігання: 0 +5°С в герметичній
      упаковці."
      title="Курячі ковбаски"
      imageUrl="/Jerki/Kovbasky-chiken.jpg"
      :price="120"
      :isAdded="true"
      :onClickAdd="onClickAdd"
    />

    <Card
      compound="Склад: Склад: свинина(балик),нітритна сіль,соєвий соус, гірчиця,кунжут,спеції."
      title=">Свинина з кунжутом"
      imageUrl="/Jerki/Jerki-sv-kyn.jpg"
      :price="240"
      :isAdded="true"
      :onClickAdd="onClickAdd"
    />

    <Card
      compound="Склад: Склад: свинина(балик),нітритна сіль,соєвий соус, гірчиця,спеції."
      title="Свині джерки"
      imageUrl="/Jerki/Jerki-sv.jpg"
      :price="240"
      :isAdded="true"
      :onClickAdd="onClickAdd"
    />-->
  </div>
</template>
