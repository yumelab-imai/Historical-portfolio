import { OK, UNPROCESSABLE_ENTITY } from '../util'

const state = {
    user: null,
    apiStatus: null,
    loginErrorMessages: null
}

// ステートそのものではなくステートを元に演算した結果が欲しい場合はゲッターのちょうど良い使いどころ
const getters = {
  check: state => !! state.user,
  username: state => state.user ? state.user.name : ''
}

// 同期処理でなければいけない
// ミューテーションを呼び出すときの実引数は仮引数では第二引数以降として渡される
const mutations = {
    setUser (state, user) {
    state.user = user
  },
  setApiStatus (state, status) {
    state.apiStatus = status
  },
  setLoginErrorMessages (state, messages) {
    state.loginErrorMessages = messages
  }
}

// 非同期処理でなければいけなく、その後ミューテーションを呼び出してステートを更新する
// 「アクション→コミットでミューテーション呼び出し→ステート更新」というパターンはよく使う
const actions = {
    async register (context, data) {
    const response = await axios.post('/api/register', data)
    context.commit('setUser', response.data)
  },
//   async login (context, data) {
//     const response = await axios.post('/api/login', data)
//     context.commit('setUser', response.data)
//   },
// 改良版↓
  async login (context, data) {
  context.commit('setApiStatus', null)
  const response = await axios.post('/api/login', data)
    .catch(err => err.response || err)

  if (response.status === OK) {
    context.commit('setApiStatus', true)
    context.commit('setUser', response.data)
    return false
  }

  context.commit('setApiStatus', false)
//   context.commit('error/setCode', response.status, { root: true })
// 改良
  if (response.status === UNPROCESSABLE_ENTITY) {
    context.commit('setLoginErrorMessages', response.data.errors)
  } else {
    context.commit('error/setCode', response.status, { root: true })
  }
},
  async logout (context) {
    const response = await axios.post('/api/logout')
    context.commit('setUser', null)
  },
  async currentUser (context) {
    const response = await axios.get('/api/user')
    const user = response.data || null
    context.commit('setUser', user)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
