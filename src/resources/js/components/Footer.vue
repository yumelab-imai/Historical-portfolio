<template>
  <footer class="footer">
    <button v-if="isLogin" class="button button--link" @click="logout">
        <i class="fa-solid fa-door-open login"></i>
    </button>
  </footer>
</template>




<script>
import { mapState, mapGetters } from 'vuex'

export default {

//     computed: {
//   isLogin () {
//     return this.$store.getters['auth/check']
//   }
// }
// をmapで実行

    computed: {
    ...mapState({
      apiStatus: state => state.auth.apiStatus
    }),
    ...mapGetters({
      isLogin: 'auth/check'
    })
  },
    methods: {
        async logout () {
        await this.$store.dispatch('auth/logout')

        if (this.apiStatus) {
        this.$router.push('/LoginAndRegister')
      }
    }
    }
}
</script>
