// import Vue from 'vue'


// var MyComponent = {
//     template:`
//     <div class="container">
//         <p>{{msg}}</p>
//         <hr>
//         <input v-on:keyup.enter="doAction" type="text" v-model="name">
//         <button v-on:click="doAction">click</button>
//     </div>`,
//     data: function(){
//         return{
//         msg:'please your name:',
//         name:'',
//         }
//     },
//     methods:{
//         doAction:function(){
//             this.msg = 'Hello, ' + this.name + '!!';
//     },
//     },
// }

// new Vue({
//     el: '#app',

//     components:{
//         'my-component':MyComponent
// },

// })

import Vue from 'vue'
// ルーティングの定義をインポートする
import router from './router'
// ルートコンポーネントをインポートする
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
