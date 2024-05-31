<template>
  <div class="slider-container">
    <div class="slider" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div v-for="(item, index) in items" :key="index" class="slide">
        <router-link :to="item.link">
          <div
            class="relative transition box-border text-xs text-slate-950 ont-sans ease-in no-underline border-2 border-solid-black relative rounded-3xl items-center"
          >
            <img
              class="m-0 p-0 box-border text-xs text-amber-900 ont-sans items-center ease-in block w-full rounded-3xl max-h-80 min-h-80 object-cover max-sm:max-h-40 max-sm:min-h-40 max-sm:max-h-150 max-sm:min-h-150 max-sm:w-full"
              :src="item.image"
              :alt="item.title"
            />
            <span
              class="m-0 box-border text-xs ont-sans text-amber-900 absolute items-center justify-center bottom-0 w-full"
            >
              <span
                class="m-0 box-border ont-sans ease-in bg-gray-500-0.5 backdrop-blur-md rounded-xl w-full items-center h-14 flex justify-center text-white py-0 px-20 font-medium tracking-widest text-sm"
                >{{ item.title }}<i class="bi bi-arrow-up-right"></i>
              </span>
            </span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const items = ref([
  { title: 'Фріпси', image: '/public/Fripsu.jpg', link: '/chips' },
  { title: 'Пастила', image: '/public/Pastula.jpg', link: '/pastula' },
  { title: 'Джерки та ковбаски', image: '/public/Jerki.jpg', link: '/jerki' },
  { title: 'Бокси', image: '/public/Box.jpg', link: '/box' }
])

const currentIndex = ref(0)

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % items.value.length
}

let intervalId = null

const startAutoSlide = () => {
  intervalId = setInterval(() => {
    nextSlide()
  }, 3000) // Change slide every 3 seconds
}

const stopAutoSlide = () => {
  clearInterval(intervalId)
}

onMounted(() => {
  startAutoSlide()
})

onUnmounted(() => {
  stopAutoSlide()
})
</script>

<style scoped>
.slider-container {
  position: relative;
  width: 100%;
  max-width: auto;
  margin: auto;
  overflow: hidden;
  max-height: auto;
}

.slider {
  display: flex;
  transition: transform 0.5s ease;
}

.slide {
  flex: 0 0 100%;
}

.slide img {
  width: 100%;
  height: auto;
}
</style>
