<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Proof of Concept - Card Search</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <ion-button expand="block" @click="openModal">Open Modal</ion-button>
        <p>{{ message }}</p>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts" setup>
    import { IonButton, IonContent, IonPage, IonHeader, IonToolbar, IonTitle, modalController } from '@ionic/vue';
    import SearchList from "@/views/SearchList.vue";
    import { ref } from 'vue';
    import { dummyData } from "@/data/dummy";
  
    const message = ref('Open the modal and click a card');
  
    const openModal = async () => {
      const modal = await modalController.create({
        component: SearchList,
        componentProps: {
            content: dummyData,
            contentKey: "name",
            label: "Select a Card"
        }
      });
  
      modal.present();
  
      const { data } = await modal.onWillDismiss();
  
      if (data) {
        message.value = `You selected ${data.name} with cost ${data.cost}`;
      }
    };
  </script>