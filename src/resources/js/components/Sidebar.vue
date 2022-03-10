<template>
<nav class="navbar">
    <!-- ログインしている場合 -->
    <div v-if="isLogin" class="navbar__item">
        <!-- ホームボタン -->
        <div class="arrangement">
            <RouterLink class="navbar__brand home-name" to="/">
                <i class="fa fa-home"></i>
            </RouterLink>
            <div v-if="isLogin" >
                Name:<br>{{ username }}
            </div>
        </div>
        <!-- 投稿ボタン、PhotoForm.vueを開く -->
        <button  class="button  arrangement large" @click="onClick">
            <i class="fa-solid fa-feather write"></i>
            <div class="big">Post</div>
        </button>
        <!-- ログアウトボタン -->
        <RouterLink class="navbar__brand" to="/login">
        <Footer />
        </RouterLink>
    </div>
    <!-- ログアウトしている場合 -->
    <div v-else class="navbar__item">
        <!-- ホームボタン -->
        <div class="upspace ">
            <RouterLink class="navbar__brand home-name " to="/">
                <i class="fa fa-home lay"></i>
            </RouterLink>
            <div>
                <div class="lay3">Home</div><br>(一部の機能制限)
            </div>
        </div>
        <!-- ログイン(登録)ボタン -->
        <RouterLink class="button button--link bigupspace" to="/login">
            <i class="fa-solid fa-door-closed logout lay"></i><br>
            <div class="lay2">Login/Register</div>
        </RouterLink>
    </div>
</nav>
</template>

<script>
import Footer from './Footer.vue'

export default {

    components: {
    Footer
    },
    data () {
    return {
        showOn: false
                        }
    },
  // computed から参照して冗長な記述を避ける
    computed: {
        isLogin () {
        return this.$store.getters['auth/check']
                                                    },
        username () {
        return this.$store.getters['auth/username']
                                                    }
    },

    methods: {
        onClick() {
            this.$store.commit('turn/change')
                                                }
    }
}
</script>
