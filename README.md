# Nusantara Exchange

Full-stack web platform bertema **Tourism & Culture Exchange** untuk eksplorasi hidden gems Indonesia dan pertukaran budaya Indonesia-Malaysia.

## Fitur

- Explore Destinations: list dan detail destinasi dengan gambar, lokasi, deskripsi, highlight, dan insight budaya.
- Cultural Insight: sejarah, tradisi, kuliner, dan etika lokal.
- Smart Recommendation: rekomendasi berdasarkan minat, ritme perjalanan, dan budget.
- Travel Route & Access: informasi transportasi, estimasi waktu, panel lokasi, dan tombol rute lengkap.
- Cross-Culture Exchange: perbandingan tema budaya Indonesia-Malaysia dan destinasi padanan.
- Data-ready: endpoint internal dengan data terkurasi dan opsi koneksi layanan eksternal.

## Tech Stack

- Frontend: React + Vite
- Styling: Tailwind CSS
- Backend: serverless functions (`functions/api/*`)
- Data: dataset terkurasi dengan koneksi eksternal opsional
- Deployment: Cloudflare Pages

## Prasyarat

- Node.js `>=18.18.0`
- npm
- Akun Cloudflare untuk deploy publik
- Konfigurasi layanan eksternal opsional

Catatan tooling: project ini memakai Wrangler `4.14.4` agar mode full-stack lokal tetap bisa berjalan pada Node 18. Wrangler mungkin tetap menampilkan warning yang menyarankan Node 20, tetapi backend lokal sudah terverifikasi berjalan. Untuk production pipeline yang lebih ketat, gunakan Node 20+ dan update Wrangler ke versi terbaru.

## Struktur Folder

```text
tourism-culture-exchange/
├── functions/
│   └── api/
│       ├── [[path]].js
│       ├── countries.js
│       ├── culture-exchange.js
│       ├── destinations.js
│       ├── destinations/[id].js
│       ├── navigation.js
│       ├── nearby.js
│       ├── recommendations.js
│       └── routes.js
├── public/
│   ├── _routes.json
│   └── favicon.svg
├── src/
│   ├── lib/
│   │   ├── api.js
│   │   └── travelData.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── wrangler.toml
└── .gitignore
```

## How To Run

```bash
cd tourism-culture-exchange
npm install
npm run dev
```

Buka:

```text
http://localhost:5173
```

Mode `npm run dev` menjalankan frontend Vite. Jika backend lokal belum aktif, frontend otomatis memakai data terkurasi dari sisi client.

Untuk menjalankan frontend + backend secara lokal:

```bash
npm run pages:dev
```

Wrangler akan menjalankan hasil build dari folder `dist` dan route data dari folder `functions`.

## Rute Data Internal

```text
GET /api/destinations
GET /api/destinations/:id
GET /api/recommendations?interests=nature,culture&pace=slow&budget=mid
GET /api/routes?destinationId=wae-rebo&origin=Jakarta
GET /api/culture-exchange
GET /api/countries
GET /api/nearby?destinationId=wae-rebo
GET /api/navigation?destinationId=wae-rebo&origin=Jakarta
```

Koneksi eksternal bersifat opsional. Tambahkan environment variable berikut di Cloudflare Pages jika ingin memakai layanan data tambahan:

```text
PLACES_SERVICE_URL=isi_url_layanan_tempat
PLACES_SERVICE_KEY=isi_key_jika_diperlukan
COUNTRY_PROFILE_URL=isi_url_layanan_profil_negara
```

Tanpa konfigurasi tersebut, route data tetap mengembalikan data terkurasi.

## How To Add To GitHub

```bash
cd tourism-culture-exchange
git init
git add .
git commit -m "Initial tourism culture exchange platform"
git branch -M main
git remote add origin https://github.com/USERNAME/tourism-culture-exchange.git
git push -u origin main
```

Ganti `USERNAME` dengan akun GitHub Anda.

## Deploy Ke Cloudflare Pages

Cara rekomendasi: deploy via Git integration.

1. Push project ke GitHub.
2. Masuk ke Cloudflare Dashboard.
3. Buka **Workers & Pages**.
4. Pilih **Create application > Pages > Connect to Git**.
5. Pilih repository `tourism-culture-exchange`.
6. Set konfigurasi build:
   - Framework preset: `React (Vite)` atau `None`
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: kosongkan jika repo root adalah folder project; isi `tourism-culture-exchange` jika project berada dalam monorepo.
7. Tambahkan environment variable opsional:
   - `PLACES_SERVICE_URL`
   - `PLACES_SERVICE_KEY`
   - `COUNTRY_PROFILE_URL`
8. Klik **Save and Deploy**.

Cloudflare akan membuat URL publik dengan pola:

```text
https://tourism-culture-exchange.pages.dev
```

Jika nama project sudah dipakai, Cloudflare akan memberi subdomain berbeda sesuai nama project.

Deploy manual via Wrangler:

```bash
cd tourism-culture-exchange
npx wrangler login
npm run deploy
```

Catatan: karena project memakai backend serverless, upload drag-and-drop dari dashboard tidak direkomendasikan untuk route data. Gunakan Git integration atau Wrangler.

## Verifikasi Lokal

Perintah yang sudah dijalankan:

```bash
npm install
npm run build
npm run pages:dev
curl http://localhost:8788/api/destinations
curl "http://localhost:8788/api/recommendations?interests=nature,culture&pace=slow&budget=mid"
curl "http://localhost:8788/api/routes?destinationId=wae-rebo&origin=Jakarta"
npm audit --omit=dev
```

Hasil:

- Build Vite sukses.
- Backend lokal merespons `200 OK`.
- `npm audit --omit=dev` menemukan `0 vulnerabilities` untuk runtime dependencies.
- `npm audit` penuh masih melaporkan issue dari tooling lokal yang dipin untuk kompatibilitas Node 18.

## Referensi Deploy

- Cloudflare Pages Git integration: https://developers.cloudflare.com/pages/get-started/git-integration/
- Cloudflare Pages build configuration: https://developers.cloudflare.com/pages/configuration/build-configuration/
