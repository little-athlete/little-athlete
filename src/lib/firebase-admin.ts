import { cert, getApps, initializeApp, type App } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

function formatPrivateKey(raw: string | undefined): string | undefined {
  if (!raw) return undefined
  if (raw.includes('\n')) return raw
  if (raw.includes('\\n')) return raw.replace(/\\n/g, '\n')
  // Key has no newlines at all — rebuild proper PEM format
  const body = raw
    .replace('-----BEGIN PRIVATE KEY-----', '')
    .replace('-----END PRIVATE KEY-----', '')
    .trim()
  const wrapped = body.match(/.{1,64}/g)?.join('\n') ?? body
  return `-----BEGIN PRIVATE KEY-----\n${wrapped}\n-----END PRIVATE KEY-----\n`
}

function getAdminApp(): App {
  const existing = getApps()
  if (existing.length > 0) return existing[0]

  return initializeApp({
    credential: cert({
      projectId: process.env.NEXT_FIREBASE_ADMIN_PROJECT_ID,
      clientEmail: process.env.NEXT_FIREBASE_ADMIN_CLIENT_EMAIL,
      privateKey: formatPrivateKey(process.env.NEXT_FIREBASE_ADMIN_PRIVATE_KEY),
    }),
  })
}

export const adminApp = getAdminApp()
export const adminDb = getFirestore(adminApp)
