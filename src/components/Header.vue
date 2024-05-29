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
    class="sticky top-0 z-10 bg-white flex justify-between items-center border-b border-slate-200 px-6 py-2 max-sm:px-4 max-sm:py-1"
    v-auto-animate
  >
    <div @click="() => emit('OpenCategory')">
      <svg
        class="w-10 h-10 lg:hidden text-orange-800"
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
    <router-link to="/" @click="scrollToTop">
      <div
        class="flex items-center gap-4 lg:hidden max-sm:justify-center max-md:justify-center max-sm:static max-md:static"
      >
        <img
          src="/public/LOGO-removebg-preview.png"
          alt="LOGO"
          class="bg-white w-48 h-48 rounded-full max-md:w-24 max-md:h-24 max-sm:w-24 max-sm:h-24"
        />
      </div>
    </router-link>

    <ul
      class="flex items-center gap-32 max-md:gap-0 max-sm:gap-2 max-sm:flex-col max-md:flex-col max-lg:flex-row"
    >
      <router-link to="/" @click="scrollToTop">
        <li
          class="flex items-center cursor-pointer gap-3 text-orange-800 text-2xl font-bold hover:text-gray-500 max-sm:justify-center max-lg:hidden"
        >
          <span>Головна</span>
        </li>
      </router-link>

      <router-link to="/menu" @click="scrollToTop">
        <li
          class="flex items-center cursor-pointer gap-3 text-orange-800 text-2xl font-bold hover:text-gray-500 max-sm:justify-center max-lg:hidden"
        >
          <span>Меню</span>
        </li>
      </router-link>
      <router-link to="/" @click="scrollToTop">
        <div
          class="flex items-center gap-4 pl-4 max-md:hidden max-sm:hidden max-sm:justify-center max-md:justify-center max-sm:static max-md:static"
        >
          <img
            src="/public/LOGO-removebg-preview.png"
            alt="LOGO"
            class="bg-white w-48 h-48 rounded-full max-md:w-24 max-md:h-24 max-sm:w-24 max-sm:h-24"
          />
        </div>
      </router-link>
      <router-link to="/contacts" @click="scrollToTop">
        <li
          class="flex items-center cursor-pointer gap-3 text-orange-800 text-2xl font-bold hover:text-gray-500 max-sm:justify-center max-lg:hidden"
        >
          <span>Контакти</span>
        </li>
      </router-link>

      <router-link to="/pay" @click="scrollToTop">
        <li
          class="flex items-center cursor-pointer gap-3 text-orange-800 text-2xl font-bold hover:text-gray-500 max-sm:justify-center max-lg:hidden"
        >
          <span>Оплата</span>
        </li>
      </router-link>

      <li
        @click="() => emit('OpenBasket')"
        class="flex items-center cursor-pointer gap-3 text-orange-800 max-sm:flex-col max-sm:gap-1 max-sm:text-lg text-2xl font-bold hover:text-gray-500 max-sm:justify-center relative"
        v-auto-animate
      >
        <div class="relative">
          <div
            class="absolute top-[-10px] right-[-10px] bg-red-500 rounded-full w-4 h-4 flex items-center justify-center text-white"
            :style="{ 'font-size': itemCount > 99 ? '10px' : '8px' }"
          >
            {{ itemCount }}
          </div>
          <img src="/public/cart.svg" alt="cart" />
        </div>

        <b>{{ totalPrice }} грн</b>
      </li>
    </ul>
  </header>
</template>
