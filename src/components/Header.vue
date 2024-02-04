<script setup>
defineProps({
  totalPrice: Number
})

const emit = defineEmits(['OpenBasket'])
</script>

<template>
  <header class="flex justify-between border-b border-slate-200 px-10 py-8">
    <router-link to="/"
      ><div class="flex items-center gap-4">
        <img
          src="/public/LOGO-removebg-preview.png"
          alt="LOGO"
          class="w-60 bg-white"
          style="border-radius: 50%; max-width: 200px; max-height: 200px"
        /></div
    ></router-link>

    <ul class="flex items-center gap-20">
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

      <li
        @click="() => emit('OpenBasket')"
        class="flex items-center cursor-pointer gap-3 text-black text-3xl font-bold hover:text-gray-500"
      >
        <img src="/public/cart.svg" alt="cart" />
        <b>{{ totalPrice }}</b>
      </li>
    </ul>
  </header>
</template>
