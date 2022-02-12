<template>
  <nav class="navbar">
    <RouterLink class="navbar__brand" to="/">
      <i class="fa fa-home"></i>
    </RouterLink>
    <RouterLink class="navbar__brand" to="/">
      <Footer />
    </RouterLink>
    <div class="navbar__menu">
  <!-- <form @click.prevent="showForm"> -->
      <div v-if="isLogin" class="navbar__item">
          <!-- <form @submit.prevent="addOn"> -->
        <button  class="button write" @click="addOn">
          <i class="fa-solid fa-feather"></i>
        </button>
        <!-- </form> -->
      </div>
 <!-- </form> -->
      <span v-if="isLogin" class="navbar__item name">
        Name:<br>{{ username }}
      </span>
      <div v-else class="navbar__item">
        <RouterLink class="button button--link" to="/login">
          <i class="fa-solid fa-door-open login"></i>
        </RouterLink>
      </div>
    </div>
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
    addOn() {
        this.showOn =! this.showOn;
      this.$emit('show',this.showOn);
    }
  }
}
</script>
