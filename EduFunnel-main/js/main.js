/**
 * PropertiSync - Main Application Engine & Executive Dashboard
 * Persona Klien: Bu Nisa (VP of Sales & Marketing, Grand Vista Residence)
 * UI/UX: Luxury Dark Mode, Gold Accents & Ghosting Alarm
 */

// ================= GLOBAL STATE =================
let currentPage = "overview";
let currentUnit = "all";
let currentDateRange = "month";
let activeChartInstance = null;

// Local copy of CRM leads for real-time simulation
let liveCrmLeads = [];

// ================= DOM ELEMENTS =================
const authPage = document.getElementById("authPage");
const dashboardPage = document.getElementById("dashboardPage");
const appContainer = document.getElementById("app");
const toastContainer = document.getElementById("toastContainer");

// Auth Elements
const tabLogin = document.getElementById("tabLogin");
const tabRegister = document.getElementById("tabRegister");
const loginFormContainer = document.getElementById("loginFormContainer");
const registerFormContainer = document.getElementById("registerFormContainer");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const btnQuickDemo = document.getElementById("btnQuickDemo");
const logoutButton = document.getElementById("logoutButton");

// Filter Elements
const unitFilter = document.getElementById("unitFilter");
const dateFilter = document.getElementById("dateFilter");

// Sidebar Nav Menu Items
const menuItems = document.querySelectorAll(".sidebar-menu .menu-item");

// ================= INITIALIZATION =================
document.addEventListener("DOMContentLoaded", function () {
  initLiveCrmLeads();
  initAuthEventListeners();
  initDashboardEventListeners();

  // Auto-login if ?demo=true in URL
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("demo") === "true") {
    showDashboardPage();
  } else {
    showAuthPage();
  }
});

function initLiveCrmLeads() {
  if (window.propertiSyncData && window.propertiSyncData.crm_leads) {
    liveCrmLeads = JSON.parse(JSON.stringify(window.propertiSyncData.crm_leads));
  } else {
    liveCrmLeads = [];
  }
}

// ================= AUTH & PAGE SWITCHING =================
function showAuthPage() {
  authPage.classList.remove("hidden");
  dashboardPage.classList.add("hidden");
}

function showDashboardPage() {
  authPage.classList.add("hidden");
  dashboardPage.classList.remove("hidden");
  renderCurrentView();
}

function initAuthEventListeners() {
  // Switch to Login tab
  if (tabLogin) {
    tabLogin.addEventListener("click", function () {
      tabLogin.classList.add("active");
      tabRegister.classList.remove("active");
      loginFormContainer.classList.remove("hidden");
      registerFormContainer.classList.add("hidden");
    });
  }

  // Switch to Register tab
  if (tabRegister) {
    tabRegister.addEventListener("click", function () {
      tabRegister.classList.add("active");
      tabLogin.classList.remove("active");
      registerFormContainer.classList.remove("hidden");
      loginFormContainer.classList.add("hidden");
    });
  }

  // Handle Login submit
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      showToast("👑 Login Berhasil! Selamat datang Bu Nisa (Grand Vista Residence).");
      setTimeout(showDashboardPage, 400);
    });
  }

  // Handle Register submit
  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();
      showToast("🏛️ Pendaftaran developer berhasil! Membuka Executive Dashboard...");
      setTimeout(showDashboardPage, 600);
    });
  }

  // Quick Demo Shortcut (No DB required)
  if (btnQuickDemo) {
    btnQuickDemo.addEventListener("click", function () {
      showToast("⚡ Mode Demo Aktif: Masuk Sebagai Bu Nisa (VP of Sales)");
      showDashboardPage();
    });
  }

  // Logout button
  if (logoutButton) {
    logoutButton.addEventListener("click", function () {
      showToast("👋 Sesi eksekutif berakhir.");
      showAuthPage();
    });
  }
}

function initDashboardEventListeners() {
  // Navigation Menu Tabs
  menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
      menuItems.forEach(m => m.classList.remove("active"));
      item.classList.add("active");
      currentPage = item.getAttribute("data-page");
      renderCurrentView();
    });
  });

  // Unit Filter Dropdown
  if (unitFilter) {
    unitFilter.addEventListener("change", function (e) {
      currentUnit = e.target.value;
      renderCurrentView();
    });
  }

  // Date Filter Dropdown
  if (dateFilter) {
    dateFilter.addEventListener("change", function (e) {
      currentDateRange = e.target.value;
      renderCurrentView();
    });
  }
}

// ================= VIEW DISPATCHER =================
function renderCurrentView() {
  window.scrollTo({ top: 0, behavior: "smooth" });

  if (currentPage === "overview") {
    renderOverview();
  } else if (currentPage === "ghosting") {
    renderGhostingRadar();
  } else if (currentPage === "channel") {
    renderChannelROI();
  } else if (currentPage === "unit") {
    renderUnitPerformance();
  } else if (currentPage === "crm") {
    renderCrmLeads();
  } else if (currentPage === "sus") {
    renderSusAnalysis();
  }
}


