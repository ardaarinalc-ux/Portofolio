/* ============================================================
   SCRIPT.JS — Portofolio Arda Arinal Chusna
   JavaScript murni (tanpa library). Isi file:
   1. DATA      -> semua teks/gambar situs (mudah diedit!)
   2. RENDER    -> mengisi HTML dari data di atas
   3. INTERAKSI -> menu HP, carousel, modal, lightbox, toast
   ============================================================ */

/* ============================================================
   1. DATA — ubah teks/gambar situs cukup dari bagian ini
   ============================================================ */

// Teks yang berjalan pelan (marquee) di bawah hero
const DATA_MARQUEE = [
  "ELECTRICAL SCHEMATICS", "PID CLOSED-LOOP CONTROL", "COMMISSIONING & VOLTAGE TESTING",
  "EASYEDA 3D PCB", "INDUSTRIAL INSTRUMENTATION", "CONTINUITY INSPECTION",
  "AUTOCAD SLD", "PENS SURABAYA","EMBEDDED SYSTEMS", "OTOMASI INDUSTRI", "MIKROKONTROLER", "ROBOT LINE FOLLOWER",
];

// Kelompok keahlian (tech stack)
const DATA_STACK = [
  {
    kategori: "Desain & Simulasi", ikon: "▣", warna: "cyan",
    alat: [
      { nama: "AutoCAD", peran: "Single Line Diagram (SLD), denah wiring, panel 2D drafting", logos: ["https://cdn.simpleicons.org/autocad/E51050"] },
      { nama: "EasyEDA", peran: "Schematic capture, layout PCB 2-layer, render 3D", logos: ["https://cdn.simpleicons.org/easyeda/5C85FF"] },
      { nama: "Proteus VSM", peran: "Simulasi rangkaian & co-simulasi firmware mikrokontroler", logos: ["icons/proteus.svg"] },
    ],
  },
  {
    kategori: "Pemrograman & Algoritma", ikon: "⌘", warna: "kuning",
    alat: [
      { nama: "Arduino", peran: "Interfacing sensor (I2C/SPI), library PID & driver aktuator", logos: ["https://cdn.simpleicons.org/arduino/00878F"] },
      { nama: "VS Code", peran: "Arsitektur kode modular, Git version control, scripting", logos: ["icons/vscode.svg"] },
      { nama: "C / Embedded C", peran: "Timer, interrupt, dan logika mikrokontroler tingkat register", logos: ["https://cdn.simpleicons.org/c/A8B9CC"] },
    ],
  },
  {
    kategori: "Pengujian & Dokumentasi", ikon: "∿", warna: "hijau",
    alat: [
      { nama: "Digital Multimeter", peran: "Continuity test, cek tegangan AC/DC, arus & grounding", logos: ["icons/multimeter.svg"] },
      { nama: "Word", peran: "Pembuatan proposal & laporan", logos: ["icons/word.svg"] },
      { nama: "Excel", peran: "Checklist inspeksi harian, logging toleransi, laporan QC", logos: ["icons/excel.svg"] },
    ],
  },
];

// Tugas saat pengalaman QC
const DATA_TUGAS = [
  { kunci: "COMMISSIONING", isi: "Melaksanakan pengujian operasional (cold/hot test) instalasi panel listrik untuk memastikan kesiapan sistem sebelum serah terima unit ke klien." },
  { kunci: "CONTINUITY TEST", isi: "Memverifikasi integritas jalur pengkabelan guna memastikan tidak terjadi short circuit antar fasa dan netral." },
  { kunci: "QC INSPECTION", isi: "Melakukan inspeksi kualitas dengan memverifikasi kesesuaian material yang terpasang sesuai dengan perancangan awal." },
  { kunci: "QC REPORTING", isi: "Mendokumentasikan deviasi toleransi secara sistematis melalui daily inspection checklist besbasis Microsoft Excel." },
  { kunci: "KOORDINASI", isi: "Berkoordinasi dengan tim teknisi dan supervisor untuk memastikan pekerjaan berjalan efektif." },
];

