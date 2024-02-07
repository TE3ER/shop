<script setup>
import Card from './BoxCard.vue'

defineProps({
  boxs: Array
})

const emit = defineEmits(['addToCart'])

const onClickAdd = () => {
  alert('Добавити!')
}
</script>

<template>
  <div class="grid grid-cols-3 gap-5 max-sm:grid-cols-1 max-md:grid-cols-2">
    <Card
      v-for="item in boxs"
      :key="item.id"
      :compound="item.compound"
      :title="item.title"
      :imageUrl="item.imageUrl"
      :price="item.price"
      :isAdded="false"
      :onClickAdd="() => emit('addToCart', item)"
    />

    <!--<Card
      compound="Склад: Яблучні фріпси, фріпси  із ківі, фріпси із полуниці, фріпси із бананів, фріпси із апельсинів."
      title="Бокс із фріпсів"
      imageUrl="/Fripsu.jpg"
      :price="2000"
      :isAdded="true"
      :onClickAdd="onClickAdd"
    />

    <Card
      compound="Склад: Пастила із яблук, пастила із малини, пастила із персиків, пастила із вишні, пастила із чорної смородини."
      title="Бокс із пастили"
      imageUrl="/Pastula.jpg"
      :price="1600"
      :isAdded="true"
      :onClickAdd="onClickAdd"
    />

    <Card
      compound="Склад: Курячі джерки, свині джерки, свині джеркі з кунджутом, курячі ковбаски."
      title="М'ясний бокс"
      imageUrl="/Jerki.jpg"
      :price="1600"
      :isAdded="true"
      :onClickAdd="onClickAdd"
    />-->
  </div>
</template>