// ================= VIEW: ANALISIS KUESIONER SUS =================
function renderSusAnalysis() {
  appContainer.innerHTML = `
    <section class="page-header-title">
      <div class="page-subtitle-top">USER EXPERIENCE INTELLIGENCE</div>
      <h1>Analisis Kuesioner SUS</h1>
      <p>
        Monitoring hasil evaluasi System Usability Scale (SUS)
        dari pengguna platform PropertiSync.
      </p>
    </section>

    <section class="metrics-summary-grid">
      <div class="metric-card-gold">
        <div class="metric-card-top">
          <span class="metric-card-title">Total Responden</span>
        </div>
        <div class="metric-number-val">-</div>
        <div class="metric-sub-note">Data menunggu koneksi n8n</div>
      </div>

      <div class="metric-card-gold">
        <div class="metric-card-top">
          <span class="metric-card-title">Rata-rata Skor SUS</span>
        </div>
        <div class="metric-number-val">-</div>
        <div class="metric-sub-note">Skala penilaian 0–100</div>
      </div>

      <div class="metric-card-gold">
        <div class="metric-card-top">
          <span class="metric-card-title">Kategori Usability</span>
        </div>
        <div class="metric-number-val">-</div>
        <div class="metric-sub-note">Menunggu hasil perhitungan</div>
      </div>

      <div class="metric-card-gold">
        <div class="metric-card-top">
          <span class="metric-card-title">Status Data</span>
        </div>
        <div class="metric-number-val" style="font-size: 20px;">
          Belum Terhubung
        </div>
        <div class="metric-sub-note">Integrasi Supabase dan n8n</div>
      </div>
    </section>

    <section style="
      margin-top: 24px;
      padding: 28px;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(251,191,36,0.25);
      border-radius: 12px;
    ">
      <h2 style="color: var(--gold-primary); margin-bottom: 12px;">
        Data Evaluasi Pengguna
      </h2>

      <p style="
        color: var(--text-muted);
        line-height: 1.7;
        margin-bottom: 18px;
      ">
        Halaman ini akan menampilkan hasil kuesioner SUS yang
        dikirim melalui Website PropTech Form Portal dan disimpan
        di Supabase.
      </p>

      <div style="
        padding: 16px;
        border-radius: 8px;
        background: rgba(251,191,36,0.08);
        border: 1px solid rgba(251,191,36,0.2);
        color: #fbbf24;
      ">
        Menunggu integrasi workflow n8n untuk mengambil dan
        mengolah data responden.
      </div>
    </section>
  `;
}


// ================= HELPER DATA CALCULATIONS =================
function getFilteredProptechData() {
  const data = window.propertiSyncData;
  let multiplier = 1;

  if (currentDateRange === "7") multiplier = 0.25;
  if (currentDateRange === "quarter") multiplier = 2.4;

  let traffic = Math.round(data.summary.total_traffic * multiplier);
  let chat = Math.round(data.summary.total_chat_wa * multiplier);
  let visit = Math.round(data.summary.total_visit_unit * multiplier);
  let booking = Math.round(data.summary.total_booking * multiplier);
  let adSpend = Math.round(data.summary.total_ad_spend * multiplier);

  if (currentUnit === "Cluster Ruby") {
    traffic = Math.round(traffic * 0.55);
    chat = Math.round(chat * 0.60);
    visit = Math.round(visit * 0.65);
    booking = Math.round(booking * 0.67);
  } else if (currentUnit === "Cluster Emerald") {
    traffic = Math.round(traffic * 0.30);
    chat = Math.round(chat * 0.25);
    visit = Math.round(visit * 0.25);
    booking = Math.round(booking * 0.25);
  } else if (currentUnit === "Sapphire Villa") {
    traffic = Math.round(traffic * 0.15);
    chat = Math.round(chat * 0.15);
    visit = Math.round(visit * 0.10);
    booking = Math.max(1, Math.round(booking * 0.08));
  }

  const dropChatToVisit = chat > 0 ? (((chat - visit) / chat) * 100).toFixed(1) : "0.0";
  const closingRate = chat > 0 ? ((booking / chat) * 100).toFixed(2) : "0.00";
  const omzetTotal = booking * data.agency.avg_unit_price;
  const ghostingLeads = Math.max(0, chat - visit);
  const lostOmzet = Math.round(ghostingLeads * 0.25 * 0.15) * data.agency.avg_unit_price;

  return { traffic, chat, visit, booking, adSpend, dropChatToVisit, closingRate, omzetTotal, ghostingLeads, lostOmzet };
}

