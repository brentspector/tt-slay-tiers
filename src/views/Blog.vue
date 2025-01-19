<template>
  <div>
    <h1>Blog</h1>
    <div v-for="post in posts" :key="post.sys.id" class="post">
      <h2>{{ post.fields.title }}</h2>
      <p>{{ post.fields.summary }}</p>
    </div>
    <infinite-loading @infinite="loadMorePosts" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import client from '@/contentful'
import InfiniteLoading from 'v3-infinite-loading'
import 'v3-infinite-loading/lib/style.css'

export default defineComponent({
  name: 'Blog',
  components: {
    InfiniteLoading
  },
  setup() {
    const posts = ref<contentful.Entry<any>[]>([])
    const skip = ref(0)
    const limit = 10

    const loadMorePosts = async ($state: { loaded: () => void; complete: () => void; }) => {
      try {
        const response = await client.getEntries({
          skip: skip.value,
          limit
        })
        if (response.items.length) {
          posts.value.push(...response.items)
          skip.value += limit
          $state.loaded()
        } else {
          $state.complete()
        }
      } catch (error) {
        console.error(error)
        $state.complete()
      }
    }

    return {
      posts,
      loadMorePosts
    }
  }
})
</script>

<style scoped>
.post {
  margin-bottom: 20px;
}
</style>