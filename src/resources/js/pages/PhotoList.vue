// ログイン後の写真一覧ページ（ページネーション機能を含む）
<template>
<div class="photo-list">
    <div class="grid">
        <!-- アプリケーションメッセージ -->
        <Message />
        <!-- photo (in photos) を item として送る -->
        <!-- @likeで Photo.vue からの出力値を受け取って onLikeClick アクションを起動 -->
        <!--
        // [
        // id => Bi7HdiAxAL3I
        // liked => aaa
        //                      ] -->
        <Photo
            class="grid__item"
            v-for="photo in photos"
            :key="photo.id"
            :item="photo"
            @like="onLikeClick"
        />
    </div>
        <Pagination :current-page="currentPage" :last-page="lastPage" />
</div>
</template>

<script>
import Message from '../components/Message.vue'
import { OK } from '../util'
import Photo from '../components/Photo.vue'
import Pagination from '../components/Pagination.vue'

export default {
    // ルーターから渡される page プロパティを受け取るため
    props: {
        page: {
        // type: Number,
        type: Number,
        // false->true に変更
        required: false,
        default: 1
                        }
    },
    components: {
        Photo,
        Pagination,
        Message
    },
    data () {
        return {
            photos: [],
            currentPage: 0,
            lastPage: 0
                            }
    },
    methods: {
        async fetchPhotos () {

        // ページネーション分の数の写真一覧
        const response = await axios.get(`/api/photos/?page=${this.page}`)

        if (response.status !== OK) {
            this.$store.commit('error/setCode', response.status)
            return false
        }
        // ここで PhotoList.vue の次の３つのデータを得る
        // レスポンスの下階層はステータスとかでそのままデータは取り出せないので
        // 『response.data』みたいにクッションを挟んでからデータや現在ページを読み込む
        this.photos = response.data.data
        this.currentPage = response.data.current_page
        this.lastPage = response.data.last_page
                                                                                },

        // 子コンポーネントから引数 id, liked を受け取った後に自動で like, unlike アクションを起こす！
        // like, unlike アクションはこのアクションの下側に内容を記述
        // 基本的に子コンポーネントから来た引数はメゾットの引数として使ってその後代入する流れ
        onLikeClick ({ id, liked }) {
            if (! this.$store.getters['auth/check']) {
                alert('いいね機能を使うにはログインしてください。')
                return false
            }

            if (liked) {
                this.unlike(id)
            } else {
                this.like(id)
                                    }
                                                                },

        // ライクアクション
        async like (id) {
            const response = await axios.put(`/api/photos/${id}/like`)

            if (response.status !== OK) {
                this.$store.commit('error/setCode', response.status)
                return false
            }

            this.photos = this.photos.map(photo => {
                if (photo.id === response.data.photo_id) {
                photo.likes_count += 1
                photo.liked_by_user = true
                                                            }
                return photo
            })
                                                                        },
        // いいね取り消しアクション
        async unlike (id) {

            // ＠return array ["photo_id" => $id];
            const response = await axios.delete(`/api/photos/${id}/like`)

            // エラー処理
            if (response.status !== OK) {
                this.$store.commit('error/setCode', response.status)
                return false
            }

            // いいね取り消し
            this.photos = this.photos.map(photo => {
                if (photo.id === response.data.photo_id) {
                    photo.likes_count -= 1
                    photo.liked_by_user = false
                                                            }

                return photo
                                                                })
        }
        },

    watch: {
        $route: {
        async handler () {
            await this.fetchPhotos()
        },
        immediate: true
                                        }
    }
}
</script>
