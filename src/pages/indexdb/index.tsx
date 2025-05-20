import { useEffect, useState } from 'react';
import { saveData, getAllData } from '@/lib/indexdb';

export default function LocationList() {
    const [locations, setLocations] = useState<
        { name: string; lat: number; lng: number; base64: string }[]
    >([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllData();
            setLocations(data);
        };
        fetchData();
    }, []);

    const handleAddLocation = async () => {
        const newItem = {
            name: 'Example Place1',
            lat: 35.6892,
            lng: 51.3890,
            base64: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA...',
        };
        await saveData(newItem);
        const updatedData = await getAllData();
        setLocations(updatedData);
    };

    return (
        <div>
            <button onClick={handleAddLocation}>افزودن موقعیت</button>
            <ul>
                {locations.map((loc) => (
                    <li key={loc.name}>
                        {loc.name} - ({loc.lat}, {loc.lng})<br />
                        <img src={loc.base64} alt={loc.name} width={100} />
                    </li>
                ))}
            </ul>
        </div>
    );
}