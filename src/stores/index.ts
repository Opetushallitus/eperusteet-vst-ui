import { BrowserStore } from '@shared/stores/BrowserStore';

const browserStore = new BrowserStore();

export const stores = Object.freeze({
  browserStore,
});
