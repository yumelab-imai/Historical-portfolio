<template>
  <nav class="navbar">
    <RouterLink class="navbar__brand" to="/">
      <i class="fa fa-home"></i>
    </RouterLink>
    <RouterLink class="navbar__brand" to="/">
      <Footer />
    </RouterLink>
    <div class="navbar__menu">
      <div v-if="isLogin" class="navbar__item">
        <button class="button write" @click="showForm = ! showForm">
          <i class="fa-solid fa-feather"></i>
        </button>
      </div>
      <span v-if="isLogin" class="navbar__item name">
        Name:<br>{{ username }}
      </span>
      <div　v-else class="navbar__item">
        <RouterLink class="button button--link" to="/login">
          <i class="fa-solid fa-door-open login"></i>
        </RouterLink>
      </div>
    </div>
    <PhotoForm v-model="showForm" />
  </nav>
</template>

<script>
import PhotoForm from './PhotoForm.vue'
import Footer from './Footer.vue'


export default {
    components: {
    PhotoForm,
    Footer
  },
  data () {
    return {
      showForm: false
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
  }
}
</script>
