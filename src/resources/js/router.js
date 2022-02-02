import Vue from 'vue'
import VueRouter from 'vue-router'

// ページコンポーネントをインポートする
import PhotoList from './pages/PhotoList.vue'
import Login from './pages/Login.vue'
import SystemError from './pages/errors/System.vue'
import PhotoDetail from './pages/PhotoDetail.vue'
import NotFound from './pages/errors/NotFound.vue'

import store from './store'

// VueRouterプラグインを使用する
// これによって<RouterView />コンポーネントなどを使うことができる
Vue.use(VueRouter)

// パスとコンポーネントのマッピング
const routes = [
  {
    path: '/',
    component: PhotoList,
    props: route => {
    const page = route.query.page
    return { page: /^[1-9][0-9]*$/.test(page) ? page * 1 : 1 }
  }
  },
  {
    path: '/photos/:id',
    component: PhotoDetail,
    //  :id の値が <PhotoDetail> コンポーネントに props として渡される
    props: true
  },
  {
    path: '/login',
    component: Login,
    beforeEnter (to, from, next) {
        if (store.getters['auth/check']) {
        next('/')
        } else {
        // 引数なしで呼ぶとそのままページコンポーネントが切り替わる
        next()
        }
    }
  },
  {
    path: '/500',
    component: SystemError
  },
  {
    path: '*',
    component: NotFound
  }
]

// VueRouterインスタンスを作成する
const router = new VueRouter({
    //  URL にハッシュ # がつかないための対策
    mode: 'history',
    routes,
    scrollBehavior () {
        return { x: 0, y: 0 }
    }
})

// VueRouterインスタンスをエクスポートする
// app.jsでインポートするため
export default router