// ================= 1. VIEW: EXECUTIVE OVERVIEW =================
function renderOverview() {
  const m = getFilteredProptechData();
  const isSevereGhosting = parseFloat(m.dropChatToVisit) >= 70;

  // Proportional bar widths
  const wTraffic = 100;
  const wChat = Math.min(100, Math.max(12, (m.chat / m.traffic) * 100 * 8));
  const wVisit = Math.min(100, Math.max(8, (m.visit / m.traffic) * 100 * 20));
  const wBooking = Math.min(100, Math.max(4, (m.booking / m.traffic) * 100 * 50));

  appContainer.innerHTML = `
    <!-- Page Header -->
    <section class="page-header-title">
      <div class="page-subtitle-top">EXECUTIVE REVENUE & FUNNEL INTELLIGENCE</div>
      <h1>Dasbor Eksekutif Penjualan Grand Vista Residence</h1>
      <p>Monitoring performa kampanye iklan perumahan mewah, kualifikasi prospek WhatsApp, dan konversi booking fee.</p>
    </section>

    <!-- 4 METRIC CARDS (BORDER EMAS) -->
    <section class="metrics-summary-grid">
      <div class="metric-card-gold">
        <div class="metric-card-top">
          <span class="metric-card-title">Total Ad Spend</span>
          <span class="metric-trend-badge positive">+12.4%</span>
        </div>
        <div class="metric-number-val">Rp ${(m.adSpend / 1000000).toFixed(0)} Juta</div>
        <div class="metric-sub-note">Alokasi Meta & TikTok Ads</div>
      </div>

      <div class="metric-card-gold">
        <div class="metric-card-top">
          <span class="metric-card-title">Leads Masuk (Chat WA)</span>
          <span class="metric-trend-badge positive">+28.1%</span>
        </div>
        <div class="metric-number-val">${m.chat.toLocaleString("id-ID")} Prospek</div>
        <div class="metric-sub-note">CPL Rata-rata Rp 125.000</div>
      </div>

      <div class="metric-card-gold ${isSevereGhosting ? 'border-orange' : ''}">
        <div class="metric-card-top">
          <span class="metric-card-title">Hot Leads (Visit Unit)</span>
          <span class="metric-trend-badge ${isSevereGhosting ? 'danger' : 'positive'}">
            ${isSevereGhosting ? '-72.5% Drop' : '+15.0%'}
          </span>
        </div>
        <div class="metric-number-val" style="${isSevereGhosting ? 'color: var(--orange-neon);' : ''}">
          ${m.visit.toLocaleString("id-ID")} Kunjungan
        </div>
        <div class="metric-sub-note">
          ${isSevereGhosting ? '🚨 Ghosting Alarm Aktif' : 'Tingkat visit optimal'}
        </div>
      </div>

      <div class="metric-card-gold">
        <div class="metric-card-top">
          <span class="metric-card-title">Total Booking Fee (Closing)</span>
          <span class="metric-trend-badge positive">+20.0%</span>
        </div>
        <div class="metric-number-val" style="color: var(--gold-primary);">
          ${m.booking} Unit Terjual
        </div>
        <div class="metric-sub-note">Total Omzet: Rp ${(m.omzetTotal / 1000000000).toFixed(1)} Miliar</div>
      </div>
    </section>

    <!-- GHOSTING ALERT BANNER -->
    <div class="ghosting-alert-box">
      <div class="alarm-icon">🚨</div>
      <div style="flex-grow: 1;">
        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px; flex-wrap: wrap;">
          <span class="ghosting-badge">🚨 GHOSTING ALARM: ${m.dropChatToVisit}% DROP-OFF</span>
          <h4>85% Leads Berhenti Membalas Chat (Tidak Datang ke Show Unit)</h4>
        </div>
        <p>
          Terdeteksi <strong>${m.ghostingLeads.toLocaleString("id-ID")} prospek</strong> yang bertanya harga via WhatsApp namun tidak pernah berkunjung ke marketing gallery Grand Vista Residence. 
          Estimasi potensi omzet yang terancam lenyap: <strong style="color: var(--orange-neon);">Rp ${(m.lostOmzet / 1000000000).toFixed(1)} Miliar</strong>.
        </p>
        <div style="margin-top: 10px; font-size: 13px; color: #fed7aa;">
          ⚡ <strong>Tindakan Otomatis CRM PropertiSync:</strong> Mengaktifkan <em>Auto-Blast WhatsApp Promo KPR Bebas DP & Free BPHTB</em> serta jadwal reminder visit otomatis dalam tempo &lt; 60 detik.
        </div>
      </div>
    </div>

    <!-- INTERACTIVE 4-STAGE FUNNEL CHART -->
    <div class="live-funnel-card">
      <h4>
        <span>Interactive Real Estate Funnel (Grand Vista Residence)</span>
        <span style="font-size: 13px; font-weight: 600; color: var(--gold-primary); cursor: pointer;" onclick="switchToGhostingTab()">
          Buka Analisis Radar Ghosting &rarr;
        </span>
      </h4>

      <!-- Stage 1 -->
      <div class="funnel-stage-row">
        <div class="funnel-stage-header">
          <span class="funnel-stage-name">1. Traffic Iklan (Meta & TikTok Ads)</span>
          <span class="funnel-stage-num">${m.traffic.toLocaleString("id-ID")} impresi</span>
        </div>
        <div class="funnel-track">
          <div class="funnel-fill" style="width: ${wTraffic}%">100%</div>
        </div>
      </div>

      <div class="funnel-drop-indicator">
        &darr; Drop-off traffic ke chat: ${(((m.traffic - m.chat) / m.traffic) * 100).toFixed(1)}% (${(m.traffic - m.chat).toLocaleString("id-ID")} tidak klik WA)
      </div>

      <!-- Stage 2 -->
      <div class="funnel-stage-row">
        <div class="funnel-stage-header">
          <span class="funnel-stage-name">2. Leads Masuk (Chat WA Inquiry)</span>
          <span class="funnel-stage-num">${m.chat.toLocaleString("id-ID")} prospek</span>
        </div>
        <div class="funnel-track">
          <div class="funnel-fill" style="width: ${wChat}%">${((m.chat / m.traffic) * 100).toFixed(2)}%</div>
        </div>
      </div>

      <div class="funnel-drop-indicator drop-ghosting">
        &darr; Drop-off chat ke kunjungan: <strong>${m.dropChatToVisit}%</strong>
        <span class="ghosting-badge" style="margin-left: 8px;">🚨 GHOSTING MASSAL</span>
        (${m.ghostingLeads.toLocaleString("id-ID")} prospek menghilang)
      </div>

      <!-- Stage 3 -->
      <div class="funnel-stage-row">
        <div class="funnel-stage-header">
          <span class="funnel-stage-name" style="color: var(--orange-neon);">
            3. Kunjungan Show Unit (Hot Leads)
            <span class="ghosting-badge">🚨 RAWAN GHOSTING</span>
          </span>
          <span class="funnel-stage-num" style="color: var(--orange-neon);">${m.visit.toLocaleString("id-ID")} visit</span>
        </div>
        <div class="funnel-track">
          <div class="funnel-fill fill-neon-orange" style="width: ${wVisit}%">
            ${((m.visit / m.chat) * 100).toFixed(1)}%
          </div>
        </div>
      </div>

      <div class="funnel-drop-indicator">
        &darr; Drop-off visit ke closing: ${(((m.visit - m.booking) / m.visit) * 100).toFixed(1)}% (${(m.visit - m.booking).toLocaleString("id-ID")} masih pertimbangan)
      </div>

      <!-- Stage 4 -->
      <div class="funnel-stage-row">
        <div class="funnel-stage-header">
          <span class="funnel-stage-name" style="color: var(--emerald-success);">4. Closing Unit (Transfer Booking Fee)</span>
          <span class="funnel-stage-num" style="color: var(--emerald-success);">${m.booking} unit terjual</span>
        </div>
        <div class="funnel-track">
          <div class="funnel-fill" style="width: ${wBooking}%; background: linear-gradient(90deg, #10b981 0%, #059669 100%); color: #ffffff;">
            ${m.closingRate}%
          </div>
        </div>
      </div>
    </div>

    <!-- KOMPARASI HEAD-TO-HEAD (META ADS VS TIKTOK ADS) -->
    <section class="comparison-section-grid">
      <!-- Card Meta Ads -->
      <div class="channel-card-comp border-gold">
        <div class="channel-card-header">
          <div class="channel-brand-info">
            <div class="channel-icon-circle meta">M</div>
            <div>
              <h3 style="font-size: 16px; font-weight: 800; color: #ffffff;">Meta Ads (Instagram & Facebook)</h3>
              <span style="font-size: 12px; color: var(--text-secondary);">Targeted HNWI & Home-Seekers</span>
            </div>
          </div>
          <span class="status-badge status-visit">🟢 Kualitas Tertinggi</span>
        </div>

        <div class="channel-stats-row">
          <div class="stat-mini-box">
            <div class="title">Cost per Lead</div>
            <div class="num" style="color: var(--gold-primary);">Rp 135.000</div>
          </div>
          <div class="stat-mini-box">
            <div class="title">Visit Rate</div>
            <div class="num" style="color: var(--emerald-success);">15.3%</div>
          </div>
          <div class="stat-mini-box">
            <div class="title">Closing Rate</div>
            <div class="num" style="color: var(--emerald-success);">1.25%</div>
          </div>
        </div>

        <div class="behavior-analysis-box">
          <strong>Karakteristik Leads:</strong> Segmen keluarga muda usia 32-45 tahun dengan daya beli tinggi. Menanyakan detail sertifikat, skema KPR perbankan, dan komitmen booking tinggi saat hadir di show unit.
        </div>

        <div class="action-recommendation-box">
          💡 <strong>Rekomendasi Bu Nisa:</strong> Naikkan alokasi anggaran Meta Ads sebesar +25% untuk mempromosikan unit hoek Cluster Ruby.
        </div>
      </div>

      <!-- Card TikTok Ads -->
      <div class="channel-card-comp border-orange">
        <div class="channel-card-header">
          <div class="channel-brand-info">
            <div class="channel-icon-circle tiktok">TT</div>
            <div>
              <h3 style="font-size: 16px; font-weight: 800; color: #ffffff;">TikTok Ads (Short Video Ads)</h3>
              <span style="font-size: 12px; color: var(--text-secondary);">Viral Reach & Property Tours</span>
            </div>
          </div>
          <span class="ghosting-badge">🚨 Rawan Ghosting</span>
        </div>

        <div class="channel-stats-row">
          <div class="stat-mini-box">
            <div class="title">Cost per Lead</div>
            <div class="num" style="color: #60a5fa;">Rp 95.000</div>
          </div>
          <div class="stat-mini-box">
            <div class="title">Visit Rate</div>
            <div class="num" style="color: var(--orange-neon);">8.3%</div>
          </div>
          <div class="stat-mini-box">
            <div class="title">Closing Rate</div>
            <div class="num" style="color: var(--orange-neon);">0.62%</div>
          </div>
        </div>

        <div class="behavior-analysis-box">
          <strong>Karakteristik Leads:</strong> Volume chat WhatsApp sangat tinggi (CPL murah), namun 91.6% langsung ghosting setelah menerima pricelist. Banyak akun penasaran atau belum memiliki kesiapan DP rumah.
        </div>

        <div class="action-recommendation-box" style="background: rgba(249, 115, 22, 0.1); border-color: rgba(249, 115, 22, 0.4); color: #fb923c;">
          ⚡ <strong>Rekomendasi DIP:</strong> Pasang filter gaji & DP minimum di formulir TikTok Instant Form sebelum diarahkan ke nomor WhatsApp sales.
        </div>
      </div>
    </section>

    <!-- CHART.JS: DARK THEMED LINE CHART -->
    <div class="chart-card-box">
      <h3>Tren Volume Kunjungan Show Unit & Closing (Chart.js)</h3>
      <p>Perbandingan perkembangan bulanan antara kunjungan show unit terverifikasi dan unit properti yang closing di Grand Vista Residence.</p>
      <div class="chart-wrapper">
        <canvas id="propertyLineChart"></canvas>
      </div>
    </div>

    <!-- CRM LEADS TABLE -->
    ${getCrmTableMarkup()}
  `;

  setTimeout(initLineChart, 60);
}

