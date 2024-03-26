import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type TUserStore = {
  user: TUser | null;
  setUser: (user: TUser | null) => void;
  reset: () => void;
}

const initialState = {
  user: { name: 'John' },
}

const useUserStore = create<TUserStore>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        setUser(user) {
          set((state) => ({
            ...state,
            user
          }))
        },
        reset() {
          set(initialState);
        }
      }),
      {
        name: import.meta.env.VITE_APP_USER_STORAGE || 'tg-mini-app-user'
      })
  )
)

export default useUserStore;