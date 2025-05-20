import { openDB } from 'idb';

const DB_NAME = 'myDatabase';
const STORE_NAME = 'myStore';

export async function initDB() {
    const db = await openDB(DB_NAME, 1, {
        upgrade(db) {
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME, {
                    keyPath: 'name'
                });
            }
        },
    });
    return db;
}

export async function saveData(item: { name: string; lat: number; lng: number; base64: string }) {
    const db = await initDB();
    await db.put(STORE_NAME, item);
}

export async function getAllData(): Promise<
    { name: string; lat: number; lng: number; base64: string }[]
> {
    const db = await initDB();
    return await db.getAll(STORE_NAME);
}

export async function deleteData(name: string) {
    const db = await initDB();
    await db.delete(STORE_NAME, name);
}