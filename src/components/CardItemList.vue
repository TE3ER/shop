<script setup>
import { inject } from 'vue'
import CardBasket from './CardBasket.vue'

const { cart, removeToCart } = inject('cart')
</script>

<template>
  <div class="flex flex-col flex-1 gap-4">
    <CardBasket
      v-for="item in cart"
      :key="item.id"
      :title="item.title"
      :price="item.price"
      :image-url="item.imageUrl"
      @on-click-remove="() => removeToCart(item)"
    />
  </div>
</template>
