'use client'

import { useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { signOut } from 'firebase/auth'
import { auth } from '@/config/firebase'
import { logoutAction } from '@/actions/logoutAction'
import { Button } from '@/components/ui/button'

export function LogoutButton() {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const onLogout = () => {
    startTransition(async () => {
      await signOut(auth)
      await logoutAction()
      router.push('/admin/login')
      router.refresh()
    })
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      className="w-full"
      disabled={isPending}
      onClick={onLogout}
    >
      {isPending ? 'Keluar…' : 'Logout'}
    </Button>
  )
}
