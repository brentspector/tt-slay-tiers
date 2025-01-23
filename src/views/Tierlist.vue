<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Tierlists</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <div v-for="post in posts" :key="post.sys.id" class="post">
        <h2>{{ post.fields.title }}</h2>
        <p>{{ post.fields.summary }}</p>
      </div>
      <infinite-loading @infinite="loadMorePosts" />
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts" setup>
  import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle } from '@ionic/vue';
  import { ref } from 'vue'
  import client from '@/contentful'
  import InfiniteLoading from 'v3-infinite-loading'
  import 'v3-infinite-loading/lib/style.css'
  
  const posts = ref<Array<any>>([])
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
  </script>
  
  <style scoped>
  .post {
    margin-bottom: 20px;
  }
  </style>