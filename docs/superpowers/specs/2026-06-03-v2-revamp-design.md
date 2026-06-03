# Little Athlete — v2 Revamp Design (Living Doc)

> **Status:** 🟢 Desain lengkap. Plan Fase 0 siap dieksekusi.
> **Last updated:** 2026-06-03
> Ini adalah dokumen hidup (checkpoint). Setiap keputusan baru ditambahkan di sini supaya
> bisa dilanjutkan di chat manapun. Untuk melanjutkan: baca dokumen ini dari atas.

## 0. Cara Melanjutkan & Progress Tracker

**Di chat baru, ketik:** "Lanjutkan revamp little-athlete v2. Baca design doc + plan. [status]."
Lalu lampirkan PNG section Figma untuk modul yang dikerjakan. Claude akan: baca doc+plan ini, cek `git log` branch `revamp`, lanjut sesuai workflow Bagian 8.

**Progress (update tiap selesai):**

| Tahap | Plan | Status |
|-------|------|--------|
| Brainstorm & desain | (spec ini) | ✅ selesai |
| Fase 0 — Fondasi | `plans/2026-06-03-v2-fase-0-foundation.md` | ⬜ belum dieksekusi |
| Modul Landing | (plan terpisah, dibuat saat Figma section siap) | ⬜ belum |
| Modul About Us | (plan terpisah) | ⬜ belum |
| Modul Program + Detail | (plan terpisah) | ⬜ belum |
| Modul Location | (plan terpisah) | ⬜ belum |
| Modul Certification | (plan terpisah) | ⬜ belum |
| Merge `revamp` → `main` (go-live v2) | — | ⬜ belum |

> Branch kerja: `revamp`. `main` = v1 live (jangan diganggu sampai go-live).

---

## 1. Tujuan

Revamp total website Little Athlete dari v1 ke v2:
- Tampilan berubah total (acuan: desain Figma v2 — sudah ada).
- Tambah halaman baru (tidak hanya landing page).
- Admin/CMS diperbesar, struktur konten berbeda dari v1.
- Project santai, dikerjakan bertahap lintas sesi chat.

## 2. Keputusan yang Sudah Final

| # | Keputusan | Catatan |
|---|-----------|---------|
| 1 | **Lanjut di repo & Firebase project yang SAMA** | Repo `little-athlete/little-athlete`, Firebase `little-athlete-667e4`. Reuse semua wiring & secret. Jangan bikin Firebase project baru. |
| 2 | **Kerjakan di branch `revamp`** | `main` (v1) tetap LIVE selama pembangunan v2. Merge ke main saat siap. |
| 3 | **Upgrade Next.js ke stable terbaru** | Dari 15.1.5. React 19 tetap. Versi pasti dicek saat setup. |
| 4 | **Figma v2 = sumber kebenaran visual** | — |
| 5 | **Styling: Tailwind (tetap) + shadcn/ui** | Bukan Chakra. Landing custom Tailwind (SEO/RSC). Admin pakai komponen shadcn (form/tabel/dialog). Satu sistem styling, komponen di-copy ke repo. |
| 6 | **Deliver Figma: export PNG ke repo** | Figma free (no Dev Mode/MCP) → export frame jadi PNG @2x ke folder `design-reference/`, Claude baca sebagai gambar. Asset (logo/ikon/ilustrasi) export SVG/PNG ke `public/`. |

## 3. Yang WAJIB Dipertahankan (jangan dihapus saat revamp)

- `.env` — 3 secret Firebase Admin (`NEXT_FIREBASE_ADMIN_*`)
- `src/config/firebase.ts` — config client Firebase
- Init Admin SDK di `src/app/layout.tsx` (pola `getApps().length == 0`)
- `src/utils/authValidation.ts`, `src/actions/loginAction.ts` — auth admin (cookie + verify token)
- `apphosting.yaml`, `firebase.json`, `.firebaserc`
- `firestore.rules`, `storage.rules`, `firestore.indexes.json`

## 4. Inventaris Halaman v2 (public)

Dari Figma v2 (acuan: `design-reference/`):

