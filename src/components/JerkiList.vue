<script setup>
import Card from './Card.vue'

const onClickAdd = () => {
  alert('Добавити!')
}
</script>

<template>
  <div class="grid grid-cols-3 gap-5">
    <Card
      compound="Склад: філе куряче,нітритна сіль, соєвий соус,спеції. Умови зберігання: 0 +5°С в герметичній
      упаковці."
      title="Курячі ковбаски"
      imageUrl="/public/Jerki/Kovbasky-chiken.jpg"
      :price="120"
      :isAdded="true"
      :onClickAdd="onClickAdd"
    />

    <Card
      compound="Склад: Склад: свинина(балик),нітритна сіль,соєвий соус, гірчиця,кунжут,спеції."
      title=">Свинина з кунжутом"
      imageUrl="/public/Jerki/Jerki-sv-kyn.jpg"
      :price="240"
      :isAdded="true"
      :onClickAdd="onClickAdd"
    />

    <Card
      compound="Склад: Склад: свинина(балик),нітритна сіль,соєвий соус, гірчиця,спеції."
      title="Свині джерки"
      imageUrl="/public/Jerki/Jerki-sv.jpg"
      :price="240"
      :isAdded="true"
      :onClickAdd="onClickAdd"
    />
  </div>
</template>
