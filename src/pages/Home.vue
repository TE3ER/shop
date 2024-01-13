<script setup>
import CardList from '../components/CardList.vue'
</script>

<template>
  <div class="flex justify-between items=center">
    <h2 class="text-3xl font-bold mb-8">Всі товари</h2>
    <div>
      <div class="relative">
        <img class="absolute left-4 top-3" src="/public/search.svg" alt="" />
        <input
          id="name"
          class="border rounded-md py-2 pl-11 pr-4 outline-none focus:border-gay-400"
          placeholder="Шукати"
        />
      </div>
    </div>
  </div>
  <CardList />
</template>