// ================= 2. VIEW: GHOSTING RADAR =================
function renderGhostingRadar() {
  const m = getFilteredProptechData();

  appContainer.innerHTML = `
    <section class="page-header-title">
      <div class="page-subtitle-top">RADAR DETEKSI GHOSTING LEADS</div>
      <h1>🚨 Analisis Drop-off Kunjungan & Mitigasi CRM</h1>
      <p>Diagnosis akar masalah mengapa calon pembeli rumah berhenti merespon sales in-house.</p>
    </section>

    <div class="ghosting-alert-box">
      <div class="alarm-icon">🚨</div>
      <div>
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
          <span class="ghosting-badge">🚨 RADAR AKTIF: 87.5% DROP-OFF CHAT WA KE VISIT</span>
        </div>
        <h4>Titik Rawan: Konsumen Ilang Kontak Setelah Menerima Brosur PDF</h4>
        <p>
          Berdasarkan log percakapan WhatsApp sales, 74% calon konsumen berhenti membalas chat tepat setelah sales mengirimkan file PDF pricelist tanpa menyertakan opsi janji temu (visit). 
          Ada <strong>${m.ghostingLeads.toLocaleString("id-ID")} leads prospektif yang macet</strong> di pipeline.
        </p>
      </div>
    </div>

    <!-- 3 Faktor Utama Ghosting -->
    <div class="props-grid" style="margin-bottom: 28px;">
      <div class="prop-card" style="border-top: 3px solid var(--orange-neon);">
        <div class="prop-icon" style="background: rgba(249, 115, 22, 0.1); color: var(--orange-neon);">1</div>
        <h3>Kecepatan Respon Sales Lambat</h3>
        <p>Waktu balas chat sales manual rata-rata 18 menit. Minat buyer turun 80% jika chat tidak dibalas dalam tempo 5 menit pertama.</p>
        <div style="margin-top: 14px; font-size: 13px; font-weight: 700; color: var(--orange-neon);">
          Solusi: Bot WhatsApp Auto-Reply &lt; 45 detik.
        </div>
      </div>

      <div class="prop-card" style="border-top: 3px solid var(--orange-neon);">
        <div class="prop-icon" style="background: rgba(249, 115, 22, 0.1); color: var(--orange-neon);">2</div>
        <h3>Ketakutan Angsuran KPR</h3>
        <p>Calon pembeli kaget melihat harga total Rp 1.5 Miliar tanpa penjelasan bahwa cicilan KPR promo subsidi hanya Rp 7.5 Jt/bulan.</p>
        <div style="margin-top: 14px; font-size: 13px; font-weight: 700; color: var(--orange-neon);">
          Solusi: Kirimkan simulasi tabel cicilan KPR ramah kantong.
        </div>
      </div>

      <div class="prop-card" style="border-top: 3px solid var(--emerald-success);">
        <div class="prop-icon" style="background: var(--emerald-soft); color: var(--emerald-success);">3</div>
        <h3>Solusi: CRM Automated Follow-up</h3>
        <p>PropertiSync mengirimkan pesan personalisasi pengingat jadwal booking show unit dengan penawaran voucher belanja Rp 10 Jt.</p>
        <div style="margin-top: 14px; font-size: 13px; font-weight: 700; color: var(--emerald-success);">
          Hasil: Menyelamatkan 40% leads ghosting kembali aktif!
        </div>
      </div>
    </div>

    <!-- Interactive Omzet Recovery Calculator -->
    <div class="calculator-card-container">
      <h3 style="font-size: 18px; font-weight: 800; color: #ffffff; margin-bottom: 10px; font-family: 'Montserrat', sans-serif;">
        💎 Simulator Pemulihan Omzet Grand Vista Residence
      </h3>
      <p style="font-size: 14px; color: var(--text-secondary); margin-bottom: 24px;">
        Geser target perbaikan retensi untuk memprediksi berapa unit rumah yang dapat terselamatkan dari ghosting leads.
      </p>

      <div style="margin-bottom: 22px;">
        <label for="rangeGhostingTarget" style="font-weight: 700; font-size: 14px; display: block; margin-bottom: 8px;">
          Target Drop-Off Ghosting Diturunkan Menjadi: <span id="labelGhostingTarget" style="color: var(--gold-primary); font-size: 18px;">45%</span>
        </label>
        <input type="range" id="rangeGhostingTarget" min="20" max="85" value="45" step="5" style="width: 100%; accent-color: var(--gold-primary);" />
      </div>

      <div id="simulasiGhostingOutput" class="calc-metrics-row">
        <!-- Rendered by JS -->
      </div>
    </div>
  `;

  const slider = document.getElementById("rangeGhostingTarget");
  const label = document.getElementById("labelGhostingTarget");

  function updateSimulator() {
    const targetDrop = parseInt(slider.value);
    label.innerText = targetDrop + "%";

    const newVisits = Math.round(m.chat * (1 - targetDrop / 100));
    const extraVisits = Math.max(0, newVisits - m.visit);
    const extraClosingUnits = Math.round(extraVisits * 0.12);
    const extraOmzet = extraClosingUnits * 1500000000;

    const out = document.getElementById("simulasiGhostingOutput");
    if (out) {
      out.innerHTML = `
        <div class="calc-metric-card">
          <div class="title">Tambahan Kunjungan Show Unit</div>
          <div class="val" style="color: var(--emerald-success);">+${extraVisits} Prospek</div>
          <div class="sub">Konsumen terselamatkan ke galeri</div>
        </div>

        <div class="calc-metric-card">
          <div class="title">Estimasi Unit Closing Tambahan</div>
          <div class="val" style="color: var(--gold-primary);">+${extraClosingUnits} Unit Rumah</div>
          <div class="sub">Booking fee terselamatkan</div>
        </div>

        <div class="calc-metric-card">
          <div class="title">Potensi Omzet Diselamatkan</div>
          <div class="val" style="color: var(--emerald-success);">
            Rp ${(extraOmzet / 1000000000).toFixed(1)} Miliar
          </div>
          <div class="sub">Penyelamatan omzet developer</div>
        </div>
      `;
    }
  }

  if (slider) {
    slider.addEventListener("input", updateSimulator);
    updateSimulator();
  }
}

