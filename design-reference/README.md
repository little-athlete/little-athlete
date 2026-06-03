# Design Reference — Little Athlete v2

Folder ini menyimpan acuan visual dari **Figma v2** (export gambar) untuk dipakai
saat membangun ulang website. Sumber kebenaran visual = Figma; folder ini = snapshot-nya.

## Cara export dari Figma (free, tanpa Dev Mode/MCP)

1. Pilih frame/artboard di Figma.
2. Panel kanan bawah → **Export** → format **PNG**.
3. Skala:
   - **Planning / full-page** → `2x` (cukup terbaca, hemat ukuran).
   - **Implementasi / per-section** → `2x`–`3x` (detail spacing & teks kecil terlihat).
4. Simpan ke subfolder yang sesuai (lihat struktur di bawah).

## Aturan penamaan

`NN-nama-breakpoint.png` — diawali nomor urut, sebutkan breakpoint.
Contoh: `01-landing-desktop.png`, `02-landing-mobile.png`, `03-hero-section-desktop.png`.

## Struktur folder

```
design-reference/
├── landing/        # halaman home (full + per-section)
├── about-us/
├── location/
├── certification/
├── program/        # daftar program
├── program-detail/ # halaman detail satu program
└── admin/          # screen-screen admin/CMS (jika ada di Figma)
```

## Aset (logo, ikon, ilustrasi)

Aset yang benar-benar dipakai di web **jangan** taruh di sini — export sebagai
**SVG** (vektor: logo/ikon) atau **PNG** (foto) langsung ke folder `public/`.

## Token desain (opsional, sangat membantu)

Kalau sempat, catat nilai pasti dari Figma (klik elemen → panel kanan):

- Warna: primary, secondary, background, teks (hex).
- Font: heading & body (nama + ukuran utama).

Tulis di `design-reference/tokens.md`. Kalau tidak ada, Claude estimasi dari gambar
lalu difinetune.
