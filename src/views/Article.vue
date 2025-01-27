<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ article?.fields?.title }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h2>{{ article?.fields?.summary }}</h2>
      <ion-text id="hover-trigger-wheel of change" @mouseover="setHoverTrigger('wheel of change')">Hover Over Me</ion-text>
      <ion-popover :trigger="hoverTrigger" trigger-action="hover">
        <ion-content class="ion-padding">
          <ion-spinner v-if="!isLoaded && imageUrl" name="circular" />
          <img v-if="imageUrl" :src="imageUrl" alt="Image" @load="isLoaded=true"/>
        </ion-content>
      </ion-popover>
      <div v-html="processedContent"></div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonPopover,
  IonText,
  IonSpinner
} from "@ionic/vue";
import { ref, onMounted } from "vue";
import { useRoute } from 'vue-router';
import client from "@/contentful";
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const route = useRoute();
const articleId = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id;

const article = ref<any>(null);
const processedContent = ref<string>("");
const matches2 = ref<Array<{ keyword: string }>>([]);
const hoverTrigger = ref<string | null>(null);
const imageUrl = ref<string | null>(null);
const isLoaded = ref(false);

const fetchArticle = async () => {
  try {
    const response = await client.getEntry(articleId);
    article.value = response;
    await processContent();
  } catch (error) {
    console.error(error);
  }
};

const fetchImageUrl = async (title: string) => {
  try {
    const response = await client.getAssets({
      'fields.title': title.toLowerCase(),
      'limit': 1
    });
    if (response.items.length > 0) {
      const fileUrl = response.items[0]?.fields?.file?.url;
      return fileUrl ? 'https:' + fileUrl : null;
    }
  } catch (error) {
    console.error(error);
  }
  return null;
};

const processContent = async () => {
  if (article.value) {
    const content = documentToHtmlString(article.value.fields.content);
    const matches = content.match(/\[\[(.*?)\]\]/g) || [];
    let updatedContent = content;

    matches2.value = matches.map(match => {
      const keyword = match.slice(2, -2);
      return { keyword };
    });

    for (const match of matches) {
      const keyword = match.slice(2, -2);
      // TODO: Figure out a way for onmouseover to work with Vue
      const replacement = 
      `
      <div onmouseover="myOverFunction()">
        <p>onmouseover</p>
        <p id="demo3">Mouse over me! ${keyword}</p>
       </div>
      `;
      updatedContent = updatedContent.replace(match, replacement);
    }

    processedContent.value = updatedContent;
  }
};

const setHoverTrigger = (keyword: string) => {
  hoverTrigger.value = `hover-trigger-${keyword}`;
  imageUrl.value = null; // Reset imageUrl to avoid showing the previous image
  isLoaded.value = false; // Reset isLoaded to show the spinner again
  fetchImageUrl(keyword).then(url => {
    imageUrl.value = url;
  });
};

onMounted(fetchArticle);
</script>

<style scoped>
img {
  display: block;
  margin-top: 10px;
}

.hover-text {
  position: relative;
  cursor: pointer;
}
</style>