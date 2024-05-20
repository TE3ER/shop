<script setup>
import CardItemList from '../components/CardItemList.vue'

import { inject } from 'vue'
const totalPrice = inject('totalPrice')
</script>

<template>
  <div class="flex items-center gap-20 flex-col">
    <input
      class="border rounded-md py-2 pl-11 pr-4 outline-none focus:border-gay-400 sm:text-sm sm:leading-6"
      placeholder="ПІБ"
    />
    <input
      class="border rounded-md py-2 pl-11 pr-4 outline-none focus:border-gay-400 sm:text-sm sm:leading-6"
      placeholder="Email"
    />
    <input
      class="border rounded-md py-2 pl-11 pr-4 outline-none focus:border-gay-400 sm:text-sm sm:leading-6"
      placeholder="Номер телефону "
    />
    <input
      class="border rounded-md py-2 pl-11 pr-4 outline-none focus:border-gay-400 sm:text-sm sm:leading-6"
      placeholder="Коментарії "
    />
  </div>

  <CardItemList />

  <div class="flex flex-col gap-4 mt-7">
    <div class="flex gap-2">
      <span>До оплати:</span>
      <div class="flex-1 border-b border-dashed"></div>
      <b>{{ totalPrice }} ₴</b>
    </div>

    <button
      :disabled="totalPrice ? false : true"
      class="mt-4 transition bg-lime-500 w-full rounded-xl py-3 text-white disabled:bg-slate-300 hover:bg-lime-600 active:700 cursor:pointer"
    >
      Оформити замовлення
    </button>
  </div>
</template>
