export type Lang = "en" | "id";

export const LANG_KEY = "newco-lang";

export type Entry = { en: string; id: string };

function e(en: string, id: string): Entry {
  return { en, id };
}

export const STRINGS: Record<string, Entry> = {
  "about.commitments.contact-desc": e(
    "A named contact and agreed response times.",
    "Kontak bernama jelas dan waktu respons yang disepakati.",
  ),
  "about.commitments.contact-title": e(
    "A real person to talk to.",
    "Ada orang yang bisa dihubungi.",
  ),
  "about.commitments.honest-desc": e(
    "We recommend what's right for the business, not what costs the most.",
    "Kami merekomendasikan yang benar untuk bisnis, bukan yang paling mahal.",
  ),
  "about.commitments.honest-title": e(
    "Honest advice.",
    "Nasihat yang jujur.",
  ),
  "about.commitments.plain-desc": e(
    "No jargon, no surprises.",
    "Tanpa jargon, tanpa kejutan.",
  ),
  "about.commitments.plain-title": e(
    "Plain-language updates.",
    "Pembaruan berbahasa lugas.",
  ),
  "about.commitments.pricing-desc": e(
    "Agreed upfront, before work begins.",
    "Disepakati di awal, sebelum pekerjaan dimulai.",
  ),
  "about.commitments.pricing-title": e(
    "Clear pricing.",
    "Harga yang jelas.",
  ),
  "about.commitments.title": e(
    "What every client can count on.",
    "Yang selalu bisa diandalkan setiap klien.",
  ),
  "about.commitments.work-p1": e(
    "We work directly alongside your existing engineers, technical leads, and founders. Rather than operating in an isolated agency silo, our engineers join your sprints, review pull requests with your team, and establish shared coding standards from day one.",
    "Kami bekerja berdampingan langsung dengan engineer, technical lead, dan pendiri Anda. Alih-alih beroperasi sebagai agensi yang terpisah, engineer kami bergabung dalam sprint Anda, meninjau pull request bersama tim Anda, dan menetapkan standar kode bersama sejak hari pertama.",
  ),
  "about.commitments.work-p2": e(
    "Every architecture decision, infrastructure deployment, and operational runbook is documented directly in your repositories. When our engagement concludes, your business holds complete, autonomous ownership of the code, systems, and deployment pipelines.",
    "Setiap keputusan arsitektur, deployment infrastruktur, dan runbook operasional didokumentasikan langsung di repositori Anda. Saat penugasan kami berakhir, bisnis Anda memegang kepemilikan penuh dan mandiri atas kode, sistem, dan pipeline deployment.",
  ),
  "about.commitments.work-title": e(
    "How we work with your leadership",
    "Cara kami bekerja dengan pimpinan Anda",
  ),
  "about.cta.body": e(
    "We'll look at your systems, constraints and goals, then give you an honest recommendation on the best way forward.",
    "Kami akan menelaah sistem, kendala, dan tujuan Anda, lalu memberi rekomendasi jujur tentang langkah terbaik ke depan.",
  ),
  "about.cta.button": e(
    "Talk to us",
    "Hubungi kami",
  ),
  "about.cta.title": e(
    "If this is how you want to work, tell us where things stand.",
    "Jika cara kerja seperti ini yang Anda inginkan, sampaikan kondisi Anda.",
  ),
  "about.hero.eyebrow": e(
    "// LEADERSHIP & COMMITMENTS",
    "// KEPEMIMPINAN & KOMITMEN",
  ),
  "about.hero.lede": e(
    "Your technology partner, start to finish. We design, build and support the systems businesses rely on every day.",
    "Mitra teknologi Anda, dari awal sampai akhir. Kami merancang, membangun, dan mendukung sistem yang diandalkan bisnis setiap hari.",
  ),
  "about.hero.title": e(
    "Built on trust, delivered with care.",
    "Dibangun atas kepercayaan, disampaikan dengan saksama.",
  ),
  "about.team.alt-ceo": e(
    "Vanezza, Chief Executive Officer",
    "Vanezza, Chief Executive Officer",
  ),
  "about.team.alt-cto": e(
    "Agung Denisa, Chief Technology Officer",
    "Agung Denisa, Chief Technology Officer",
  ),
  "about.team.lede": e(
    "Every proposal is checked by both founders, one for the business side and one for the technical side, so what we promise is always what we can deliver.",
    "Setiap proposal diperiksa oleh kedua pendiri, satu dari sisi bisnis dan satu dari sisi teknis, sehingga yang kami janjikan selalu yang bisa kami wujudkan.",
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
    "Serah terima adalah ukuran keberhasilan, bukan kondisi kegagalan yang tersembunyi.",
  ),
  "capabilitycurve.desc": e(
    "A line chart across 5 phases (Diagnose, Build With, Run With, Hand Over, Advise) showing NewCo's day to day ownership decreasing from high to low while the client's ownership increases from low to high.",
    "Diagram garis lima tahap (Diagnosis, Membangun Bersama, Berjalan Bersama, Serah Terima, Pendampingan) yang menunjukkan kepemilikan harian NewCo menurun dari tinggi ke rendah sementara kepemilikan klien naik dari rendah ke tinggi.",
  ),
  "capabilitycurve.legend.client": e(
    "Client ownership",
    "Kepemilikan klien",
  ),
  "capabilitycurve.legend.client-short": e(
    "Client",
    "Klien",
  ),
  "capabilitycurve.legend.newco": e(
    "NewCo day to day ownership",
    "Kepemilikan harian NewCo",
  ),
  "capabilitycurve.legend.newco-short": e(
    "NewCo",
    "NewCo",
  ),
  "capabilitycurve.legend.ownership": e(
    "Day to day ownership",
    "Kepemilikan harian",
  ),
  "capabilitycurve.note": e(
    "{illustrativeNote}",
    "Bentuk ilustratif. Level aktual ditetapkan per penugasan.",
  ),
  "capabilitycurve.phase1.label": e(
    "Diagnose",
    "Diagnosis",
  ),
  "capabilitycurve.phase1.live": e(
    "Diagnose: client ownership 8 percent, NewCo pager share 100 percent. Baseline Diagnostic.",
    "Diagnosis: kepemilikan klien 8 persen, porsi pager NewCo 100 persen. Diagnosis Awal.",
  ),
  "capabilitycurve.phase1.milestone": e(
    "Baseline Diagnostic",
    "Diagnosis Awal",
  ),
  "capabilitycurve.phase1.sr": e(
    "Illustrative: NewCo ownership about 92 percent, client ownership about 8 percent.",
    "Ilustrasi: kepemilikan NewCo sekitar 92 persen, kepemilikan klien sekitar 8 persen.",
  ),
  "capabilitycurve.phase2.label": e(
    "Build With",
    "Membangun Bersama",
  ),
  "capabilitycurve.phase2.live": e(
    "Build With: client ownership 30 percent, NewCo pager share 75 percent. Joint Delivery.",
    "Membangun Bersama: kepemilikan klien 30 persen, porsi pager NewCo 75 persen. Serah Terima Bersama.",
  ),
  "capabilitycurve.phase2.milestone": e(
    "Joint Delivery",
    "Serah Terima Bersama",
  ),
  "capabilitycurve.phase2.sr": e(
    "Illustrative: NewCo ownership about 74 percent, client ownership about 30 percent.",
    "Ilustrasi: kepemilikan NewCo sekitar 74 persen, kepemilikan klien sekitar 30 persen.",
  ),
  "capabilitycurve.phase3.label": e(
    "Run With",
    "Berjalan Bersama",
  ),
  "capabilitycurve.phase3.live": e(
    "Run With: client ownership 58 percent, NewCo pager share 50 percent. Shared Pager.",
    "Berjalan Bersama: kepemilikan klien 58 persen, porsi pager NewCo 50 persen. Pager Bersama.",
  ),
  "capabilitycurve.phase3.milestone": e(
    "Shared Pager",
    "Pager Bersama",
  ),
  "capabilitycurve.phase3.sr": e(
    "Illustrative: NewCo ownership about 48 percent, client ownership about 58 percent.",
    "Ilustrasi: kepemilikan NewCo sekitar 48 persen, kepemilikan klien sekitar 58 persen.",
  ),
  "capabilitycurve.phase4.label": e(
    "Hand Over",
    "Serah Terima",
  ),
  "capabilitycurve.phase4.live": e(
    "Hand Over: client ownership 82 percent, NewCo pager share 15 percent. Autonomous Handover.",
    "Serah Terima: kepemilikan klien 82 persen, porsi pager NewCo 15 persen. Alih Kelola Mandiri.",
  ),
  "capabilitycurve.phase4.milestone": e(
    "Autonomous Handover",
    "Alih Kelola Mandiri",
  ),
  "capabilitycurve.phase4.sr": e(
    "Illustrative: NewCo ownership about 22 percent, client ownership about 82 percent.",
    "Ilustrasi: kepemilikan NewCo sekitar 22 persen, kepemilikan klien sekitar 82 persen.",
  ),
  "capabilitycurve.phase5.label": e(
    "Advise",
    "Pendampingan",
  ),
  "capabilitycurve.phase5.live": e(
    "Advise: client ownership 94 percent, NewCo pager share 0 percent. Advisory Governance.",
    "Pendampingan: kepemilikan klien 94 persen, porsi pager NewCo 0 persen. Tata Kelola Pendampingan.",
  ),
  "capabilitycurve.phase5.milestone": e(
    "Advisory Governance",
    "Tata Kelola Pendampingan",
  ),
  "capabilitycurve.phase5.sr": e(
    "Illustrative: NewCo ownership about 10 percent, client ownership about 94 percent.",
    "Ilustrasi: kepemilikan NewCo sekitar 10 persen, kepemilikan klien sekitar 94 persen.",
  ),
  "capabilitycurve.phasegroup": e(
    "Select a phase",
    "Pilih tahap",
  ),
  "capabilitycurve.telemetry.client": e(
    "Client Ownership",
    "Kepemilikan Klien",
  ),
  "capabilitycurve.telemetry.pager": e(
    "NewCo Pager Share",
    "Porsi Pager NewCo",
  ),
  "capabilitycurve.telemetry.phase": e(
    "Phase",
    "Tahap",
  ),
  "capabilityscorecard.caption": e(
    "Capability-transfer scorecard: each capability, its handover evidence, and the four assessment checkpoints.",
    "Kartu skor alih kapabilitas: setiap kapabilitas, bukti serah terimanya, dan empat titik penilaian.",
  ),
  "capabilityscorecard.check1": e(
    "Baseline",
    "Baseline",
  ),
  "capabilityscorecard.check1-assessed": e(
    "Baseline: assessed",
    "Baseline: dinilai",
  ),
  "capabilityscorecard.check2": e(
    "Build With",
    "Membangun Bersama",
  ),
  "capabilityscorecard.check2-assessed": e(
    "Build With: assessed",
    "Membangun Bersama: dinilai",
  ),
  "capabilityscorecard.check3": e(
    "Before shared ops",
    "Sebelum operasi bersama",
  ),
  "capabilityscorecard.check3-assessed": e(
    "Before shared ops: assessed",
    "Sebelum operasi bersama: dinilai",
  ),
  "capabilityscorecard.check4": e(
    "Handover",
    "Serah terima",
  ),
  "capabilityscorecard.check4-assessed": e(
    "Handover: assessed",
    "Serah terima: dinilai",
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
    "Menjelaskan komponen utama, kendala, dan trade-off.",
  ),
  "capabilityscorecard.row2.capability": e(
    "Delivery",
    "Delivery",
  ),
  "capabilityscorecard.row2.evidence": e(
    "Ships a production change through the normal controls.",
    "Mengirim perubahan produksi melalui kontrol yang normal.",
  ),
  "capabilityscorecard.row3.capability": e(
    "Operations",
    "Operasi",
  ),
  "capabilityscorecard.row3.evidence": e(
    "Responds to an incident using logs, metrics, traces, and runbooks.",
    "Menanggapi insiden memakai log, metrika, trace, dan runbook.",
  ),
  "capabilityscorecard.row4.capability": e(
    "Recovery",
    "Pemulihan",
  ),
  "capabilityscorecard.row4.evidence": e(
    "Executes rollback and recovery procedures.",
    "Menjalankan prosedur rollback dan pemulihan.",
  ),
  "capabilityscorecard.row5.capability": e(
    "Data",
    "Data",
  ),
  "capabilityscorecard.row5.evidence": e(
    "Validates freshness, quality, lineage, and permissions.",
    "Memvalidasi kesegaran, kualitas, silsilah, dan izin.",
  ),
  "capabilityscorecard.row6.capability": e(
    "Security",
    "Keamanan",
  ),
  "capabilityscorecard.row6.evidence": e(
    "Remediates a dependency or access-control issue.",
    "Meremediasi isu dependensi atau kontrol akses.",
  ),
  "capabilityscorecard.row7.capability": e(
    "Decision-making",
    "Pengambilan keputusan",
  ),
  "capabilityscorecard.row7.evidence": e(
    "Authors and defends an architecture decision record.",
    "Menyusun dan mempertahankan catatan keputusan arsitektur.",
  ),
  "capabilityscorecard.row8.capability": e(
    "Planning",
    "Perencanaan",
  ),
  "capabilityscorecard.row8.evidence": e(
    "Prioritises and delivers the next iteration without us.",
    "Memprioritaskan dan melaksanakan iterasi berikutnya tanpa kami.",
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
    "Mohon masukkan perusahaan Anda",
  ),
  "contact.form.err-email": e(
    "Please enter your email address",
    "Mohon masukkan alamat email Anda",
  ),
  "contact.form.err-email-invalid": e(
    "Please enter a valid email address",
    "Mohon masukkan alamat email yang valid",
  ),
  "contact.form.err-followup": e(
    "Please choose how we should follow up",
    "Mohon pilih cara kami menindaklanjuti",
  ),
  "contact.form.err-help": e(
    "Please tell us what you would like help with",
    "Mohon sampaikan bantuan yang Anda butuhkan",
  ),
  "contact.form.err-locations": e(
    "Please tell us how many locations or branches",
    "Mohon sampaikan jumlah lokasi atau cabang",
  ),
  "contact.form.err-name": e(
    "Please enter your name",
    "Mohon masukkan nama Anda",
  ),
  "contact.form.err-region": e(
    "Please enter your country or region",
    "Mohon masukkan negara atau wilayah Anda",
  ),
  "contact.form.err-required": e(
    "This field is required",
    "Bagian ini wajib diisi",
  ),
  "contact.form.err-role": e(
    "Please enter your role",
    "Mohon masukkan peran Anda",
  ),
  "contact.form.followup-email": e(
    "Email",
    "Email",
  ),
  "contact.form.followup-label": e(
    "How should we follow up?",
    "Bagaimana kami menindaklanjuti?",
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
    "Adakah kontak IT atau penyedia yang perlu kami ajak bicara?",
  ),
  "contact.form.locations-label": e(
    "How many locations or branches?",
    "Berapa lokasi atau cabang?",
  ),
  "contact.form.more-title": e(
    "A bit more (optional)",
    "Sedikit lagi (opsional)",
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
    "Apa yang paling menggambarkan proyek ini?",
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
    "Belum yakin",
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
    "Terima kasih, sudah kami terima. Kami akan membalas dalam 24 jam dengan langkah jelas berikutnya.",
  ),
  "contact.intro.expect-1": e(
    "An initial 30-minute scoping call to understand your systems and constraints.",
    "Panggilan scoping awal 30 menit untuk memahami sistem dan kendala Anda.",
  ),
  "contact.intro.expect-2": e(
    "Clear technical recommendations and capability baseline assessment.",
    "Rekomendasi teknis yang jelas dan penilaian baseline kapabilitas.",
  ),
  "contact.intro.expect-3": e(
    "Honest fit evaluation: we only take on engagements where we can ensure complete handover.",
    "Evaluasi kecocokan yang jujur: kami hanya mengambil penugasan yang bisa kami pastikan alih kelolanya.",
  ),
  "contact.intro.expect-title": e(
    "// What to expect",
    "// Yang bisa diharapkan",
  ),
  "contact.intro.eyebrow": e(
    "// ENGAGEMENT BRIEF",
    "// BRIEF PENGAJUAN",
  ),
  "contact.intro.lede": e(
    "Share a few details and we'll reply with a clear next step. No obligation, and we'll never ask for passwords or system access here.",
    "Bagikan beberapa detail dan kami akan membalas dengan langkah jelas berikutnya. Tanpa kewajiban, dan kami tidak akan pernah meminta kata sandi atau akses sistem di sini.",
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
    "kami.",
  ),
  "contact.intro.review-body": e(
    "Every enquiry is reviewed directly by our founders, with a guaranteed 24-hour response.",
    "Setiap pengajuan ditinjau langsung oleh para pendiri kami, dengan respons 24 jam yang terjamin.",
  ),
  "contact.intro.review-title": e(
    "// Direct Founder Review",
    "// Tinjauan Langsung Pendiri",
  ),
  "contact.intro.title": e(
    "Tell us what the business needs.",
    "Sampaikan kebutuhan bisnis Anda.",
  ),
  "footer.company": e(
    "Company",
    "Perusahaan",
  ),
  "footer.cta": e(
    "Start a conversation",
    "Mulai percakapan",
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
    "Sistem yang dibangun dengan benar, didokumentasikan lengkap, dan dimiliki oleh bisnis.",
  ),
  "howwework.curve.caption": e(
    "By the final stage, the business runs its technology on its own terms.",
    "Pada tahap akhir, bisnis menjalankan teknologinya dengan caranya sendiri.",
  ),
  "howwework.curve.development.label": e(
    "Development",
    "Development",
  ),
  "howwework.curve.development.milestone": e(
    "Joint Engineering",
    "Rekayasa Bersama",
  ),
  "howwework.curve.discovery.label": e(
    "Discovery",
    "Discovery",
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
    "Operasi Bersama",
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
    "Kepemilikan Mandiri",
  ),
  "howwework.handover.accounts.included": e(
    "Hosting, domains and services in the business's name",
    "Hosting, domain, dan layanan atas nama bisnis",
  ),
  "howwework.handover.accounts.item": e(
    "Accounts and access",
    "Akun dan akses",
  ),
  "howwework.handover.col-included": e(
    "What's included",
    "Cakupannya",
  ),
  "howwework.handover.col-item": e(
    "Item",
    "Item",
  ),
  "howwework.handover.documentation.included": e(
    "How the system works, written in plain language",
    "Cara kerja sistem, ditulis dengan bahasa lugas",
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
    "Instruksi langkah demi langkah untuk tugas harian dan pembaruan",
  ),
  "howwework.handover.guides.item": e(
    "Running guides",
    "Panduan menjalankan",
  ),
  "howwework.handover.heading": e(
    "Everything handed over, nothing held back.",
    "Semua diserahterimakan, tanpa ada yang ditahan.",
  ),
  "howwework.handover.lede": e(
    "Before we sign off, each item below is delivered and walked through with whoever will run the system. The checklist is agreed in the contract.",
    "Sebelum kami serah terima, setiap item di bawah disampaikan dan dijelaskan langsung kepada siapa pun yang akan menjalankan sistem. Daftar periksanya disepakati dalam kontrak.",
  ),
  "howwework.handover.recovery.included": e(
    "How to restore the system from backup if something goes wrong",
    "Cara memulihkan sistem dari cadangan jika terjadi masalah",
  ),
  "howwework.handover.recovery.item": e(
    "Recovery plan",
    "Rencana pemulihan",
  ),
  "howwework.handover.security.included": e(
    "Passwords changed and access checked before sign-off",
    "Kata sandi diganti dan akses diperiksa sebelum serah terima",
  ),
  "howwework.handover.security.item": e(
    "Security review",
    "Tinjauan keamanan",
  ),
  "howwework.handover.source-code.included": e(
    "Every line, stored in the business's own account",
    "Setiap baris, tersimpan di akun milik bisnis sendiri",
  ),
  "howwework.handover.source-code.item": e(
    "Source code",
    "Kode sumber",
  ),
  "howwework.handover.support.included": e(
    "Available from us if the business wants it, never required",
    "Tersedia dari kami bila bisnis menginginkannya, tidak pernah wajib",
  ),
  "howwework.handover.support.item": e(
    "Ongoing support",
    "Dukungan lanjutan",
  ),
  "howwework.handover.walkthrough.included": e(
    "A guided session with whoever takes over",
    "Sesi pendampingan dengan siapa pun penerusnya",
  ),
  "howwework.handover.walkthrough.item": e(
    "Live walkthrough",
    "Walkthrough langsung",
  ),
  "howwework.hero.eyebrow": e(
    "// METHODOLOGY & PROCESS",
    "// METODOLOGI & PROSES",
  ),
  "howwework.hero.lede": e(
    "We work alongside the business at every stage, and it always has the final say. Every decision is explained in plain language, with no jargon.",
    "Kami bekerja berdampingan dengan bisnis di setiap tahap, dan bisnis selalu memegang keputusan akhir. Setiap keputusan dijelaskan dengan bahasa lugas, tanpa jargon.",
  ),
  "howwework.hero.title": e(
    "One clear process, start to finish.",
    "Satu proses yang jelas, dari awal sampai akhir.",
  ),
  "howwework.stages.development.body": e(
    "We design and build the system, with regular check-ins and demos so the business can see and test it as it takes shape.",
    "Kami merancang dan membangun sistem, dengan check-in dan demo berkala agar bisnis bisa melihat dan mengujinya selagi terbentuk.",
  ),
  "howwework.stages.development.gets": e(
    "a working system, tested and ready for real use.",
    "sistem yang berfungsi, teruji, dan siap dipakai nyata.",
  ),
  "howwework.stages.development.name": e(
    "Development",
    "Development",
  ),
  "howwework.stages.discovery.body": e(
    "We learn how the business runs, map its current systems and agree the plan together.",
    "Kami mempelajari cara bisnis berjalan, memetakan sistem yang ada, dan menyepakati rencana bersama.",
  ),
  "howwework.stages.discovery.gets": e(
    "a technical roadmap with architecture, milestones and estimated costs.",
    "peta jalan teknis berisi arsitektur, tonggak, dan estimasi biaya.",
  ),
  "howwework.stages.discovery.name": e(
    "Discovery",
    "Discovery",
  ),
  "howwework.stages.gets-label": e(
    "The business gets:",
    "Yang didapat bisnis:",
  ),
  "howwework.stages.heading": e(
    "Four stages, one direction.",
    "Empat tahap, satu arah.",
  ),
  "howwework.stages.note": e(
    "How long each stage takes depends on the project. We agree the timeline during Discovery.",
    "Durasi tiap tahap tergantung proyek. Linimasanya kami sepakati saat Discovery.",
  ),
  "howwework.stages.operations.body": e(
    "After launch, we monitor the system, fix issues, and keep it secure and up to date until it runs smoothly.",
    "Setelah peluncuran, kami memantau sistem, memperbaiki masalah, dan menjaganya aman dan mutakhir sampai berjalan lancar.",
  ),
  "howwework.stages.operations.gets": e(
    "a stable system with agreed response times.",
    "sistem yang stabil dengan waktu respons yang disepakati.",
  ),
  "howwework.stages.operations.name": e(
    "Operations and Support",
    "Operasi dan Dukungan",
  ),
  "howwework.stages.step-prefix": e(
    "STEP //",
    "LANGKAH //",
  ),
  "howwework.stages.transfer.body": e(
    "We transfer everything needed to run the system independently, to in-house staff, a new hire or another provider.",
    "Kami mengalihkan semua yang dibutuhkan untuk menjalankan sistem secara mandiri, kepada staf internal, karyawan baru, maupun penyedia lain.",
  ),
  "howwework.stages.transfer.gets": e(
    "full ownership, with no dependence on us.",
    "kepemilikan penuh, tanpa ketergantungan pada kami.",
  ),
  "howwework.stages.transfer.name": e(
    "Ownership Transfer",
    "Alih Kepemilikan",
  ),
  "howwework.tech.aria": e(
    "Technologies we build with",
    "Teknologi yang kami gunakan",
  ),
  "howwework.tech.note": e(
    "// Built on proven, widely used technology.",
    "// Dibangun di atas teknologi yang terbukti dan dipakai luas.",
  ),
  "index.ai.eyebrow": e(
    "// Optional service",
    "// Layanan opsional",
  ),
  "index.ai.lede": e(
    "Our systems are engineered by people, not generated by AI. When a business wants to use AI, we help it adopt it properly: reliable data first, then AI only where it clearly pays off.",
    "Sistem kami direkayasa oleh manusia, bukan dihasilkan AI. Saat bisnis ingin memakai AI, kami membantu mengadopsinya dengan benar: data yang andal dulu, lalu AI hanya di titik yang jelas memberikan hasil.",
  ),
  "index.ai.step1": e(
    "Get the data ready",
    "Siapkan datanya",
  ),
  "index.ai.step2": e(
    "Start with one clear use case",
    "Mulai dari satu kasus guna yang jelas",
  ),
  "index.ai.step3": e(
    "Expand carefully, with safeguards",
    "Kembangkan bertahap dengan pengaman",
  ),
  "index.ai.title": e(
    "Want to bring AI into the business? We can help.",
    "Ingin membawa AI ke bisnis? Kami bisa membantu.",
  ),
  "index.build.eyebrow": e(
    "// PRINCIPLES",
    "// PRINSIP",
  ),
  "index.build.principle1.body": e(
    "No extra complexity until there's a real reason for it.",
    "Tanpa kompleksitas tambahan sampai ada alasan yang nyata.",
  ),
  "index.build.principle1.title": e(
    "Keep it simple.",
    "Tetap sederhana.",
  ),
  "index.build.principle2.body": e(
    "Monitoring, backups, cloud costs and recovery plans are included, not extras.",
    "Pemantauan, cadangan, biaya cloud, dan rencana pemulihan sudah termasuk, bukan tambahan.",
  ),
  "index.build.principle2.title": e(
    "Running it is part of the job.",
    "Menjalankannya adalah bagian dari pekerjaan.",
  ),
  "index.build.principle3.body": e(
    "Plain-language updates and no jargon, so decision-makers always know where things stand.",
    "Pembaruan berbahasa lugas tanpa jargon, sehingga pengambil keputusan selalu tahu perkembangannya.",
  ),
  "index.build.principle3.title": e(
    "Clear communication.",
    "Komunikasi yang jelas.",
  ),
  "index.build.principle4.body": e(
    "Widely used, well-supported tools, so any qualified engineer can pick the system up.",
    "Tools yang dipakai luas dan didukung baik, sehingga engineer mana pun yang qualified bisa meneruskan sistem.",
  ),
  "index.build.principle4.title": e(
    "Standard, proven technology.",
    "Teknologi standar yang terbukti.",
  ),
  "index.build.principle5.body": e(
    "Access controls, encryption and regular updates are built in, not added later.",
    "Kontrol akses, enkripsi, dan pembaruan rutin sudah tertanam sejak awal, bukan ditempel belakangan.",
  ),
  "index.build.principle5.title": e(
    "Security from day one.",
    "Keamanan sejak hari pertama.",
  ),
  "index.build.title": e(
    "Simple, honest engineering.",
    "Rekayasa yang sederhana dan jujur.",
  ),
  "index.cta.body": e(
    "Whether it's a brand-new system or improving one already in place, tell us what's slowing the business down and we'll suggest the best place to start.",
    "Baik sistem baru maupun menyempurnakan yang sudah ada, sampaikan apa yang menghambat bisnis dan kami akan menyarankan titik awal terbaik.",
  ),
  "index.cta.button": e(
    "Talk to us",
    "Hubungi kami",
  ),
  "index.cta.title": e(
    "Own the technology your business runs on.",
    "Miliki teknologi yang menjalankan bisnis Anda.",
  ),
  "index.discovery.cta": e(
    "Talk to us",
    "Hubungi kami",
  ),
  "index.discovery.eyebrow": e(
    "// DISCOVERY",
    "// DISCOVERY",
  ),
  "index.discovery.lede": e(
    "Before anything is built, we take a close look at how the business runs today. In three steps, that becomes a plan the business keeps, whether it continues with us or not.",
    "Sebelum ada yang dibangun, kami mencermati cara bisnis berjalan saat ini. Dalam tiga langkah, itu menjadi rencana yang tetap milik bisnis, baik lanjut bersama kami maupun tidak.",
  ),
  "index.discovery.step1.body": e(
    "We map current systems, data flows and integrations, and pinpoint the bottlenecks.",
    "Kami memetakan sistem, alur data, dan integrasi saat ini, serta menemukan titik sumbatnya.",
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
    "Kami memeringkat risiko, seperti celah keamanan dan titik kegagalan tunggal, lalu memutuskan apa yang dibangun, ditingkatkan, atau dibiarkan.",
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
    "Kami menyusun peta jalan teknis berisi usulan arsitektur, tonggak, dan estimasi biaya, sehingga setiap keputusan berbasis fakta.",
  ),
  "index.discovery.step3.num": e(
    "STEP // 03",
    "LANGKAH // 03",
  ),
  "index.discovery.step3.title": e(
    "Plan",
    "Merencanakan",
  ),
  "index.discovery.title": e(
    "Every project starts with a clear picture.",
    "Setiap proyek dimulai dengan gambaran yang jelas.",
  ),
  "index.gets.gets1.body": e(
    "We don't leave at launch. We monitor the system, fix issues fast and keep improving it until it runs smoothly.",
    "Kami tidak pergi saat peluncuran. Kami memantau sistem, memperbaiki masalah dengan cepat, dan terus menyempurnakannya sampai berjalan lancar.",
  ),
  "index.gets.gets1.proof": e(
    "How we prove it: service recovery time, tracked from day one.",
    "Buktinya: waktu pemulihan layanan, dilacak sejak hari pertama.",
  ),
  "index.gets.gets1.title": e(
    "We stay until it runs smoothly",
    "Kami bertahan sampai sistem berjalan lancar",
  ),
  "index.gets.gets2.body": e(
    "Every system comes with clear documentation and guides, so the know-how belongs to the business, not to any one person.",
    "Setiap sistem dilengkapi dokumentasi dan panduan yang jelas, sehingga pengetahuannya milik bisnis, bukan milik perorangan.",
  ),
  "index.gets.gets2.proof": e(
    "How we prove it: documentation is reviewed and signed off at every stage.",
    "Buktinya: dokumentasi ditinjau dan disahkan di setiap tahap.",
  ),
  "index.gets.gets2.title": e(
    "Knowledge that stays with the business",
    "Pengetahuan yang menetap di bisnis",
  ),
  "index.gets.gets3.body": e(
    "We recommend what the business actually needs. Often the simplest option is the best value, and we'll say so. New technology comes in only when it clearly pays for itself.",
    "Kami merekomendasikan yang benar-benar dibutuhkan bisnis. Sering kali opsi paling sederhana adalah yang paling bernilai, dan kami akan menyatakannya. Teknologi baru hanya masuk bila jelas memberikan hasil.",
  ),
  "index.gets.gets3.proof": e(
    "How we prove it: every recommendation comes with its cost and expected return.",
    "Buktinya: setiap rekomendasi disertai biaya dan hasil yang diharapkan.",
  ),
  "index.gets.gets3.title": e(
    "The right tools, not the trendy ones",
    "Tools yang tepat, bukan yang trendi",
  ),
  "index.gets.gets4.body": e(
    "Before we sign off, whoever takes over, in-house staff or another provider, is walked through running, fixing and updating the system.",
    "Sebelum kami serah terima, siapa pun penerusnya, staf internal maupun penyedia lain, dipandu menjalankan, memperbaiki, dan memperbarui sistem.",
  ),
  "index.gets.gets4.proof": e(
    "How we prove it: a transfer checklist, agreed in the contract.",
    "Buktinya: daftar periksa serah terima, disepakati dalam kontrak.",
  ),
  "index.gets.gets4.title": e(
    "A transfer that actually works",
    "Alih kelola yang benar-benar berjalan",
  ),
  "index.gets.title": e(
    "What the business gets instead.",
    "Yang didapat bisnis sebagai gantinya.",
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
    "Mitra rekayasa untuk bisnis yang bertumbuh",
  ),
  "index.hero.lede": e(
    "We engineer systems to a high standard, then transfer full ownership to the business: the code, the documentation and the know-how. No vendor lock-in. No hidden dependencies.",
    "Kami merekayasa sistem dengan standar tinggi, lalu mengalihkan kepemilikan penuh kepada bisnis: kode, dokumentasi, dan pengetahuannya. Tanpa vendor lock-in. Tanpa ketergantungan tersembunyi.",
  ),
  "index.hero.tag1": e(
    "We build",
    "Kami membangun",
  ),
  "index.hero.tag2": e(
    "We teach",
    "Kami mengajarkan",
  ),
  "index.hero.tag3": e(
    "You own.",
    "Anda memiliki.",
  ),
  "index.hero.title": e(
    "Technology built for independence.",
    "Teknologi yang dibangun untuk kemandirian.",
  ),
  "index.hero.video": e(
    "Watch the 1 minute intro",
    "Tonton intro 1 menit",
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
    "Empat tahap yang jelas membawa setiap proyek dari percakapan pertama hingga sistem yang sepenuhnya dimiliki bisnis.",
  ),
  "index.howwework.link": e(
    "See how it works →",
    "Lihat cara kerjanya →",
  ),
  "index.howwework.note": e(
    "Day-to-day control shifts to the business, stage by stage. Ongoing support is a choice, never a requirement.",
    "Kendali harian beralih ke bisnis, tahap demi tahap. Dukungan lanjutan adalah pilihan, bukan kewajiban.",
  ),
  "index.howwework.stage1.label": e(
    "Discovery",
    "Discovery",
  ),
  "index.howwework.stage1.milestone": e(
    "Baseline Diagnostic",
    "Diagnosis Awal",
  ),
  "index.howwework.stage2.label": e(
    "Development",
    "Development",
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
    "Operasi Bersama",
  ),
  "index.howwework.stage4.label": e(
    "Ownership Transfer",
    "Alih Kepemilikan",
  ),
  "index.howwework.stage4.milestone": e(
    "Autonomous Ownership",
    "Kepemilikan Mandiri",
  ),
  "index.howwework.title": e(
    "How a project comes together.",
    "Cara sebuah proyek terwujud.",
  ),
  "index.numbers.col-metric": e(
    "Metric",
    "Metrika",
  ),
  "index.numbers.col-tells": e(
    "What it tells you",
    "Artinya bagi Anda",
  ),
  "index.numbers.eyebrow": e(
    "// METRICS",
    "// METRIKA",
  ),
  "index.numbers.lede": e(
    "No vague status reports. We measure these on every project and report them in plain language. The first four are the industry-standard DORA metrics used by top engineering teams.",
    "Tanpa laporan status yang samar. Kami mengukur delapan hal ini di setiap proyek dan melaporkannya dengan bahasa lugas. Empat yang pertama adalah metrika DORA standar industri yang dipakai tim rekayasa papan atas.",
  ),
  "index.numbers.metric1.metric": e(
    "Lead time",
    "Lead time",
  ),
  "index.numbers.metric1.tells": e(
    "How long a change takes to go live",
    "Berapa lama perubahan sampai live",
  ),
  "index.numbers.metric2.metric": e(
    "Release frequency",
    "Frekuensi rilis",
  ),
  "index.numbers.metric2.tells": e(
    "How often updates go live",
    "Seberapa sering pembaruan live",
  ),
  "index.numbers.metric3.metric": e(
    "Change failure rate",
    "Tingkat kegagalan perubahan",
  ),
  "index.numbers.metric3.tells": e(
    "How often an update causes a problem",
    "Seberapa sering pembaruan menimbulkan masalah",
  ),
  "index.numbers.metric4.metric": e(
    "Recovery time",
    "Waktu pemulihan",
  ),
  "index.numbers.metric4.tells": e(
    "How fast service is restored after an issue",
    "Seberapa cepat layanan pulih setelah gangguan",
  ),
  "index.numbers.metric5.metric": e(
    "Rework rate",
    "Tingkat pengerjaan ulang",
  ),
  "index.numbers.metric5.tells": e(
    "How much work has to be redone",
    "Berapa banyak pekerjaan yang harus diulang",
  ),
  "index.numbers.metric6.metric": e(
    "Uptime",
    "Uptime",
  ),
  "index.numbers.metric6.tells": e(
    "How much of the time the system is available",
    "Seberapa sering sistem tersedia",
  ),
  "index.numbers.metric7.metric": e(
    "Response time",
    "Waktu respons",
  ),
  "index.numbers.metric7.tells": e(
    "How quickly support requests are answered",
    "Seberapa cepat permintaan dukungan dijawab",
  ),
  "index.numbers.metric8.metric": e(
    "Transfer readiness",
    "Kesiapan alih kelola",
  ),
  "index.numbers.metric8.tells": e(
    "How complete the documentation and transfer checklist are",
    "Seberapa lengkap dokumentasi dan daftar periksa serah terima",
  ),
  "index.numbers.title": e(
    "Eight numbers that prove progress.",
    "Delapan angka yang membuktikan kemajuan.",
  ),
  "index.problem.lede": e(
    "Many agencies deliver a system and leave. The business is left with code nobody in-house can fix when something breaks.",
    "Banyak agensi mengirim sistem lalu pergi. Bisnis tertinggal dengan kode yang tidak bisa diperbaiki siapa pun di internal saat ada masalah.",
  ),
  "index.problem.problem1.body": e(
    "Builds it, bills it, leaves.",
    "Membangunnya, menagihnya, lalu pergi.",
  ),
  "index.problem.problem1.title": e(
    "The disappearing agency",
    "Agensi yang menghilang",
  ),
  "index.problem.problem2.body": e(
    "Extra developers fill the gap for a while, but when the contract ends, the knowledge walks out with them.",
    "Developer tambahan mengisi kekosongan untuk sementara, tetapi saat kontrak berakhir, pengetahuan ikut pergi bersama mereka.",
  ),
  "index.problem.problem2.title": e(
    "Short-term contractors",
    "Kontraktor jangka pendek",
  ),
  "index.problem.problem3.body": e(
    "Trendy tools added before the basics are in place, so they cost more than they deliver.",
    "Tools trendi dipasang sebelum fondasinya beres, sehingga biayanya lebih besar daripada manfaatnya.",
  ),
  "index.problem.problem3.title": e(
    "Tech for the sake of it",
    "Teknologi demi gengsi",
  ),
  "index.problem.problem4.body": e(
    "The code is passed over, but nobody explains how it works or how to fix it.",
    "Kodenya diserahkan, tetapi tidak ada yang menjelaskan cara kerjanya atau cara memperbaikinya.",
  ),
  "index.problem.problem4.title": e(
    "Handover in name only",
    "Serah terima sekadar nama",
  ),
  "index.problem.title": e(
    "Getting software built is easy. Keeping it running is the hard part.",
    "Membangun perangkat lunak itu mudah. Menjaganya tetap berjalan itulah bagian tersulit.",
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
    "Kenali para pendiri NewCo. Kami membangun dan menjalankan sistem bisnis yang andal, serta mengalihkan kapabilitas rekayasa secara menyeluruh kepada tim Anda.",
  ),
  "meta.about.title": e(
    "About NewCo · Engineering Leadership & Governance",
    "Tentang NewCo · Kepemimpinan & Tata Kelola Rekayasa",
  ),
  "meta.contact.description": e(
    "Contact NewCo's founders to discuss your business systems, technical constraints, and path to full engineering independence.",
    "Hubungi para pendiri NewCo untuk mendiskusikan sistem bisnis, kendala teknis, dan langkah menuju kemandirian rekayasa penuh.",
  ),
  "meta.contact.title": e(
    "Contact NewCo · Discuss Systems & Engineering Handover",
    "Hubungi NewCo · Diskusi Sistem & Alih Kelola Rekayasa",
  ),
  "meta.howwework.description": e(
    "Our 4-stage engineering model transfers full system ownership to your team, from Discovery through autonomous operations.",
    "Model rekayasa 4 tahap kami mengalihkan kepemilikan sistem penuh kepada tim Anda, dari Discovery hingga operasi mandiri.",
  ),
  "meta.howwework.title": e(
    "How We Work · 4-Stage Engineering Transfer | NewCo",
    "Cara Kerja Kami · Alih Teknologi 4 Tahap | NewCo",
  ),
  "meta.index.description": e(
    "We design, build, and support business systems, then transfer full ownership. Zero vendor lock-in, zero hidden dependencies.",
    "Kami merancang, membangun, dan mendukung sistem bisnis, lalu mengalihkan kepemilikan penuh. Tanpa vendor lock-in, tanpa ketergantungan tersembunyi.",
  ),
  "meta.index.title": e(
    "Technology built for independence · NewCo",
    "Teknologi yang dibangun untuk kemandirian · NewCo",
  ),
  "meta.privacy.description": e(
    "How NewCo handles contact form data, keeps client architecture confidential, governs AI use of client assets, and retains data.",
    "Cara NewCo menangani data formulir kontak, menjaga kerahasiaan arsitektur klien, mengatur tata kelola AI atas aset klien, dan menyimpan data.",
  ),
  "meta.privacy.title": e(
    "Privacy Policy · How NewCo Protects Client Data",
    "Kebijakan Privasi · Cara NewCo Melindungi Data Klien",
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
    "Cara kerja kami",
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
    "Ada pertanyaan tentang kebijakan ini?",
  ),
  "privacy.hero.lede": e(
    "NewCo works inside our clients' systems, so confidentiality is part of how we operate, not a footnote. This policy explains what we collect, how we protect it, and what we will never do with it.",
    "NewCo bekerja di dalam sistem klien kami, sehingga kerahasiaan adalah bagian dari cara kami beroperasi, bukan sekadar catatan kaki. Kebijakan ini menjelaskan apa yang kami kumpulkan, cara kami melindunginya, dan apa yang tidak akan pernah kami lakukan dengannya.",
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
    "Bila kami menggunakan perkakas berbantuan AI dalam pekerjaan kami, aturan berikut berlaku untuk setiap penugasan:",
  ),
  "privacy.sections.ai.list-1": e(
    "Your code and data stay private. Client source code, documentation, datasets and system information are never published or shared with other clients.",
    "Kode dan data Anda tetap privat. Kode sumber, dokumentasi, dataset, dan informasi sistem klien tidak pernah dipublikasikan atau dibagikan ke klien lain.",
  ),
  "privacy.sections.ai.list-2": e(
    "No model training on client assets. We do not use your code, data or documents to train or fine-tune any AI model, ours or a third party's, without your explicit written consent.",
    "Tanpa pelatihan model atas aset klien. Kami tidak menggunakan kode, data, atau dokumen Anda untuk melatih atau menyempurnakan model AI apa pun, milik kami maupun pihak ketiga, tanpa persetujuan tertulis dari Anda.",
  ),
  "privacy.sections.ai.list-3": e(
    "Approved tooling only. Client material is processed only with tools and providers whose terms exclude training on submitted content and that meet the confidentiality commitments we have made to you.",
    "Hanya perkakas yang disetujui. Materi klien hanya diproses dengan tools dan penyedia yang ketentuannya mengecualikan pelatihan atas konten yang dikirim dan yang memenuhi komitmen kerahasiaan kami kepada Anda.",
  ),
  "privacy.sections.ai.list-4": e(
    "Scoped access. AI tools see only what is necessary for the task, and never production credentials or secrets.",
    "Akses terbatas. Tools AI hanya melihat yang diperlukan untuk tugasnya, dan tidak pernah kredensial atau rahasia produksi.",
  ),
  "privacy.sections.ai.list-5": e(
    "Your say. Clients may restrict or prohibit AI-assisted tooling on their assets, and we will honour that in the engagement terms.",
    "Keputusan di tangan Anda. Klien boleh membatasi atau melarang perkakas berbantuan AI atas asetnya, dan kami akan menghormatinya dalam ketentuan penugasan.",
  ),
  "privacy.sections.ai.title": e(
    "AI data privacy governance",
    "Tata kelola privasi data AI",
  ),
  "privacy.sections.architecture.body-1": e(
    "Details you share about your systems, infrastructure, architecture, vendors, security posture or operating model are treated as confidential from the first conversation. We use them only to scope and deliver the work you have asked us to consider.",
    "Detail yang Anda bagikan tentang sistem, infrastruktur, arsitektur, vendor, postur keamanan, atau model operasi Anda diperlakukan sebagai rahasia sejak percakapan pertama. Kami menggunakannya hanya untuk menilai dan melaksanakan pekerjaan yang Anda minta untuk kami pertimbangkan.",
  ),
  "privacy.sections.architecture.body-2": e(
    "Access is limited to the people at NewCo who need it for your engagement. We do not publish, reference or reuse your architecture information, including in case studies or marketing, without your written permission. We are glad to sign a mutual non-disclosure agreement before any detailed technical discussion.",
    "Akses dibatasi pada orang-orang di NewCo yang membutuhkannya untuk penugasan Anda. Kami tidak mempublikasikan, merujuk, atau menggunakan ulang informasi arsitektur Anda, termasuk dalam studi kasus atau pemasaran, tanpa izin tertulis dari Anda. Kami bersedia menandatangani perjanjian kerahasiaan (NDA) timbal balik sebelum diskusi teknis yang mendetail.",
  ),
  "privacy.sections.architecture.title": e(
    "Non-disclosure of architecture data",
    "Kerahasiaan data arsitektur",
  ),
  "privacy.sections.changes.body-1": e(
    "We will update this page when our practices change and revise the date above. Material changes that affect an active engagement will be communicated to you directly.",
    "Kami akan memperbarui halaman ini saat praktik kami berubah dan merevisi tanggal di atas. Perubahan material yang memengaruhi penugasan aktif akan kami sampaikan langsung kepada Anda.",
  ),
  "privacy.sections.changes.title": e(
    "Changes to this policy",
    "Perubahan atas kebijakan ini",
  ),
  "privacy.sections.contact-form.body-1": e(
    "When you write to us, we collect the details you choose to provide: your name, company, role, email address, country or region, how many locations or branches, what you would like help with, and how you prefer us to follow up. Optional fields, such as project type, IT contact or main decision-maker, are collected only if you complete them.",
    "Saat Anda menulis kepada kami, kami mengumpulkan detail yang Anda pilih untuk diberikan: nama, perusahaan, peran, alamat email, negara atau wilayah, jumlah lokasi atau cabang, bantuan yang dibutuhkan, dan cara tindak lanjut yang Anda inginkan. Kolom opsional, seperti jenis proyek, kontak IT, atau pengambil keputusan utama, hanya dikumpulkan bila Anda mengisinya.",
  ),
  "privacy.sections.contact-form.body-2": e(
    "We use this information for one purpose: to assess your enquiry against our fit criteria and reply with a recommended next step. We do not use it for unrelated marketing, and we do not sell, rent or trade it.",
    "Kami menggunakan informasi ini untuk satu tujuan: menilai pengajuan Anda terhadap kriteria kecocokan kami dan membalas dengan langkah yang disarankan. Kami tidak menggunakannya untuk pemasaran yang tidak terkait, dan kami tidak menjual, menyewakan, atau memperdagangkannya.",
  ),
  "privacy.sections.contact-form.body-3": e(
    "Please do not include credentials, access keys, personal data about your customers or any other sensitive material in the form. We will never ask for them through a web enquiry.",
    "Mohon tidak mencantumkan kredensial, kunci akses, data pribadi pelanggan Anda, atau materi sensitif lain dalam formulir. Kami tidak akan pernah memintanya melalui pengajuan web.",
  ),
  "privacy.sections.contact-form.title": e(
    "Information you submit through the contact form",
    "Informasi yang Anda sampaikan melalui formulir kontak",
  ),
  "privacy.sections.retention.body-1": e(
    "Contact form enquiries that do not lead to an engagement are kept for up to twelve months so that we can respond and follow up, and are then deleted.",
    "Pengajuan formulir kontak yang tidak berlanjut ke penugasan disimpan hingga dua belas bulan agar kami bisa merespons dan menindaklanjuti, lalu dihapus.",
  ),
  "privacy.sections.retention.body-2": e(
    "For active engagements, we keep project material only for the duration of the work and a short handover period agreed with you. At the end of the engagement, we return or securely delete client code, data and architecture information as the contract specifies, except where the law requires us to keep records, such as invoices and contracts.",
    "Untuk penugasan aktif, kami menyimpan materi proyek hanya selama pekerjaan berlangsung dan masa serah terima singkat yang disepakati dengan Anda. Di akhir penugasan, kami mengembalikan atau menghapus secara aman kode, data, dan informasi arsitektur klien sebagaimana diatur kontrak, kecuali diwajibkan hukum untuk menyimpan arsip, seperti faktur dan kontrak.",
  ),
  "privacy.sections.retention.title": e(
    "Data retention",
    "Penyimpanan data",
  ),
  "privacy.sections.rights.body-1": e(
    "You may ask us at any time to confirm what personal information we hold about you, correct it, or delete it. You may also withdraw any consent you have given, including consent relating to AI use of your assets.",
    "Anda dapat kapan saja meminta kami mengonfirmasi informasi pribadi apa yang kami simpan tentang Anda, mengoreksinya, atau menghapusnya. Anda juga dapat menarik persetujuan yang telah diberikan, termasuk persetujuan terkait penggunaan AI atas aset Anda.",
  ),
  "privacy.sections.rights.body-2": e(
    "To make a request, contact us through the contact page and mark your message \"Privacy request\". We will confirm receipt and respond within a reasonable period, and in any case within the time required by applicable law, including Indonesian data protection regulation.",
    "Untuk mengajukan permintaan, hubungi kami melalui halaman kontak dan tandai pesan Anda \"Permintaan privasi\". Kami akan mengonfirmasi penerimaan dan merespons dalam waktu yang wajar, dan dalam hal apa pun dalam batas waktu yang diwajibkan hukum yang berlaku, termasuk regulasi pelindungan data Indonesia.",
  ),
  "privacy.sections.rights.title": e(
    "Your rights and privacy requests",
    "Hak Anda dan permintaan privasi",
  ),
};

export function t(key: string, lang: Lang): string {
  return STRINGS[key]?.[lang] ?? STRINGS[key]?.en ?? key;
}
