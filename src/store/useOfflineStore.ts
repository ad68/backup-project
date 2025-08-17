import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
type Weather = {
    cityName: string,
    description: string,
    temperature: number,
    cloudiness: number,
    maxTemperature: number,
    minTemperature: number,
    sunrise: number,
    sunset: number,
    windSpeed: number,
}
type OfflineMode = {
    isOnline: boolean;
    weather: Weather;
    setWeather: (value: Weather) => void
    goToOnline: () => void
    goToOffline: () => void
};

const initialWeatherData = {
    cityName: "نامعلوم",
    description: "نامعلوم",
    temperature: 0,
    cloudiness: 0,
    maxTemperature: 0,
    minTemperature: 0,
    sunrise: 0,
    sunset: 0,
    windSpeed: 0,
}

export const useOfflineStore = create<OfflineMode>()(
    devtools(
        persist(
            (set) => ({
                weather: initialWeatherData,
                setWeather: (value: Weather) => set({ weather: value }, false, 'offlineMode/weather'),
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
