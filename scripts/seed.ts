import 'dotenv/config'
import { adminDb } from '../src/lib/firebase-admin'

/**
 * Seed dokumen singleton awal supaya admin langsung ada yang diedit.
 * Jalankan: npm run seed
 * Data per-modul ditambah saat modul dikerjakan.
 */
async function seed() {
  const singletons: Record<string, object> = {
    site_settings: { logo_url: '', wa_url: '', social_media_data: [] },
    page_landing: {},
    page_about: {},
    page_location: {},
    page_certification: {},
  }

  for (const [docId, data] of Object.entries(singletons)) {
    await adminDb.collection('singletons').doc(docId).set(data, { merge: true })
    console.log(`seeded singletons/${docId}`)
  }

  console.log('Seed selesai.')
}

seed()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error('Seed gagal:', err)
    process.exit(1)
  })
