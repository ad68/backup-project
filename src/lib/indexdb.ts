import { openDB } from 'idb';

const DB_NAME = 'myDatabase';
const STORE_NAME = 'locateReviews';

export async function initDB() {
    const db = await openDB(DB_NAME, 1, {
        upgrade(db) {
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME, { keyPath: 'policyId' });
            }
        },
    });
    return db;
}
/* export const initDB = () => {
    const request = indexedDB.open(DB_NAME, 1);
  
    request.onupgradeneeded = function () {
        const db = request.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
            db.createObjectStore(STORE_NAME, { keyPath: "id" });
        }
    };

    request.onerror = function () {
        console.error("IndexedDB init error", request.error);
    };

    request.onsuccess = function () {
        console.log("IndexedDB initialized successfully");
    };
 
};
 */


export async function saveData(item: any): Promise<IDBValidKey> {
    const db = await initDB();



    return await db.put(STORE_NAME, item);
}
export async function bulkSaveToIDB(items: any[]): Promise<void> {
    const db = await initDB();
    const tx = db.transaction('locateReviews', 'readwrite');
    const store = tx.objectStore('locateReviews');

    for (const item of items) {
        if (!item.policyId) {
            console.warn('Skipping item without policyId:', item);
            continue;
        }
        await store.put(item);
    }

    await tx.done;
}
export async function getAllData(): Promise<
    { name: string; lat: number; lng: number; base64: string }[]
> {
    const db = await initDB();
    return await db.getAll(STORE_NAME);
}

export async function deleteData(name: string): Promise<void> {
    const db = await initDB();
    await db.delete(STORE_NAME, name);
}


interface PaginatedResult<T> {
    data: T[];
    totalPages: number;
    totalItems: number;
}

export async function getPaginatedDataFromIDB<T>(
    databaseName: string,
    storeName: string,
    pageNumber: number,
    pageSize: number = 10
): Promise<PaginatedResult<T>> {
    const db = await openDB(databaseName, 1);
    const tx = db.transaction(storeName, 'readonly');
    const store = tx.objectStore(storeName);

    const allData: T[] = await store.getAll();
    await tx.done;

    const totalItems = allData.length;
    const totalPages = Math.ceil(totalItems / pageSize);
    const start = (pageNumber - 1) * pageSize;
    const end = start + pageSize;

    const data = allData.slice(start, end);

    return {
        data,
        totalPages,
        totalItems
    };
}