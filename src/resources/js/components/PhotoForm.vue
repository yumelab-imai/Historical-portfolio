<template>
  <div v-show="showOn" class="photo-form">
    <div>
        <h2 class="title">Submit a photo</h2>
        <div v-show="loading" class="panel">
        <Loader>Loading...(Sending your photo...)</Loader>
        </div>
    </div>
    <form v-show="! loading" class="form" @submit.prevent="submit">
        <div class="errors" v-if="errors">
        <ul v-if="errors.photo">
        <li v-for="msg in errors.photo" :key="msg">{{ msg }}</li>
        </ul>
        </div>
        <div>
            <Message />
        </div>
    <!-- プレビュー機能の実装方法としては HTML5 の慣用的な書き方らしい。。。 -->
       <input class="form__item" type="file" @change="onFileChange">
      <output class="form__output" v-if="display_image_data_url">
        <img :src="display_image_data_url">
        </output>
      <div class="form__button">
        <button type="submit" class="button button--inverse">submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import Message from './Message.vue'
import { CREATED, UNPROCESSABLE_ENTITY } from '../util'
import Loader from './Loader.vue'

export default {

    components: {
    Message,
    Loader,
  },
  data () {
    return {
    loading: false,
    // display_image_data_urlはsrcを表す
      display_image_data_url: null,
      photo: null,
      errors: null,
    //   ここさえ上手くいけば全て終わる！！
    //   showOn:  this.$store.state.turn.showOn
    }
  },
  computed:{
      showOn() {
      return this.$store.state.turn.showOn;
    }
  },
//    watch: {
//     showOn: function() {

//       this.showOn = this.$store.state.turn.showOn
//     },
  methods: {
    // フォームでファイルが選択されたら実行される
    onFileChange (event) {
      // 何も選択されていなかったら処理中断
      if (event.target.files.length === 0) {
        this.reset()
        return false
      }

      // ファイルが画像ではなかったら処理中断
      if (! event.target.files[0].type.match('image.*')) {
        this.reset()
        return false
      }

      // FileReaderクラスのインスタンスを取得
      const reader = new FileReader()

      // ファイルを読み込み終わったタイミングで実行する処理
    //   reader.onloadにdisplay_image_data_urlを入れて
      reader.onload = e => {
        // display_image_data_urlに読み込んだデータURLを代入
        this.display_image_data_url = e.target.result
      }

      // ファイルを読み込む
      // 読み込まれたファイルはデータURL形式で受け取れる
      reader.readAsDataURL(event.target.files[0])

      this.photo = event.target.files[0]
    },
    // クリア
    reset () {
    this.display_image_data_url = ''
    this.photo = null
    this.$el.querySelector('input[type="file"]').value = null
  },
//   Ajax でファイルを送るために HTML5 の FormData API を使用,むずいよ〜
  async submit () {
    this.loading = true

    const formData = new FormData()
    //コードの説明(詳細)
    // this.photo = event.target.files[0]
    // formData={
    //     photo => event.target.files[0]
    // }
    formData.append('photo', this.photo)
    const response = await axios.post('/api/photos', formData)

    this.loading = false

    if (response.status === UNPROCESSABLE_ENTITY) {
    this.errors = response.data.errors
    return false
  }

    this.reset()
    this.$emit('input', false)

    if (response.status !== CREATED) {
    this.$store.commit('error/setCode', response.status)
    return false
  }

  // メッセージ登録
  this.$store.commit('message/setContent', {
    content: '写真が投稿されました！',
    timeout: 6000
  })

    // this.$router.push(`/photos/${response.data.id}`)
    // this.$router.push(`/photos/:id`)
    this.$router.push(`/`).catch(() => {})
  }
  }
}
</script>
