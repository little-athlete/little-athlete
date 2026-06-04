# Design Tokens — Little Athlete v2

Daftar nilai desain dari Figma v2. Sumber kebenaran nilai → di-port ke `src/app/globals.css`
(Tailwind v4 CSS-first; **tidak ada** `tailwind.config`).

> Aturan: komponen pakai **token semantik** (`bg-primary`, `text-brand-accent`, dll), bukan hex mentah.
> Mengubah nilai = ubah 1 tempat di `globals.css`, seluruh app ikut berubah.

## Warna — TERKUNCI (Landing, 2026-06-04)

| Token (utility) | Hex | Dipakai untuk |
|-----------------|-----|---------------|
| `primary` (`bg-primary`/`text-primary`) | `#245BFF` | judul biru ("The First Ever", "From Sports to Music"), kartu/section stats, banner CTA, link & heading footer, logo, **bintang testimoni** |
| `primary-foreground` | `#FFFFFF` | teks putih di atas biru |
| `brand-accent` (`text-brand-accent`) | `#ED8F15` | aksen oranye: "Sports & Music", "The trust", label umur program |
| `primary-soft` (`bg-primary-soft`) | `#DCE5FF` | tombol lembut (mis. "Certifications"); teksnya `text-primary` (`#245BFF`) |
| `foreground` | `#000000` | teks gelap **default**: navbar, "420+ Happy Parents", teks testimoni, hero heading |
| `muted-foreground` | `#64748B` | semua paragraf/deskripsi abu |
| `background` | `#FFFFFF` | bg seluruh halaman (tidak ada section hitam — itu PNG transparan yang belum render) |
| `section-muted` (`bg-section-muted`) | `#F8FAFF` | bg ungu-muda section Our Story |
| `surface-dark` (`bg-surface-dark`) | `#0F172A` | footer **dan** panel angka di dalam kartu stats |
| `border` | `#E5E7EB` | garis tipis |
| `wa` (`bg-wa`) | `#09BB62` | tombol WhatsApp "Contact Us" |

> Catatan: token fungsional shadcn (`secondary`, `accent`, `muted`) **tidak diubah** — dipakai admin UI.
> Aksen oranye sengaja dinamai `brand-accent` (bukan `secondary`) agar tidak bentrok semantik shadcn.

## Font — TERKUNCI

| Peran | Font | Token | Catatan |
|-------|------|-------|---------|
| Default (heading + body) | **Parkinsans** | `font-sans` / `font-heading` | Google Fonts (variable). Ganti Sora + Plus Jakarta v1. |
| Footer | **Poppins** | `font-footer` | Google Fonts. Khusus area footer. |

## Radius / spacing / shadow

| Token | Nilai | Catatan |
|-------|-------|---------|
| `--radius` | `0.6rem` (~9.62px Figma) | sudut kartu program/foto |
| shadow card | `TBD` | diperhalus saat implement section |
