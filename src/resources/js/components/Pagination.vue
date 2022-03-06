// のちにVuetify や Semantic UI Vue などのライブラリも参考

<template>
<div class="pagination">
    <RouterLink
        v-if="! isFirstPage"
        :to="`/?page=${currentPage - 1}`"
        class="button"
    >
        &laquo; prev
    </RouterLink>
    <RouterLink
        v-if="! isLastPage"
        :to="`/?page=${currentPage + 1}`"
        class="button"
    >
        next &raquo;
    </RouterLink>
</div>
</template>

<script>
export default {
    props: {
        currentPage: {
        type: Number,
        required: true
                        },
        lastPage: {
        type: Number,
        required: true
                        }
    },
// data を元に bool を判別するので computed
    computed: {
        isFirstPage () {
        return this.currentPage === 1
                                        },
        isLastPage () {
        return this.currentPage === this.lastPage
                                                    }
    }
}
</script>
