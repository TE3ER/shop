<script setup>
import { ref, inject, watch } from 'vue'
import CardItemList from '../components/CardItemList.vue'
import axios from 'axios'

// загальна ціна з батьківського компонента зі значенням за замовчуванням 0
const totalPrice = inject('totalPrice', ref(0))

// Визначення посилання для полів форми
const name = ref('')
const email = ref('')
const phone = ref('')
const comment = ref('')
const delivery = ref('')
const pay = ref('')

// Визначення посилання для стану перевірки форми
const nameError = ref('')
const emailError = ref('')
const phoneError = ref('')
const deliveryError = ref('')
const payError = ref('')
const formValid = ref(false) // Ініціалізація дійсності форми

// Регулярні вирази для перевірки
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phoneRegex = /^\+?\d{10,15}$/

// функція перевіряє форму на коректність заповнення
const validateForm = () => {
  nameError.value = name.value ? '' : 'Це поле не має бути пустим'
  deliveryError.value = delivery.value ? '' : 'Це поле не має бути пустим'
  payError.value = pay.value ? '' : 'Це поле не має бути пустим'
  emailError.value = email.value
    ? emailRegex.test(email.value)
      ? ''
      : 'Неправильний формат email'
    : 'Це поле не має бути пустим'
  phoneError.value = phone.value
    ? phoneRegex.test(phone.value)
      ? ''
      : 'Неправильний формат номера телефону'
    : 'Це поле не має бути пустим'
  formValid.value =
    !nameError.value &&
    !emailError.value &&
    !phoneError.value &&
    !deliveryError.value &&
    !payError.value
}

// функція адаптує висоту текстового поля textarea автоматично, коли користувач вводить текст
const adjustTextareaHeight = (event) => {
  const textarea = event.target
  textarea.style.height = 'auto'
  textarea.style.height = `${textarea.scrollHeight}px`
}

// Функція для отримання останнього номера замовлення з локального сховища
const getLastOrderNumber = () => {
  const lastOrderNumber = localStorage.getItem('lastOrderNumber')
  return lastOrderNumber ? parseInt(lastOrderNumber) : 0
}
// Функція для збереження останнього номера замовлення в локальному сховищі
const saveLastOrderNumber = (number) => {
  localStorage.setItem('lastOrderNumber', number)
}
// Генерація номера замовлення
const generateOrderNumber = () => {
  let lastOrderNumber = getLastOrderNumber()
  lastOrderNumber += 1
  saveLastOrderNumber(lastOrderNumber)
  const paddedNumber = String(lastOrderNumber).padStart(5, '0')
  return 'N' + paddedNumber
}

// функція викликає validateForm для перевірки валідності форми перед відправленням замовлення
const submitOrder = async () => {
  validateForm()
  if (!formValid.value) {
    return
  }

  const orderNumber = generateOrderNumber() // Генеруємо номер замовлення

  const orderData = {
    orderNumber: orderNumber,
    name: name.value,
    email: email.value,
    phone: phone.value,
    comment: comment.value,
    totalPrice: totalPrice.value,
    delivery: delivery.value,
    pay: pay.value,
    items: cart.value
  }

  try {
    const response = await axios.post(
      'https://664dd20aede9a2b5565505ef.mockapi.io/order',
      orderData
    )
    console.log('Order submitted:', response.data)
    clearCart()
    clearForm()
    showSuccessMessage.value = true // Показуємо повідомлення про успішне оформлення замовлення
    successOrderNumber.value = orderNumber // Зберігаємо номер замовлення для відображення у повідомленні
  } catch (error) {
    console.error('Error submitting order:', error)
    // Обробка помилки
  }
}

const { cart } = inject('cart')
const clearCart = () => {
  cart.value = [] // Очищаємо кошик
}

const clearForm = () => {
  name.value = ''
  email.value = ''
  phone.value = ''
  comment.value = ''
  delivery.value = ''
  pay.value = ''
  formValid.value = false
}

// Змінна для умовного відображення повідомлення
const showSuccessMessage = ref(false)
const successOrderNumber = ref('')

// Функція для закриття повідомлення про успішне оформлення замовлення
const closeSuccessMessage = () => {
  showSuccessMessage.value = false
  document.body.style.overflow = 'auto'
}
const scrollToTop = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
const submitOrderAndScrollToTop = () => {
  submitOrder()
  scrollToTop()
}
</script>

