import {
    gridOutline,
    gridSharp,
    moonOutline,
    moonSharp,
    barChartOutline,
    barChartSharp,
    journalOutline,
    journalSharp,
    clipboardOutline,
    clipboardSharp
  } from "ionicons/icons";
  import { globalStore } from "@/store/global";
  
  export const appPages = [
    {
      title: "Tierlists",
      url: "/tierlists",
      iosIcon: barChartOutline,
      mdIcon: barChartSharp,
    },
    {
      title: "Blog Posts",
      url: "/blog",
      iosIcon: journalOutline,
      mdIcon: journalSharp,
    },
    {
      title: "Cards",
      url: "/cards",
      iosIcon: clipboardOutline,
      mdIcon: clipboardSharp,
    },
  ];
  
  export const customizationButtons = [
    {
      title: "Card View",
      iosIcon: gridOutline,
      mdIcon: gridSharp,
      method: (event: Event): void =>
        globalStore.setCardFormatAction(
          (event.target as HTMLIonToggleElement).checked
        ),
      stateValue: (): boolean => globalStore.state.cardFormat,
    },
    {
      title: "Dark Mode",
      iosIcon: moonOutline,
      mdIcon: moonSharp,
      method: (event: Event): void =>
        globalStore.setDarkModeAction(
          (event.target as HTMLIonToggleElement).checked
        ),
      stateValue: (): boolean => globalStore.state.darkMode,
    },
  ];