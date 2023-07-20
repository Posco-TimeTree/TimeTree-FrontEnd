import {create} from 'zustand';
export const useUserStore = create((set) => ({
  user: {
    id: 0,
    name: '미진',
    email: '',
    // 기타 다른 필요한 사용자 정보들...
  },
  setUser: (userData) => set({ user: userData }),
}));