// Data proyek (kartu + isi modal detail)
const DATA_PROYEK = [
  {
    id: "smart-exhaust-pid",
    testId: "project-card-exhaust-pid",
    ikon: "◉",
    judul: "Smart Exhaust Fan Berbasis Kendali PID",
    singkat: "Sistem ventilasi cerdas yang beradaptasi dinamis terhadap suhu & kelembapan ruangan. Algoritma PID menjaga putaran kipas halus, presisi, dan hemat energi.",
    kategori: "HARDWARE & EMBEDDED CONTROL",
    tags: ["PID Tuning", "EasyEDA PCB", "PWM Fan Driver", "Embedded C", "Sensor DHT11"],
    gambar: "foto/fan.jpeg",
    panjang: "Exhaust fan konvensional hanya punya dua kondisi: ON atau OFF — boros energi dan suhu ruangan tidak stabil. Proyek ini menutup loop tersebut: sensor DHT11 membaca suhu & kelembapan, algoritma PID menghitung duty cycle PWM yang tepat, dan kipas menyesuaikan kecepatan secara halus mengikuti perubahan lingkungan.",
    specs: [
      ["Mikrokontroler", "ESP32-C3 (32-bit RISC-V, 160 MHz)"],
      ["Sensor", "DHT11 (Suhu & Kelembapan)"],
      ["Aktuator", "Brushless DC Fan via PWM MOSFET Driver"],
      ["PCB", "EasyEDA bottom Layer"],
      ["Catu Daya", "12V DC ±5%, Step-down 5V"],
    ],
    galeri: [
      { src: "foto/fan-3d.jpeg", label: "Custom 3D Print" },
      { src: "foto/exhaust-fan.jpeg", label: "Unit mikrokontroler terpasang pada 3D print" },
      { src: "foto/display.jpeg", label: "Unit tampilan LCD" },
    ],
  },
  {
    id: "cad-electrical-drafting",
    testId: "project-card-cad-drafting",
    ikon: "◉",
    judul: "Desain Instalasi Elektrikal 2D",
    singkat: "Pemetaan jalur kelistrikan residensial yang terstruktur — mengutamakan efisiensi penempatan komponen, standar keamanan instalasi, dan kemudahan maintenance.",
    kategori: "INDUSTRIAL DRAFTING & SLD",
    tags: ["AutoCAD", "Single Line Diagram", "Load Balancing", "Electrical Wiring"],
    gambar: "foto/cover.png",
    panjang: "Instalasi yang baik dimulai dari layar CAD. Proyek ini merancang denah titik lampu & stop kontak, pembagian grup beban yang seimbang, hingga Single Line Diagram lengkap — sehingga pemasangan di lapangan cepat, aman, dan mudah dirawat di masa depan.",
    specs: [
      ["Software", "AutoCAD 2024"],
      ["Sistem", "1-Fasa 220V"],
      ["Proteksi", "MCB + grounding electrode < 5 Ω"],
      ["Output", "Denah instalasi"],
    ],
    galeri: [
      { src: "foto/2d.png", label: "Verifikasi catu daya & kalibrasi tegangan saat validasi desain" },
      { src: "foto/komponen.png", label: "Verifikasi catu daya & kalibrasi tegangan saat validasi desain" },
    ],
  },
  {
    id: "line-follower-robot",
    testId: "project-card-line-follower",
    ikon: "◉",
    judul: "Robot Line Follower",
    singkat: "Integrasi mekanikal & elektrikal dengan algoritma kendali responsif — mengubah pembacaan sensor menjadi perintah motor yang stabil di atas lintasan.",
    kategori: "ROBOTICS & HARDWARE ROUTING",
    tags: ["Differential Drive", "TCRT 5000", "Modular Wiring", "L298N", "ESP32", "Ultrasonic Sensor", "LM2596 Step-down"],
    gambar: "foto/robot-1.jpeg",
    panjang: "Line follower yang cepat bukan soal motor kencang, tapi soal kendali yang tenang. Robot ini membaca posisi garis dengan 5 sensor, menghitung error posisi, lalu algoritma PD/PID memerintahkan kedua motor secara diferensial. Hasilnya: robot melaju stabil, tidak overshoot, dan mampu berbelok presisi di tikungan tajam.",
    specs: [
      ["Sensor", "TCRT 5000 5 chanel,Ultrasonic"],
      ["Mikrokontroler", "ESP32 DEVKIT V1 (32-bit RISC-V, 160 MHz)"],
      ["Driver Motor", "L298N dual channel"],
      ["Step-down Converter", "LM2596"],
      ["Chassis", "PCB custom ringan dengan bracket motor terintegrasi"],
      ["Wiring", "Kabel silikon + gold-plated header, modular & terisolasi"],
    ],
    galeri: [
      { src: "foto/scematik.png", label: "Skematik rangkaian robot line follower" },
      { src: "foto/top.png", label: "Top layer" },
      { src: "foto/buttom.png", label: "Bottom layer" },
      { src: "foto/robot.jpeg", label: "Rangkaian robot line follower" },
    ],
  },
];

