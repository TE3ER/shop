<script setup>
import Card from './Card.vue'

defineProps({
  chips: Array
})

const emit = defineEmits(['addToCart'])
const onClickAdd = () => {
  alert('Добавити!')
}
</script>

<template>
  <div class="grid grid-cols-3 gap-5">
    <Card
      v-for="item in chips"
      :key="item.id"
      :compound="item.compound"
      :title="item.title"
      :imageUrl="item.imageUrl"
      :price="item.price"
      :isAdded="true"
      :onClickAdd="() => emit('addToCart', item)"
    />

    <!--<Card
      compound="Склад: Яблука."
      title="Яблучні чіпси"
      imageUrl="/Chips/AppleChips.jpg"
      :price="120"
      :isAdded="true"
      :onClickAdd="onClickAdd"
    />

    <Card
      compound="Склад: Банани."
      title="Чіпси із бананів"
      imageUrl="/Chips/BananaChips.jpg"
      :price="160"
      :isAdded="true"
      :onClickAdd="onClickAdd"
    />

    <Card
      compound="Склад: Ківі."
      title="Чіпси із ківі"
      imageUrl="/Chips/KiwiChips.jpg"
      :price="160"
      :isAdded="true"
      :onClickAdd="onClickAdd"
    />

    <Card
      compound="Склад: Апельсини."
      title="Чіпси із апельсинів"
      imageUrl="/Chips/OrangeChips.jpg"
      :price="160"
      :isAdded="true"
      :onClickAdd="onClickAdd"
    />

    <Card
      compound="Склад: Груши."
      title="Чіпси із груши"
      imageUrl="/Chips/PearChips.jpg"
      :price="150"
      :isAdded="true"
      :onClickAdd="onClickAdd"
    />

    <Card
      compound="Склад: Ананаси."
      title="Чіпси із ананасів"
      imageUrl="/Chips/PineAppleChips.jpg"
      :price="210"
      :isAdded="true"
      :onClickAdd="onClickAdd"
    />

    <Card
      compound="Склад: Полуниці."
      title="Чіпси із полуниці"
      imageUrl="/Chips/StrawberryChips.jpg"
      :price="240"
      :isAdded="true"
      :onClickAdd="onClickAdd"
    />-->
  </div>
</template>
