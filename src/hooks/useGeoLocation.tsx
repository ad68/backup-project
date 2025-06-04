import { useEffect, useState } from 'react';

type Geolocation = {
    lat: number;
    lng: number;
} | null;

type GeolocationError = string | null;

export default function useGeolocation() {
    const [location, setLocation] = useState<Geolocation>(null);
    const [error, setError] = useState<GeolocationError>(null);
    useEffect(() => {
        if (!navigator.geolocation) {
            setError('مرورگر از Geolocation پشتیبانی نمی‌کند.');
            return;
        }
        const geoSuccess = (position: GeolocationPosition) => {
            setLocation({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            });
        };
        const geoError = (err: GeolocationPositionError) => {
            switch (err.code) {
                case err.PERMISSION_DENIED:
                    setError('دسترسی به موقعیت مکانی رد شد.');
                    break;
                case err.POSITION_UNAVAILABLE:
                    setError('موقعیت مکانی در دسترس نیست.');
                    break;
                case err.TIMEOUT:
                    setError('درخواست موقعیت مکانی زمان‌بر بود.');
                    break;
                default:
                    setError('خطای ناشناخته در دریافت موقعیت.');
            }
        };
        navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
    }, []);

    return { location, error };
}
