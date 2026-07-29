import type { Mistake, WordProgress } from '../types'

const DB_NAME = 'englishflow'
const DB_VERSION = 2
const STORE_PROGRESS = 'word_progress'
const STORE_META = 'meta'
const STORE_MISTAKES = 'mistakes'

let dbPromise: Promise<IDBDatabase> | null = null

function openDB(): Promise<IDBDatabase> {
  if (dbPromise) return dbPromise
  dbPromise = new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION)
    req.onupgradeneeded = () => {
      const db = req.result
      if (!db.objectStoreNames.contains(STORE_PROGRESS)) {
        db.createObjectStore(STORE_PROGRESS, { keyPath: 'word' })
      }
      if (!db.objectStoreNames.contains(STORE_META)) {
        db.createObjectStore(STORE_META, { keyPath: 'key' })
      }
      if (!db.objectStoreNames.contains(STORE_MISTAKES)) {
        db.createObjectStore(STORE_MISTAKES, { keyPath: 'id' })
      }
    }
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => reject(req.error)
  })
  return dbPromise
}

function tx<T>(
  store: string,
  mode: IDBTransactionMode,
  fn: (s: IDBObjectStore) => IDBRequest<T>
): Promise<T> {
  return openDB().then(
    (db) =>
      new Promise<T>((resolve, reject) => {
        const t = db.transaction(store, mode)
        const req = fn(t.objectStore(store))
        req.onsuccess = () => resolve(req.result)
        req.onerror = () => reject(req.error)
      })
  )
}

export async function getProgress(word: string): Promise<WordProgress | undefined> {
  return tx<WordProgress | undefined>(STORE_PROGRESS, 'readonly', (s) =>
    s.get(word) as IDBRequest<WordProgress | undefined>
  )
}

export async function getAllProgress(): Promise<WordProgress[]> {
  return tx<WordProgress[]>(STORE_PROGRESS, 'readonly', (s) => s.getAll() as IDBRequest<WordProgress[]>)
}

export async function putProgress(p: WordProgress): Promise<void> {
  await tx(STORE_PROGRESS, 'readwrite', (s) => s.put(p))
}

export async function getMeta<T>(key: string): Promise<T | undefined> {
  const r = await tx<{ key: string; value: T } | undefined>(STORE_META, 'readonly', (s) =>
    s.get(key) as IDBRequest<{ key: string; value: T } | undefined>
  )
  return r?.value
}

export async function setMeta<T>(key: string, value: T): Promise<void> {
  await tx(STORE_META, 'readwrite', (s) =>
    s.put({ key, value }) as IDBRequest<IDBValidKey>
  )
}

// ===== 错题本 CRUD =====
export async function getMistake(id: string): Promise<Mistake | undefined> {
  return tx<Mistake | undefined>(STORE_MISTAKES, 'readonly', (s) =>
    s.get(id) as IDBRequest<Mistake | undefined>
  )
}

export async function getAllMistakes(): Promise<Mistake[]> {
  return tx<Mistake[]>(STORE_MISTAKES, 'readonly', (s) =>
    s.getAll() as IDBRequest<Mistake[]>
  )
}

export async function putMistake(m: Mistake): Promise<void> {
  await tx(STORE_MISTAKES, 'readwrite', (s) => s.put(m) as IDBRequest<IDBValidKey>)
}

export async function deleteMistake(id: string): Promise<void> {
  await tx(STORE_MISTAKES, 'readwrite', (s) => s.delete(id) as IDBRequest<undefined>)
}

export async function clearMistakes(): Promise<void> {
  await tx(STORE_MISTAKES, 'readwrite', (s) => s.clear() as IDBRequest<undefined>)
}
