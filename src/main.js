import './assets/main.css'

import { createApp } from 'vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { createRouter, createWebHistory } from 'vue-router'
import Vue2TouchEvents from 'vue2-touch-events'

import App from './App.vue'

import Home from './pages/Home.vue'
import Menu from './pages/menu.vue'
import Contacts from './pages/Contacts.vue'
import Pay from '/Pay.vue'
import Chips from './pages/Chips.vue'
import Pastula from './pages/Pastula.vue'
import Jerki from './pages/Jerki.vue'
import Box from './pages/Box.vue'
import Placing from './pages/Placing.vue'
import AboutUs from './pages/AboutUs.vue'

const app = createApp(App)

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/menu', name: 'menu', component: Menu },
  { path: '/contacts', name: 'contacts', component: Contacts },
  { path: '/pay', name: 'pay', component: Pay },
  { path: '/chips', name: 'chips', component: Chips },
  { path: '/pastula', name: 'pastula', component: Pastula },
  { path: '/jerki', name: 'jerki', component: Jerki },
  { path: '/box', name: 'box', component: Box },
  { path: '/placing', name: 'placing', component: Placing },
  { path: '/aboutUs', name: 'aboutUs', component: AboutUs }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

app.use(autoAnimatePlugin)

app.use(Vue2TouchEvents)

app.use(router)
app.mount('#app')
