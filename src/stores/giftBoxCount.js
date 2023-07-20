import { create } from 'zustand';

export const useGiftBoxCountStore = create((set) => ({
  giftBoxCount: 5,
  setGiftBoxCountPlus: ()=> set(state => ({ giftBoxCount: state.giftBoxCount + 1 })),
}));
