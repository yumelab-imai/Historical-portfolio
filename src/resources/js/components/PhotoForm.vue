<template>
<!-- オン・オフ式の写真投稿フォーム -->
<div v-show="showOn" class="photo-form">
    <!-- タイトル -->
    <h2 class="title">Submit a photo</h2>
    <!-- ローディングメッセージ -->
    <div v-show="loading" class="panel">
    <Loader>Loading...(Sending your photo...)</Loader>
    </div>
    <!-- 写真投稿フォーム -->
    <form v-show="! loading" class="form" @submit.prevent="submit">
        <!-- エラー表示 -->
        <div class="errors" v-if="errors">
            <ul v-if="errors.photo">
                <li v-for="msg in errors.photo" :key="msg">{{ msg }}</li>
            </ul>
        </div>
        <!-- アプリケーションメッセージ -->
        <Message />

        <!-- API(FileReader API FormData API)を使用してファイルの読み込み、データの送信、プレビュー機能を実装 -->
        <div>
                <input class="form__item" type="file" @change="onFileChange">
            <output class="form__output" v-if="display_image_data_url">
                <img :src="display_image_data_url">
            </output>
            <div class="form__button">
                <button type="submit" class="button button--inverse">submit</button>
            </div>
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
                                                }
    },
    computed:{
        showOn() {
            return this.$store.state.turn.showOn;
                                                    }
    },
    methods: {
        // フォームでファイルが選択されたら実行される
        onFileChange (event) {

        // 何も選択されていなかったら処理中断
        if (event.target.files.length === 0) {
            this.reset()
            return false
        }

        // ファイルが画像ではなかったら処理中断
        // event.target.files[0] は ファイル形式の画像
        if (! event.target.files[0].type.match('image.*')) {
            this.reset()
            return false
        }

        // その１ - URL
        // FileReaderクラスのインスタンスを取得
        const reader = new FileReader()

        // ファイルを読み込み終わったタイミングで実行する処理
        // reader.onloadにdisplay_image_data_urlを入れて
        reader.onload = e => {
            // display_image_data_urlに読み込んだデータURLを代入
            this.display_image_data_url = e.target.result
        }

        // ファイルを読み込む
        // 読み込まれたファイルはデータURL形式で受け取れる
        reader.readAsDataURL(event.target.files[0])

        // その２ - 写真データ
        this.photo = event.target.files[0]
                                            },

        // Ajax でファイルを送るために HTML5 の FormData API を使用(むずい)
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

            // 写真投稿メッセージ
            this.$store.commit('message/setContent', {
                content: '写真が投稿されました！',
                timeout: 6000
                                })

            // 引数の id を受け取る処理
            // const response = await axios.get('/api/', )
            // 完了後のルーティング
            // <RouterLink
            //     class="photo__overlay"
            //     :to="`/photos/${item.id}`"
            // >

            // if(this.$route.path.match(/\//)){
            //     this.fetchPhotos ()
            // }else{
            // this.$router.push(`/`).catch(() => {})
            // }

            if(false){
                return false
            }else{
            this.$router.push(`/`).catch(() => {})
            }
        },

        // クリア
        reset () {
            this.display_image_data_url = ''
            this.photo = null
            // this.$el はこのコンポーネントを指す
            // querySelector の説明
            // <li class="item1">list2-item1</li> の場合
            // document.querySelectorAll('.item1')
            this.$el.querySelector('input[type="file"]').value = null
                                                                        },
    }
}
</script>