1. **Landing / Home** — hero, galeri foto, story ("The First Ever Semi Private & Sports Music School"), intro program, 3 kartu program (School Readiness/Toddler 1.5–3yo, Exploration/Preschool 3–6yo, Focused/Kids 6–12yo), stats ("The trust that we earned"), testimoni ("420+ Happy Parents"), CTA banner, footer.
2. **About Us**
3. **Location**
4. **Certification**
5. **Program** (daftar program)
6. **Detail Program** (halaman detail per program — kemungkinan dynamic route `/program/[slug]`)

Nav header: Logo · About Us · Programs · Location · Certifications · tombol **Contact Us** (WhatsApp).
Footer: About Us (Vision and Mission, Achievement) · Programs (Multi Sports, Basketball and Karate, Multi Instruments, Motoric Class) · More (Location, Certification) · social (IG, WA).

## 5. Model Data Firestore v2 (DISETUJUI)

Multi-collection (per entitas), menggantikan 1-dokumen-tunggal v1.

**Singleton (1 dokumen):**
- `site_settings` — logo, nav, footer, social media, nomor WA, SEO global
- `page_landing` — konten section landing (hero, story, stats, dll)
- `page_about` — konten About Us
- `page_location` — intro/teks halaman Location
- `page_certification` — intro/teks halaman Certification

**Collection (banyak dokumen, bisa Add/Edit/Hapus di admin):**
- `programs` — tiap program: `slug`, nama, umur, deskripsi, gambar → Program list + Detail Program (`/program/[slug]`)
- `locations` — tiap cabang: nama, alamat, peta, jam
- `certifications` — tiap sertifikasi
- `testimonials` — tiap testimoni

Reuse fungsi generik v1 (`insertDoc`, `updateDoc`, `getOneDocById` di `src/db/firestore/index.ts`); tambah `getAllDocs`, `deleteDoc`, + helper per-collection.

### 5a. Cara mengelola data (user handle BE sendiri, tanpa tim BE)

Tidak ada backend terpisah — BE = Server Actions + firebase-admin di repo ini.
1. **Admin Panel (utama)** — add/edit/hapus entitas sehari-hari lewat UI.
2. **Seed script (`npm run seed`, sekali di awal)** — bikin dokumen singleton default kosong supaya admin langsung ada yang diedit.
3. **Firebase Console (darurat)** — tambal manual.

Menambah entitas baru ke depan: tambah interface → tambah helper collection → tambah screen admin (list+form shadcn) → (opsional) seed.

## 6. Strategi SEO + Rendering (DISETUJUI — pending detail)

Data ada di Firestore tapi tetap SEO-friendly dengan:
1. **Render server-side** — halaman publik baca Firestore via **firebase-admin di Server Component** (v1 baca via client SDK; v2 pindah ke admin SDK untuk publik).
2. **ISR + on-demand revalidation** — halaman di-cache statis; saat save di admin panggil `revalidatePath()` → update instan. (Ganti pola v1 `revalidate = 0` yang lambat.)
3. **`generateMetadata()` per halaman** — title/description/OG/Twitter dari Firestore; Detail Program punya SEO sendiri per slug.
4. **`generateStaticParams`** untuk `/program/[slug]` → pre-render semua program saat build.
5. **JSON-LD** (Organization/LocalBusiness) — isi slot kosong di layout v1, sumber dari `site_settings`/`locations`.
6. **`sitemap.ts` & `robots.ts` dinamis** — sitemap dari Firestore (termasuk semua slug program).
7. `next/image` + alt-text dari Firestore, canonical URL, OG image per halaman.

## 7. Struktur Admin v2 (DISETUJUI)

Layout sidebar (lanjutkan pola v1 AppBar+Sidebar, komponen shadcn). Per-page per modul.

