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
    class="sticky top-0 z-10 bg-white flex justify-center items-center border-b border-slate-200 px-22 py-2 max-sm:px-4 max-sm:py-1 border rounded-b-3xl"
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
    <ul class="flex items-center gap-4 lg:gap-24 lg:text-5xl lg:mr-1">
      <router-link to="/myapp/menu" @click="scrollToTop">
        <li
          class="flex items-center cursor-pointer text-orange-800 text-xl lg:text-4xl md:text-2xl font-bold hover:text-gray-500 max-sm:hidden"
        >
          <span>Меню</span>
        </li>
      </router-link>
      <router-link to="/myapp/contacts" @click="scrollToTop">
        <li
          class="flex items-center cursor-pointer text-orange-800 text-xl lg:text-4xl md:text-2xl font-bold hover:text-gray-500 max-sm:hidden"
        >
          <span>Контакти</span>
        </li>
      </router-link>
    </ul>

    <router-link to="/myapp/" @click="scrollToTop" class="mx-">
      <div class="flex justify-center items-center lg:px-36 max-sm:px-8">
        <img
          src="/public/LOGO-removebg-preview.png"
          alt="LOGO"
          class="w-48 h-48 rounded-full max-sm:w-24 max-sm:h-24"
        />
      </div>
    </router-link>

    <ul class="flex items-center gap-4 lg:gap-20">
      <router-link to="/myapp/pay" @click="scrollToTop">
        <li
          class="flex items-center cursor-pointer text-orange-800 text-xl lg:text-4xl md:text-2xl font-bold hover:text-gray-500 max-sm:hidden"
        >
          <span>Оплата</span>
        </li>
      </router-link>

      <li
        @click="() => emit('OpenBasket')"
        class="flex flex-row sm:flex-row items-center cursor-pointer text-orange-800 text-xl lg:text-4xl md:text-base font-bold hover:text-gray-500 relative"
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
        <b class="ml-4 sm:ml-2 md:text-2xl lg:text-4xl max-sm:text-xs">{{ totalPrice }} грн</b>
      </li>
    </ul>
  </header>
</template>
