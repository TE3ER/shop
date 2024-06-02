<template>
  <div class="mb-12 border border-orange-800 rounded-3xl p-8">
    <h2 class="text-3xl text-orange-800 font-bold mb-8">Наше смачне меню</h2>
    <Slider :items="items" />
  </div>
  <div class="border border-orange-800 rounded-3xl p-8">
    <div class="flex justify-between items-center max-sm:grid max-sm:grid-cols-1">
      <h2 class="text-3xl text-orange-800 font-bold mb-8">Всі товари</h2>
      <div class="justify-center">
        <div class="relative max-sm:grid max-sm:pb-4 w-full max-sm:mr-6">
          <img class="absolute left-6 top-3" src="/public/search.svg" alt="" />
          <input
            v-model="filter.searchItems"
            @input="onSearchItems"
            class="border rounded-md py-2 pl-11 pr-4 outline-none focus:border-gray-400 sm:text-sm sm:leading-6"
            placeholder="Шукати"
            style="width: calc(100% - 0rem)"
          />
        </div>
      </div>
    </div>
    <transition-group name="fade" tag="div" class="grid grid-cols-1 gap-4">
      <CardList
        v-if="filteredItems.length > 0"
        :items="filteredItems"
        @add-to-cart="onClickAddPlus"
        key="cardlist"
      />
      <div v-else class="text-lg text-gray-500">Немає товарів, що відповідають вашому запиту.</div>
    </transition-group>
  </div>
</template>

<script setup>
import axios from 'axios'
import CardList from '../components/CardList.vue'
import Slider from '../components/Slider.vue'
import { onMounted, inject, ref, watch, reactive } from 'vue'

const items = ref([])
const filteredItems = ref([])

const filter = reactive({
  searchItems: ''
})

const onSearchItems = () => {
  filteredItems.value = items.value.filter((item) =>
    item.title.toLowerCase().includes(filter.searchItems.toLowerCase())
  )
}

const fetchItems = async () => {
  try {
    const { data } = await axios.get(`https://664dd20aede9a2b5565505ef.mockapi.io/items`)
    items.value = data
    onSearchItems()
  } catch (err) {
    console.log(err)
  }
}

onMounted(fetchItems)

watch(filter, onSearchItems)

const { addToCart, removeToCart } = inject('cart')

const onClickAddPlus = (item) => {
  if (!item.isAdded) {
    addToCart(item)
  } else {
    removeToCart(item)
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
