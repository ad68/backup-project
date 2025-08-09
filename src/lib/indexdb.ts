import { openDB, type IDBPDatabase } from 'idb';
const DB_NAME = 'myDatabase';
const OFFLINE_DB_NAME = "offline-db"
const STORE_NAME = 'locateReviews';

export async function initDB() {
    const db = await openDB(DB_NAME, 1, {
        upgrade(db) {
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                const store = db.createObjectStore('locateReviews', { autoIncrement: true });
                store.createIndex('policyId', 'policyId', { unique: true });
                store.createIndex('beneficiary', 'beneficiary.title');
                store.createIndex('policyId_beneficiary', ['policyId', 'beneficiary.title'], { unique: false });
            }
            if (!db.objectStoreNames.contains('users')) {
                db.createObjectStore('users', { keyPath: 'id' });
            }
            if (!db.objectStoreNames.contains('messages')) {
                db.createObjectStore('messages', { keyPath: 'id' });
            }
        },
    });
    return db;
}
export async function searchByIndex<T>(
    databaseName: string,
    storeName: string,
    indexName: string,
    key: IDBValidKey | IDBValidKey[]
): Promise<T[]> {
    const db = await openDB(databaseName, 1);
    if (!db.objectStoreNames.contains(storeName)) {
        throw new Error(`Object store "${storeName}" not found`);
    }
    const tx = db.transaction(storeName, 'readonly');
    const store = tx.objectStore(storeName);
    if (!store.indexNames.contains(indexName)) {
        throw new Error(`Index "${indexName}" not found in store "${storeName}"`);
    }
    const index = store.index(indexName);
    const results = await index.getAll(key);
    await tx.done;
    return results;
}

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
export async function clearStore() {
    const db = await openDB(DB_NAME);
    const tx = db.transaction(STORE_NAME, 'readwrite');
    await tx.objectStore(STORE_NAME).clear();
    await tx.done;
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
///create database
export async function initOfflineDb() {
    const db = await openDB(OFFLINE_DB_NAME, 1, {
        upgrade(db) {

            if (!db.objectStoreNames.contains('tasks')) {
                db.createObjectStore('tasks', {
                    keyPath: 'personalCode'
                    /*    autoIncrement: true, */
                });
            }
            if (!db.objectStoreNames.contains('reviews')) {
                db.createObjectStore('reviews', {
                    keyPath: 'id'
                });
            }
        },
    });
    return db;
}

export const addRecordToDb = async (db: IDBPDatabase, storeName: string, object: any) => {
    try {
        const tx = db.transaction(storeName, 'readwrite');
        const store = tx.objectStore(storeName);
        const id = await store.add(object);
        await tx.done;
        return id
    }
    catch (err) {
        console.error('خطا در ذخیره اطلاعات', err);
        throw err;
    }
}
//get record from store
export const getAllRecord = async (db: IDBPDatabase, storeName: string) => {
    try {
        const tx = db.transaction(storeName, 'readonly');
        const store = tx.objectStore(storeName);
        const allRecords = await store.getAll();
        await tx.done;
        return allRecords
    }
    catch (err) {
        console.error('خطا در دریافت اطلاعات', err);
        throw err;
    }
}
////delete record from db
export const deleteRecordFromDb = async (
    db: IDBPDatabase,
    storeName: string,
    key: IDBValidKey
): Promise<void> => {
    try {
        const tx = db.transaction(storeName, 'readwrite');
        const store = tx.objectStore(storeName);
        await store.delete(key);
        await tx.done;
    } catch (err) {
        console.error('خطا در حذف رکورد:', err);
        throw err;
    }
};
export const getRecordById = async (
    db: IDBPDatabase,
    storeName: string,
    key: IDBValidKey
): Promise<any | undefined> => {
    try {
        const tx = db.transaction(storeName, 'readonly');
        const store = tx.objectStore(storeName);
        const record = await store.get(key);
        await tx.done;
        return record;
    } catch (err) {
        console.error('خطا در دریافت رکورد با آیدی:', err);
        throw err;
    }
};
export const updateRecordInDb = async (
    db: IDBPDatabase,
    storeName: string,
    object: any
): Promise<void> => {
    try {
        const tx = db.transaction(storeName, 'readwrite');
        const store = tx.objectStore(storeName);
        await store.put(object);  // اینجا put رکورد رو آپدیت یا اضافه می‌کنه
        await tx.done;
    } catch (err) {
        console.error('خطا در آپدیت رکورد:', err);
        throw err;
    }
};
