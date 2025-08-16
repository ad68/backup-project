import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type OfflineMode = {
    isOnline: boolean;
    goToOnline: () => void
    goToOffline: () => void
};

export const useOfflineStore = create<OfflineMode>()(
    devtools(
        persist(
            (set) => ({
                isOnline: true,
                goToOnline: () => set({ isOnline: true }, false, 'offlineMode/offline'),
                goToOffline: () => set({ isOnline: false }, false, 'offlineMode/online'),
            }),
            {
                name: 'offline-storage',
            }
        ),
        {
            name: 'offline-store',
        }
    )
);
