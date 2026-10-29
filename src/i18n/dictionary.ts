export type Lang = "en" | "id";

export const LANG_KEY = "newco-lang";

export type Entry = { en: string; id: string };

function e(en: string, id: string): Entry {
  return { en, id };
}

export const STRINGS: Record<string, Entry> = {
  "about.commitments.contact-desc": e(
    "A named contact and agreed response times.",
    "Narahubung khusus yang jelas dengan jaminan waktu respons yang telah disepakati.",
  ),
  "about.commitments.contact-title": e(
    "A real person to talk to.",
    "Bicara langsung dengan orang sungguhan",
  ),
  "about.commitments.honest-desc": e(
    "We recommend what's right for the business, not what costs the most.",
    "Kami merekomendasikan solusi yang paling tepat untuk bisnis Anda, bukan yang biayanya paling mahal.",
  ),
  "about.commitments.honest-title": e(
    "Honest advice.",
    "Saran yang jujur",
  ),
  "about.commitments.plain-desc": e(
    "No jargon, no surprises.",
    "Tanpa istilah rumit (jargon), tanpa kejutan tak terduga.",
  ),
  "about.commitments.plain-title": e(
    "Plain-language updates.",
    "Pembaruan dalam bahasa yang lugas",
  ),
  "about.commitments.pricing-desc": e(
    "Agreed upfront, before work begins.",
    "Disepakati di awal, sebelum pekerjaan dimulai.",
  ),
  "about.commitments.pricing-title": e(
    "Clear pricing.",
    "Biaya yang transparan",
  ),
  "about.commitments.title": e(
    "What every client can count on.",
    "Komitmen kami untuk setiap klien.",
  ),
  "about.commitments.work-p1": e(
    "We work directly alongside your existing engineers, technical leads, and founders. Rather than operating in an isolated agency silo, our engineers join your sprints, review pull requests with your team, and establish shared coding standards from day one.",
    "Kami bekerja langsung berdampingan dengan para engineer, tech lead, dan founder Anda. Alih-alih bekerja terisolasi secara terpisah layaknya agensi pada umumnya, tim kami ikut bergabung dalam sprint, meninjau pull request bersama tim Anda, serta menyelaraskan standar coding sejak hari pertama.",
  ),
  "about.commitments.work-p2": e(
    "Every architecture decision, infrastructure deployment, and operational runbook is documented directly in your repositories. When our engagement concludes, your business holds complete, autonomous ownership of the code, systems, and deployment pipelines.",
    "Setiap keputusan arsitektur, penerapan infrastruktur, hingga panduan operasional (runbook) didokumentasikan langsung di repositori milik Anda. Begitu masa kerja sama tuntas, bisnis Anda memegang kepemilikan mandiri secara penuh atas seluruh kode, sistem, serta jalur penerapan (deployment pipelines).",
  ),
  "about.commitments.work-title": e(
    "How we work with your leadership",
    "Cara kami berkolaborasi dengan jajaran pimpinan Anda",
  ),
  "about.cta.body": e(
    "We'll look at your systems, constraints and goals, then give you an honest recommendation on the best way forward.",
    "Kami akan meninjau sistem, batasan, dan target bisnis Anda, lalu memberikan rekomendasi jujur mengenai langkah terbaik ke depan.",
  ),
  "about.cta.button": e(
    "Talk to us",
    "Hubungi kami",
  ),
  "about.cta.title": e(
    "If this is how you want to work, tell us where things stand.",
    "Jika ini cara kerja yang Anda cari, ceritakan kondisi Anda saat ini.",
  ),
  "about.hero.eyebrow": e(
    "// LEADERSHIP & COMMITMENTS",
    "// KEPEMIMPINAN & KOMITMEN",
  ),
  "about.hero.lede": e(
    "Your technology partner, start to finish. We design, build and support the systems businesses rely on every day.",
    "Mitra teknologi Anda, dari awal hingga tuntas. Kami merancang, membangun, dan mendukung sistem yang diandalkan bisnis setiap hari.",
  ),
  "about.hero.title": e(
    "Built on trust, delivered with care.",
    "Dibangun atas dasar kepercayaan, dihadirkan dengan sepenuh hati.",
  ),
  "about.overview.body": e(
    "See how NewCo works, what we deliver, and how ownership transfers to your business.",
    "Pelajari cara kerja NewCo, apa yang kami hadirkan, dan bagaimana kepemilikan dialihkan ke bisnis Anda.",
  ),
  "about.overview.title": e(
    "Want a quick overview?",
    "Ingin ringkasan singkat?",
  ),
  "about.philosophy.eyebrow": e(
    "// OUR PHILOSOPHY",
    "// FILOSOFI KAMI",
  ),
  "about.philosophy.heading": e(
    "Engineering principles that outlast our engagement.",
    "Prinsip rekayasa yang bertahan melampaui kerja sama kami.",
  ),
  "about.philosophy.lede": e(
    "We believe technology should serve business growth without creating perpetual vendor dependence. These four commitments govern how we architect and build.",
    "Kami meyakini teknologi harus mendorong pertumbuhan bisnis tanpa menciptakan ketergantungan abadi pada vendor. Empat komitmen ini menjadi landasan arsitektur dan pembangunan kami.",
  ),
  "about.philosophy.p1-title": e(
    "Zero lock-in architecture",
    "Arsitektur Tanpa Keterikatan (Zero Lock-In)",
  ),
  "about.philosophy.p1-body": e(
    "Every architectural decision prioritizes open standards, clean API boundaries, and mainstream cloud primitives. Your team can run, modify, or migrate your systems anywhere without proprietary hurdles.",
    "Setiap keputusan arsitektur memprioritaskan standar terbuka, batasan API yang bersih, dan primitif cloud standar. Tim Anda dapat menjalankan, memodifikasi, atau memigrasikan sistem ke mana saja tanpa hambatan.",
  ),
  "about.philosophy.p2-title": e(
    "Continuous documentation",
    "Dokumentasi Berkelanjutan",
  ),
  "about.philosophy.p2-body": e(
    "Architecture decision records, deployment runbooks, and schema maps live directly in version control alongside application source code, ensuring knowledge is never lost to employee turnover.",
    "Catatan keputusan arsitektur (ADR), panduan operasional (runbooks), dan peta skema tersimpan langsung di kontrol versi bersama kode sumber, memastikan pengetahuan tidak hilang saat terjadi pergantian staf.",
  ),
  "about.philosophy.p3-title": e(
    "Shared code ownership",
    "Kepemilikan Kode Bersama",
  ),
  "about.philosophy.p3-body": e(
    "We write software for the engineers who will maintain it years down the road. Strict typing, automated linters, and end-to-end integration tests prevent regressions and maintain velocity.",
    "Kami menulis perangkat lunak untuk para engineer yang akan memeliharanya di masa mendatang. Pengetikan ketat, linter otomatis, dan pengujian integrasi menyeluruh mencegah regresi dan menjaga kecepatan pengembangan.",
  ),
  "about.philosophy.p4-title": e(
    "Pragmatic innovation",
    "Inovasi Pragmatis",
  ),
  "about.philosophy.p4-body": e(
    "New tools and frameworks are evaluated against maintenance burden and measurable business return before adoption. We recommend boring, reliable solutions whenever they deliver equal or superior value.",
    "Teknologi dan kerangka kerja baru dievaluasi berdasarkan beban pemeliharaan dan dampak bisnis nyata sebelum diadopsi. Kami menyarankan solusi yang terbukti andal bilamana memberikan nilai yang setara atau lebih baik.",
  ),
  "about.team.alt-ceo": e(
    "Vanezza, Chief Executive Officer",
    "Vanezza, Chief Executive Officer",
  ),
  "about.team.alt-cto": e(
    "Agung Denisa, Chief Technology Officer",
    "Agung Denisa, Chief Technology Officer",
  ),
  "about.team.bio-ceo": e(
    "Vanezza leads client strategy and operations. She translates business goals into clear technical scope and ensures every engagement delivers measurable value.",
    "Vanezza memimpin strategi dan operasi klien. Dia menerjemahkan tujuan bisnis ke ruang lingkup teknis yang jelas dan memastikan setiap kerja sama menghasilkan nilai yang terukur.",
  ),
  "about.team.bio-cto": e(
    "Agung architects the systems NewCo builds and owns the technical standards. He reviews every proposal for feasibility, maintainability, and security.",
    "Agung merancang sistem yang NewCo bangun dan memiliki standar teknis. Dia meninjau setiap proposal untuk kelayakan, maintainability, dan keamanan.",
  ),
  "about.team.lede": e(
    "Every proposal is checked by both founders, one for the business side and one for the technical side, so what we promise is always what we can deliver.",
    "Setiap proposal ditinjau langsung oleh kedua pendiri—satu dari sisi bisnis dan satu dari sisi teknis—sehingga apa yang kami janjikan selalu dapat kami wujudkan.",
  ),
  "about.team.linkedin": e(
    "LinkedIn",
    "LinkedIn",
  ),
  "about.team.role-ceo": e(
    "Chief Executive Officer",
    "Chief Executive Officer",
  ),
  "about.team.role-cto": e(
    "Chief Technology Officer",
    "Chief Technology Officer",
  ),
  "about.team.title": e(
    "The team behind NewCo.",
    "Tim di balik NewCo.",
  ),
  "capabilitycurve.caption": e(
    "Handover is a success metric, not a hidden failure condition.",
    "Serah terima itu tolok ukur keberhasilan, bukan sumber masalah tersembunyi.",
  ),
  "capabilitycurve.desc": e(
    "A line chart across 5 phases (Diagnose, Build With, Run With, Hand Over, Advise) showing NewCo's day to day ownership decreasing from high to low while the client's ownership increases from low to high.",
    "Grafik garis lima tahap (Diagnosis, Bangun Bareng, Jalan Bareng, Serah Terima, Pendampingan) yang nunjukin porsi kerja harian NewCo turun dari besar ke kecil, sementara porsi klien naik dari kecil ke besar.",
  ),
  "capabilitycurve.legend.client": e(
    "Client ownership",
    "Porsi klien",
  ),
  "capabilitycurve.legend.client-short": e(
    "Client",
    "Klien",
  ),
  "capabilitycurve.legend.newco": e(
    "NewCo day to day ownership",
    "Porsi harian NewCo",
  ),
  "capabilitycurve.legend.newco-short": e(
    "NewCo",
    "NewCo",
  ),
  "capabilitycurve.legend.ownership": e(
    "Day to day ownership",
    "Porsi kerja harian",
  ),
  "capabilitycurve.note": e(
    "Illustrative",
    "Ilustrasi",
  ),
  "capabilitycurve.phase1.label": e(
    "Diagnose",
    "Diagnosis",
  ),
  "capabilitycurve.phase1.live": e(
    "Diagnose: client ownership 8 percent, NewCo pager share 100 percent. Baseline Diagnostic.",
    "Diagnosis: porsi klien 8 persen, piket NewCo 100 persen. Diagnosis Awal.",
  ),
  "capabilitycurve.phase1.milestone": e(
    "Baseline Diagnostic",
    "Diagnosis Awal",
  ),
  "capabilitycurve.phase1.sr": e(
    "Illustrative: NewCo ownership about 92 percent, client ownership about 8 percent.",
    "Ilustrasi: porsi NewCo sekitar 92 persen, porsi klien sekitar 8 persen.",
  ),
  "capabilitycurve.phase2.label": e(
    "Build With",
    "Bangun Bareng",
  ),
  "capabilitycurve.phase2.live": e(
    "Build With: client ownership 30 percent, NewCo pager share 75 percent. Joint Delivery.",
    "Bangun Bareng: porsi klien 30 persen, piket NewCo 75 persen. Delivery Bareng.",
  ),
  "capabilitycurve.phase2.milestone": e(
    "Joint Delivery",
    "Delivery Bareng",
  ),
  "capabilitycurve.phase2.sr": e(
    "Illustrative: NewCo ownership about 74 percent, client ownership about 30 percent.",
    "Ilustrasi: porsi NewCo sekitar 74 persen, porsi klien sekitar 30 persen.",
  ),
  "capabilitycurve.phase3.label": e(
    "Run With",
    "Jalan Bareng",
  ),
  "capabilitycurve.phase3.live": e(
    "Run With: client ownership 58 percent, NewCo pager share 50 percent. Shared Pager.",
    "Jalan Bareng: porsi klien 58 persen, piket NewCo 50 persen. Piket Bareng.",
  ),
  "capabilitycurve.phase3.milestone": e(
    "Shared Pager",
    "Piket Bareng",
  ),
  "capabilitycurve.phase3.sr": e(
    "Illustrative: NewCo ownership about 48 percent, client ownership about 58 percent.",
    "Ilustrasi: porsi NewCo sekitar 48 persen, porsi klien sekitar 58 persen.",
  ),
  "capabilitycurve.phase4.label": e(
    "Hand Over",
    "Serah Terima",
  ),
  "capabilitycurve.phase4.live": e(
    "Hand Over: client ownership 82 percent, NewCo pager share 15 percent. Autonomous Handover.",
    "Serah Terima: porsi klien 82 persen, piket NewCo 15 persen. Lepas Mandiri.",
  ),
  "capabilitycurve.phase4.milestone": e(
    "Autonomous Handover",
    "Lepas Mandiri",
  ),
  "capabilitycurve.phase4.sr": e(
    "Illustrative: NewCo ownership about 22 percent, client ownership about 82 percent.",
    "Ilustrasi: porsi NewCo sekitar 22 persen, porsi klien sekitar 82 persen.",
  ),
  "capabilitycurve.phase5.label": e(
    "Advise",
    "Pendampingan",
  ),
  "capabilitycurve.phase5.live": e(
    "Advise: client ownership 94 percent, NewCo pager share 0 percent. Advisory Governance.",
    "Pendampingan: porsi klien 94 persen, piket NewCo 0 persen. Tata Kelola Pendamping.",
  ),
  "capabilitycurve.phase5.milestone": e(
    "Advisory Governance",
    "Tata Kelola Pendamping",
  ),
  "capabilitycurve.phase5.sr": e(
    "Illustrative: NewCo ownership about 10 percent, client ownership about 94 percent.",
    "Ilustrasi: porsi NewCo sekitar 10 persen, porsi klien sekitar 94 persen.",
  ),
  "capabilitycurve.phasegroup": e(
    "Select a phase",
    "Pilih tahap",
  ),
  "capabilitycurve.telemetry.client": e(
    "Client Ownership",
    "Porsi Klien",
  ),
  "capabilitycurve.telemetry.pager": e(
    "NewCo Pager Share",
    "Piket NewCo",
  ),
  "capabilitycurve.telemetry.phase": e(
    "Phase",
    "Tahap",
  ),
  "capabilityscorecard.caption": e(
    "Capability-transfer scorecard: each capability, its handover evidence, and the four assessment checkpoints.",
    "Kartu skor alih kapabilitas: tiap kemampuan, bukti serah terimanya, dan empat titik penilaiannya.",
  ),
  "capabilityscorecard.check1-assessed": e(
    "Baseline: assessed",
    "Baseline: dinilai",
  ),
  "capabilityscorecard.check2": e(
    "Build With",
    "Bangun Bareng",
  ),
  "capabilityscorecard.check2-assessed": e(
    "Build With: assessed",
    "Bangun Bareng: sudah dinilai",
  ),
  "capabilityscorecard.check3": e(
    "Before shared ops",
    "Sebelum operasi bersama",
  ),
  "capabilityscorecard.check3-assessed": e(
    "Before shared ops: assessed",
    "Sebelum operasi bersama: sudah dinilai",
  ),
  "capabilityscorecard.check4": e(
    "Handover",
    "Serah terima",
  ),
  "capabilityscorecard.check4-assessed": e(
    "Handover: assessed",
    "Serah terima: sudah dinilai",
  ),
  "capabilityscorecard.col-capability": e(
    "Capability",
    "Kapabilitas",
  ),
  "capabilityscorecard.col-evidence": e(
    "Evidence at handover",
    "Bukti saat serah terima",
  ),
  "capabilityscorecard.row1.capability": e(
    "Architecture",
    "Arsitektur",
  ),
  "capabilityscorecard.row1.evidence": e(
    "Explains the major components, constraints, and trade-offs.",
    "Bisa menjelaskan komponen utama, kendala, dan trade-off-nya.",
  ),
  "capabilityscorecard.row2.capability": e(
    "Delivery",
    "Delivery",
  ),
  "capabilityscorecard.row2.evidence": e(
    "Ships a production change through the normal controls.",
    "Bisa merilis perubahan ke production lewat kontrol yang normal.",
  ),
  "capabilityscorecard.row3.capability": e(
    "Operations",
    "Operasi",
  ),
  "capabilityscorecard.row3.evidence": e(
    "Responds to an incident using logs, metrics, traces, and runbooks.",
    "Bisa menangani insiden pakai log, metrik, trace, dan runbook.",
  ),
  "capabilityscorecard.row4.capability": e(
    "Recovery",
    "Pemulihan",
  ),
  "capabilityscorecard.row4.evidence": e(
    "Executes rollback and recovery procedures.",
    "Bisa menjalankan prosedur rollback dan pemulihan.",
  ),
  "capabilityscorecard.row5.capability": e(
    "Data",
    "Data",
  ),
  "capabilityscorecard.row5.evidence": e(
    "Validates freshness, quality, lineage, and permissions.",
    "Bisa memastikan data segar, berkualitas, jelas asal-usulnya, dan izinnya benar.",
  ),
  "capabilityscorecard.row6.capability": e(
    "Security",
    "Keamanan",
  ),
  "capabilityscorecard.row6.evidence": e(
    "Remediates a dependency or access-control issue.",
    "Bisa membereskan masalah dependensi atau kontrol akses.",
  ),
  "capabilityscorecard.row7.capability": e(
    "Decision-making",
    "Pengambilan keputusan",
  ),
  "capabilityscorecard.row7.evidence": e(
    "Authors and defends an architecture decision record.",
    "Bisa menyusun dan mempertahankan catatan keputusan arsitektur.",
  ),
  "capabilityscorecard.row8.capability": e(
    "Planning",
    "Perencanaan",
  ),
  "capabilityscorecard.row8.evidence": e(
    "Prioritises and delivers the next iteration without us.",
    "Bisa memprioritaskan dan mengerjakan iterasi berikutnya tanpa kami.",
  ),
  "contact.form.company-label": e(
    "Company",
    "Perusahaan",
  ),
  "contact.form.console": e(
    "// INTAKE CONSOLE",
    "// KONSOL PENGISIAN",
  ),
  "contact.form.decision-label": e(
    "Who's the main decision-maker?",
    "Siapa pengambil keputusan utama?",
  ),
  "contact.form.email-label": e(
    "Email",
    "Email",
  ),
  "contact.form.err-company": e(
    "Please enter your company",
    "Isi nama perusahaan Anda",
  ),
  "contact.form.err-email": e(
    "Please enter your email address",
    "Isi alamat email Anda",
  ),
  "contact.form.err-email-invalid": e(
    "Please enter a valid email address",
    "Isi alamat email yang valid",
  ),
  "contact.form.err-followup": e(
    "Please choose how we should follow up",
    "Pilih cara kami menghubungi Anda",
  ),
  "contact.form.err-help": e(
    "Please tell us what you would like help with",
    "Ceritakan bantuan yang Anda butuhkan",
  ),
  "contact.form.err-locations": e(
    "Please tell us how many locations or branches",
    "Isi jumlah lokasi atau cabang",
  ),
  "contact.form.err-name": e(
    "Please enter your name",
    "Isi nama Anda",
  ),
  "contact.form.err-region": e(
    "Please enter your country or region",
    "Isi negara atau wilayah Anda",
  ),
  "contact.form.err-required": e(
    "This field is required",
    "Kolom ini wajib diisi",
  ),
  "contact.form.err-role": e(
    "Please enter your role",
    "Isi peran Anda",
  ),
  "contact.form.followup-email": e(
    "Email",
    "Email",
  ),
  "contact.form.followup-label": e(
    "How should we follow up?",
    "Mau kami hubungi lewat apa?",
  ),
  "contact.form.followup-phone": e(
    "Phone",
    "Telepon",
  ),
  "contact.form.followup-videocall": e(
    "Video call",
    "Panggilan video",
  ),
  "contact.form.help-label": e(
    "What would you like help with?",
    "Bantuan apa yang Anda butuhkan?",
  ),
  "contact.form.it-label": e(
    "Is there an IT contact or provider we should speak with?",
    "Ada kontak IT atau vendor yang perlu kami ajak bicara?",
  ),
  "contact.form.locations-label": e(
    "How many locations or branches?",
    "Ada berapa lokasi atau cabang?",
  ),
  "contact.form.more-title": e(
    "A bit more (optional)",
    "Sedikit lagi (boleh dilewati)",
  ),
  "contact.form.name-label": e(
    "Your name",
    "Nama Anda",
  ),
  "contact.form.project-improve": e(
    "Improve an existing system",
    "Menyempurnakan sistem yang ada",
  ),
  "contact.form.project-label": e(
    "What best describes the project?",
    "Proyeknya seperti apa?",
  ),
  "contact.form.project-new": e(
    "New system",
    "Sistem baru",
  ),
  "contact.form.project-placeholder": e(
    "Select one",
    "Pilih satu",
  ),
  "contact.form.project-unsure": e(
    "Not sure yet",
    "Belum tahu",
  ),
  "contact.form.region-label": e(
    "Country or region",
    "Negara atau wilayah",
  ),
  "contact.form.role-label": e(
    "Your role",
    "Peran Anda",
  ),
  "contact.form.sending": e(
    "Sending…",
    "Mengirim…",
  ),
  "contact.form.submit": e(
    "Send",
    "Kirim",
  ),
  "contact.form.success": e(
    "Thanks, we've got it. We'll reply within 24 hours with a clear next step.",
    "Terima kasih, sudah kami terima. Kami balas dalam 24 jam dengan langkah berikutnya yang jelas.",
  ),
  "contact.faq.eyebrow": e(
    "// ENGAGEMENT FAQ",
    "// TANYA JAWAB KERJA SAMA",
  ),
  "contact.faq.heading": e(
    "Common questions before reaching out.",
    "Pertanyaan umum sebelum memulai kerja sama.",
  ),
  "contact.faq.lede": e(
    "Here is what working with NewCo looks like from initial conversation to contractual handover.",
    "Inilah gambaran bermitra dengan NewCo, mulai dari percakapan awal hingga serah terima kontrak.",
  ),
  "contact.faq.q1-title": e(
    "What happens after submitting the form?",
    "Apa yang terjadi setelah mengirimkan formulir?",
  ),
  "contact.faq.q1-body": e(
    "Within 24 business hours, our founders review your details and send a direct response. If there is mutual alignment, we schedule a 30-minute discovery conversation to discuss architecture, timeline, and goals.",
    "Dalam waktu 24 jam kerja, pendiri kami meninjau detail Anda dan mengirimkan balasan langsung. Jika terdapat keselarasan, kami menjadwalkan diskusi penelaahan selama 30 menit.",
  ),
  "contact.faq.q2-title": e(
    "Do you sign non-disclosure agreements?",
    "Apakah Anda menandatangani perjanjian kerahasiaan (NDA)?",
  ),
  "contact.faq.q2-body": e(
    "Yes. We routinely execute mutual NDAs prior to reviewing proprietary source code, infrastructure credentials, or sensitive business logic. Your intellectual property remains strictly yours.",
    "Ya. Kami secara rutin menandatangani NDA dua arah sebelum meninjau kode sumber eksklusif, kredensial infrastruktur, atau logika bisnis sensitif.",
  ),
  "contact.faq.q3-title": e(
    "What types of projects do you take on?",
    "Jenis proyek apa saja yang Anda tangani?",
  ),
  "contact.faq.q3-body": e(
    "We partner on core web platforms, enterprise distributed systems, cloud migrations, performance overhauls, and modernization of legacy codebases where client teams require long-term independence.",
    "Kami bermitra untuk platform web inti, sistem terdistribusi skala enterprise, migrasi cloud, optimalisasi performa, dan modernisasi kode lama agar tim klien mandiri jangka panjang.",
  ),
  "contact.faq.q4-title": e(
    "How does pricing and billing work?",
    "Bagaimana sistem penetapan harga dan penagihan?",
  ),
  "contact.faq.q4-body": e(
    "Engagements are scoped with fixed, transparent milestones or predictable monthly retainers. You receive clear deliverables with no unexpected billing or hidden maintenance fees.",
    "Kerja sama dirancang dengan pencapaian bertahap yang transparan atau retainer bulanan yang dapat diprediksi. Anda menerima hasil kerja nyata tanpa biaya tak terduga.",
  ),
  "contact.faq.q5-title": e(
    "Can we start with a pilot engagement?",
    "Bisakah kami memulai dengan proyek percontohan (pilot)?",
  ),
  "contact.faq.q5-body": e(
    "Yes. Many clients begin with a two-week baseline diagnostic or targeted architecture audit. This gives your team a clear, actionable roadmap and proof of collaboration before committing to full-scale build sprints.",
    "Bisa. Banyak klien memulai dengan diagnostik dasar dua minggu atau audit arsitektur terarah. Ini memberi tim Anda peta jalan yang jelas dan bukti kerja sama sebelum memulai sprint pembangunan penuh.",
  ),
  "contact.faq.q6-title": e(
    "How do you collaborate with our team?",
    "Bagaimana Anda berkolaborasi dengan tim kami?",
  ),
  "contact.faq.q6-body": e(
    "We integrate directly into your existing communication tools, participate in sprint rituals, and submit changes through pull requests. Knowledge transfer happens continuously through daily code reviews.",
    "Kami terhubung langsung ke sarana komunikasi Anda, mengikuti ritme sprint harian, dan mengajukan perubahan lewat pull request. Transfer pengetahuan terjadi terus-menerus melalui tinjauan kode harian.",
  ),
  "contact.intro.expect-1": e(
    "An initial 30-minute scoping call to understand your systems and constraints.",
    "Sesi diskusi awal (scoping call) selama 30 menit untuk memahami sistem dan batasan Anda.",
  ),
  "contact.intro.expect-2": e(
    "Clear technical recommendations and capability baseline assessment.",
    "Rekomendasi teknis yang jelas serta penilaian tolok ukur kapabilitas (baseline assessment).",
  ),
  "contact.intro.expect-3": e(
    "Honest fit evaluation: we only take on engagements where we can ensure complete handover.",
    "Evaluasi kesesuaian yang jujur: kami hanya menerima proyek jika kami yakin dapat menjamin serah terima secara tuntas.",
  ),
  "contact.intro.expect-title": e(
    "// What to expect",
    "// APA YANG AKAN ANDA DAPATKAN",
  ),
  "contact.intro.eyebrow": e(
    "// ENGAGEMENT BRIEF",
    "// BRIEF KERJA SAMA",
  ),
  "contact.intro.lede": e(
    "Share a few details and we'll reply with a clear next step. No obligation, and we'll never ask for passwords or system access here.",
    "Bagikan beberapa detail singkat dan kami akan membalas dengan langkah konkret berikutnya. Tanpa ikatan apa pun, dan kami tidak akan pernah meminta kata sandi atau akses sistem di sini.",
  ),
  "contact.intro.privacy-link": e(
    "Privacy Policy",
    "Kebijakan Privasi",
  ),
  "contact.intro.privacy-prefix": e(
    "We respect your privacy. See our",
    "Kami menghormati privasi Anda. Lihat",
  ),
  "contact.intro.privacy-suffix": e(
    ".",
    " kami.",
  ),
  "contact.intro.review-body": e(
    "Every enquiry is reviewed directly by our founders, with a guaranteed 24-hour response.",
    "Setiap pertanyaan ditinjau langsung oleh para pendiri kami, dengan jaminan respons dalam waktu 24 jam.",
  ),
  "contact.intro.review-title": e(
    "// Direct Founder Review",
    "// DITINJAU LANGSUNG OLEH PENDIRI",
  ),
  "contact.intro.title": e(
    "Tell us what the business needs.",
    "Ceritakan apa yang bisnis Anda butuhkan.",
  ),
  "footer.company": e(
    "Company",
    "Perusahaan",
  ),
  "footer.connect": e(
    "Connect",
    "Terhubung",
  ),
  "footer.cta": e(
    "Start a conversation",
    "Mulai diskusi",
  ),
  "footer.office-label": e(
    "Registered office",
    "Kantor terdaftar",
  ),
  "footer.privacy": e(
    "Privacy",
    "Privasi",
  ),
  "footer.rights": e(
    "All rights reserved.",
    "Hak cipta dilindungi undang-undang.",
  ),
  "footer.tagline": e(
    "Systems built properly, documented fully, and owned by the business.",
    "Sistem yang dibangun dengan tepat, terdokumentasi lengkap, dan sepenuhnya milik bisnis Anda.",
  ),
  "howwework.curve.caption": e(
    "By the final stage, the business runs its technology on its own terms.",
    "Pada tahap akhir, bisnis menjalankan teknologinya dengan kendali penuh secara mandiri.",
  ),
  "howwework.curve.development.label": e(
    "Development",
    "Pengembangan",
  ),
  "howwework.curve.development.milestone": e(
    "Joint Engineering",
    "Rekayasa Bersama",
  ),
  "howwework.curve.discovery.label": e(
    "Discovery",
    "Pencarian",
  ),
  "howwework.curve.discovery.milestone": e(
    "Baseline Diagnostic",
    "Diagnosis Awal",
  ),
  "howwework.curve.fig": e(
    "// FIG. 01",
    "// GBR. 01",
  ),
  "howwework.curve.operations.label": e(
    "Operations and Support",
    "Operasi dan Dukungan",
  ),
  "howwework.curve.operations.milestone": e(
    "Shared Operations",
    "Operasi dan Dukungan",
  ),
  "howwework.curve.title": e(
    "OWNERSHIP CURVE",
    "KURVA KEPEMILIKAN",
  ),
  "howwework.curve.transfer.label": e(
    "Ownership Transfer",
    "Alih Kepemilikan",
  ),
  "howwework.curve.transfer.milestone": e(
    "Autonomous Ownership",
    "Mandiri Penuh",
  ),
  "howwework.handover.accounts.included": e(
    "Hosting, domains and services in the business's name",
    "Hosting, domain, dan seluruh layanan terdaftar resmi atas nama bisnis Anda",
  ),
  "howwework.handover.accounts.item": e(
    "Accounts and access",
    "Akun & Hak Akses",
  ),
  "howwework.handover.col-included": e(
    "What's included",
    "CAKUPAN KELENGKAPAN",
  ),
  "howwework.handover.col-item": e(
    "Item",
    "POIN / ITEM",
  ),
  "howwework.handover.documentation.included": e(
    "How the system works, written in plain language",
    "Cara kerja sistem yang ditulis dengan bahasa lugas dan mudah dipahami",
  ),
  "howwework.handover.documentation.item": e(
    "Documentation",
    "Dokumentasi",
  ),
  "howwework.handover.eyebrow": e(
    "// HANDOVER CHECKLIST",
    "// DAFTAR PERIKSA SERAH TERIMA",
  ),
  "howwework.handover.guides.included": e(
    "Step-by-step instructions for everyday tasks and updates",
    "Panduan langkah demi langkah untuk tugas harian serta pembaruan sistem",
  ),
  "howwework.handover.guides.item": e(
    "Running guides",
    "Panduan Operasional",
  ),
  "howwework.handover.heading": e(
    "Everything handed over, nothing held back.",
    "Semua diserahkan tuntas, tanpa ada yang ditahan.",
  ),
  "howwework.handover.lede": e(
    "Before we sign off, each item below is delivered and walked through with whoever will run the system. The checklist is agreed in the contract.",
    "Sebelum persetujuan akhir, setiap poin di bawah ini diserahkan dan dipandu langsung bersama siapa pun yang akan mengelola sistem Anda. Daftar periksa ini telah disepakati di dalam kontrak.",
  ),
  "howwework.handover.verification-1": e(
    "Handover is not a ZIP file sent on the final afternoon. Throughout the transition phase, your in-house engineers or designated vendors shadow our architects, execute staging deployments, and lead production hotfixes under our supervision.",
    "Serah terima bukanlah file ZIP yang dikirim di sore hari terakhir. Sepanjang fase transisi, para engineer internal atau vendor yang Anda tunjuk mendampingi arsitek kami, menjalankan rilis staging, dan memimpin perbaikan produksi di bawah bimbingan kami.",
  ),
  "howwework.handover.verification-2": e(
    "Every deliverable is verified against contractual acceptance criteria. Access credentials, deployment tokens, and cloud infrastructure billing accounts are transferred into your organization's legal name before sign-off.",
    "Setiap deliverable diverifikasi berdasarkan kriteria penerimaan kontrak. Kredensial akses, token penerapan, dan akun penagihan infrastruktur cloud dialihkan resmi atas nama hukum organisasi Anda sebelum tanda tangan akhir.",
  ),
  "howwework.handover.recovery.included": e(
    "How to restore the system from backup if something goes wrong",
    "Cara memulihkan sistem dari salinan cadangan (backup) jika terjadi kendala",
  ),
  "howwework.handover.recovery.item": e(
    "Recovery plan",
    "Rencana Pemulihan",
  ),
  "howwework.handover.security.included": e(
    "Passwords changed and access checked before sign-off",
    "Kata sandi diperbarui dan seluruh hak akses diverifikasi sebelum serah terima akhir",
  ),
  "howwework.handover.security.item": e(
    "Security review",
    "Pemeriksaan Keamanan",
  ),
  "howwework.handover.source-code.included": e(
    "Every line, stored in the business's own account",
    "Setiap baris kode, tersimpan langsung di akun milik bisnis Anda sendiri",
  ),
  "howwework.handover.source-code.item": e(
    "Source code",
    "Kode Sumber",
  ),
  "howwework.handover.support.included": e(
    "Available from us if the business wants it, never required",
    "Selalu tersedia jika bisnis Anda menginginkannya, tanpa kewajiban yang mengikat",
  ),
  "howwework.handover.support.item": e(
    "Ongoing support",
    "Dukungan Berkelanjutan",
  ),
  "howwework.handover.walkthrough.included": e(
    "A guided session with whoever takes over",
    "Sesi pendampingan terpandu bersama pihak yang akan mengambil alih sistem",
  ),
  "howwework.handover.walkthrough.item": e(
    "Live walkthrough",
    "Sesi Panduan Langsung",
  ),
  "howwework.handover.caption": e(
    "Detailed technical handover deliverables, source repository ownership, and transition milestones",
    "Kelengkapan serah terima teknis, kepemilikan repositori kode sumber, dan tonggak transisi",
  ),
  "howwework.governance.eyebrow": e(
    "// ENGINEERING GOVERNANCE",
    "// TATA KELOLA REKAYASA",
  ),
  "howwework.governance.heading": e(
    "Reliable systems need shared standards, not secret knowledge.",
    "Sistem yang andal membutuhkan standar bersama, bukan rahasia perorangan.",
  ),
  "howwework.governance.lede": e(
    "When engineering teams depend on heroics or tribal memory, software degrades with every release. We build repeatable processes into the codebase itself.",
    "Ketika tim rekayasa bergantung pada hafalan atau keahlian pribadi, kualitas perangkat lunak menurun di tiap rilis. Kami membangun proses yang dapat diulang langsung ke dalam repositori kode.",
  ),
  "howwework.governance.test-title": e(
    "Automated testing & CI/CD",
    "Pengujian Otomatis & CI/CD",
  ),
  "howwework.governance.test-body": e(
    "Every pull request triggers automated unit, integration, and security checks before merging. Deployments run through reproducible, automated pipelines with zero downtime and rollback triggers.",
    "Setiap pull request menjalankan pengujian unit, integrasi, dan pemeriksaan keamanan otomatis sebelum digabungkan. Penerapan kode berjalan lewat alur otomatis yang dapat direproduksi dengan zero downtime.",
  ),
  "howwework.governance.obs-title": e(
    "Observability & runbooks",
    "Observabilitas & Panduan Operasional",
  ),
  "howwework.governance.obs-body": e(
    "Structured logging, metrics, and actionable alerts mean issues are spotted before users notice them. Every critical alert links directly to a plain-language operational runbook.",
    "Pencatatan terstruktur, metrik, dan peringatan dini memastikan kendala terdeteksi sebelum pengguna menyadarinya. Setiap peringatan penting terhubung langsung ke panduan operasional.",
  ),
  "howwework.governance.infra-title": e(
    "Infrastructure as code",
    "Infrastruktur sebagai Kode",
  ),
  "howwework.governance.infra-body": e(
    "Cloud resources, databases, networking, and access policies are defined declaratively in version control. Staging mirrors production, eliminating surprise deployment discrepancies.",
    "Sumber daya cloud, basis data, jaringan, dan kebijakan akses didefinisikan secara deklaratif di sistem kontrol versi. Lingkungan uji coba mencerminkan produksi sepenuhnya.",
  ),
  "howwework.hero.eyebrow": e(
    "// METHODOLOGY & PROCESS",
    "// METODOLOGI & PROSES",
  ),
  "howwework.hero.lede": e(
    "We work alongside the business at every stage, and it always has the final say. Every decision is explained in plain language, with no jargon.",
    "Kami mendampingi bisnis Anda di setiap tahapan, dan keputusan akhir selalu berada di tangan Anda. Setiap keputusan dijelaskan dengan bahasa yang lugas, tanpa istilah teknis yang rumit.",
  ),
  "howwework.hero.title": e(
    "One clear process, start to finish.",
    "Satu proses yang jelas, dari awal hingga tuntas.",
  ),
  "howwework.stages.development.body": e(
    "We design and build the system, with regular check-ins and demos so the business can see and test it as it takes shape.",
    "Kami merancang dan membangun sistem, lengkap dengan sesi evaluasi rutin dan demo berkala agar Anda dapat melihat langsung serta menguji perkembangannya.",
  ),
  "howwework.stages.development.gets": e(
    "a working system, tested and ready for real use.",
    "Sistem yang berfungsi penuh, teruji, dan siap pakai.",
  ),
  "howwework.stages.development.name": e(
    "Development",
    "Pengembangan",
  ),
  "howwework.stages.discovery.body": e(
    "We learn how the business runs, map its current systems and agree the plan together.",
    "Kami mempelajari alur bisnis Anda, memetakan sistem yang saat ini berjalan, dan menyepakati rencana bersama.",
  ),
  "howwework.stages.discovery.gets": e(
    "a technical roadmap with architecture, milestones and estimated costs.",
    "Roadmap teknis lengkap beserta arsitektur, tahapan pengerjaan (milestones), dan estimasi biaya.",
  ),
  "howwework.stages.discovery.name": e(
    "Discovery",
    "Analisis Kebutuhan",
  ),
  "howwework.stages.gets-label": e(
    "The business gets:",
    "Yang diperoleh bisnis Anda:",
  ),
  "howwework.stages.heading": e(
    "Four stages, one direction.",
    "Empat tahap, satu arah yang jelas.",
  ),
  "howwework.stages.intro-p1": e(
    "Every partnership is structured for complete operational independence from the very first week. Rather than creating proprietary dependencies or isolated agency silos, we embed directly with your engineers, establish automated standards in your repositories, and ensure your team holds full technical confidence.",
    "Setiap kemitraan dirancang untuk mencapai kemandirian operasional penuh sejak minggu pertama. Alih-alih menciptakan ketergantungan atau bekerja secara terisolasi, kami berkolaborasi langsung dengan para engineer Anda, menerapkan standar otomatis di repositori Anda, dan memastikan tim Anda memiliki kepercayaan diri teknis seutuhnya.",
  ),
  "howwework.stages.note": e(
    "How long each stage takes depends on the project. We agree the timeline during Discovery.",
    "Durasi setiap tahapan disesuaikan dengan skala proyek. Garis waktu (timeline) akan disepakati bersama pada tahap Discovery.",
  ),
  "howwework.stages.operations.body": e(
    "After launch, we monitor the system, fix issues, and keep it secure and up to date until it runs smoothly.",
    "Setelah peluncuran, kami memantau sistem, menangani kendala, serta menjaganya tetap aman dan terbarui hingga dapat berjalan dengan lancar.",
  ),
  "howwework.stages.operations.gets": e(
    "a stable system with agreed response times.",
    "Sistem yang stabil dengan jaminan waktu respons (response time) yang telah disepakati bersama.",
  ),
  "howwework.stages.operations.name": e(
    "Operations and Support",
    "Operasional & Dukungan",
  ),
  "howwework.stages.step-prefix": e(
    "STEP //",
    "TAHAP //",
  ),
  "howwework.stages.transfer.body": e(
    "We transfer everything needed to run the system independently, to in-house staff, a new hire or another provider.",
    "Kami menyerahkan segala hal yang dibutuhkan agar sistem dapat dikelola secara mandiri—baik oleh tim internal Anda, karyawan baru, maupun vendor lain.",
  ),
  "howwework.stages.transfer.gets": e(
    "full ownership, with no dependence on us.",
    "Kepemilikan penuh, tanpa ketergantungan lanjutan pada kami.",
  ),
  "howwework.stages.transfer.name": e(
    "Ownership Transfer",
    "Serah Terima Kepemilikan",
  ),
  "howwework.tech.aria": e(
    "Technologies we build with",
    "Teknologi yang kami gunakan",
  ),
  "howwework.tech.note": e(
    "// Built on proven, widely used technology.",
    "// Dibangun di atas teknologi yang terbukti dan dipakai luas.",
  ),
  "howwework.tech.lede": e(
    "We deliberately select battle-tested, widely adopted open-source technologies with robust global communities. This ensures any qualified software engineer can comfortably inspect, maintain, and expand your systems without specialized proprietary training.",
    "Kami secara cermat memilih teknologi open-source yang teruji keandalannya dan didukung komunitas global yang kuat. Hal ini menjamin bahwa setiap engineer yang kompeten dapat dengan mudah memeriksa, memelihara, dan mengembangkan sistem Anda tanpa pelatihan khusus.",
  ),
  "index.ai.eyebrow": e(
    "// Optional service",
    "// Layanan opsional",
  ),
  "index.ai.lede": e(
    "Our systems are engineered by people, not generated by AI. When a business wants to use AI, we help it adopt it properly: reliable data first, then AI only where it clearly pays off.",
    "Sistem kami dibangun oleh para praktisi berpengalaman, bukan sekadar dibuat otomatis oleh AI. Saat bisnis Anda ingin mengadopsi AI, kami memastikannya berjalan dengan tepat: utamakan data yang andal, lalu terapkan AI hanya di aspek yang terbukti memberi dampak nyata.",
  ),
  "index.ai.step1": e(
    "Get the data ready",
    "Siapkan dan matangkan data",
  ),
  "index.ai.step2": e(
    "Start with one clear use case",
    "Mulai dari satu use case yang terarah",
  ),
  "index.ai.step3": e(
    "Expand carefully, with safeguards",
    "Kembangkan secara terukur, dengan proteksi ketat",
  ),
  "index.ai.title": e(
    "Want to bring AI into the business? We can help.",
    "Ingin menerapkan AI ke dalam bisnis Anda? Kami siap membantu.",
  ),
  "index.build.eyebrow": e(
    "// PRINCIPLES",
    "// PRINSIP",
  ),
  "index.build.principle1.body": e(
    "No extra complexity until there's a real reason for it.",
    "Hindari kerumitan berlebih, kecuali memang ada alasan kuat yang membutuhkannya.",
  ),
  "index.build.principle1.title": e(
    "Keep it simple.",
    "Buat tetap sederhana.",
  ),
  "index.build.principle2.body": e(
    "Monitoring, backups, cloud costs and recovery plans are included, not extras.",
    "Pemantauan (monitoring), pencadangan (backup), efisiensi biaya cloud, hingga rencana pemulihan sudah termasuk di dalamnya, bukan sekadar opsi tambahan.",
  ),
  "index.build.principle2.title": e(
    "Running it is part of the job.",
    "Memastikan operasional berjalan adalah bagian dari tugas kami.",
  ),
  "index.build.principle3.body": e(
    "Plain-language updates and no jargon, so decision-makers always know where things stand.",
    "Pembaruan berkala disampaikan dengan bahasa yang lugas tanpa istilah rumit (jargon), sehingga para pengambil keputusan selalu tahu kondisi proyek secara pasti.",
  ),
  "index.build.principle3.title": e(
    "Clear communication.",
    "Komunikasi yang jelas.",
  ),
  "index.build.principle4.body": e(
    "Widely used, well-supported tools, so any qualified engineer can pick the system up.",
    "Kami menggunakan alat yang lazim dan memiliki dukungan ekosistem luas, sehingga engineer kompeten mana pun bisa langsung melanjutkan dan mengelola sistem tersebut dengan mudah.",
  ),
  "index.build.principle4.title": e(
    "Standard, proven technology.",
    "Teknologi standar yang teruji.",
  ),
  "index.build.principle5.body": e(
    "Access controls, encryption and regular updates are built in, not added later.",
    "Kontrol akses, enkripsi, dan pembaruan rutin sudah terpasang sejak awal perancangan, bukan baru dipikirkan belakangan.",
  ),
  "index.build.principle5.title": e(
    "Security from day one.",
    "Keamanan sejak hari pertama.",
  ),
  "index.build.title": e(
    "Simple, honest engineering.",
    "Engineering yang lugas dan jujur.",
  ),
  "index.cta.body": e(
    "Whether it's a brand-new system or improving one already in place, tell us what's slowing the business down and we'll suggest the best place to start.",
    "Baik untuk membangun sistem baru maupun menyempurnakan sistem yang sudah ada, ceritakan apa yang menghambat laju bisnis Anda, dan kami akan menyarankan langkah awal terbaik untuk memulainya.",
  ),
  "index.cta.button": e(
    "Talk to us",
    "Hubungi kami",
  ),
  "index.cta.overview": e(
    "Prefer to review first?",
    "Ingin tinjau dulu?",
  ),
  "index.cta.title": e(
    "Own the technology your business runs on.",
    "Miliki kendali penuh atas teknologi yang menggerakkan bisnis Anda.",
  ),
  "index.discovery.cta": e(
    "Talk to us",
    "Hubungi kami",
  ),
  "index.discovery.eyebrow": e(
    "// DISCOVERY",
    "// PENCARIAN",
  ),
  "index.discovery.lede": e(
    "Before anything is built, we take a close look at how the business runs today. In three steps, that becomes a plan the business keeps, whether it continues with us or not.",
    "Sebelum dibangun, kami melihat cara perusahaan Anda berjalan. Hanya tiga langkah, akan menjadi rencana tetap untuk bisnis, baik dengan kami ataupun tidak.",
  ),
  "index.discovery.step1.body": e(
    "We map current systems, data flows and integrations, and pinpoint the bottlenecks.",
    "Kami petakan sistem, alur data, integrasi, dan mencari titik masalahnya.",
  ),
  "index.discovery.step1.num": e(
    "STEP // 01",
    "LANGKAH // 01",
  ),
  "index.discovery.step1.title": e(
    "Understand",
    "Memahami",
  ),
  "index.discovery.step2.body": e(
    "We rank the risks, such as security gaps and single points of failure, and decide what to build, upgrade or leave as is.",
    "Kami urutkan risiko — seperti celah keamanan dan titik kegagalan — lalu putuskan mana yang dibangun, di-upgrade, atau diabaikan.",
  ),
  "index.discovery.step2.num": e(
    "STEP // 02",
    "LANGKAH // 02",
  ),
  "index.discovery.step2.title": e(
    "Prioritise",
    "Memprioritaskan",
  ),
  "index.discovery.step3.body": e(
    "We deliver a technical roadmap with the proposed architecture, milestones and estimated costs, so every decision is based on facts.",
    "Kami susun roadmap teknis berisi usulan arsitektur, target, dan estimasi biaya, setiap keputusan berdasarkan fakta.",
  ),
  "index.discovery.step3.num": e(
    "STEP // 03",
    "LANGKAH // 03",
  ),
  "index.discovery.step3.title": e(
    "Delivery plan",
    "Rencana induk",
  ),
  "index.discovery.title": e(
    "Every project starts with a clear picture.",
    "Setiap proyek dimulai dengan visi yang jelas.",
  ),
  "index.gets.gets1.body": e(
    "We don't leave at launch. We monitor the system, fix issues fast and keep improving it until it runs smoothly.",
    "Kami tidak langsung pergi begitu sistem diluncurkan. Kami terus memantau, menyelesaikan kendala dengan cepat, dan melakukan penyempurnaan hingga semuanya berjalan mulus.",
  ),
  "index.gets.gets1.proof": e(
    "How we prove it: service recovery time, tracked from day one.",
    "Bukti nyata dari kami: Waktu pemulihan layanan (service recovery time) yang dipantau sejak hari pertama.",
  ),
  "index.gets.gets1.title": e(
    "We stay until it runs smoothly",
    "Kami mendampingi hingga sistem berjalan lancar",
  ),
  "index.gets.gets2.body": e(
    "Every system comes with clear documentation and guides, so the know-how belongs to the business, not to any one person.",
    "Setiap sistem dilengkapi dokumentasi dan panduan yang jelas, sehingga seluruh pemahaman teknis (know-how) menjadi milik bisnis Anda seutuhnya, bukan bergantung pada satu orang saja.",
  ),
  "index.gets.gets2.proof": e(
    "How we prove it: documentation is reviewed and signed off at every stage.",
    "Bukti nyata dari kami: Dokumentasi ditinjau dan disetujui bersama (signed off) di setiap tahapan.",
  ),
  "index.gets.gets2.title": e(
    "Knowledge that stays with the business",
    "Pengetahuan yang tetap menjadi aset bisnis Anda",
  ),
  "index.gets.gets3.body": e(
    "We recommend what the business actually needs. Often the simplest option is the best value, and we'll say so. New technology comes in only when it clearly pays for itself.",
    "Kami merekomendasikan apa yang benar-benar dibutuhkan oleh bisnis Anda. Sering kali pilihan yang paling sederhana justru memberi nilai terbaik, dan kami akan menyatakannya secara jujur. Teknologi baru hanya kami gunakan jika terbukti memberikan imbal hasil yang jelas.",
  ),
  "index.gets.gets3.proof": e(
    "How we prove it: every recommendation comes with its cost and expected return.",
    "Bukti nyata dari kami: Setiap rekomendasi selalu disertai estimasi biaya dan proyeksi hasil yang nyata.",
  ),
  "index.gets.gets3.title": e(
    "The right tools, not the trendy ones",
    "Solusi yang tepat guna, bukan sekadar ikut tren",
  ),
  "index.gets.gets4.body": e(
    "Before we sign off, whoever takes over, in-house staff or another provider, is walked through running, fixing and updating the system.",
    "Sebelum persetujuan akhir (sign-off), siapa pun yang akan mengambil alih—baik tim internal maupun vendor lain—akan dipandu langsung cara mengoperasikan, memperbaiki, hingga memperbarui sistem.",
  ),
  "index.gets.gets4.proof": e(
    "How we prove it: a transfer checklist, agreed in the contract.",
    "Bukti nyata dari kami: Daftar periksa serah terima (transfer checklist) yang disepakati langsung di dalam kontrak.",
  ),
  "index.gets.gets4.title": e(
    "A transfer that actually works",
    "Proses serah terima yang benar-benar efektif",
  ),
  "index.gets.title": e(
    "What the business gets instead.",
    "Sebaliknya, inilah yang didapatkan bisnis Anda.",
  ),
  "index.hero.cta": e(
    "Talk to us",
    "Hubungi kami",
  ),
  "index.hero.eyebrow": e(
    "// INDEPENDENT SYSTEM ENGINEERING",
    "// REKAYASA SISTEM INDEPENDEN",
  ),
  "index.hero.kicker": e(
    "Engineering partner for growing businesses",
    "Partner rekayasa untuk perusahaan yang bertumbuh",
  ),
  "index.hero.lede": e(
    "We engineer systems to a high standard, then transfer full ownership to the business: the code, the documentation and the know-how. No vendor lock-in. No hidden dependencies.",
    "Kami membangun sistem dengan standar tinggi, lalu menyerahkan kepemilikan penuh ke Anda: kode, dokumentasi, dan pengetahuannya. Tanpa vendor lock-in. Tanpa ketergantungan tersembunyi.",
  ),
  "index.hero.tag1": e(
    "We build",
    "Kami membangun",
  ),
  "index.hero.tag2": e(
    "We teach",
    "Kami mengajari",
  ),
  "index.hero.tag3": e(
    "You own.",
    "Anda miliki.",
  ),
  "index.hero.title": e(
    "Technology built for independence.",
    "Teknologi yang dibangun mandiri.",
  ),
  "index.hero.video": e(
    "Watch the 1 minute intro",
    "Tonton video 1 menit",
  ),
  "index.howwework.eyebrow": e(
    "// PROCESS",
    "// PROSES",
  ),
  "index.howwework.fig": e(
    "// FIG. 01",
    "// GBR. 01",
  ),
  "index.howwework.figtitle": e(
    "OWNERSHIP CURVE",
    "KURVA KEPEMILIKAN",
  ),
  "index.howwework.lede": e(
    "Four clear stages take each project from the first conversation to a system the business fully owns.",
    "Empat tahapan terarah membawa setiap proyek dari percakapan pertama hingga menjadi sistem yang sepenuhnya milik bisnis Anda.",
  ),
  "index.howwework.link": e(
    "See how it works →",
    "Lihat cara kerjanya →",
  ),
  "index.howwework.note": e(
    "Day-to-day control shifts to the business, stage by stage. Ongoing support is a choice, never a requirement.",
    "Kendali operasional harian dialihkan ke bisnis Anda tahap demi tahap. Dukungan berkelanjutan adalah sebuah pilihan, bukan keharusan.",
  ),
  "index.howwework.stage1.label": e(
    "Discovery",
    "Pencarian",
  ),
  "index.howwework.stage1.milestone": e(
    "Baseline Diagnostic",
    "Diagnosis Awal",
  ),
  "index.howwework.stage2.label": e(
    "Development",
    "Pengembangan",
  ),
  "index.howwework.stage2.milestone": e(
    "Joint Engineering",
    "Rekayasa Bersama",
  ),
  "index.howwework.stage3.label": e(
    "Operations and Support",
    "Operasi dan Dukungan",
  ),
  "index.howwework.stage3.milestone": e(
    "Shared Operations",
    "Operasi dan Dukungan",
  ),
  "index.howwework.stage4.label": e(
    "Ownership Transfer",
    "Alih Kepemilikan",
  ),
  "index.howwework.stage4.milestone": e(
    "Autonomous Ownership",
    "Mandiri Penuh",
  ),
  "index.howwework.title": e(
    "How a project comes together.",
    "Bagaimana sebuah proyek diwujudkan.",
  ),
  "index.numbers.col-metric": e(
    "Metric",
    "Metrik",
  ),
  "index.numbers.col-tells": e(
    "What it tells you",
    "Arti / Makna bagi Anda",
  ),
  "index.numbers.eyebrow": e(
    "// METRICS",
    "// METRIK",
  ),
  "index.numbers.lede": e(
    "No vague status reports. We measure these on every project and report them in plain language. The first four are the industry-standard DORA metrics used by top engineering teams.",
    "Tanpa laporan status yang mengambang. Kami mengukurnya di setiap proyek dan menyajikannya dalam bahasa yang lugas. Empat metrik pertama merupakan standar industri DORA yang digunakan oleh tim engineering kelas dunia.",
  ),
  "index.numbers.metric1.metric": e(
    "Lead time",
    "Durasi Penerapan",
  ),
  "index.numbers.metric1.tells": e(
    "How long a change takes to go live",
    "Berapa lama waktu yang dibutuhkan dari perubahan kode hingga tayang (go-live)",
  ),
  "index.numbers.metric2.metric": e(
    "Release frequency",
    "Frekuensi Rilis",
  ),
  "index.numbers.metric2.tells": e(
    "How often updates go live",
    "Seberapa sering pembaruan sistem dirilis",
  ),
  "index.numbers.metric3.metric": e(
    "Change failure rate",
    "Tingkat Kegagalan Perubahan",
  ),
  "index.numbers.metric3.tells": e(
    "How often an update causes a problem",
    "Seberapa sering pembaruan yang dirilis memicu kendala atau masalah",
  ),
  "index.numbers.metric4.metric": e(
    "Recovery time",
    "Waktu Pemulihan",
  ),
  "index.numbers.metric4.tells": e(
    "How fast service is restored after an issue",
    "Seberapa cepat layanan pulih kembali setelah terjadi gangguan",
  ),
  "index.numbers.metric5.metric": e(
    "Rework rate",
    "Tingkat Pengerjaan Ulang",
  ),
  "index.numbers.metric5.tells": e(
    "How much work has to be redone",
    "Seberapa banyak pekerjaan yang harus diulang atau diperbaiki kembali",
  ),
  "index.numbers.metric6.metric": e(
    "Uptime",
    "Waktu Aktif Sistem",
  ),
  "index.numbers.metric6.tells": e(
    "How much of the time the system is available",
    "Berapa persen waktu sistem aktif dan siap digunakan tanpa gangguan",
  ),
  "index.numbers.metric7.metric": e(
    "Response time",
    "Waktu Respons",
  ),
  "index.numbers.metric7.tells": e(
    "How quickly support requests are answered",
    "Seberapa cepat permintaan bantuan (support) ditanggapi",
  ),
  "index.numbers.metric8.metric": e(
    "Transfer readiness",
    "Kesipan Serah Terima",
  ),
  "index.numbers.metric8.tells": e(
    "How complete the documentation and transfer checklist are",
    "Seberapa lengkap dokumentasi dan daftar periksa serah terima proyek",
  ),
  "index.numbers.title": e(
    "Eight numbers that prove progress.",
    "Delapan hal pembuktian hasil.",
  ),
  "index.problem.lede": e(
    "Many agencies deliver a system and leave. The business is left with code nobody in-house can fix when something breaks.",
    "Banyak agensi menyerahkan sistem lalu pergi begitu saja. Bisnis Anda pun ditinggalkan dengan tumpukan kode yang tidak bisa diperbaiki oleh siapa pun di tim internal saat terjadi masalah.",
  ),
  "index.problem.problem1.body": e(
    "Builds it, bills it, leaves.",
    "Bangun sistemnya, kirim tagihan, lalu pergi.",
  ),
  "index.problem.problem1.title": e(
    "The disappearing agency",
    "Agensi yang lepas tangan",
  ),
  "index.problem.problem2.body": e(
    "Extra developers fill the gap for a while, but when the contract ends, the knowledge walks out with them.",
    "Tambahan developer memang menutup celah untuk sementara waktu, tetapi begitu kontrak berakhir, pemahaman teknisnya ikut hilang bersama mereka.",
  ),
  "index.problem.problem2.title": e(
    "Short-term contractors",
    "Kontraktor jangka pendek",
  ),
  "index.problem.problem3.body": e(
    "Trendy tools added before the basics are in place, so they cost more than they deliver.",
    "Memaksakan alat-alat yang lagi tren sebelum fondasi dasarnya matang, alhasil biayanya jauh lebih besar daripada manfaat yang didapat.",
  ),
  "index.problem.problem3.title": e(
    "Tech for the sake of it",
    "Teknologi yang sekadar ikut tren",
  ),
  "index.problem.problem4.body": e(
    "The code is passed over, but nobody explains how it works or how to fix it.",
    "Kodenya memang diserahkan, tetapi tidak ada yang menjelaskan cara kerjanya atau bagaimana memperbaikinya saat terjadi kendala.",
  ),
  "index.problem.problem4.title": e(
    "Handover in name only",
    "Serah terima sebatas formalitas",
  ),
  "index.problem.title": e(
    "Getting software built is easy. Keeping it running is the hard part.",
    "Membangun perangkat lunak itu mudah. Menjaganya tetap berjalan, itu tantangan sebenarnya.",
  ),
  "index.video.close": e(
    "ESC / Close",
    "ESC / Tutup",
  ),
  "index.video.close-aria": e(
    "ESC / Close video dialog",
    "ESC / Tutup dialog video",
  ),
  "index.video.fallback": e(
    "Your browser does not support the video tag.",
    "Browser Anda tidak mendukung tag video.",
  ),
  "index.video.title": e(
    "Intro Brief · 1 minute",
    "Intro Singkat · 1 menit",
  ),
  "meta.about.description": e(
    "Meet NewCo's founders. We build and run robust business systems, transferring complete engineering capability to your team.",
    "Kenalan dengan founder NewCo. Kami membangun dan menjalankan sistem bisnis yang andal, sekaligus mengalihkan kemampuan engineering sepenuhnya ke tim Anda.",
  ),
  "meta.about.title": e(
    "About NewCo · Engineering Leadership & Governance",
    "Tentang NewCo · Kepemimpinan & Tata Kelola Engineering",
  ),
  "meta.contact.description": e(
    "Contact NewCo's founders to discuss your business systems, technical constraints, and path to full engineering independence.",
    "Hubungi founder NewCo untuk mendiskusikan sistem bisnis, kendala teknis, dan jalan menuju kemandirian engineering.",
  ),
  "meta.contact.title": e(
    "Contact NewCo · Discuss Systems & Engineering Handover",
    "Hubungi NewCo · Diskusi Sistem & Serah Terima Engineering",
  ),
  "meta.howwework.description": e(
    "Our 4-stage engineering model transfers full system ownership to your team, from Discovery through autonomous operations.",
    "Model engineering 4 tahap kami mengalihkan kepemilikan sistem penuh ke tim Anda, dari Discovery sampai operasi mandiri.",
  ),
  "meta.howwework.title": e(
    "How We Work · 4-Stage Engineering Transfer | NewCo",
    "Cara Kerja Kami · Alih Teknologi 4 Tahap | NewCo",
  ),
  "meta.index.description": e(
    "We design, build, and support business systems, then transfer full ownership. Zero vendor lock-in, zero hidden dependencies.",
    "Kami merancang, membangun, dan menjaga sistem bisnis, lalu menyerahkan kepemilikan penuh. Tanpa vendor lock-in, tanpa ketergantungan tersembunyi.",
  ),
  "meta.index.title": e(
    "Technology built for independence · NewCo",
    "Teknologi yang kemandirian · NewCo",
  ),
  "meta.privacy.description": e(
    "How NewCo handles contact form data, keeps client architecture confidential, governs AI use of client assets, and retains data.",
    "Cara NewCo menangani data formulir kontak, menjaga kerahasiaan arsitektur klien, mengatur pemakaian AI atas aset klien, dan menyimpan data.",
  ),
  "meta.privacy.title": e(
    "Privacy Policy | NewCo",
    "Kebijakan Privasi | NewCo",
  ),
  "nav.about": e(
    "About",
    "Tentang",
  ),
  "nav.contact": e(
    "Contact",
    "Kontak",
  ),
  "nav.home": e(
    "Home",
    "Beranda",
  ),
  "nav.how-we-work": e(
    "How we work",
    "Cara kami bekerja",
  ),
  "overview.href": e(
    "/downloads/newco-company-overview-en.pdf",
    "/downloads/newco-company-overview-id.pdf",
  ),
  "overview.link": e(
    "View company overview (PDF)",
    "Lihat profil perusahaan (PDF)",
  ),
  "privacy.disclaimer": e(
    "Disclaimer: This policy is published for informational purposes only and does not constitute formal legal advice. For specific regulatory compliance, consult qualified legal counsel.",
    "Penafian: Kebijakan ini dipublikasikan hanya untuk tujuan informasi dan bukan merupakan nasihat hukum formal. Untuk kepatuhan regulasi tertentu, konsultasikan dengan penasihat hukum yang berkualifikasi.",
  ),
  "privacy.footer.link": e(
    "Contact us",
    "Hubungi kami",
  ),
  "privacy.footer.period": e(
    ".",
    ".",
  ),
  "privacy.footer.text": e(
    "Questions about this policy?",
    "Ada pertanyaan soal kebijakan ini?",
  ),
  "privacy.hero.lede": e(
    "NewCo works inside our clients' systems, so confidentiality is part of how we operate, not a footnote. This policy explains what we collect, how we protect it, and what we will never do with it.",
    "NewCo kerja di dalam sistem klien, jadi kerahasiaan itu bagian dari cara kami kerja, bukan sekadar catatan kaki. Kebijakan ini menjelaskan apa yang kami kumpulkan, cara kami melindunginya, dan apa yang tidak akan pernah kami lakukan dengannya.",
  ),
  "privacy.hero.title": e(
    "Privacy Policy",
    "Kebijakan Privasi",
  ),
  "privacy.hero.updated": e(
    "LAST UPDATED: OCTOBER 2026",
    "TERAKHIR DIPERBARUI: OKTOBER 2026",
  ),
  "privacy.sections.ai.body-1": e(
    "Where we use AI-assisted tooling in our work, the following rules apply to every engagement:",
    "Kalau kami memakai tools berbantuan AI dalam kerjaan kami, aturan berikut berlaku untuk setiap proyek:",
  ),
  "privacy.sections.ai.list-1": e(
    "Your code and data stay private. Client source code, documentation, datasets and system information are never published or shared with other clients.",
    "Kode dan data Anda tetap privat. Source code, dokumentasi, dataset, dan info sistem klien tidak pernah dipublikasikan atau dibagikan ke klien lain.",
  ),
  "privacy.sections.ai.list-2": e(
    "No model training on client assets. We do not use your code, data or documents to train or fine-tune any AI model, ours or a third party's, without your explicit written consent.",
    "Tidak ada training model dari aset klien. Kami tidak memakai kode, data, atau dokumen Anda untuk melatih atau fine-tune model AI mana pun — milik kami maupun pihak ketiga — tanpa persetujuan tertulis dari Anda.",
  ),
  "privacy.sections.ai.list-3": e(
    "Approved tooling only. Client material is processed only with tools and providers whose terms exclude training on submitted content and that meet the confidentiality commitments we have made to you.",
    "Hanya tools yang disetujui. Materi klien hanya diproses dengan tools dan penyedia yang ketentuannya melarang training dari konten yang dikirim, dan yang memenuhi komitmen kerahasiaan kami ke Anda.",
  ),
  "privacy.sections.ai.list-4": e(
    "Scoped access. AI tools see only what is necessary for the task, and never production credentials or secrets.",
    "Akses dibatasi. Tools AI hanya melihat yang diperlukan untuk tugasnya, dan tidak pernah menyentuh kredensial atau rahasia production.",
  ),
  "privacy.sections.ai.list-5": e(
    "Your say. Clients may restrict or prohibit AI-assisted tooling on their assets, and we will honour that in the engagement terms.",
    "Anda yang menentukan. Klien boleh membatasi atau melarang pemakaian tools AI atas asetnya, dan kami akan menghormatinya di ketentuan kerja sama.",
  ),
  "privacy.sections.ai.title": e(
    "AI data privacy governance",
    "Tata kelola privasi data AI",
  ),
  "privacy.sections.architecture.body-1": e(
    "Details you share about your systems, infrastructure, architecture, vendors, security posture or operating model are treated as confidential from the first conversation. We use them only to scope and deliver the work you have asked us to consider.",
    "Detail yang Anda bagikan soal sistem, infrastruktur, arsitektur, vendor, postur keamanan, atau model operasi Anda kami anggap rahasia sejak obrolan pertama. Kami pakai hanya untuk menilai dan mengerjakan yang Anda minta.",
  ),
  "privacy.sections.architecture.body-2": e(
    "Access is limited to the people at NewCo who need it for your engagement. We do not publish, reference or reuse your architecture information, including in case studies or marketing, without your written permission. We are glad to sign a mutual non-disclosure agreement before any detailed technical discussion.",
    "Akses dibatasi hanya untuk orang NewCo yang membutuhkannya untuk proyek Anda. Kami tidak mempublikasikan, menyebut, atau memakai ulang info arsitektur Anda — termasuk untuk studi kasus atau marketing — tanpa izin tertulis dari Anda. Kami bersedia tanda tangan NDA dua arah sebelum diskusi teknis yang detail.",
  ),
  "privacy.sections.architecture.title": e(
    "Non-disclosure of architecture data",
    "Kerahasiaan data arsitektur",
  ),
  "privacy.sections.changes.body-1": e(
    "We will update this page when our practices change and revise the date above. Material changes that affect an active engagement will be communicated to you directly.",
    "Halaman ini kami update kalau praktik kami berubah, dan tanggal di atas kami revisi. Perubahan penting yang memengaruhi proyek berjalan akan kami sampaikan langsung ke Anda.",
  ),
  "privacy.sections.changes.title": e(
    "Changes to this policy",
    "Perubahan kebijakan ini",
  ),
  "privacy.sections.contact-form.body-1": e(
    "When you write to us, we collect the details you choose to provide: your name, company, role, email address, country or region, how many locations or branches, what you would like help with, and how you prefer us to follow up. Optional fields, such as project type, IT contact or main decision-maker, are collected only if you complete them.",
    "Saat Anda menulis ke kami, kami mengumpulkan detail yang Anda isi sendiri: nama, perusahaan, peran, alamat email, negara atau wilayah, jumlah lokasi atau cabang, bantuan yang dibutuhkan, dan cara follow-up yang Anda mau. Kolom opsional — seperti jenis proyek, kontak IT, atau pengambil keputusan utama — hanya kami simpan kalau Anda mengisinya.",
  ),
  "privacy.sections.contact-form.body-2": e(
    "We use this information for one purpose: to assess your enquiry against our fit criteria and reply with a recommended next step. We do not use it for unrelated marketing, and we do not sell, rent or trade it.",
    "Info ini kami pakai untuk satu tujuan: menilai pengajuan Anda dengan kriteria kami dan membalas dengan langkah yang disarankan. Kami tidak memakainya untuk marketing yang tidak terkait, dan tidak menjual, menyewakan, atau memperdagangkannya.",
  ),
  "privacy.sections.contact-form.body-3": e(
    "Please do not include credentials, access keys, personal data about your customers or any other sensitive material in the form. We will never ask for them through a web enquiry.",
    "Tolong jangan cantumkan kredensial, access key, data pribadi pelanggan Anda, atau materi sensitif lain di formulir. Kami tidak akan pernah memintanya lewat formulir web.",
  ),
  "privacy.sections.contact-form.title": e(
    "Information you submit through the contact form",
    "Info yang Anda kirim lewat formulir kontak",
  ),
  "privacy.sections.retention.body-1": e(
    "Contact form enquiries that do not lead to an engagement are kept for up to twelve months so that we can respond and follow up, and are then deleted.",
    "Pengajuan formulir kontak yang tidak berlanjut ke proyek kami simpan maksimal dua belas bulan agar bisa kami respons dan follow-up, lalu dihapus.",
  ),
  "privacy.sections.retention.body-2": e(
    "For active engagements, we keep project material only for the duration of the work and a short handover period agreed with you. At the end of the engagement, we return or securely delete client code, data and architecture information as the contract specifies, except where the law requires us to keep records, such as invoices and contracts.",
    "Untuk proyek berjalan, materi proyek kami simpan hanya selama kerjaan berlangsung plus masa serah terima singkat yang disepakati dengan Anda. Di akhir proyek, kode, data, dan info arsitektur klien kami kembalikan atau hapus secara aman sesuai kontrak, kecuali hukum mewajibkan kami menyimpan arsip seperti faktur dan kontrak.",
  ),
  "privacy.sections.retention.title": e(
    "Data retention",
    "Penyimpanan data",
  ),
  "privacy.sections.rights.body-1": e(
    "You may ask us at any time to confirm what personal information we hold about you, correct it, or delete it. You may also withdraw any consent you have given, including consent relating to AI use of your assets.",
    "Anda bisa kapan saja minta kami mengonfirmasi data pribadi apa yang kami simpan tentang Anda, mengoreksinya, atau menghapusnya. Anda juga bisa menarik persetujuan yang sudah diberikan, termasuk persetujuan soal pemakaian AI atas aset Anda.",
  ),
  "privacy.sections.rights.body-2": e(
    "To make a request, contact us through the contact page and mark your message \"Privacy request\". We will confirm receipt and respond within a reasonable period, and in any case within the time required by applicable law, including Indonesian data protection regulation.",
    "Untuk mengajukan permintaan, hubungi kami lewat halaman kontak dan tandai pesan Anda \"Permintaan privasi\". Kami akan mengonfirmasi penerimaan dan merespons dalam waktu yang wajar, dan dalam hal apa pun sesuai batas waktu hukum yang berlaku, termasuk regulasi pelindungan data Indonesia.",
  ),
  "privacy.sections.rights.title": e(
    "Your rights and privacy requests",
    "Hak Anda dan permintaan privasi",
  ),
};

