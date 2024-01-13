<script setup>
import Card from './BoxCard.vue'

const onClickAdd = () => {
  alert('Добавити!')
}
</script>

<template>
  <div class="grid grid-cols-3 gap-5">
    <Card
      compound="Склад: Яблучні фріпси, фріпси  із ківі, фріпси із полуниці, фріпси із бананів, фріпси із апельсинів."
      title="Бокс із фріпсів"
      imageUrl="/public/Fripsu.jpg"
      :price="2000"
      :isAdded="true"
      :onClickAdd="onClickAdd"
    />

    <Card
      compound="Склад: Пастила із яблук, пастила із малини, пастила із персиків, пастила із вишні, пастила із чорної смородини."
      title="Бокс із пастили"
      imageUrl="/public/Pastula.jpg"
      :price="1600"
      :isAdded="true"
      :onClickAdd="onClickAdd"
    />

    <Card
      compound="Склад: Курячі джерки, свині джерки, свині джеркі з кунджутом, курячі ковбаски."
      title="М'ясний бокс"
      imageUrl="/public/Jerki.jpg"
      :price="1600"
      :isAdded="true"
      :onClickAdd="onClickAdd"
    />
  </div>
</template>