<template>
  <div class="flex items-center gap-20 flex-col mb-12">
    <h2 class="text-3xl font-bold mb-8 text-orange-800">Оформлення замовлення</h2>
    <div class="w-full">
      <input
        v-model="name"
        class="border rounded-md py-2 pl-11 pr-4 outline-none focus:border-gray-400 sm:text-sm sm:leading-6 w-full"
        placeholder="ПІБ"
        @blur="validateForm"
      />
      <p v-if="nameError" class="text-red-500 text-sm">{{ nameError }}</p>
    </div>

    <div class="w-full">
      <input
        v-model="email"
        class="border rounded-md py-2 pl-11 pr-4 outline-none focus:border-gray-400 sm:text-sm sm:leading-6 w-full"
        placeholder="Email"
        @blur="validateForm"
      />
      <p v-if="emailError" class="text-red-500 text-sm">{{ emailError }}</p>
    </div>
    <div class="w-full">
      <input
        v-model="phone"
        class="border rounded-md py-2 pl-11 pr-4 outline-none focus:border-gray-400 sm:text-sm sm:leading-6 w-full"
        placeholder="Номер телефону"
        @blur="validateForm"
      />
      <p v-if="phoneError" class="text-red-500 text-sm">{{ phoneError }}</p>
    </div>
    <div class="w-full">
      <textarea
        v-model="comment"
        class="border overflow-hidden rounded-md py-2 pl-11 pr-4 outline-none focus:border-gray-400 sm:text-sm sm:leading-6 w-full resize-none"
        placeholder="Коментарі"
        @input="adjustTextareaHeight"
      ></textarea>
    </div>
    <div class="w-full">
      <input
        v-model="pay"
        class="border rounded-md py-2 pl-11 pr-4 outline-none focus:border-gray-400 sm:text-sm sm:leading-6 w-full"
        placeholder="Оплата"
        @blur="validateForm"
      />
      <p v-if="payError" class="text-red-500 text-sm">{{ payError }}</p>
    </div>

    <div class="w-full">
      <input
        v-model="delivery"
        class="border rounded-md py-2 pl-11 pr-4 outline-none focus:border-gray-400 sm:text-sm sm:leading-6 w-full"
        placeholder="Доставка (Нова Пошта, №відділення та населений пункт)"
        @blur="validateForm"
      />
      <p v-if="deliveryError" class="text-red-500 text-sm">{{ deliveryError }}</p>
    </div>
  </div>
  <CardItemList />

  <div class="flex flex-col gap-4 mt-7">
    <div class="flex gap-2">
      <span>До оплати:</span>
      <div class="flex-1 border-b border-dashed"></div>
      <b>{{ totalPrice }} ₴</b>
    </div>

    <button
      :disabled="!formValid || !totalPrice"
      @click="submitOrderAndScrollToTop"
      class="mt-4 transition bg-lime-500 w-full rounded-xl py-3 text-white disabled:bg-slate-300 hover:bg-lime-600 active:bg-lime-700 cursor:pointer"
    >
      Замовити
    </button>
  </div>

  <div
    v-if="showSuccessMessage"
    class="fixed inset-0 bg-black z-20 opacity-70"
    @click="closeSuccessMessage"
  ></div>

  <div
    class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white text-black p-8 rounded-md text-center"
    v-if="showSuccessMessage"
  >
    <div>
      <router-link to="/" @click="scrollToTop">
        <img
          src="/public/LOGO-removebg-preview.png"
          alt="Фото"
          class="w-36 h-36 m-auto object-cover"
        />
      </router-link>
      <p class="max-sm:text-xs p-4">Замовлення успішно оформлено</p>
      <p class="max-sm:text-xs p-4">
        Ваш номер замовлення:
        <span class="font-bold text-orange-800">{{ successOrderNumber }}</span>
      </p>
      <p class="max-sm:text-xs p-4">Дякуємо за замовлення</p>
      <p class="max-sm:text-xs p-4">Ми вам перетелефонуємо в найближчу годину</p>

      <p class="max-sm:text-sm p-4">
        Перейти на
        <router-link to="/" @click="scrollToTop"
          ><span class="font-bold text-orange-800">головну</span></router-link
        >
      </p>
    </div>
    <div>
      <button
        @click="closeSuccessMessage"
        class="mt-4 transition bg-lime-500 w-full rounded-xl py-3 text-white hover:bg-lime-600 active:bg-lime-700 cursor:pointer"
      >
        Закрити
      </button>
    </div>
  </div>
</template>
