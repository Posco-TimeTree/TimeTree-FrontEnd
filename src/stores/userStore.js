import {create} from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'
import { deleteCookie, getCookie, setCookie } from '../utils/auth/cookies';

export const useUserStore = create(
  persist(
    (set) => ({
      user: {
        id: 0,
        name: '',
        email: '',
        token: '',
      },
      setUser: (userData) => set({ user: userData }),
    }),
    {
      name: 'userStore', 
      storage: localStorage,
    }
  )
);
