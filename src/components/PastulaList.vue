<script setup>
import Card from './Card.vue'

const onClickAdd = () => {
  alert('Добавити!')
}
</script>

<template>
  <div class="grid grid-cols-3 gap-5">
    <Card
      compound="Склад: Яблучне пюре."
      title="Пастила із яблук"
      imageUrl="/public/Pastula/Pastula-apple.jpg"
      :price="160"
      :isAdded="true"
      :onClickAdd="onClickAdd"
    />

    <Card
      compound="Склад: Чорна смородина, яблучне пюре."
      title="Пастила із чорної смородини"
      imageUrl="/public/Pastula/Pastula-blackberry.jpg"
      :price="150"
      :isAdded="true"
      :onClickAdd="onClickAdd"
    />

    <Card
      compound="Склад: Вишня, яблучне пюре."
      title="Пастила із вишні"
      imageUrl="/public/Pastula/Pastula-cherry.jpg"
      :price="160"
      :isAdded="true"
      :onClickAdd="onClickAdd"
    />

    <Card
      compound="Склад: Малина , яблучне пюре."
      title="Пастила із малини"
      imageUrl="/public/Pastula/Pastula-malina.jpg"
      :price="240"
      :isAdded="true"
      :onClickAdd="onClickAdd"
    />

    <Card
      compound="Склад: фАпельсини, яблучне пюре."
      title="Пастила із апельсинів"
      imageUrl="/public/Pastula/Pastula-orange.jpg"
      :price="160"
      :isAdded="true"
      :onClickAdd="onClickAdd"
    />

    <Card
      compound="Склад: Апельсини, яблучне пюре.."
      title="Курячі ковбаски"
      imageUrl="/public/Pastula/Pastula-peach.jpg"
      :price="160"
      :isAdded="true"
      :onClickAdd="onClickAdd"
    />
  </div>
</template>