// ================= 3. VIEW: CHANNEL ROI =================
function renderChannelROI() {
  const channels = window.propertiSyncData.channels;

  const rows = channels.map(ch => `
    <tr>
      <td><strong>${ch.name}</strong></td>
      <td>${ch.traffic.toLocaleString("id-ID")}</td>
      <td>${ch.chat_wa.toLocaleString("id-ID")}</td>
      <td>${ch.visit_unit.toLocaleString("id-ID")}</td>
      <td style="color: var(--gold-primary); font-weight: 800;">${ch.booking} Unit</td>
      <td>Rp ${ch.cpl.toLocaleString("id-ID")}</td>
      <td style="${ch.visit_drop_off >= 90 ? 'color: var(--orange-neon); font-weight: 800;' : ''}">${ch.visit_drop_off}%</td>
      <td style="color: var(--emerald-success); font-weight: 700;">${ch.closing_rate}%</td>
      <td>
        <span class="${ch.platform_type === 'tiktok' ? 'ghosting-badge' : 'status-badge status-visit'}">
          ${ch.status}
        </span>
      </td>
    </tr>
  `).join("");

  appContainer.innerHTML = `
    <section class="page-header-title">
      <div class="page-subtitle-top">ANALISIS RETURN ON INVESTMENT (ROI) IKLAN</div>
      <h1>Perbandingan Kualitas Saluran: Meta vs TikTok Ads</h1>
      <p>Alokasikan budget pemasaran ke saluran yang menghasilkan pembeli nyata, bukan sekadar penanya harga.</p>
    </section>

    <div class="data-table-card">
      <div class="table-responsive">
        <table class="custom-data-table">
          <thead>
            <tr>
              <th>Saluran Iklan</th>
              <th>Traffic</th>
              <th>Chat WA</th>
              <th>Show Unit Visit</th>
              <th>Closing Unit</th>
              <th>CPL</th>
              <th>Drop-off ke Visit</th>
              <th>Closing Rate</th>
              <th>Status Kualitas</th>
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Chart Line Dark -->
    <div class="chart-card-box">
      <h3>Grafik Garis Konversi Penjualan Bulanan (Chart.js)</h3>
      <div class="chart-wrapper">
        <canvas id="propertyLineChart"></canvas>
      </div>
    </div>
  `;

  setTimeout(initLineChart, 60);
}

