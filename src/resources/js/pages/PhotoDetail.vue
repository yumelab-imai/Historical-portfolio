<template>
<div v-if="photo" class="photo-detail photo-detail--column">
    <figure class="photo-detail__pane photo-detail__image">
        <img :src="photo.url">
        <!-- タイトルや説明を指定 -->
        <!-- <figcaption>Posted by {{ photo.owner.name }}</figcaption> -->
    </figure>
    <div class="photo-detail__pane">
        <div>
            <!-- いいねボタン -->
            <button
                class="button button--like"
                :class="{ 'button--liked': photo.liked_by_user }"
                @click="onLikeClick"
            >
                <i class="icon ion-md-heart"></i>{{ photo.likes_count }}
            </button>
            <!-- ダウンロードボタン -->
            <a :href="`/photos/${photo.id}/download`" class="button backC">
                <i class="icon ion-md-arrow-round-down"></i>Download Photo
            </a>
        </div>
        <!-- 写真詳細機能 -->
        <div>
            <!-- コメント上のタイトル（コメント一覧とか） -->
            <h2 class="photo-detail__title">
                <i class="icon ion-md-chatboxes"></i>Review
            </h2>
            <!-- コメント一覧機能 (コメントが『ある場合->ない場合』で if 文で分ける) -->
            <div>
                <ul v-if="photo.comments.length > 0" class="photo-detail__comments com">
                <!-- ある場合 -->
                <li
                    v-for="(comment, index) in photo.comments"
                    :key="comment.content"
                    class="photo-detail__commentItem"
                >
                    <!-- コメントの削除機能と編集機能 -->
                    <span class="pull-right">
                        <!-- 開発中 -->
                        <!-- <button class="btn btn-xs btn-warning" @click="deleteComment(index)">
                            <span class="glyphicon glyphicon-trash"><i class="fa-solid fa-trash-can"></i></span>
                        </button> -->
                        <!-- <button class="btn btn-xs btn-warning">
                            <span class="glyphicon glyphicon-trash"><i class="fa-solid fa-ellipsis"></i></span>
                        </button> -->
                        <span>{{ comment.updated_at }}</span>
                    </span>
                    <!-- コメントを誰が書いたのかとその内容 -->
                    <p class="photo-detail__commentInfo">
                    {{ comment.author.name }}
                    </p>
                    <p class="photo-detail__commentBody">
                    {{ comment.content }}
                    </p>
                </li>
                </ul>
                <!-- ない場合 -->
                <p v-else>No comments yet.</p>
            </div>

            <!-- コメントを書き込む機能 -->
            <form v-if="isLogin" @submit.prevent="addComment" class="form">
                <div v-if="commentErrors" class="errors">
                    <ul v-if="commentErrors.content">
                    <li v-for="msg in commentErrors.content" :key="msg">{{ msg }}</li>
                    </ul>
                </div>
                    <textarea placeholder="コメントを記入" class="form__item backA" v-model="commentContent"></textarea>
                <div class="form__button">
                    <button type="submit" class="button button--inverse">submit comment</button>
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
import { OK, CREATED, UNPROCESSABLE_ENTITY } from '../util'

export default {
    props: {
        id: {
        type: String,
        required: true
                        }
    },
    data () {
        return {
            photo: null,
            commentContent: '',
            commentErrors: null,
            send_id:null
                                }
    },
    computed: {
        // これでログインしていない場合このページに飛べないようにしている
        isLogin () {
            return this.$store.getters['auth/check']
        }
    },
    methods: {
        async fetchPhoto () {
            const response = await axios.get(`/api/photos/${this.id}`)

            if (response.status !== OK) {
                this.$store.commit('error/setCode', response.status)
                return false
            }

            this.photo = response.data
        },
        async addComment () {

            // コメントをajaxで送る（post）
            const response = await axios.post(`/api/photos/${this.id}/comments`, {
                content: this.commentContent
                                        })

            // バリデーションエラー
            if (response.status === UNPROCESSABLE_ENTITY) {
                this.commentErrors = response.data.errors
                return false
                            }

            // クリア
            this.commentContent = ''
            this.commentErrors = null

            // その他のエラー
            if (response.status !== CREATED) {
                this.$store.commit('error/setCode', response.status)
                return false
            }

            // 画面に結果を反映させる(コメントの上書き)
            // ...this.photo.comments は Spread operator（スプレッドオペレータ)で
            // これがないと配列のまま渡されてしまう
            this.photo.comments = [
                // 追加する写真
                response.data,
                // 元からの写真
                ...this.photo.comments
                                        ]
        },

        // いいね機能
        onLikeClick () {
            if (! this.isLogin) {
                alert('いいね機能を使うにはログインしてください。')
                return false
            }

            if (this.photo.liked_by_user) {
                this.unlike()
            } else {
                this.like()
            }
        },
        async like () {
            const response = await axios.put(`/api/photos/${this.id}/like`)

            if (response.status !== OK) {
                this.$store.commit('error/setCode', response.status)
                return false
            }

            // DB側では処理は完了しているが、フロントではまだ処理されていないため、これで結果を反映させる
            this.photo.likes_count = this.photo.likes_count + 1
            this.photo.liked_by_user = true
        },
        async unlike () {
            const response = await axios.delete(`/api/photos/${this.id}/like`)

            if (response.status !== OK) {
                this.$store.commit('error/setCode', response.status)
                return false
            }

            // DB側では処理は完了しているが、フロントではまだ処理されていないため、これで結果を反映させる
            this.photo.likes_count = this.photo.likes_count - 1
            this.photo.liked_by_user = false
        }

        // 開発中
        // async deleteComment (index) {

            // DB上のコメントをaxiosで消す（delete）
            // ${this.id} = FeHYrWpjAidq
            // const response = await axios.delete(`/api/photos/${this.id}/comments/${index}`)
            // const response = await axios.delete(`/api/photos/${this.id}/comments/${index}`)

            // フロント側でも消す
            // this.remove(index);
        // },

        // remove(index){
            // this.photo.comments.splice(index,1)
        // },

    },
    watch: {
        $route: {
            async handler () {
                await this.fetchPhoto()
            },
            immediate: true
        }
    }
}
</script>
