const state = {
    user: null
}

const getters = {}

// 同期処理でなければいけない
// ミューテーションを呼び出すときの実引数は仮引数では第二引数以降として渡される
const mutations = {
    setUser (state, user) {
    state.user = user
  }
}

// 同期処理でなければいけなく、その後ミューテーションを呼び出してステートを更新する
// 「アクション→コミットでミューテーション呼び出し→ステート更新」というパターンはよく使う
const actions = {
    async register (context, data) {
    const response = await axios.post('/api/register', data)
    context.commit('setUser', response.data)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
