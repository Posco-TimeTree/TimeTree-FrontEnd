import { create } from 'zustand';

export const useGiftBoxCountStore = create((set) => ({
  giftBoxCount: 0,
  setGiftBoxCount: (newCount) => set({ count: newCount }),
  setGiftBoxCountPlus: ()=> set(state => ({ giftBoxCount: state.giftBoxCount + 1 })),
}));
