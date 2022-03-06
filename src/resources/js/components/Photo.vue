<template>
<div class="photo">
    <!-- figure要素で、写真、挿絵、図表、などのまとまりを表す -->
    <figure class="photo__wrapper">
    <!-- :alt は画像が表示できないブラウザなどでアクセスした際、画像の代わりにテキストで内容が表示 -->
        <img
            class="photo__image"
            :src="item.url"
            :alt="`Photo by ${item.owner.name}`"
        >
    </figure>
    <!-- 写真にルーターを貼り付ける -->
    <RouterLink
        class="photo__overlay"
        :to="`/photos/${item.id}`"
    >
        <div class="photo__controls">
        <button
            class="photo__action photo__action--like"
            :class="{ 'photo__action--liked': item.liked_by_user }"
            title="Like photo"
            @click.prevent="like"
        >
            <i class="icon ion-md-heart"></i>{{ item.likes_count }}
        </button>
        <a
            class="photo__action"
            @click.stop
            :href="`/photos/${item.id}/download`"
        >
        <i class="icon ion-md-arrow-round-down"></i>Download Photo
        </a>
        </div>
        <div class="photo__username">
        {{ item.owner.name }}
        </div>
    </RouterLink>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    like () {
      this.$emit('like', {
        id: this.item.id,
        liked: this.item.liked_by_user
      })
    }
  }

}
</script>
