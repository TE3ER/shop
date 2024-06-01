<script setup>
import Card from './Card.vue'
import BoxCard from './BoxCard.vue'

defineProps({
  items: Array
})

const emit = defineEmits(['addToCart'])

const onClickAdd = () => {
  alert('Добавити!')
}
</script>

<template>
  <div
    class="grid grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 md:grid-cols-2 max-md:grid-cols-2 lg:grid-cols-4 max-lg:grid-cols-4 gap-5"
    v-auto-animate
  >
    <Card
      v-for="item in items"
      :key="item.id"
      :compound="item.compound"
      :title="item.title"
      :imageUrl="item.imageUrl"
      :price="item.price"
      :type="item.type"
      :isAdded="true"
      :onClickAdd="() => emit('addToCart', item)"
    />
  </div>
</template>
