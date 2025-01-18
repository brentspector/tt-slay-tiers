<template>
    <ion-page>
      <ion-content>
        <ion-grid class="markdown-body">
          <ion-row class="ion-padding">
            <ion-col class="ion-text-center ion-text-justify">
              <h1>Welcome to the Tabletop Slay the Spire Tierlist!</h1>
              <!-- Section Break -->
              <ion-item class="border">
                <ion-thumbnail slot="start"
                  ><ion-img :src="iconPath('icon.png')"></ion-img
                ></ion-thumbnail>
                <h2>How to Use This App</h2>
              </ion-item>
              <p>
                There is a menu on the left side that contains the following
                options. If the menu is not visible, you can slide it out from the
                side using a left to right swipe. A mobile browser may interpret
                this as an attempt to go back to the previous page. There is no
                fix for this, however a mobile version of this app is available to
                alleviate the issue.
              </p>
              <p>
                All selections can be found by using the dropdown menus at the top
                of each page.
              </p>
              <p>
                <a href="https://discord.gg/D33GAEZh2X">
                  <img
                    alt="Join us on Discord"
                    title="Discord"
                    :src="iconPath('discord.png')"
                    width="50"
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.brentspector.ttslaytiers"
                >
                  <img
                    alt="Get it on Google Play"
                    title="Google Play"
                    :src="iconPath('googlePlay.png')"
                    width="140"
                  />
                </a>
              </p>
  
              <!-- Section Break -->
              <ion-item>
                <ion-icon
                  slot="start"
                  :ios="iosMenuOption('Tierlists')"
                  :md="mdMenuOption('Tierlists')"
                >
                </ion-icon>
                <h3>Tierlists</h3>
              </ion-item>
  
              <p>
                "Tierlists" will allow you to view rankings for each class' cards.
              </p>
              <p>
                This can be reached directly by adding "/tierlists/" to the base URL.
              </p>
              <!-- Section Break -->
              <ion-item>
                <ion-icon
                  slot="start"
                  :ios="iosMenuOption('Blog Posts')"
                  :md="mdMenuOption('Blog Posts')"
                >
                </ion-icon>
                <h3>Blog Posts</h3>
              </ion-item>
  
              <p>
                "Blog Posts" will allow you to view blog posts about the boardgame.
              </p>
              <p>
                This can be reached directly by adding "/blog/" to the base
                URL.
              </p>
              <!-- Section Break -->
              <ion-item>
                <ion-icon
                  slot="start"
                  :ios="iosMenuOption('Cards')"
                  :md="mdMenuOption('Cards')"
                >
                </ion-icon>
                <h3>Cards</h3>
              </ion-item>
              <p>
                "Cards" will allow you to view game information related
                to a specific card.
              </p>
              <p>
                This can be reached directly by adding "/cards/" to the base
                URL.
              </p>
              <!-- Section Break -->
              <ion-item>
                <ion-icon
                  slot="start"
                  :ios="iosMenuOption('Cards')"
                  :md="mdMenuOption('Cards')"
                >
                </ion-icon>
                <h3>Cards by ID</h3>
              </ion-item>
              <p>
                "Cards" has a shortcut feature when directly navigating
                via URL. By adding a Card ID to the details URL, you can
                directly reach the desired card.
              </p>
              <p>Example:</p>
              <p>
                <code>Clash</code> is ID <code>1</code>, so to reach it, you can
                add "/cards/1" to the base URL and see all the details about
                <code>Clash</code> without needing to use the dropdown menu.
              </p>
              <!-- Section Break -->
              <h2>Global Options</h2>
              <!-- Section Break -->
              <ion-item>
                <ion-icon
                  slot="start"
                  :ios="iosCustomOption('Card View')"
                  :md="mdCustomOption('Card View')"
                >
                </ion-icon>
                <h3>Card View</h3>
              </ion-item>
              <p>
                By default, the <code>Game Points</code> and
                <code>Game Locations</code> views will display the results in a
                card format. If you would like to condense this to a list format,
                toggle this option off.
              </p>
              <!-- Section Break -->
              <ion-item>
                <ion-icon
                  slot="start"
                  :ios="iosCustomOption('Dark Mode')"
                  :md="mdCustomOption('Dark Mode')"
                >
                </ion-icon>
                <h3>Dark Mode</h3>
              </ion-item>
              <p>
                By default, the color theme of this website will attempt to use
                the system preference. If no preference is found, it will default
                to Dark Mode. To use Light Mode theme, toggle this option off.
              </p>
              <!-- Section Break -->
              <h2>Problems or Feedback</h2>
              <p>
                You can file an
                <a
                  href="https://github.com/brentspector/tt-slay-tiers/issues/new"
                  >issue</a
                >
                if you have any problems, or email me at
                <code>bspector20170@gmail.com</code> for any feedback.
              </p>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
    </ion-page>
  </template>
  <script lang="ts">
  import {
    IonCol,
    IonContent,
    IonGrid,
    IonIcon,
    IonImg,
    IonItem,
    IonPage,
    IonRow,
    IonThumbnail,
  } from "@ionic/vue";
  import { defineComponent } from "vue";
  import { appPages, customizationButtons } from "@/data/menu";
  import "../theme/markdown-theme.css";
  export default defineComponent({
    components: {
      IonCol,
      IonContent,
      IonGrid,
      IonIcon,
      IonImg,
      IonItem,
      IonPage,
      IonRow,
      IonThumbnail,
    },
    setup() {
      const iconPath = (icon: string) => {
        return "/tt-slay-tiers/assets/icon/" + icon;
      };
  
      const iosMenuOption = (menuOption: string) => {
        return appPages.filter((item) => item.title == menuOption)[0].iosIcon;
      };
  
      const mdMenuOption = (menuOption: string) => {
        return appPages.filter((item) => item.title == menuOption)[0].mdIcon;
      };
  
      const iosCustomOption = (customOption: string) => {
        return customizationButtons.filter(
          (item) => item.title == customOption
        )[0].iosIcon;
      };
  
      const mdCustomOption = (customOption: string) => {
        return customizationButtons.filter(
          (item) => item.title == customOption
        )[0].mdIcon;
      };
      return {
        iconPath,
        iosCustomOption,
        iosMenuOption,
        mdCustomOption,
        mdMenuOption,
      };
    },
  });
  </script>