| Menu | Mengelola | Tipe |
|------|-----------|------|
| Dashboard | ringkasan + link cepat | — |
| Site Settings | logo, nav, footer, social, WA, SEO global | Form singleton |
| Landing Page | semua section landing | Form singleton |
| About Us | konten About | Form singleton |
| Programs | list + CRUD (nama, slug, umur, deskripsi, gambar) | List + CRUD |
| Locations | list + CRUD + teks intro halaman | List + CRUD |
| Certifications | list + CRUD + teks intro halaman | List + CRUD |
| Testimonials | list + CRUD | List + CRUD |

- Singleton → satu halaman Form (edit→Save). Banyak → List → Form (Create/Edit/Delete).
- **Image upload → Firebase Storage** (simpan URL ke Firestore) — DISETUJUI.
- Setiap Save → `revalidatePath()` (update publik instan).
- **Auth:** lanjutkan login Firebase + cookie + `validateUser` v1. **Tanpa role dulu** (YAGNI) — semua akun akses penuh.
- **Prinsip "role-ready":** semua proteksi admin lewat SATU guard terpusat (lanjutan `validateUser()`), bukan dicek tersebar. Token Firebase membawa uid. → menambah role nanti cukup edit 1 tempat (field `role` + perluas guard), tanpa bongkar tiap halaman/aksi.

## 8. Workflow Kerja (DISETUJUI)

**Fase 0 — Fondasi (sekali):** branch `revamp`, upgrade Next.js (cek versi stable terkini), install+setup shadcn/ui, port wiring Firebase v1 (config, admin SDK, auth), layout dasar, lengkapi DB helper (`getAllDocs`, `deleteDoc`) + kerangka seed script.

**Design token (bagian Fase 0) — pendekatan 2-lapis:**
- Bangun **infrastruktur token** (datang otomatis dari `shadcn init`: CSS vars `--primary`, `--background`, dst di `globals.css` + map di `tailwind.config.ts`) dengan **nama semantik**.
- Isi nilai inti yang sudah diketahui (primary baru + font); sisanya placeholder.
- **Aturan keras:** komponen WAJIB pakai token semantik (`bg-primary`, `text-foreground`), **dilarang hex mentah** (`bg-[#xxxxxx]`). → ganti warna = edit 1 tempat, tanpa bongkar-pasang.
- **Nilai token diperhalus progresif** per modul sambil baca Figma. Daftar berjalan dicatat di `design-reference/tokens.md` lalu di-port ke config.
- Jangan ekstrak seluruh palet di awal (cukup: primary, secondary, background, foreground, neutral, font).

**Per modul (urutan: Landing → About → Program → Location → Certification) — ADMIN-FIRST:**
1. Export PNG full-page (planning).
2. Export PNG per-section (detail) saat dikerjakan.
3. ⭐ **Definisikan kontrak data (interface) dari Figma** ← pivot.
4. Bangun **modul admin** (list/form) untuk interface itu.
5. Seed data default + wiring revalidation.
6. Bangun **halaman publik** pixel-perfect (pakai data seed asli).
7. ⭐ **Rekonsiliasi**: jika muncul field baru saat pixel-perfect → update interface + admin + seed.

Prinsip: kontrak data lahir dari **analisa Figma → interface** (bukan dari halaman publik). Interface = pivot; admin & publik sama-sama dibangun di atasnya. Admin-first dipilih agar saat bangun publik sudah ada data seed asli untuk dirender. Satu modul tuntas sebelum lanjut. Mulai dari **Landing**.

## 9. Struktur Routing & Folder v2 (DISETUJUI)

Route groups App Router: `(public)` & `admin` punya layout terpisah.

```
src/app/
├── (public)/                 # layout = Header + Footer (data dari site_settings)
│   ├── layout.tsx
│   ├── page.tsx              # Landing (/)
│   ├── about-us/page.tsx
│   ├── location/page.tsx
│   ├── certification/page.tsx
│   └── program/
│       ├── page.tsx          # daftar program (/program)
│       └── [slug]/page.tsx   # detail program (/program/xxx) — generateStaticParams + generateMetadata
├── admin/
│   ├── login/page.tsx
│   └── (dashboard)/
│       ├── layout.tsx        # guard validateUser()
│       ├── page.tsx          # Dashboard
│       ├── settings/page.tsx
│       ├── landing/page.tsx
│       ├── about/page.tsx
│       ├── programs/  (list + [id] + new)
│       ├── locations/ (list + [id] + new)
│       ├── certifications/ (list + [id] + new)
│       └── testimonials/ (list + [id] + new)
├── sitemap.ts                # dari Firestore
├── robots.ts
└── layout.tsx                # root: font, init firebase-admin, JSON-LD

src/
├── components/{ui (shadcn), public, admin}/
├── db/firestore/             # helper + interfaces
├── lib/                      # utils, firebase-admin server reads, revalidate helpers
└── actions/                  # server actions (CRUD per modul)
```

