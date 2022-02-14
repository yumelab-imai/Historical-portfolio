
const state = {
    showOn:false
}

// ステートそのものではなくステートを元に演算した結果が欲しい場合はゲッターのちょうど良い使いどころ
const getters = {}

// 同期処理でなければいけない
// ミューテーションを呼び出すときの実引数は仮引数では第二引数以降として渡される
const mutations = {
    change (state) {
      state.showOn =! state.showOn;
    }
}

// 非同期処理でなければいけなく、その後ミューテーションを呼び出してステートを更新する
// 「アクション→コミットでミューテーション呼び出し→ステート更新」というパターンはよく使う
const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
