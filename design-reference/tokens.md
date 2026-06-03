# Design Tokens — Little Athlete v2

Daftar berjalan nilai desain dari Figma v2. Isi bertahap sambil review Figma;
nilai di sini lalu di-port ke `tailwind.config.ts` + `globals.css` (CSS variables shadcn).

> Aturan: komponen pakai **token semantik** (`bg-primary`, dll), bukan hex mentah.
> Jadi mengubah nilai di sini = ubah 1 tempat di config, seluruh app ikut berubah.

## Warna (semantic)

| Token | Hex (Figma) | Catatan |
|-------|-------------|---------|
| primary | `TBD` | **Berubah dari v1** (v1: `#FFDE31` kuning). Isi nilai baru dari Figma. |
| secondary | `TBD` | v1: `#0366FF` biru |
| background | `TBD` | |
| foreground (teks utama) | `TBD` | |
| muted / teks sekunder | `TBD` | |
| border | `TBD` | v1: `#EEEEEE` |
| (tambah sesuai temuan) | | |

## Font

| Peran | Font | Ukuran utama | Catatan |
|-------|------|--------------|---------|
| Heading | `TBD` | | v1: Sora |
| Body | `TBD` | | v1: Plus Jakarta Sans |

## Radius / spacing / shadow (opsional)

| Token | Nilai | Catatan |
|-------|-------|---------|
| radius | `TBD` | |
| shadow card | `TBD` | v1: `0px 12px 24px rgba(0,0,0,0.1)` |