// Data pendidikan
const DATA_RISET = [
  {
    id: "Politeknik Elektronika Negeri Surabaya", 
    badge: "AGUSTUS 2024 - SEKARANG",
    judul: "POLITEKNIK ELEKTRONIKA NEGERI SURABAYA",
    sub: "Sarjana Terapan Teknik Elektronika | IPK 3.24/4.00",
    fokus: "Menempuh pendidikan vokasi yang menekankan pada hands-on experience. Memiliki pemahaman kuat dalam sistem kelistrikan, elektronika daya, dan sistem kendali. Terlatih untuk menyelesaikan masalah teknis (troubleshooting) pada perangkat keras maupun perangkat lunak secara sistematis.",
  },
  {
    id: "SMA SWASTA QUEEN AL-FALAH",
    badge: "JULI 2021 - MEI 2024",
    judul: "SMA SWASTA QUEEN AL-FALAH",
    sub: "MIPA (Matematika & Ilmu Pengetahuan Alam)",
    fokus: "Awal mula ketertarikan pada dunia teknologi dan rekayasa. Aktif dalam kegiatan praktikum sains yang melatih ketelitian dan kedisiplinan. Membangun dasar pemahaman tentang hukum fisika dan kelistrikan yang menjadi bekal utama untuk melanjutkan studi di bidang Teknik Elektronika.",
  },
];

// Data sertifikat
const DATA_SERTIFIKAT = [
  { id: "<img src='foto/lkmm-pra-td.jpg' alt='LKMM Pra-Dasar' />", judul: "LKMM Pra-Dasar", lengkap: "Latihan Keterampilan Manajemen Mahasiswa Pra-Dasar", penerbit: "BEM PENS",ket:"pelatihan pengembangan diri untuk meningkatkan manajemen waktu, disiplin kerja, dan tanggung jawab." },
  { id: "<img src='foto/lkmm-td.jpeg' alt='LKMM Dasar' />", judul: "LKMM Dasar", lengkap: "Latihan Keterampilan Manajemen Mahasiswa Tingkat Dasar", penerbit: "BEM PENS",ket:"pelatihan yang bertujuan untuk meningkatkan kemampuan manajemen organisasi dan penyenggelaraan acara." },
  { id: "<img src='foto/lkti.jpeg' alt='LKTI-Nasional' />", judul: "LKTI-Nasional", lengkap: "Lomba karya Tulis Ilmiah Nasional", penerbit: "UIN SATU TULUNGAGUNG",ket:"Juara 3 Lomba Karya Tulis Ilmiah Nasional" },
];

// Kanal kontak (logo + link) — GANTI dengan data asli Anda di sini
const DATA_KANAL = [
  { nama: "WhatsApp", handle: "+62 823-3185-8872", url: "https://wa.me/6282331858872", logoImg: "https://cdn.simpleicons.org/whatsapp/25D366", kelas: "wa", testId: "contact-channel-whatsapp" },
  { nama: "Email", handle: "aardacuyy@gmail.com", url: "mailto:aardacuyy@gmail.com", logoImg:"icons/gmail.svg", kelas: "email", testId: "contact-channel-email" },
  { nama: "LinkedIn", handle: "linkedin.com/in/ardaarinalc", url: "https://linkedin.com/in/ardaarinalc", logoImg:"icons/linkedin.svg", kelas: "linkedin", testId: "contact-channel-linkedin" },
  { nama: "GitHub", handle: "github.com/ardaarinalc", url: "https://github.com/ardaarinalc", logoImg: "https://cdn.simpleicons.org/github/ffffff", kelas: "github", testId: "contact-channel-github" },
];

