<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Blog</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-list v-if="!globalStore.state.cardFormat">
        <ion-item
          v-for="post in posts"
          :key="post.sys.id"
          @click="openArticle(post.sys.id)"
        >
          <ion-thumbnail slot="start">
            <img :src="getImageUrl(post)" />
          </ion-thumbnail>
          <ion-label class="title">
            <ion-text>{{ post.fields.title }}</ion-text>
          </ion-label>
          <ion-col size-lg="9">
            <ion-row class="summary">
              <ion-text>
                {{ post.fields.summary }}
              </ion-text>
            </ion-row>
          </ion-col>
        </ion-item>
      </ion-list>
      <infinite-loading @infinite="loadMorePosts" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonList, IonItem, IonThumbnail, IonLabel, IonCol, IonRow, IonText } from '@ionic/vue';
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { globalStore } from '@/store/global'
import client from '@/contentful'
import InfiniteLoading from 'v3-infinite-loading'
import 'v3-infinite-loading/lib/style.css'

const posts = ref<Array<any>>([])
const skip = ref(0)
const limit = 10
const router = useRouter()

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

const openArticle = (id: string) => {
  router.push({ name: 'Article', params: { id } })
}

const getImageUrl = (post: any) => {
  if (post.fields.headerImage && post.fields.headerImage.fields && post.fields.headerImage.fields.file) {
    return 'https:' + post.fields.headerImage.fields.file.url;
  }
  return '';
}
</script>

<style scoped>
ion-item {
  cursor: pointer;
}
</style>