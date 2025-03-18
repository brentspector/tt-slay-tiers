const windowCopy = window;
windowCopy.setHoverTrigger = (keyword: string, triggerId: string) => {
  // Use the parameters to satisfy the linter
  void keyword;
  void triggerId;
};

export { windowCopy as window };