<template>
    <ion-page>
      <ion-header translucent>
        <ion-toolbar>
          <ion-title>{{ label }}</ion-title>
        </ion-toolbar>
        <ion-toolbar>
          <ion-searchbar
            animated
            :debounce=500
            show-cancel-button="focus"
            v-model="searchQuery"
          ></ion-searchbar>
        </ion-toolbar>
      </ion-header>
      <ion-content fullscreen>
        <ion-list>
          <ion-item
            v-for="value in searchResults()"
            :key=getLoopKey(value)
            @click="confirm(value)"
            >{{ getValue(value) }}</ion-item
          >
        </ion-list>
        <ion-fab vertical="bottom" horizontal="end" slot="fixed">
          <ion-fab-button
            :activated=true
            @click="cancel()"
          ></ion-fab-button>
        </ion-fab>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts" setup>
    import {
      IonContent,
      IonFab,
      IonFabButton,
      IonHeader,
      IonItem,
      IonList,
      IonPage,
      IonSearchbar,
      IonTitle,
      IonToolbar,
      modalController
    } from "@ionic/vue";
    import { ref } from "vue";
    
    const props = defineProps<{
      content: Record<string, any>[],
      contentKey: string,
      label: string
    }>();

    const searchQuery = ref("");

    const searchResults = () => {
      if (searchQuery.value) {
        //console.log(props.contentKey);
        return props.content.filter((item) => {
          if (props.contentKey) {
            return (
              item[props.contentKey]
                .toLowerCase()
                .indexOf(searchQuery.value.toLowerCase()) != -1
            );
          } else {
            console.log(item);
            return (
              item.toLowerCase().indexOf(searchQuery.value.toLowerCase()) != -1
            );
          }
        });
      } else {
        return props.content;
      }
    };

    const getValue = (item: Record<string, any>) => {
      if (props.contentKey) {
        return item[props.contentKey];
      } else {
        return item;
      }
    };

    const getLoopKey = (value: Record<string, any>) => {
      return value[props.contentKey];
    };
    
    const confirm = (value: any) => modalController.dismiss(value);
    const cancel = () => modalController.dismiss();

  </script>
  <!-- GLOBAL STYLES
      AVOID USING THIS -->
  <style>
  ion-modal::part(content) {
    --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
    --backdrop-opacity: var(--ion-backdrop-opacity, 0.32);
  }
  </style>