// ================= 4. VIEW: UNIT PERFORMANCE =================
function renderUnitPerformance() {
  const units = window.propertiSyncData.units;

  const unitCards = units.map(u => `
    <div class="prop-card" style="border: 1px solid var(--gold-border);">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 16px;">
        <span class="status-badge status-visit">${u.status}</span>
        <span style="font-size: 18px; font-weight: 900; color: var(--gold-primary);">${u.price_label}</span>
      </div>
      <h3>${u.name}</h3>
      <p style="margin-bottom: 18px;">Hunian modern dengan pencahayaan alami & private clubhouse access.</p>
      
      <div style="background: var(--bg-card); padding: 14px; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); display: flex; justify-content: space-between; font-size: 13px;">
        <span>Sisa Unit: <strong style="color: #ffffff;">${u.available_units}</strong></span>
        <span>Terjual: <strong style="color: var(--emerald-success);">${u.sold_units} Unit</strong></span>
      </div>
    </div>
  `).join("");

  appContainer.innerHTML = `
    <section class="page-header-title">
      <div class="page-subtitle-top">CLUSTER INVENTORY & CLOSING VELOCITY</div>
      <h1>Performa Penjualan Tipe Unit Grand Vista Residence</h1>
      <p>Lacak kecepatan penjualan dan ketersediaan unit tiap klaster secara real-time.</p>
    </section>

    <div class="props-grid" style="grid-template-columns: repeat(3, 1fr);">
      ${unitCards}
    </div>
  `;
}

