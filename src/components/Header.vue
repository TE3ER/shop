<script setup>
defineProps({
  totalPrice: Number
})

const emit = defineEmits(['OpenBasket'])
</script>

<template>
  <header
    class="sticky top-0 z-10 bg-white flex justify-between border-b border-slate-200 px-10 py-8 max-sm:flex max-sm:items-center"
  >
    <svg
      class="w-20 h-20 sm:hidden"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="{1.5}"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
    <router-link to="/"
      ><div class="flex items-center gap-4 md:grid max-sm:justify-center">
        <img
          src="/public/LOGO-removebg-preview.png"
          alt="LOGO"
          class="w-60 bg-white w-48 h-48 rounded-full max-sm:w-20 max-sm:h-20"
        /></div
    ></router-link>

    <ul
      class="flex items-center gap-20 max-sm:gap-1 max-sm:flex max-md:grid max-lg:grid max-xl:grid max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-2 max-xl:grid-cols-3"
    >
      <router-link to="/"
        ><li
          class="flex items-center cursor-pointer gap-3 text-black text-3xl font-bold hover:text-gray-500 max-sm:justify-center max-sm:hidden"
        >
          <span>Головна</span>
        </li>
      </router-link>

      <router-link to="/menu"
        ><li
          class="flex items-center cursor-pointer gap-3 text-black text-3xl font-bold hover:text-gray-500 max-sm:justify-center max-sm:hidden"
        >
          <span>Меню</span>
        </li>
      </router-link>
      <router-link to="/contacts"
        ><li
          class="flex items-center cursor-pointer gap-3 text-black text-3xl font-bold hover:text-gray-500 max-sm:justify-center max-sm:hidden"
        >
          <span>Контакти</span>
        </li>
      </router-link>

      <router-link to="/pay">
        <li
          class="flex items-center cursor-pointer gap-3 text-black text-3xl font-bold hover:text-gray-500 max-sm:justify-center max-sm:hidden"
        >
          <span>Оплата</span>
        </li></router-link
      >

      <li
        @click="() => emit('OpenBasket')"
        class="flex items-center cursor-pointer gap-3 text-black text-3xl font-bold hover:text-gray-500 max-sm:justify-center"
      >
        <img src="/public/cart.svg" alt="cart" />
        <b>{{ totalPrice }} грн </b>
      </li>
    </ul>
  </header>
</template>
