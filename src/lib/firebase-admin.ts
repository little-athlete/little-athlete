import { cert, getApps, initializeApp, type App } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

function getAdminApp(): App {
  const existing = getApps()
  if (existing.length > 0) return existing[0]

  return initializeApp({
    credential: cert({
      projectId: process.env.NEXT_FIREBASE_ADMIN_PROJECT_ID,
      clientEmail: process.env.NEXT_FIREBASE_ADMIN_CLIENT_EMAIL,
      privateKey: process.env.NEXT_FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
  })
}

export const adminApp = getAdminApp()
export const adminDb = getFirestore(adminApp)
