/**
 * PropertiSync - Dataset & Analytics Engine (PropTech Edition)
 * Klien: Grand Vista Residence
 * Persona Klien: Bu Nisa (VP of Sales & Marketing)
 */

window.propertiSyncData = {
  agency: {
    name: "PropertiSync",
    tagline: "Premier Real Estate Funnel Intelligence & CRM Automation",
    cpl_benchmark: 125000, // Rp 125.000 avg Cost per Lead properti premium
    avg_unit_price: 1500000000 // Rp 1.5 Miliar per unit rata-rata
  },
  client: {
    developer_name: "Grand Vista Residence",
    tagline: "Luxury Living with Nature Concept",
    persona_name: "Bu Nisa",
    persona_role: "VP of Sales & Marketing",
    avatar_initials: "BN",
    project_location: "BSD City - Serpong Extension",
    period: "Q1 - Q2 2026 Launching Phase"
  },
  presets: {
    ruby: {
      name: "Cluster Ruby (Real)",
      traffic: 50000,
      chat_wa: 1200,
      visit_unit: 150,
      booking: 12,
      note: "Data aktual Cluster Ruby. Terjadi drop-off drastis (87.5%) dari Chat WA ke Kunjungan Show Unit (Ghosting Massal)."
    },
    banyak_chat: {
      name: "Skenario: Banyak Chat, Nol Visit",
      traffic: 80000,
      chat_wa: 2500,
      visit_unit: 80,
      booking: 5,
      note: "Skenario kampanye TikTok volume tinggi namun audiens tidak qualified (Drop-off 96.8% ke Visit)."
    },
    sehat: {
      name: "Skenario: Corong Sehat",
      traffic: 40000,
      chat_wa: 800,
      visit_unit: 300,
      booking: 45,
      note: "Corong optimal dengan auto-qualification CRM WhatsApp dan konfirmasi jadwal visit < 1 menit."
    }
  },
  summary: {
    total_traffic: 50000,
    total_chat_wa: 1200,
    total_visit_unit: 150,
    total_booking: 12,
    total_ad_spend: 150000000, // Rp 150 Jt
    total_omzet_generated: 18000000000, // 12 unit x Rp 1.5M = Rp 18 Miliar
    lost_potential_omzet: 27000000000 // Estimasi omzet hilang dari 18 unit potensial yang ghosting
  },
  metric_cards: [
    {
      id: "ad_spend",
      title: "Total Ad Spend",
      value: "Rp 150.000.000",
      change: "+12.4%",
      isPositive: true,
      subtext: "Alokasi Meta & TikTok Ads"
    },
    {
      id: "chat_leads",
      title: "Total Chat WA (Leads)",
      value: "1.200 Prospek",
      change: "+28.1%",
      isPositive: true,
      subtext: "CPL Rata-rata Rp 125.000"
    },
    {
      id: "hot_leads",
      title: "Hot Leads (Show Unit Visit)",
      value: "150 Kunjungan",
      change: "-72.5%",
      isPositive: false,
      isAlert: true,
      subtext: "🚨 Ghosting Alarm Aktif"
    },
    {
      id: "booking_fee",
      title: "Total Booking Fee (Closing)",
      value: "12 Unit Terjual",
      change: "+20.0%",
      isPositive: true,
      subtext: "Omzet Rp 18.0 Miliar"
    }
  ],
  funnel_stages: [
    {
      id: "traffic",
      label: "1. Traffic Iklan (Impressions/Clicks)",
      count: 50000,
      description: "Audiens segmen HNWI melihat iklan Meta & TikTok"
    },
    {
      id: "chat_wa",
      label: "2. Leads Masuk (Chat WA Inquiry)",
      count: 1200,
      description: "Prospek mengontak sales via tombol WhatsApp"
    },
    {
      id: "visit_unit",
      label: "3. Kunjungan Show Unit (Hot Leads)",
      count: 150,
      description: "Prospek datang langsung ke galeri marketing"
    },
    {
      id: "booking",
      label: "4. Closing (Transfer Booking Fee)",
      count: 12,
      description: "Pembayaran tanda jadi & pemilihan nomor kavling"
    }
  ],
  channels: [
    {
      name: "Meta Ads (Instagram & Facebook)",
      platform_type: "meta",
      traffic: 28000,
      chat_wa: 720,
      visit_unit: 110,
      booking: 9,
      cpl: 135000,
      closing_rate: 1.25,
      visit_drop_off: 84.7,
      quality_score: "Tinggi (High Buying Power)",
      status: "🟢 Saluran Closing Tertinggi",
      badge_color: "gold",
      characteristics: "Audiens usia 30-48 tahun berpenghasilan mapan. Mencari rumah pertama mewah atau instrumen investasi.",
      action_plan: "Perkuat retargeting video tour unit tipe 8x15 m dan scale-up budget 20%."
    },
    {
      name: "TikTok Ads",
      platform_type: "tiktok",
      traffic: 22000,
      chat_wa: 480,
      visit_unit: 40,
      booking: 3,
      cpl: 95000,
      closing_rate: 0.62,
      visit_drop_off: 91.6,
      quality_score: "Rendah (Rawan Ghosting)",
      status: "🚨 Ghosting Massal",
      badge_color: "orange",
      characteristics: "Banyak klik penasaran (curious leads) dan usia muda. Bertanya harga di WA lalu berhenti merespon (ghosting).",
      action_plan: "Pasang filter kualifikasi gaji minimum di Lead Form sebelum diarahkan ke nomor WhatsApp."
    }
  ],
  monthly_performance: [
    { month: "Jan", meta_closing: 4, tiktok_closing: 1, visits: 85, chat_wa: 620 },
    { month: "Feb", meta_closing: 6, tiktok_closing: 1, visits: 105, chat_wa: 780 },
    { month: "Mar", meta_closing: 7, tiktok_closing: 2, visits: 120, chat_wa: 910 },
    { month: "Apr", meta_closing: 8, tiktok_closing: 2, visits: 135, chat_wa: 1050 },
    { month: "Mei", meta_closing: 9, tiktok_closing: 3, visits: 150, chat_wa: 1200 }
  ],
  units: [
    {
      name: "Cluster Ruby - Type 85/120",
      price_label: "Rp 1.45 M",
      available_units: 14,
      sold_units: 8,
      status: "Fast Moving"
    },
    {
      name: "Cluster Emerald - Type 115/150",
      price_label: "Rp 1.85 M",
      available_units: 10,
      sold_units: 3,
      status: "Exclusive"
    },
    {
      name: "Sapphire Villa Suites - Type 160/200",
      price_label: "Rp 2.65 M",
      available_units: 6,
      sold_units: 1,
      status: "Ultra Luxury"
    }
  ],
  crm_leads: [
    {
      id: "LEAD-GVR-882",
      name: "dr. Aris Munandar, Sp.B",
      phone: "+62 811-2345-9801",
      interest: "Cluster Ruby (85/120)",
      budget: "Rp 1.5 M - Cash Keras",
      visit_date: "Besok, 14:00 WIB",
      status: "Menunggu Visit",
      status_class: "status-visit",
      source: "Meta Ads"
    },
    {
      id: "LEAD-GVR-881",
      name: "Ibu Amanda Clarissa",
      phone: "+62 812-9871-3342",
      interest: "Cluster Emerald (115/150)",
      budget: "Rp 1.9 M - KPR BCA",
      visit_date: "14 Nov, 10:30 WIB",
      status: "Booking Fee Masuk",
      status_class: "status-booking",
      source: "Meta Ads"
    },
    {
      id: "LEAD-GVR-880",
      name: "Bpk. Rahmat Hidayat",
      phone: "+62 856-7788-9120",
      interest: "Cluster Ruby (85/120)",
      budget: "Rp 1.4 M - KPR",
      visit_date: "Jadwal Belum Konfirmasi",
      status: "Follow-up WA Bot",
      status_class: "status-followup",
      source: "TikTok Ads"
    },
    {
      id: "LEAD-GVR-879",
      name: "Bpk. Chandra Wijaya",
      phone: "+62 818-0909-4455",
      interest: "Sapphire Villa Suites",
      budget: "Rp 2.7 M - Cicil Bertahap",
      visit_date: "15 Nov, 15:00 WIB",
      status: "Menunggu Visit",
      status_class: "status-visit",
      source: "Meta Ads"
    },
    {
      id: "LEAD-GVR-878",
      name: "Ibu Natalia Susanto",
      phone: "+62 813-4412-8899",
      interest: "Cluster Emerald (115/150)",
      budget: "Rp 1.8 M - KPR Mandiri",
      visit_date: "Ghosting (3 Hari No Reply)",
      status: "🚨 Ghosting Alert",
      status_class: "status-ghosting",
      source: "TikTok Ads"
    }
  ]
};

