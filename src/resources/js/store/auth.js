import { OK, CREATED, UNPROCESSABLE_ENTITY } from '../util'

const state = {
    user: null,
    // userHome: true,
    apiStatus: null,
    loginErrorMessages: null,
    registerErrorMessages: null
}

// ステートそのものではなくステートを元に演算した結果が欲しい場合はゲッターのちょうど良い使いどころ
const getters = {
  check: state => !! state.user,
//   check2: state => !! state.userHome,
  username: state => state.user ? state.user.name : ''
}

// 同期処理でなければいけない
// ミューテーションを呼び出すときの実引数は仮引数では第二引数以降として渡される
const mutations = {
    setUser (state, user) {
        state.user = user
    },
    // setUserHome (state, userHome) {
    //     state.userHome = userHome
    // },
    setApiStatus (state, status) {
        state.apiStatus = status
    },
    setLoginErrorMessages (state, messages) {
        state.loginErrorMessages = messages
    },
    setRegisterErrorMessages (state, messages) {
        state.registerErrorMessages = messages
    }
}

// 非同期処理でなければいけなく、その後ミューテーションを呼び出してステートを更新する
// 「アクション→コミットでミューテーション呼び出し→ステート更新」というパターンはよく使う
// context は payload のようなもので特に意味はない
const actions = {
// 会員登録
    async register (context, data) {
    context.commit('setApiStatus', null)
// dataを登録
    const response = await axios.post('/api/register', data)

    if (response.status === CREATED) {
        context.commit('setApiStatus', true)
        context.commit('setUser', response.data)
        return false
    }

    context.commit('setApiStatus', false)
    if (response.status === UNPROCESSABLE_ENTITY) {
      context.commit('setRegisterErrorMessages', response.data.errors)
    } else {
      context.commit('error/setCode', response.status, { root: true })
    }
  },
//   async login (context, data) {
//     const response = await axios.post('/api/login', data)
//     context.commit('setUser', response.data)
//   },
// 改良版↓
// ログイン
//   async login (context, data) {
//   context.commit('setApiStatus', null)
//   const response = await axios.post('/api/login', data)
//     .catch(err => err.response || err)

//   if (response.status === OK) {
//     context.commit('setApiStatus', true)
//     context.commit('setUser', response.data)
//     return false
//   }

//   context.commit('setApiStatus', false)
// //   context.commit('error/setCode', response.status, { root: true })
// // 改良
//   if (response.status === UNPROCESSABLE_ENTITY) {
//     context.commit('setLoginErrorMessages', response.data.errors)
//   } else {
//     context.commit('error/setCode', response.status, { root: true })
//   }
// },
    async login (context, data) {

        context.commit('setApiStatus', null)

        // デフォルトで作成されているログインアクションを起動
        const response = await axios.post('/api/login', data)

        if (response.status === OK) {
            context.commit('setApiStatus', true)
            context.commit('setUser', response.data)
            return false
                                                        }

        context.commit('setApiStatus', false)
        if (response.status === UNPROCESSABLE_ENTITY) {
            context.commit('setLoginErrorMessages', response.data.errors)
        } else {
            context.commit('error/setCode', response.status, { root: true })
                                                                                }
    },

    async logout (context) {
        context.commit('setApiStatus', null)

        // デフォルトで作成されている登録アクションを起動
        const response = await axios.post('/api/logout')

        if (response.status === OK) {
            context.commit('setApiStatus', true)
            context.commit('setUser', null)
            return false
                                                    }

        context.commit('setApiStatus', false)
        context.commit('error/setCode', response.status, { root: true })
    },


  // ログインユーザーチェック
  async currentUser (context) {
    context.commit('setApiStatus', null)
    const response = await axios.get('/api/user')
    const user = response.data || null

    if (response.status === OK) {
      context.commit('setApiStatus', true)
      context.commit('setUser', user)
      return false
    }

    context.commit('setApiStatus', false)
    context.commit('error/setCode', response.status, { root: true })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
