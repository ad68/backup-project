import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type AuthState = {
    isAuthenticated: boolean;
    token: string | null;

    login: (token: string) => void;
    logout: () => void;
};

export const useAuthStore = create<AuthState>()(
    devtools(
        persist(
            (set) => ({
                isAuthenticated: false,
                token: null,
                login: (token) =>
                    set(
                        { isAuthenticated: true, token: token },
                        false,
                        'auth/login'
                    ),

                logout: () =>
                    set(
                        { isAuthenticated: false, token: null },
                        false,
                        'auth/logout'
                    ),
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
