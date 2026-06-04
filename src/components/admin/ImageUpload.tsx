'use client'

import { useRef, useState } from 'react'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { storage, auth } from '@/config/firebase'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface ImageUploadProps {
  label: string
  value: string
  onChange: (url: string) => void
  /** Storage path prefix, e.g. "landing" → stored as landing/<timestamp>-<filename> */
  folder?: string
}

export function ImageUpload({ label, value, onChange, folder = 'uploads' }: ImageUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')

  const handleFile = async (file: File) => {
    setError('')
    // Firebase restores the persisted session asynchronously, so currentUser can be
    // null for a moment after a page load. Wait until auth has rehydrated before checking.
    await auth.authStateReady()
    if (!auth.currentUser) {
      setError('Sesi habis — login ulang.')
      return
    }
    setUploading(true)
    try {
      const path = `${folder}/${Date.now()}-${file.name}`
      const storageRef = ref(storage, path)
      await uploadBytes(storageRef, file)
      const url = await getDownloadURL(storageRef)
      onChange(url)
    } catch {
      setError('Upload gagal. Coba lagi.')
    } finally {
      setUploading(false)
    }
  }

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) handleFile(file)
  }

  return (
    <div className="grid gap-2">
      <Label>{label}</Label>
      <div className="flex items-center gap-2">
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="URL gambar atau upload di bawah"
          className="flex-1 text-xs"
        />
        <Button
          type="button"
          variant="outline"
          size="sm"
          disabled={uploading}
          onClick={() => inputRef.current?.click()}
        >
          {uploading ? 'Uploading…' : 'Upload'}
        </Button>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={onInputChange}
        />
      </div>
      {value && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={value} alt="preview" className="h-24 w-auto rounded-md border object-cover" />
      )}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  )
}
