/**
 * EduFlow Agency - Data Funnel & Analytics Engine
 * Klien: Akademi Skill Nusantara
 * Persona Klien: Pak Hendra (Head of Marketing & Admission)
 */

window.eduFlowData = {
  agency: {
    name: "EduFlow Agency",
    tagline: "Admission Growth & Funnel Intelligence",
    cpc_benchmark: 3500 // IDR rata-rata per klik iklan pendidikan
  },
  client: {
    institution: "Akademi Skill Nusantara",
    persona_name: "Pak Hendra",
    persona_role: "Head of Marketing & Admission",
    avatar_initials: "PH",
    period: "Semester Ganjil PMB 2026/2027"
  },
  presets: {
    nusantara: {
      name: "Akademi Skill Nusantara (Real DIP)",
      impresi: 125000,
      klik: 14200,
      form: 1850,
      diterima: 320,
      note: "Data aktual sebelum perbaikan DIP. Terjadi kebocoran parah pada pengisian formulir pendaftaran (drop-off 87.0%)."
    },
    bocor_form: {
      name: "Skenario: Bocor di Form",
      impresi: 90000,
      klik: 12000,
      form: 800,
      diterima: 250,
      note: "Bocor ekstrim di formulir (drop-off 93.3%) akibat formulir 15 field di mobile tanpa auto-fill."
    },
    sehat: {
      name: "Skenario: Corong Sehat",
      impresi: 100000,
      klik: 18000,
      form: 9200,
      diterima: 4600,
      note: "Corong optimal dengan UX DIP ringkas & integrasi instan n8n WhatsApp < 3 detik."
    }
  },
  summary: {
    total_impresi: 125000,
    total_klik: 14200,
    total_form: 1850,
    total_diterima: 320,
    budget_terbuang_est: 43225000 // (14.200 - 1.850) * 3500
  },
  metric_cards: [
    {
      id: "visitors",
      title: "Total Visitors (Impresi)",
      value: 125000,
      change: "+14.8%",
      isPositive: true,
      subtext: "Jangkauan Iklan PMB"
    },
    {
      id: "traffic",
      title: "Klik Landing Page",
      value: 14200,
      change: "+9.2%",
      isPositive: true,
      subtext: "CTR Rata-rata 11.36%"
    },
    {
      id: "leads",
      title: "Qualified Leads (Form)",
      value: 1850,
      change: "-65.0%",
      isPositive: false,
      isAlert: true,
      subtext: "⚠️ Titik Bocor Parah Terdeteksi"
    },
    {
      id: "conversion",
      title: "Siswa Resmi Diterima",
      value: 320,
      change: "+18.5%",
      isPositive: true,
      subtext: "Overall CVR 2.25% (dari klik)"
    }
  ],
  funnel_stages: [
    {
      id: "impresi",
      label: "1. Impresi Ads",
      count: 125000,
      description: "Jangkauan iklan di Google, Instagram & Meta Network"
    },
    {
      id: "klik",
      label: "2. Klik Iklan (Landing Page)",
      count: 14200,
      description: "Pengunjung yang mendarat di portal pendaftaran PMB"
    },
    {
      id: "form",
      label: "3. Form PMB Terisi (Leads)",
      count: 1850,
      description: "Calon pendaftar yang berhasil submit form data diri"
    },
    {
      id: "diterima",
      label: "4. Siswa Resmi Diterima",
      count: 320,
      description: "Mahasiswa baru yang membayar uang kuliah & aktif"
    }
  ],
  channels: [
    {
      name: "Google Ads",
      impresi: 45000,
      klik: 5100,
      form: 1020,
      diterima: 210,
      ctr: 11.33,
      form_cvr: 20.0,
      final_cvr: 4.12,
      drop_off_form: 80.0,
      status: "🟢 Performa Terbaik",
      status_type: "success",
      badge_color: "emerald",
      characteristics: "High Intent Search - Pengunjung aktif mencari 'kuliah fullstack' & 'beasiswa coding'. Formulir diisi dengan komitmen tinggi.",
      action_plan: "Pertahankan target keyword transaksional & scale-up budget iklan sebesar 25%."
    },
    {
      name: "Instagram Ads",
      impresi: 60000,
      klik: 7200,
      form: 590,
      diterima: 75,
      ctr: 12.0,
      form_cvr: 8.19,
      final_cvr: 1.04,
      drop_off_form: 91.81,
      status: "🚨 Bocor Parah di Form",
      status_type: "danger",
      badge_color: "red",
      characteristics: "Visual & Impulse Discovery - CTR tinggi di Feed/Reels, namun 91.8% calon mahasiswa kabur saat dihadapkan form 12 kolom.",
      action_plan: "Pangkas form menjadi 3 kolom (Nama, WA, Jurusan) dan aktifkan n8n WhatsApp Instant Lead agar drop-off turun."
    },
    {
      name: "Twitter/X",
      impresi: 12000,
      klik: 1100,
      form: 140,
      diterima: 20,
      ctr: 9.17,
      form_cvr: 12.73,
      final_cvr: 1.82,
      drop_off_form: 87.27,
      status: "⚠️ Perlu Optimasi",
      status_type: "warning",
      badge_color: "amber",
      characteristics: "Diskusi & Komunitas Edukasi - Engagement thread cukup tinggi, namun konversi lambat.",
      action_plan: "Arahkan traffic ke webinar gratis atau linktree ringkas sebelum form pendaftaran."
    },
    {
      name: "Website Organic",
      impresi: 8000,
      klik: 800,
      form: 100,
      diterima: 15,
      ctr: 10.0,
      form_cvr: 12.5,
      final_cvr: 1.88,
      drop_off_form: 87.5,
      status: "🟢 Organik Stabil",
      status_type: "info",
      badge_color: "blue",
      characteristics: "Direct Search & Alumni Referral - Kualitas lead tinggi, rasio verifikasi berkas cepat.",
      action_plan: "Tingkatkan SEO artikel jurusan dan pop-up WhatsApp button di pojok bawah."
    }
  ],
  monthly_performance: [
    { month: "Jan", google_ads: 380, instagram: 520, twitter_x: 90, website: 60 },
    { month: "Feb", google_ads: 410, instagram: 580, twitter_x: 95, website: 65 },
    { month: "Mar", google_ads: 460, instagram: 640, twitter_x: 100, website: 70 },
    { month: "Apr", google_ads: 510, instagram: 710, twitter_x: 110, website: 80 },
    { month: "Mei", google_ads: 590, instagram: 820, twitter_x: 125, website: 90 },
    { month: "Jun", google_ads: 650, instagram: 910, twitter_x: 140, website: 95 },
    { month: "Jul", google_ads: 720, instagram: 1050, twitter_x: 150, website: 110 },
    { month: "Ags", google_ads: 780, instagram: 1180, twitter_x: 160, website: 120 }
  ],
  leads_realtime: [
    {
      id: "LEAD-1092",
      name: "Rizky Ramadhan",
      whatsapp: "+62 812-8891-2301",
      email: "rizky.ramadhan@gmail.com",
      program: "Fullstack Web Development",
      source: "Google Ads",
      time: "1 menit yang lalu",
      status_n8n: "✅ WA Brosur Sent (< 2.8s)",
      status_class: "n8n-success"
    },
    {
      id: "LEAD-1091",
      name: "Siti Nurhaliza",
      whatsapp: "+62 857-1928-4432",
      email: "siti.nurhaliza@yahoo.com",
      program: "UI/UX & Product Design",
      source: "Instagram Ads",
      time: "4 menit yang lalu",
      status_n8n: "✅ WA Brosur Sent (< 3.1s)",
      status_class: "n8n-success"
    },
    {
      id: "LEAD-1090",
      name: "Budi Prasetyo",
      whatsapp: "+62 813-7721-9081",
      email: "budi.prasetyo99@gmail.com",
      program: "Data Science & AI",
      source: "Google Ads",
      time: "12 menit yang lalu",
      status_n8n: "✅ Follow-up Admisi Terjadwal",
      status_class: "n8n-info"
    },
    {
      id: "LEAD-1089",
      name: "Maya Anggraini",
      whatsapp: "+62 878-2234-8876",
      email: "maya.anggraini@outlook.com",
      program: "Digital Marketing Specialist",
      source: "Instagram Ads",
      time: "25 menit yang lalu",
      status_n8n: "✅ WA Brosur Sent (< 2.5s)",
      status_class: "n8n-success"
    },
    {
      id: "LEAD-1088",
      name: "Farhan Saputra",
      whatsapp: "+62 821-6675-1120",
      email: "farhan.saputra@gmail.com",
      program: "Fullstack Web Development",
      source: "Website Organic",
      time: "45 menit yang lalu",
      status_n8n: "✅ Beasiswa Test Invitation Sent",
      status_class: "n8n-purple"
    }
  ]
};

// Pastikan backwards compatibility dengan window.eduFunnelData
window.eduFunnelData = {
  ...window.eduFlowData,
  metadata: {
    project_name: "EduFlow Agency - Funnel Intelligence",
    client: "Akademi Skill Nusantara",
    persona: "Pak Hendra"
  }
};

