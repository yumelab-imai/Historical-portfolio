<template>
<div class="container--small">
    <!-- タイトル -->
    <ul class="tab">
        <!-- ログイン画面のタイトル -->
        <li
        class="tab__item"
        :class="{'tab__item--active': typeNumber === 1 }"
        @click="typeNumber = 1"
        >Login</li>
        <!-- 登録画面のタイトル -->
        <li
        class="tab__item"
        :class="{'tab__item--active': typeNumber === 2 }"
        @click="typeNumber = 2"
        >Register</li>
    </ul>
    <!-- ログイン画面 -->
    <div class="panel" v-show="typeNumber === 1">
        <form class="form" @submit.prevent="login">
            <!-- エラー表示 -->
            <div v-if="loginErrors" class="errors">
            <ul v-if="loginErrors.email">
            <li v-for="msg in loginErrors.email" :key="msg">{{ msg }}</li>
            </ul>
            <ul v-if="loginErrors.password">
            <li v-for="msg in loginErrors.password" :key="msg">{{ msg }}</li>
            </ul>
            </div>
            <!-- ログインフォーム一覧 -->
            <label for="login-email">Email</label>
            <input type="text" class="form__item" id="login-email" v-model="loginForm.email">
            <label for="login-password">Password</label>
            <input type="password" class="form__item" id="login-password" v-model="loginForm.password">
            <div class="form__button">
            <button type="submit" class="button button--inverse">login</button>
            </div>
            <!-- 追加（20220623） -->
        </form>
    </div>
    <!-- 登録画面 -->
    <div class="panel" v-show="typeNumber === 2">
        <form class="form" @submit.prevent="register">
            <!-- エラー表示 -->
            <div v-if="registerErrors" class="errors">
            <ul v-if="registerErrors.name">
            <li v-for="msg in registerErrors.name" :key="msg">{{ msg }}</li>
            </ul>
            <ul v-if="registerErrors.email">
            <li v-for="msg in registerErrors.email" :key="msg">{{ msg }}</li>
            </ul>
            <ul v-if="registerErrors.password">
            <li v-for="msg in registerErrors.password" :key="msg">{{ msg }}</li>
            </ul>
            </div>
            <!-- 登録フォーム一覧 -->
            <label for="username">Name</label>
            <input type="text" class="form__item" id="username" v-model="registerForm.name">
            <label for="email">Email</label>
            <input type="text" class="form__item" id="email" v-model="registerForm.email">
            <label for="password">Password</label>
            <input type="password" class="form__item" id="password" v-model="registerForm.password">
            <label for="password-confirmation">Password (confirm)</label>
            <input type="password" class="form__item" id="password-confirmation" v-model="registerForm.password_confirmation">
            <div class="form__button">
            <button type="submit" class="button button--inverse">register</button>
            </div>
        </form>
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data () {
    return {
        typeNumber: 1,
        loginForm: {
        email: 'aaa@example.com',
        password: 'qwsaqwsa'
                                    },

        registerForm: {
            name: '',
            email: '',
            password: '',
            password_confirmation: ''
                                        }
                                            }
    },
    computed: {
        ...mapState({
            apiStatus: state => state.auth.apiStatus,
            loginErrors: state => state.auth.loginErrorMessages,
            registerErrors: state => state.auth.registerErrorMessages
                                                                        })
    },
    methods: {
    async login () {

        // auth モジュール側でログイン処理を行う
        await this.$store.dispatch('auth/login', this.loginForm)

        if (this.apiStatus) {
            // ログインを完了してトップページに移動
            this.$router.push('/')
                                    }
    },
    async register () {

        await this.$store.dispatch('auth/register', this.registerForm)

        if (this.apiStatus) {
            // 登録を完了してトップページに移動する
            this.$router.push('/')
                                    }
    },
    // created ライフサイクルフックでエラーをクリア
    clearError () {
        this.$store.commit('auth/setLoginErrorMessages', null)
        this.$store.commit('auth/setRegisterErrorMessages', null)
                                                                    }
    },
    created () {
        this.clearError()
    }
}
</script>
