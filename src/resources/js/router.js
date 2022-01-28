import Vue from 'vue'
import VueRouter from 'vue-router'

// ページコンポーネントをインポートする
import PhotoList from './pages/PhotoList.vue'
import Login from './pages/Login.vue'

// VueRouterプラグインを使用する
// これによって<RouterView />コンポーネントなどを使うことができる
Vue.use(VueRouter)

// パスとコンポーネントのマッピング
const routes = [
  {
    path: '/',
    component: PhotoList
  },
  {
    path: '/login',
    component: Login
  }
]

// VueRouterインスタンスを作成する
const router = new VueRouter({
//   mode: 'history', // ★ URL にハッシュ # がついてしまうのを防ぎ、本来の URL の形を再現する
  routes
})

// VueRouterインスタンスをエクスポートする
// app.jsでインポートするため
export default router
