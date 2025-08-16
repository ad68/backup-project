import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
type UserInfo = {
    username: string
    fullName: string
    displayName: string
    profilePictureFileId: number
    profilePictureFileCode: string
    picture: string
}
type AuthState = {
    isAuthenticated: boolean;
    token: string | null;
    userInfo: UserInfo | undefined;
    setToken: (token: string) => void;
    login: (token: string, userInfo: any) => void;
    logout: () => void;
};

export const useAuthStore = create<AuthState>()(
    devtools(
        persist(
            (set) => ({
                isAuthenticated: false,
                token: null,
                userInfo: undefined,
                setToken: (token) => set({ isAuthenticated: true, token: token }, false, 'auth/setToken'),
                login: (token, userInfo) => set({ isAuthenticated: true, token: token, userInfo: userInfo }, false, 'auth/login'),
                logout: () => set({ isAuthenticated: false, token: null }, false, 'auth/logout'),
            }),
            {
                name: 'auth-storage',
            }
        ),
        {
            name: 'auth-store',
        }
    )
);
