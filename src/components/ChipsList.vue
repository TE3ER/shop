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
  <div class="grid grid-cols-3 gap-5 max-sm:grid-cols-1 max-md:grid-cols-2">
    <Card
      v-for="item in chips"
      :key="item.id"
      :compound="item.compound"
      :title="item.title"
      :imageUrl="item.imageUrl"
      :price="item.price"
      :type="(item.type = 'frips')"
      :isAdded="true"
      :onClickAdd="() => emit('addToCart', item)"
    />
  </div>
</template>