// ================= 5. VIEW: CRM LEADS DATA =================
function renderCrmLeads() {
  appContainer.innerHTML = `
    <section class="page-header-title">
      <div class="page-subtitle-top">CRM PROSPEK & AUTOMATION ENGINE</div>
      <h1>Tabel Prospek Pembeli & Jadwal Kunjungan Unit</h1>
      <p>Simulasikan kontak pembeli baru yang langsung memicu auto-reply kualifikasi KPR WhatsApp.</p>
    </section>

    ${getCrmTableMarkup()}
  `;
}

// ================= CRM TABLE MARKUP & SIMULATOR =================
function getCrmTableMarkup() {
  const rows = liveCrmLeads.map((lead, idx) => `
    <tr id="leadRow_${lead.id}" style="${idx === 0 ? 'background: rgba(251, 191, 36, 0.08);' : ''}">
      <td><strong>${lead.id}</strong></td>
      <td><strong>${lead.name}</strong></td>
      <td>
        <a href="https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}" target="_blank" style="color: var(--gold-primary); text-decoration: underline;">
          ${lead.phone}
        </a>
      </td>
      <td>${lead.interest}</td>
      <td><span style="font-size: 12.5px; color: #a1a1aa;">${lead.budget}</span></td>
      <td><strong>${lead.visit_date}</strong></td>
      <td><span class="status-badge ${lead.status_class}">${lead.status}</span></td>
      <td><span style="font-size: 12px; color: var(--text-muted);">${lead.source}</span></td>
    </tr>
  `).join("");

  return `
    <div class="data-table-card">
      <div class="table-header-action-bar">
        <div>
          <h3>Daftar Prospek Masuk (WhatsApp CRM Live)</h3>
          <span style="font-size: 13px; color: var(--text-secondary);">
            Pipeline calon pembeli Grand Vista Residence yang terhubung dengan auto-responder PropertiSync.
          </span>
        </div>

        <button type="button" class="btn-trigger-crm" onclick="simulateNewIncomingLead()">
          <span>⚡ Tambah Prospek Baru (Simulasi WhatsApp Lead)</span>
        </button>
      </div>

      <div class="table-responsive">
        <table class="custom-data-table">
          <thead>
            <tr>
              <th>ID Lead</th>
              <th>Nama Calon Buyer</th>
              <th>WhatsApp</th>
              <th>Minat Cluster</th>
              <th>Skema Pembayaran</th>
              <th>Jadwal Show Unit</th>
              <th>Status CRM</th>
              <th>Sumber</th>
            </tr>
          </thead>
          <tbody id="crmTableBody">
            ${rows}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// Function to simulate real-time lead arrival via WhatsApp CRM
window.simulateNewIncomingLead = function () {
  const dummyNames = [
    "Bpk. Aditya Pratama, S.E.", "Ibu Cindy Melinda", "drg. David Suryadi",
    "Bpk. Eric Fernando", "Ibu Grace Natalia", "Bpk. Harry Gunawan"
  ];
  const dummyInterests = [
    "Cluster Ruby (85/120)", "Cluster Emerald (115/150)", "Sapphire Villa Suites"
  ];
  const dummyBudgets = [
    "Rp 1.5 M - KPR BCA", "Rp 1.8 M - Cash Bertahap", "Rp 2.6 M - Cash Keras"
  ];
  const dummySources = ["Meta Ads", "TikTok Ads"];

  const randomName = dummyNames[Math.floor(Math.random() * dummyNames.length)];
  const randomInterest = dummyInterests[Math.floor(Math.random() * dummyInterests.length)];
  const randomBudget = dummyBudgets[Math.floor(Math.random() * dummyBudgets.length)];
  const randomSource = dummySources[Math.floor(Math.random() * dummySources.length)];
  const randomPhone = "+62 81" + Math.floor(10000000 + Math.random() * 90000000);
  const newLeadId = "LEAD-GVR-" + (883 + Math.floor(Math.random() * 200));

  const newLead = {
    id: newLeadId,
    name: randomName,
    phone: randomPhone,
    interest: randomInterest,
    budget: randomBudget,
    visit_date: "Besok, 11:00 WIB (Auto-Locked)",
    status: "Menunggu Visit",
    status_class: "status-visit",
    source: randomSource
  };

  liveCrmLeads.unshift(newLead);

  // Update DOM table
  const tbody = document.getElementById("crmTableBody");
  if (tbody) {
    const tr = document.createElement("tr");
    tr.id = "leadRow_" + newLead.id;
    tr.style.background = "rgba(251, 191, 36, 0.12)";
    tr.innerHTML = `
      <td><strong>${newLead.id}</strong></td>
      <td><strong>${newLead.name}</strong></td>
      <td>
        <a href="https://wa.me/${newLead.phone.replace(/[^0-9]/g, '')}" target="_blank" style="color: var(--gold-primary); text-decoration: underline;">
          ${newLead.phone}
        </a>
      </td>
      <td>${newLead.interest}</td>
      <td><span style="font-size: 12.5px; color: #a1a1aa;">${newLead.budget}</span></td>
      <td><strong>${newLead.visit_date}</strong></td>
      <td><span class="status-badge ${newLead.status_class}">${newLead.status}</span></td>
      <td><span style="font-size: 12px; color: var(--text-muted);">${newLead.source}</span></td>
    `;
    tbody.insertBefore(tr, tbody.firstChild);
  }

  showToast(`💬 Inbound Lead Masuk! ${randomName} tertarik pada ${randomInterest}. Bot CRM mengunci jadwal visit dalam 45 detik.`);
};

// ================= CHART.JS: DARK THEMED LINE CHART =================
function initLineChart() {
  const canvas = document.getElementById("propertyLineChart");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const data = window.propertiSyncData.monthly_performance;

  if (activeChartInstance) {
    activeChartInstance.destroy();
  }

  activeChartInstance = new Chart(ctx, {
    type: "line",
    data: {
      labels: data.map(d => d.month),
      datasets: [
        {
          label: "Show Unit Visits (Hot Leads)",
          data: data.map(d => d.visits),
          borderColor: "#fbbf24", // Gold
          backgroundColor: "rgba(251, 191, 36, 0.1)",
          fill: true,
          tension: 0.35,
          borderWidth: 3,
          pointBackgroundColor: "#fbbf24",
          pointRadius: 4
        },
        {
          label: "Closing Units (Booking Fee)",
          data: data.map(d => (d.meta_closing + d.tiktok_closing) * 10), // scaled for visualization
          borderColor: "#10b981", // Emerald
          backgroundColor: "transparent",
          tension: 0.35,
          borderWidth: 3,
          pointBackgroundColor: "#10b981",
          pointRadius: 4
        },
        {
          label: "Ghosting Inquiries (No Show)",
          data: data.map(d => Math.round(d.chat_wa * 0.15)),
          borderColor: "#f97316", // Neon Orange
          backgroundColor: "transparent",
          borderDash: [5, 5],
          tension: 0.35,
          borderWidth: 2,
          pointBackgroundColor: "#f97316",
          pointRadius: 3
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
          labels: {
            font: { family: "Poppins", size: 12, weight: 600 },
            color: "#e5e7eb",
            usePointStyle: true,
            boxWidth: 10
          }
        },
        tooltip: {
          backgroundColor: "#171717",
          borderColor: "rgba(251, 191, 36, 0.4)",
          borderWidth: 1,
          titleFont: { family: "Montserrat", weight: 700 },
          bodyFont: { family: "Poppins" },
          padding: 12,
          cornerRadius: 8
        }
      },
      scales: {
        x: {
          grid: { color: "rgba(255, 255, 255, 0.05)" },
          ticks: { font: { family: "Poppins", size: 12 }, color: "#9ca3af" }
        },
        y: {
          grid: { color: "rgba(255, 255, 255, 0.05)" },
          ticks: { font: { family: "Poppins", size: 12 }, color: "#9ca3af" }
        }
      }
    }
  });
}

// Toast Notification
function showToast(message) {
  if (!toastContainer) return;

  const toast = document.createElement("div");
  toast.className = "toast-item";
  toast.innerHTML = `
    <span style="font-size: 16px;">👑</span>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  setTimeout(function () {
    toast.style.transition = "all 0.3s ease";
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// Switch to Ghosting tab
window.switchToGhostingTab = function () {
  const ghostingMenuItem = document.querySelector(".sidebar-menu .menu-item[data-page='ghosting']");
  if (ghostingMenuItem) {
    ghostingMenuItem.click();
  }
};
