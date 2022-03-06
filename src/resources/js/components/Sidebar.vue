<template>
<nav class="navbar">
    <div>
    <!-- ホーム画面 -->
    <RouterLink class="navbar__brand home-name" to="/">
        <i class="fa fa-home"></i>
    </RouterLink>
    <div v-if="isLogin" >
        Name:<br>{{ username }}
    </div>
    </div>
    <div v-if="isLogin" class="navbar__item">
        <!-- 羽根マーク、PhotoForm.vueを開く -->
        <button  class="button write" @click="onClick">
            <i class="fa-solid fa-feather"></i>
        </button>
    </div>
    <span v-if="isLogin" class="navbar__item name">
    </span>
      <div v-else class="navbar__item">
        <RouterLink class="button button--link" to="/LoginAndRegister">

          <i class="fa-solid fa-door-closed logout"></i>
        </RouterLink>
      </div>
      <RouterLink class="navbar__brand" to="/">
       <Footer />
     </RouterLink>
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
