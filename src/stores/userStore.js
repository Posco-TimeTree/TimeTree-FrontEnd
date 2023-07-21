import {create} from 'zustand';
export const useUserStore = create((set) => ({
  user: {
    id: 3,
    name: 'skskskks미진',
    email: 'mijinasdfsdf@naver.com',
    // 기타 다른 필요한 사용자 정보들...
  },
  setUser: (userData) => set({ user: userData }),
}));
