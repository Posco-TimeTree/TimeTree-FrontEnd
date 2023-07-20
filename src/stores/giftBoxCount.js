import { create } from 'zustand';

export const useGiftBoxCountStore = create((set) => ({
  giftBoxCount: 10,
  setGiftBoxCountPlus: ()=> set(state => ({ giftBoxCount: state.giftBoxCount + 1 })),
}));