/* ============================================================
   2. RENDER — mengisi halaman dari data di atas
   ============================================================ */

// Marquee: konten digandakan 2x supaya animasinya mulus tanpa putus
function renderMarquee() {
  const isi = DATA_MARQUEE.map((t) => `<span class="item">${t}</span><span class="pisah">✦</span>`).join("");
  document.getElementById("marquee-track").innerHTML = isi + isi;
}

function renderStack() {
  document.getElementById("stack-grid").innerHTML = DATA_STACK.map((g) => `
    <div class="kartu-stack reveal">
      <span class="kategori ${g.warna}" style="color:var(--${g.warna})">${g.ikon} ${g.kategori}</span>
      <ul>
        ${g.alat.map((a) => `
          <li>
            <div class="alat"><b>${a.nama}</b>
            <span class="wadah-logo">
              ${(a.logos || []).map((l) => `<img class="logo-alat" src="${l}" alt="logo ${a.nama}" loading="lazy" />`).join("")}</span>
            </div>
            <p>${a.peran}</p>
          </li>`).join("")}
      </ul>
    </div>`).join("");
}

function renderTugas() {
  document.getElementById("daftar-tugas").innerHTML = DATA_TUGAS.map((t) => `
    <li><span class="kata-kunci">${t.kunci}</span><p>${t.isi}</p></li>`).join("");
}

function renderProyek() {
  document.getElementById("grid-proyek").innerHTML = DATA_PROYEK.map((p, i) => `
    <button class="kartu-proyek reveal" data-testid="${p.testId}" onclick="bukaProyek(${i})">
      <i class="sudut tl"></i><i class="sudut tr"></i><i class="sudut bl"></i><i class="sudut br"></i>
      <div class="gambar">
        <span class="kode">PRJ_0${i + 1} // ${p.kategori}</span>
        <img src="${p.gambar}" alt="${p.judul}" loading="lazy" />
      </div>
      <div class="isi">
        <span class="label-mono cyan">${p.ikon} ${p.kategori}</span>
        <h3>${p.judul}</h3>
        <p>${p.singkat}</p>
        <div class="tag-list">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
      </div>
    </button>`).join("");
}

function renderRiset() {
  document.getElementById("grid-riset").innerHTML = DATA_RISET.map((r, i) => `
    <article class="kartu-riset reveal" data-testid="research-card-${i}">
      <span class="badge">${r.badge}</span>
      <h3>${r.judul}</h3>
      <p class="sub-judul">${r.sub}</p>
      <p>${r.fokus}</p>
    </article>`).join("");
}

// Membuat HTML sertifikat (dipakai untuk kartu kecil & versi besar)
function htmlSertifikat(c, besar) {
  return `
    <div class="sertifikat ${besar ? "sertifikat-besar" : ""}">
     <div class="sert-img">${c.id}</div>
    </div>`;
}

function renderSertifikat() {
  document.getElementById("grid-sertifikat").innerHTML = DATA_SERTIFIKAT.map((c, i) => `
    <div class="reveal" data-testid="cert-card-${i}" onclick="bukaSertifikat(${i})" style="cursor:zoom-in">
      ${htmlSertifikat(c, false)}
      <div class="sert-nama">${c.judul}</div>
      <div class="sert-penerbit">${c.penerbit}</div>
      <div class="sert-ket">${c.ket}</div>
    </div>`).join("");
}

