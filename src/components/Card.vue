<script setup>
defineProps({
  id: Number,
  title: String,
  compound: String,
  imageUrl: String,
  price: Number,
  isAdded: Boolean,
  onClickAdd: Function
})
</script>

<template>
  <div
    class="relative bg-white border border-slate-100 rounded-3xl p-8 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl"
  >
    <img :src="imageUrl" alt="food" />
    <h4>{{ title }}</h4>
    <p class="mt-2">{{ compound }}</p>
    <div class="flex justify-between mt-5">
      <div class="flex flex-col">
        <span>Ціна за 100 грамів:</span>
        <span>{{ price }} грн</span>
      </div>
      <img @click="onClickAdd" :src="isAdded ? '/plus.svg' : '/checked.svg'" alt="plus" />
    </div>
  </div>
</template>
