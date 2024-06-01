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
  <ul class="flex items-center gap-2 flex-col">
    <router-link to="/" class="w-full">
      <li
        @click="closeCategoryAndScrollToTop"
        class="flex items-center justify-center cursor-pointer text-black text-3xl font-bold hover:text-gray-500 p-8 transition hover:shadow-xl border border-orange-800 rounded-3xl"
      >
        <span>Головна</span>
      </li>
    </router-link>

    <router-link to="/menu" class="w-full">
      <li
        @click="closeCategoryAndScrollToTop"
        class="flex justify-center cursor-pointer text-black text-3xl font-bold hover:text-gray-500 p-8 transition hover:shadow-xl border border-orange-800 rounded-3xl"
      >
        <span>Меню</span>
      </li>
    </router-link>

    <router-link to="/contacts" class="w-full">
      <li
        @click="closeCategoryAndScrollToTop"
        class="flex items-center justify-center cursor-pointer text-black text-3xl font-bold hover:text-gray-500 p-8 transition hover:shadow-xl border border-orange-800 rounded-3xl"
      >
        <span>Контакти</span>
      </li>
    </router-link>

    <router-link to="/pay" class="w-full">
      <li
        @click="closeCategoryAndScrollToTop"
        class="flex items-center justify-center cursor-pointer text-black text-3xl font-bold hover:text-gray-500 p-8 transition hover:shadow-xl border border-orange-800 rounded-3xl"
      >
        <span>Оплата</span>
      </li>
    </router-link>
  </ul>
  <div class="lg:mt-0 max-sm:mt-4">
    <router-link to="/aboutUs" @click="closeCategoryAndScrollToTop">
      <h3 class="text-lg font-bold mb-2">Про нас</h3>
    </router-link>
  </div>
  <div class="lg:mt-0 max-sm:mt-4">
    <router-link to="/contacts" @click="closeCategoryAndScrollToTop">
      <h3 class="text-lg font-bold mb-2">Контакти</h3>
    </router-link>
  </div>
  <div class="">
    <h3 class="text-lg font-bold mb-2">Зв'язок з нами</h3>
    <div class="flex justify-center lg:justify-start">
      <a
        href="https://www.instagram.com/chips_shop.ua?igsh=cTAyNnUzaDViZTlh"
        class="mt-2 inline-block hover:shadow-[0_35px_60px_-15px_rgba(255,105,180,1)]"
      >
        <img
          src="/public/Instagram_icon.png.webp"
          alt="Instagram_icon"
          class="w-12 h-12 rounded-full border-2 border-white hover-rotate-360 transition duration-300 hover:shadow-lg ml-2"
        />
      </a>
      <a
        href="https://t.me/TE33ER"
        class="mt-2 inline-block hover:shadow-[0_35px_60px_-15px_rgba(0,136,204,1)]"
      >
        <img
          src="/public/Telegram_logo.svg.webp"
          alt="Telegram_icon"
          class="w-12 h-12 rounded-full border-2 border-white hover-rotate-360 transition duration-300 hover:shadow-lg ml-2"
        />
      </a>
      <a
        href="viber://chat?number=0672199123"
        class="mt-2 inline-block hover:shadow-[0_35px_60px_-15px_rgba(128,0,128,1)]"
      >
        <img
          src="/public/vibersvg.svg"
          alt="Viber_logo_2018_"
          class="w-12 h-12 rounded-full border-2 border-white hover-rotate-360 transition duration-300 hover:shadow-lg ml-2"
        />
      </a>
    </div>
  </div>
  <div class="text-center text-gray-500 text-sm mt-24">
    Chips-shop.ua - Інтернет-магазин крафтових снеків © 2024
  </div>
</template>

<script setup>
import { inject } from 'vue'

const { CloseCategory } = inject('cart')

const scrollToTop = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const closeCategoryAndScrollToTop = () => {
  CloseCategory()
  scrollToTop()
}
</script>
