<script setup>
import Card from './Card.vue'

const onClickAdd = () => {
  alert('Добавити!')
}
</script>

<template>
  <div class="grid grid-cols-3 gap-5">
    <Card
      compound="Склад: Яблука."
      title="Яблучні чіпси"
      imageUrl="/public/AppleChips.jpg"
      :price="120"
      :isAdded="true"
      :onClickAdd="onClickAdd"
    />

    <Card
      compound="Склад: Банани."
      title="Чіпси із бананів"
      imageUrl="/public/Chips/BananaChips.jpg"
      :price="160"
      :isAdded="true"
      :onClickAdd="onClickAdd"
    />

    <Card
      compound="Склад: Ківі."
      title="Чіпси із ківі"
      imageUrl="/public/Chips/KiwiChips.jpg"
      :price="160"
      :isAdded="true"
      :onClickAdd="onClickAdd"
    />

    <Card
      compound="Склад: Апельсини."
      title="Чіпси із апельсинів"
      imageUrl="/public/Chips/OrangeChips.jpg"
      :price="160"
      :isAdded="true"
      :onClickAdd="onClickAdd"
    />

    <Card
      compound="Склад: Груши."
      title="Чіпси із груши"
      imageUrl="/public/Chips/PearChips.jpg"
      :price="150"
      :isAdded="true"
      :onClickAdd="onClickAdd"
    />

    <Card
      compound="Склад: Ананаси."
      title="Чіпси із ананасів"
      imageUrl="/public/Chips/PineAppleChips.jpg"
      :price="210"
      :isAdded="true"
      :onClickAdd="onClickAdd"
    />

    <Card
      compound="Склад: Полуниці."
      title="Чіпси із полуниці"
      imageUrl="/public/Chips/StrawberryChips.jpg"
      :price="240"
      :isAdded="true"
      :onClickAdd="onClickAdd"
    />
  </div>
</template>
