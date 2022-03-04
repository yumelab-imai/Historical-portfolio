// ルートコンポーネント
<template>
  <div class="back">
    <header>
      <Sidebar />
    </header>
    <main>
        <PhotoForm />
      <div class="container">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<script>
import PhotoForm from './components/PhotoForm.vue'
import Sidebar from './components/Sidebar.vue'
import { NOT_FOUND, UNAUTHORIZED, INTERNAL_SERVER_ERROR } from './util'

export default {
  components: {
    Sidebar,
    PhotoForm
  },

  computed: {
    errorCode () {
//errorモジュールにあるstate.code
      return this.$store.state.error.code
    }
  },
  
  watch: {
    errorCode: {
     async handler (value) {
    if (value === INTERNAL_SERVER_ERROR) {
      this.$router.push('/500')
    } else if (value === UNAUTHORIZED) {
      await axios.get('/api/refresh-token')
      this.$store.commit('auth/setUser', null)
      this.$router.push('/login')
    } else if (value === NOT_FOUND) {
      this.$router.push('/not-found')
    }
  },
  immediate: true
    },
    $route () {
      this.$store.commit('error/setCode', null)
    }
  }
}
</script>
