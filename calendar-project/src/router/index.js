import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Login'
import AuthVK from '../views/AuthVK'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/dashboard', component: Home, alias: '/'},
    { path: '/login', component: Login},
    { path: '/authVK', component: AuthVK  }
  ]
})
