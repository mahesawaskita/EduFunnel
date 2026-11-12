<<<<<<< HEAD
# 🏰 PropertiSync — PropTech Funnel Intelligence & CRM Automation

> **Platform Web Analitik Corong Penjualan Properti Mewah & Radar Anti-Ghosting**  
> **Klien:** Grand Vista Residence  
> **Persona Klien:** Bu Nisa — *VP of Sales & Marketing*  
> **Tema Desain:** Luxury Dark Mode (Obsidian Black, Charcoal, Gold & Neon Orange Ghosting Alarm)

---

## 🌟 Tentang Proyek

**PropertiSync** adalah aplikasi web PropTech modern berbasis teknologi murni (*Vanilla HTML5, CSS3, ES6+ JavaScript*) yang dirancang khusus untuk agensi pemasaran digital developer perumahan elit (*Tier 1 Real Estate*). 

Aplikasi ini membantu jajaran pimpinan developer (seperti **Bu Nisa**) mengatasi masalah klasik industri properti: **tingginya leads chat WhatsApp dari iklan Meta & TikTok yang berujung *ghosting* (tidak datang ke show unit)**, menghitung potensi miliaran rupiah omzet yang lenyap, serta mengintegrasikan kualifikasi otomatis CRM WhatsApp untuk mengunci jadwal visit ke *marketing gallery* dalam hitungan detik.

---

## 🎨 Desain Sistem & Visual (Premium Dark Mode)

- **Dominan Warna:**
  - **Latar Belakang:** Obsidian Black (`#0a0a0a`).
  - **Panel / Card:** Charcoal (`#171717`) dengan border gelap halus (`#262626`).
  - **Aksen Mewah:** Emas Premium (Gold `#fbbf24`), hover (`#f59e0b`), dan aksen sukses Emerald Green (`#10b981`).
- **Komponen Peringatan "GHOSTING ALARM" (High Contrast Glow):**
  - **Badge Peringatan:** Background hitam pekat (`#000000 !important`), border Neon Orange (`#f97316 !important`), teks orange terang (`#fb923c !important`), `font-weight: 800`, pill border radius, dan animasi denyut cahaya (*neon pulse glow*).
  - **Kotak Peringatan:** Background semi-transparan oranye lembut (`rgba(249, 115, 22, 0.07)`), border neon oranye (`rgba(249, 115, 22, 0.5)`), teks `#ffedd5`.
- **Tipografi:** Google Font `Poppins` dan `Montserrat` (Clean & Sleek Luxury).

---

## 📂 Struktur File Aplikasi

```text
PropertiSync/
├── css/
│   └── style.css          # Desain sistem Dark Mode, Gold Accent, & Neon Orange Ghosting Alarm
├── js/
│   ├── data_proptech.js   # Dataset default Grand Vista Residence & utilitas metrik properti
│   └── main.js            # Engine rendering dashboard, Chart.js, filter dinamis, & simulasi CRM
├── home.html              # Layar 1: Halaman agensi PropertiSync & kalkulator simulasi hilang omzet
├── index.html             # Layar 2: Modul login/register & dashboard eksekutif Bu Nisa
└── README.md              # Panduan eksekusi & dokumentasi sistem
```

---

## 🖥️ 2 Layar Utama & Fitur Unggulan

### 1. `home.html` (Landing Page Agensi + Kalkulator Hilang Omzet Properti)
1. **Header & Navigation Bar:**
   - Logo "PS" PropertiSync dengan aksen Emas Mewah.
   - Menu anchor navigasi: *Solusi Developer, Kalkulator Ghosting, Paket Agensi, Klien & Studi Kasus*.
   - Tombol CTA: *"💎 Hitung Potensi"* dan *"📈 Demo Dashboard Klien →"*.
2. **Hero Section:**
   - Pill badge emas: `🏆 Partner Digital Developer Properti Tier 1`.
   - Headline: *"Stop Bakar Uang Iklan Properti. Ubah Chat WA Menjadi Booking Fee Resmi."*
   - Subheadline tentang mitigasi drop-off chat ke visit unit dan integrasi CRM otomatis.
   - Baris 3 statistik kunci: `+40% Show Unit Visit`, `< 1 Menit Auto-Reply`, `5.2x ROI Iklan`.
3. **4 Value Props Cards:**
   - *3D Funnel Analytics, Auto-Detect Ghosting Leads, Integrasi CRM WhatsApp, Analisis Konversi per Tipe Unit.*
