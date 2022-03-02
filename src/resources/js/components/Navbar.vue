<template>

  <nav class="navbar">
      <div>
    <RouterLink class="navbar__brand home-name" to="/">
      <i class="fa fa-home"></i>
    </RouterLink>
    <div v-if="isLogin" >
    Name:<br>{{ username }}
    </div>
    </div>


  <!-- <form @click.prevent="showForm"> -->
      <div v-if="isLogin" class="navbar__item">
          <!-- <form @submit.prevent="addOn"> -->
        <button  class="button write" @click="onClick">
          <i class="fa-solid fa-feather"></i>
        </button>
        <!-- </form> -->
      </div>
 <!-- </form> -->
      <span v-if="isLogin" class="navbar__item name">
      </span>
      <div v-else class="navbar__item">
        <RouterLink class="button button--link" to="/login">
          
          <i class="fa-solid fa-door-closed logout"></i>
        </RouterLink>
      </div>
    <RouterLink class="navbar__brand" to="/">
      <Footer />
    </RouterLink>
    <!-- <PhotoForm v-model="showForm" /> -->
  </nav>
</template>

<script>
// import PhotoForm from './PhotoForm.vue'
import Footer from './Footer.vue'


export default {
    components: {
    // PhotoForm,
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
