<script setup>
import axios from 'axios'
import CardList from '../components/CardList.vue'
import { onMounted, ref, inject } from 'vue'

const items = ref([])
onMounted(async () => {
  try {
    const { data } = await axios.get('https://664dd20aede9a2b5565505ef.mockapi.io/items')
    // Фільтруємо товари з "type": "1"
    items.value = data.filter((item) => item.type === 'box')
  } catch (err) {
    console.log(err)
  }
})

const { addToCart, removeToCart } = inject('cart')

const onClickAddPlus = (item) => {
  if (!item.isAdded) {
    addToCart(item)
  } else {
    removeToCart(item)
  }
}
</script>

<template>
  <div class="border border-orange-800 rounded-3xl p-8 mb-8">
    <div class="flex justify-between items=center max-sm:grid max-sm:grid-cols-1">
      <h2 class="text-3xl font-bold mb-8 text-orange-800">Бокси</h2>
    </div>
    <CardList :items="items" @add-to-cart="onClickAddPlus" />
  </div>
</template>
