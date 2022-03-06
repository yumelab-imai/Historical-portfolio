<template>
<footer class="footer">
    <button  class="button button--link" @click="logout">
        <i class="fa-solid fa-door-open login"></i><br>Logout
    </button>
</footer>
</template>




<script>
import { mapState, mapGetters } from 'vuex'

export default {

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