4. **Kalkulator Simulasi Hilang Omzet (Core Feature):**
   - **3 Tombol Preset Skenario Developer:**
     1. 💎 *Cluster Ruby (Real Grand Vista)*: Traffic 50.000, Chat WA 1.200, Visit 150, Booking 12.
     2. 🚨 *Skenario: Banyak Chat, Nol Visit (Ghosting Ekstrim)*: Traffic 80.000, Chat WA 2.500, Visit 80, Booking 5.
     3. ✅ *Skenario: Corong Sehat*: Traffic 40.000, Chat WA 800, Visit 300, Booking 45.
   - **4 Input Dinamis:** Traffic Iklan, Leads Masuk (Chat WA), Kunjungan Show Unit, Closing (Booking Fee).
   - **Hasil Kalkulasi Visual Interaktif:**
     - Banner *"🚨 GHOSTING MASSAL TERDETEKSI!"* yang aktif jika drop-off dari Chat WA ke Visit $\ge$ 70%.
     - Estimasi hilangnya potensi omzet developer (asumsi 1 booking fee mewakili unit Rp 1.5 Miliar).
     - Kartu ringkasan Cost per Lead (CPL) dan Closing Rate.
     - Bar corong visual live di mana tahap dengan ghosting tertinggi menyala oranye neon.
5. **Paket Layanan (Pricing Cards Bergaya Glassmorphism):**
   - *Essential Leads* (Rp 15 Jt/bln), *Scale & CRM Takeover* (Rp 35 Jt/bln - Paling Diminati), dan *Exclusive Cluster Takeover* (Custom MoU).
6. **Klien & Studi Kasus:**
   - Testimoni resmi Bu Nisa (*VP of Sales & Marketing Grand Vista Residence*) tentang keberhasilan closing 12 unit Cluster Ruby senilai Rp 18 Miliar dalam 45 hari.

---

### 2. `index.html` (Autentikasi & Dashboard Eksekutif Bu Nisa)
1. **Modul Autentikasi:**
   - Tampilan gelap mewah dengan efek glassmorphism dan glow emas samar.
   - Tab toggle: *Masuk Eksekutif* dan *Registrasi Developer*.
   - Tombol instan **"⚡ Mode Demo: Masuk Sebagai Bu Nisa"** yang langsung memuat dashboard tanpa database backend.
   - Mendukung auto-login via URL parameter: `index.html?demo=true`.
2. **Dashboard Shell (Sisi Klien):**
   - **Sidebar Kiri (Panel Gelap):**
     - Menu navigasi: *Executive Overview, 🚨 Ghosting Radar, Channel ROI (Meta vs TikTok), Unit Performance, CRM Leads Data*.
     - Tombol logout di bagian bawah.
   - **Header Sticky:**
     - Dropdown filter Tipe Unit (*All Units, Cluster Ruby, Cluster Emerald, Sapphire Villa*).
     - Dropdown filter Rentang Waktu (*7 Hari, Bulan Ini, Kuartal 1 & 2*).
     - Tag Persona: `👑 Bu Nisa • VP of Sales & Marketing` berlatar emas redup.
     - Tombol *"🏠 Home PropertiSync"* dan avatar profil *"BN"*.
3. **Komponen Dashboard Eksekutif:**
   - **Metric Cards (Border Emas):** Total Ad Spend (Rp 150 Juta), Leads Masuk (1.200 Prospek), Hot Leads / Show Unit Visit (150 Kunjungan - Ghosting Alarm), dan Total Booking Fee (12 Unit Terjual - Rp 18.0 Miliar).
   - **Ghosting Alert Banner:** Menyorot 87.5% leads tidak datang ke show unit dan memicu follow-up otomatis promo KPR via WA.
   - **Interactive 4-Stage Funnel Chart:** Bar corong dinamis dari traffic hingga closing.
   - **Komparasi Head-to-Head (Meta Ads vs TikTok Ads):**
     - *Meta Ads:* Buying power tinggi, CPL Rp 135.000, Closing Rate 1.25%, status closing tertinggi.
     - *TikTok Ads:* Volume chat tinggi tapi 91.6% ghosting, CPL Rp 95.000, Closing Rate 0.62%.
   - **Grafik Garis Dark Mode (Chart.js):** Tren kunjungan show unit bulanan (Gold), closing unit (Emerald), dan ghosting inquiries (Orange).
   - **Data Leads CRM (Real-Time Simulation):**
     - Tabel prospek pendaftar lengkap dengan nama, nomor WhatsApp (link aktif), minat cluster, skema bayar (KPR/Cash), jadwal show unit, dan status CRM.
     - Tombol interaktif: `"⚡ Tambah Prospek Baru (Simulasi WhatsApp Lead)"` yang menambahkan lead baru secara real-time dan memunculkan toast notification instan.

---

## 🏃 Cara Menjalankan Aplikasi

Aplikasi ini menggunakan teknologi murni tanpa build tool Node.js yang rumit:

### Opsi 1: Buka Langsung di Browser
- Klik ganda pada file `home.html` atau `index.html` di File Explorer, aplikasi langsung siap digunakan di Google Chrome, Microsoft Edge, Mozilla Firefox, dsb.

### Opsi 2: Menggunakan VS Code Live Server
1. Buka folder proyek di VS Code.
2. Klik kanan pada `home.html`.
3. Pilih **"Open with Live Server"**.
4. Akses melalui browser di `http://127.0.0.1:5500/home.html`.
=======
# EduFunnel
>>>>>>> a042607df2e840b790d63ca2d16e7d0daaf2e3a4
