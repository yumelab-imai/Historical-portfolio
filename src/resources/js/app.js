import Vue from 'vue'

import router from './router'

import App from './App.vue'

import store from './store'

import './bootstrap'

const createApp = async () => {
  await store.dispatch('auth/currentUser')

  new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App />'
  })
}

createApp()
