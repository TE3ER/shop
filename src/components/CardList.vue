<script setup>
import Card from './Card.vue'
import BoxCard from './BoxCard.vue'

const onClickAdd = () => {
  alert('Добавити!')
}
</script>

<template>
  <div class="grid grid-cols-3 gap-5">
    <Card
      compound="Склад: Яблука."
      title="Яблучні чіпси"
      imageUrl="/public/Chips/AppleChips.jpg"
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