function renderKanal() {
  const logoHtml = (k) => `<img src="${k.logoImg}" alt="logo ${k.nama}" />`;

  // Kanal di bagian kontak
  document.getElementById("kanal-grid").innerHTML = DATA_KANAL.map((k) => `
    <a class="kanal ${k.kelas}" data-testid="${k.testId}" href="${k.url}" target="_blank" rel="noopener noreferrer">
      <span class="logo">${logoHtml(k)}</span>
      <span><b>${k.nama}</b><span>${k.handle}</span></span>
    </a>`).join("");

  // Tombol melayang kanan bawah
  document.getElementById("dock").innerHTML =
    DATA_KANAL.map((k) => `
      <a class="d-${k.kelas}" data-testid="floating-btn-${k.kelas}" href="${k.url}" target="_blank" rel="noopener noreferrer" aria-label="${k.nama}">
        <img src="${k.logoImg}" alt="" /><span class="tip">${k.nama}</span>
      </a>`).join("") +
    `<button class="d-cv" data-testid="floating-btn-cv" onclick="bukaCV();toast('Membuka pratinjau CV...','info')" aria-label="Unduh CV">⎙<span class="tip">CV // PDF</span></button>`;
}

/* ============================================================
   3. INTERAKSI
   ============================================================ */

// ----- Menu HP -----
function bukaMenu() { document.getElementById("menu-mobile").classList.add("buka"); }
function tutupMenu() { document.getElementById("menu-mobile").classList.remove("buka"); }

// ----- Navbar berubah gelap saat di-scroll -----
window.addEventListener("scroll", () => {
  document.getElementById("navbar").classList.toggle("scroll", window.scrollY > 24);
}, { passive: true });

// ----- Animasi muncul saat elemen masuk layar -----
function pasangReveal() {
  const pengamat = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("tampil");
        pengamat.unobserve(e.target);
      }
    });
  }, { rootMargin: "0px 0px -60px 0px" });
  document.querySelectorAll(".reveal").forEach((el) => pengamat.observe(el));
}

// ----- Carousel pengalaman -----
let slideAktif = 0;
function geserSlide(arah) {
  const total = 4;
  slideAktif = (slideAktif + arah + total) % total;
  document.getElementById("carousel-track").style.transform = `translateX(-${slideAktif * 100}%)`;
  gambarTitik();
}
function keSlide(i) { slideAktif = i; document.getElementById("carousel-track").style.transform = `translateX(-${i * 100}%)`; gambarTitik(); }
function gambarTitik() {
  document.getElementById("carousel-dots").innerHTML = [0, 1, 2, 3].map((i) =>
    `<button data-testid="carousel-dot-${i}" class="${i === slideAktif ? "aktif" : ""}" onclick="keSlide(${i})" aria-label="Ke slide ${i + 1}"></button>`).join("");
}

// ----- Toast (notifikasi kecil) -----
function toast(pesan, tipe = "ok") {
  const area = document.getElementById("toast-area");
  const el = document.createElement("div");
  el.className = "toast " + tipe;
  el.textContent = (tipe === "ok" ? "✓ " : tipe === "err" ? "✕ " : "ⓘ ") + pesan;
  area.appendChild(el);
  setTimeout(() => el.remove(), 4000);
}

// ----- Modal proyek -----
let proyekAktif = null;

function bukaProyek(i) {
  proyekAktif = DATA_PROYEK[i];
  document.getElementById("modal-kode").textContent = "PROJECT_DETAIL // " + proyekAktif.id.toUpperCase().replace(/-/g, "_");
  document.getElementById("modal-judul").textContent = proyekAktif.judul;

  const tabs = ["Overview", "Image"];
  document.getElementById("modal-tabs").innerHTML = tabs.map((t, j) =>
    `<button data-testid="project-tab-${j}" class="${j === 0 ? "aktif" : ""}" onclick="pilihTab(${j}, this)">${t}</button>`).join("");

  isiTab(0);
  document.getElementById("modal-proyek").classList.add("buka");
  document.body.style.overflow = "hidden"; // kunci scroll halaman belakang
}

function pilihTab(j, tombol) {
  document.querySelectorAll("#modal-tabs button").forEach((b) => b.classList.remove("aktif"));
  tombol.classList.add("aktif");
  isiTab(j);
}

