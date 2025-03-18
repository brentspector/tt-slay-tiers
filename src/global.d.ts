declare global {
  interface Window {
    setHoverTrigger: (keyword: string, triggerId: string) => void;
  }
}

export {};