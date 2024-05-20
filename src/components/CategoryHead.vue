<script setup>
import { inject } from 'vue'

const { CloseCategory } = inject('cart')
</script>

<template>
  <div class="flex gap-5 mb-8 items-center justify-end">
    <svg
      @click="CloseCategory"
      class="opacity-30 cursor-pointer hover:opacity-100 transition hover:-translate-x-1 justify-end"
      width="32"
      height="30"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 7H14.7143"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.71436 1L14.7144 7L8.71436 13"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
  <ul class="flex items-center gap-20 flex-col">
    <router-link to="/"
      ><li
        class="flex items-center cursor-pointer gap-3 text-black text-3xl font-bold hover:text-gray-500"
      >
        <span>Головна</span>
      </li>
    </router-link>

    <router-link to="/menu"
      ><li
        class="flex items-center cursor-pointer gap-3 text-black text-3xl font-bold hover:text-gray-500"
      >
        <span>Меню</span>
      </li>
    </router-link>
    <router-link to="/contacts"
      ><li
        class="flex items-center cursor-pointer gap-3 text-black text-3xl font-bold hover:text-gray-500"
      >
        <span>Контакти</span>
      </li>
    </router-link>

    <router-link to="/pay">
      <li
        class="flex items-center cursor-pointer gap-3 text-black text-3xl font-bold hover:text-gray-500"
      >
        <span>Оплата</span>
      </li></router-link
    >
  </ul>
</template>