function isiTab(j) {
  const p = proyekAktif;
  const wadah = document.getElementById("modal-isi");

  if (j === 0) {
    // Tab 1: deskripsi panjang + tabel spesifikasi
    wadah.innerHTML = `
      <div class="overview-grid">
        <div>
          <p>${p.panjang}</p>
          <div class="tag-list">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
        </div>
        <div class="spec-box">
          <span class="label-mono abu">TECH_SPEC // PARAMETER MATRIX</span>
          <table>${p.specs.map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join("")}</table>
        </div>
      </div>`;
  } else if (j === 1) {
    // Tab 2: galeri foto proyek
    wadah.innerHTML = `<div class="galeri">${p.galeri.map((g, k) => `
      <figure data-testid="gallery-item-${k}" onclick="bukaLightbox('${g.src}', '${g.label.replace(/'/g, "\\'")}')">
        <img src="${g.src}" alt="${g.label}" loading="lazy" />
        <figcaption>${g.label}</figcaption>
      </figure>`).join("")}</div>`;
  }   
}

function tutupProyek() {
  document.getElementById("modal-proyek").classList.remove("buka");
  document.body.style.overflow = "";
}

// ----- Lightbox gambar -----
function bukaLightbox(src, caption) {
  document.getElementById("lightbox-img").src = src;
  document.getElementById("lightbox-img").alt = caption;
  document.getElementById("lightbox-caption").textContent = caption;
  document.getElementById("lightbox").classList.add("buka");
}
function tutupLightbox() { document.getElementById("lightbox").classList.remove("buka"); }

// ----- Lightbox sertifikat -----
function bukaSertifikat(i) {
  document.getElementById("sertifikat-besar").innerHTML = htmlSertifikat(DATA_SERTIFIKAT[i], true);
  document.getElementById("lightbox-sertifikat").classList.add("buka");
  document.body.style.overflow = "hidden";
}
function tutupSertifikat() {
  document.getElementById("lightbox-sertifikat").classList.remove("buka");
  document.body.style.overflow = "";
}

// ----- Modal CV -----
let cvZoom = 1;
function bukaCV() {
  document.getElementById("modal-cv").classList.add("buka");
  document.body.style.overflow = "hidden";
}
function tutupCV() {
  document.getElementById("modal-cv").classList.remove("buka");
  document.body.style.overflow = "";
}
function zoomCV(delta) {
  cvZoom = Math.min(1.45, Math.max(0.7, +(cvZoom + delta).toFixed(2)));
  document.getElementById("cv-doc").style.transform = `scale(${cvZoom})`;
  document.getElementById("cv-zoom-label").textContent = Math.round(cvZoom * 100) + "%";
}

// ----- Tombol Escape menutup semua modal -----
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") { tutupProyek(); tutupLightbox(); tutupSertifikat(); tutupCV(); tutupMenu(); }
});

/* ============================================================
   KHUSUS HP — tidak berpengaruh ke tampilan/ perilaku desktop
   ============================================================ */

// ----- Tombol "kembali" HP menutup overlay (menu/modal/lightbox), bukan keluar situs -----
const modeHP = window.matchMedia("(max-width: 768px)");
["bukaMenu", "bukaProyek", "bukaLightbox", "bukaSertifikat", "bukaCV"].forEach((nama) => {
  const asli = window[nama];
  window[nama] = function (...args) {
    if (modeHP.matches) history.pushState({ overlay: true }, "");
    return asli.apply(this, args);
  };
});
window.addEventListener("popstate", () => {
  tutupMenu(); tutupProyek(); tutupLightbox(); tutupSertifikat(); tutupCV();
  document.body.style.overflow = "";
});

// ----- Carousel pengalaman bisa digeser kiri/kanan pakai jari (swipe) -----
let sentuhX = null;
const areaCarousel = document.querySelector(".carousel");
areaCarousel.addEventListener("touchstart", (e) => { sentuhX = e.touches[0].clientX; }, { passive: true });
areaCarousel.addEventListener("touchend", (e) => {
  if (sentuhX === null) return;
  const geser = e.changedTouches[0].clientX - sentuhX;
  if (Math.abs(geser) > 40) geserSlide(geser < 0 ? 1 : -1); // geser kiri = slide berikutnya
  sentuhX = null;
}, { passive: true });

/* ============================================================
   JALANKAN SEMUANYA saat halaman selesai dimuat
   ============================================================ */
renderMarquee();
renderStack();
renderTugas();
renderProyek();
renderRiset();
renderSertifikat();
renderKanal();
gambarTitik();    // titik navigasi carousel
pasangReveal();   // animasi muncul saat scroll
