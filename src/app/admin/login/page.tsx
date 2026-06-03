import { redirect } from 'next/navigation'
import { validateUser } from '@/utils/authValidation'

export default async function LoginPage() {
  const { isVerifyUser } = await validateUser()
  if (isVerifyUser) redirect('/admin')

  return (
    <main className="flex min-h-screen items-center justify-center bg-secondary">
      <div className="rounded-lg bg-white p-8 shadow">
        <h1 className="text-xl font-bold">Admin Login — placeholder</h1>
        <p className="text-muted-foreground text-sm">Form login dibangun saat modul auth.</p>
      </div>
    </main>
  )
}
