import { create } from 'zustand';

export const useGiftBoxCountStore = create((set) => ({
  giftBoxCount: 5,
  setGiftBoxCount: ()=> set(state => ({ giftBoxCount: state.giftBoxCount + 1 })),
}));
