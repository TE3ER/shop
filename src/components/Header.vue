<script setup>
defineProps({
  totalPrice: Number,
  itemCount: Number
})

const emit = defineEmits(['OpenBasket', 'OpenCategory'])
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<template v-auto-animate>
  <header
    class="sticky top-0 z-10 bg-white flex justify-between items-center border-b border-slate-200 px-6 py-2 max-sm:px-4 max-sm:py-1 border rounded-3xl"
    v-auto-animate
  >
    <div @click="() => emit('OpenCategory')">
      <svg
        class="w-10 h-10 sm:hidden md:hidden text-orange-800"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </div>
    <ul class="flex items-center gap-4 lg:gap-20">
      <router-link to="/" @click="scrollToTop">
        <li
          class="flex items-center cursor-pointer text-orange-800 text-xl lg:text-3xl font-bold hover:text-gray-500 max-sm:hidden"
        >
          <span>Головна</span>
        </li>
      </router-link>

      <router-link to="/menu" @click="scrollToTop">
        <li
          class="flex items-center cursor-pointer text-orange-800 text-xl lg:text-3xl font-bold hover:text-gray-500 max-sm:hidden"
        >
          <span>Меню</span>
        </li>
      </router-link>
    </ul>

    <router-link to="/" @click="scrollToTop" class="mx-4">
      <div class="flex justify-center items-center">
        <img
          src="/public/LOGO-removebg-preview.png"
          alt="LOGO"
          class="w-48 h-48 rounded-full max-sm:w-24 max-sm:h-24"
        />
      </div>
    </router-link>

    <ul class="flex items-center gap-4 lg:gap-20">
      <router-link to="/contacts" @click="scrollToTop">
        <li
          class="flex items-center cursor-pointer text-orange-800 text-xl lg:text-3xl font-bold hover:text-gray-500 max-sm:hidden"
        >
          <span>Контакти</span>
        </li>
      </router-link>

      <router-link to="/pay" @click="scrollToTop">
        <li
          class="flex items-center cursor-pointer text-orange-800 text-xl lg:text-3xl font-bold hover:text-gray-500 max-sm:hidden"
        >
          <span>Оплата</span>
        </li>
      </router-link>

      <li
        @click="() => emit('OpenBasket')"
        class="flex flex-col sm:flex-row items-center cursor-pointer text-orange-800 text-xl lg:text-3xl font-bold hover:text-gray-500 relative"
        v-auto-animate
      >
        <div class="relative flex items-center">
          <div
            class="absolute top-[-10px] right-[-10px] bg-red-500 rounded-full w-4 h-4 flex items-center justify-center text-white"
            :style="{ 'font-size': itemCount > 99 ? '10px' : '8px' }"
          >
            {{ itemCount }}
          </div>
          <img src="/public/cart.svg" alt="cart" />
        </div>
        <b class="ml-2 sm:ml-2">{{ totalPrice }} грн</b>
      </li>
    </ul>
  </header>
</template>
