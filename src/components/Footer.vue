<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>

<template>
  <footer class="bg-gray-800 text-white py-8">
    <div
      class="container mx-auto px-4 lg:px-12 flex flex-col lg:flex-row items-center justify-between"
    >
      <div
        class="flex flex-col lg:flex-row gap-36 max-sm:gap-4 max-md:gap-4 md:gap-4 items-center lg:items-start"
      >
        <div class="text-center lg:text-left lg:mb-4 lg:items-center">
          <h2 class="text-2xl font-bold mb-2">Зворотний зв'язок для клієнтів</h2>
          <a
            href="https://www.instagram.com/chips_shop.ua?igsh=cTAyNnUzaDViZTlh"
            class="mt-2 inline-block"
          >
            <img
              src="/public/Instagram_icon.png.webp"
              alt="Instagram_icon"
              class="w-12 h-12 rounded-full border-2 border-white hover-rotate-360 transition duration-300 hover:shadow-lg ml-2"
            />
          </a>
          <a href="https://t.me/TE33ER" class="mt-2 inline-block">
            <img
              src="/public/Telegram_logo.svg.webp"
              alt="Telegram_icon"
              class="w-12 h-12 rounded-full border-2 border-white hover-rotate-360 transition duration-300 hover:shadow-lg ml-2"
            />
          </a>
          <a href="viber://chat?number=0672199123" class="mt-2 inline-block">
            <img
              src="/public/vibersvg.svg"
              alt="Viber_logo_2018_"
              class="w-12 h-12 rounded-full border-2 border-white hover-rotate-360 transition duration-300 hover:shadow-lg ml-2"
            />
          </a>
          <div class="lg:mt-4 max-sm:mt-10">
            <h3 class="text-lg font-bold mb-2">Контакт</h3>
            <div class="flex flex-col mb-8">
              <a href="mailto:info@example.com" class="inline-block"
                ><i class="fas fa-envelope-open"></i> info@example.com</a
              >
              <a href="tel:+380672199123" class="inline-block"
                ><i class="fas fa-phone-alt"></i> +380672199123</a
              >
            </div>
          </div>
        </div>
        <div class="lg:mb-4 lg:ml-12">
          <h3 class="text-2xl font-bold mb-2">Графік роботи</h3>
          <ul class="mb-2">
            <li><i class="far fa-clock mr-2"></i> Пн-Пт : 10:00 - 18:00</li>
            <li><i class="far fa-clock mr-2"></i> Сб-Нд : Вихідний</li>
          </ul>
        </div>
        <div class="lg:ml-12">
          <h3 class="text-2xl font-bold mb-2">Меню</h3>
          <ul class="">
            <router-link to="/chips" @click="scrollToTop"
              ><li class="flex items-center cursor-pointer gap-3 text-white hover:text-gray-500">
                <span>Фріпси</span>
              </li></router-link
            >
            <router-link to="/pastula" @click="scrollToTop"
              ><li class="flex items-center cursor-pointer gap-3 text-white hover:text-gray-500">
                <span>Пастила</span>
              </li></router-link
            >
            <router-link to="/jerki" @click="scrollToTop"
              ><li class="flex items-center cursor-pointer gap-3 text-white hover:text-gray-500">
                <span>Джерки</span>
              </li></router-link
            >
            <router-link to="/box" @click="scrollToTop"
              ><li class="flex items-center cursor-pointer gap-3 text-white hover:text-gray-500">
                <span>Бокси</span>
              </li></router-link
            >
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
.hover-rotate-360:hover {
  animation: rotate 1s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
