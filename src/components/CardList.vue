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
  <div class="grid grid-cols-4 gap-5 max-sm:grid-cols-1 max-md:grid-cols-2" v-auto-animate>
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
