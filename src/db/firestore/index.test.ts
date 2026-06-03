import { describe, expect, it, vi } from 'vitest'

// Mock firebase/firestore so helpers can be tested without a real connection
vi.mock('firebase/firestore', () => ({
  collection: vi.fn((_db, name) => ({ name })),
  getDocs: vi.fn(async () => ({
    docs: [
      { id: 'a', data: () => ({ title: 'A' }) },
      { id: 'b', data: () => ({ title: 'B' }) },
    ],
  })),
  doc: vi.fn((_db, coll, id) => ({ coll, id })),
  deleteDoc: vi.fn(async () => undefined),
  addDoc: vi.fn(),
  getDoc: vi.fn(),
  setDoc: vi.fn(),
}))
vi.mock('@/config/firebase', () => ({ firestore: {} }))

import { getAllDocs, deleteDocById } from './index'

describe('getAllDocs', () => {
  it('mengembalikan semua dokumen beserta id', async () => {
    const result = await getAllDocs('programs')
    expect(result).toEqual([
      { id: 'a', title: 'A' },
      { id: 'b', title: 'B' },
    ])
  })
})

describe('deleteDocById', () => {
  it('memanggil deleteDoc untuk doc yang benar', async () => {
    const { deleteDoc } = await import('firebase/firestore')
    await deleteDocById('programs', 'a')
    expect(deleteDoc).toHaveBeenCalledWith({ coll: 'programs', id: 'a' })
  })
})