## 9b. Status Keputusan TBD

- **Kebutuhan role** — RESOLVED: tidak ada role dulu; desain "role-ready" (guard terpusat).
- **Routing** — RESOLVED (lihat Bagian 9).
- **Versi Next.js stable** — diputuskan di awal Fase 0 (cek versi stable terbaru saat itu).
- **Nasib data konten v1:** mulai dari nol via seed + admin (kecuali user minta migrasi).

## 10. Log Keputusan (kronologis)

- **2026-06-03** — Sesi awal: konfirmasi lanjut di repo+Firebase yang sama, branch `revamp`, upgrade Next.js, v1 tetap live. User punya Figma v2. Mulai bahas styling library (Chakra UI).
- **2026-06-03** — Putuskan styling: **Tailwind + shadcn/ui** (bukan Chakra) karena Figma campuran (landing custom, admin fungsional) & ingin tetap RSC/SEO-friendly. Sepakati cara deliver Figma via export PNG ke `design-reference/` (Figma non-premium, tanpa MCP/Dev Mode).
- **2026-06-03** — User kirim full-page landing v2 (PNG 3x, terbaca jelas). Sepakat: **per-halaman penuh untuk planning, per-section @2–3x untuk implementasi**. Inventaris halaman v2 dicatat: Landing, About Us, Location, Certification, Program, Detail Program.
- **2026-06-03** — 6 halaman publik final (Contact = tombol WA). Admin **didesain sendiri** (tidak ada Figma admin), target **semua konten editable**. Setujui **model data multi-collection** (Bagian 5). Bahas cara kelola data (admin + seed script, user handle BE sendiri) & **strategi SEO** (server-render via admin SDK, ISR + on-demand revalidation, generateMetadata, generateStaticParams, JSON-LD, sitemap dinamis) — Bagian 6.
- **2026-06-03** — Setujui **struktur admin** (sidebar per-modul, Bagian 7), **image upload Firebase Storage**, **tanpa role dulu** (YAGNI, pending apakah klien ikut edit). Setujui **workflow kerja** (Fase 0 fondasi sekali, lalu per-modul; mulai Landing) — Bagian 8.
- **2026-06-03** — FINAL: workflow per-modul jadi **ADMIN-FIRST** dengan pivot "definisikan interface dari Figma" (langkah 3) + rekonsiliasi (langkah 7). **Role tidak dibuat**, tapi desain **role-ready** (guard terpusat). **Routing** disetujui (route groups `(public)`/`admin`, Bagian 9). Versi Next.js diputuskan di awal Fase 0. Desain v2 dianggap LENGKAP — siap masuk implementation plan.
- **2026-06-03** — Design token: pendekatan **2-lapis** — infrastruktur token semantik (via shadcn CSS vars) dibuat di Fase 0, isi nilai inti yang diketahui, nilai diperhalus progresif per modul. Larang hex mentah. Daftar berjalan di `design-reference/tokens.md` (sudah dibuat). Primary berubah dari v1 (`#FFDE31`).
- **2026-06-03** — Versi terkunci (cek npm): **Next 15.5.19** (bukan 16, demi safety App Hosting), **Tailwind v4.3** (CSS-first), shadcn CLI 4.x, firebase 12.14 / admin 13.10, **npm** (hapus yarn.lock). **Implementation plan Fase 0** ditulis: `docs/superpowers/plans/2026-06-03-v2-fase-0-foundation.md` (12 task). Modul konten = plan terpisah per modul.
