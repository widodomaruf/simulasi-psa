# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary: Wajib Pajak awam.** Seseorang yang memegang STP atau SKP berisi sanksi administrasi, sering sedikit cemas, dan tidak paham pasal. Tugasnya: tahu apakah sanksinya masuk program PSA, berapa yang harus dibayar, sampai kapan, lalu menyiapkan surat dan mengajukan permohonan. Bila kebutuhan pengguna bertentangan, kebutuhan WP awam yang menang.

**Secondary: petugas DJP dan konsultan/praktisi pajak.** Dilayani lewat Kalkulator Lengkap (per kluster dan skenario KEP-239/PJ/2026) dan Kamus Pasal, tanpa membebani alur utama WP.

## Product Purpose

LEGA (**L**ihat sanksi · **E**valuasi syarat · **G**arap surat · **A**jukan) adalah alat edukasi independen untuk memahami dan menghitung program Pengurangan atau Penghapusan Sanksi Administratif (PSA) berdasarkan PMK 71 Tahun 2026 dan KEP-239/PJ/2026.

Keberhasilan: WP benar-benar **mengajukan permohonan PSA sebelum tenggat**, dengan nominal yang benar, syarat terpenuhi, dan surat sudah siap. Paham saja belum cukup.

## Positioning

Satu alur yang membawa WP dari surat tagihan di tangan sampai berkas permohonan siap: tanya-jawab dalam bahasa sehari-hari, hasil berupa rencana tindakan (bayar berapa, paling lambat kapan, berapa yang dihapus), cek syarat yang melewati pertanyaan tak relevan, lalu surat-surat yang terisi otomatis dan siap cetak. Dibuat oleh edukator pajak, berdasar langsung pada teks PMK dan KEP.

## Operating Context

- Dipakai seimbang di HP dan laptop. HP: dibuka dari tautan media sosial, sering sambil memegang surat. Laptop: petugas/konsultan, dan siapa pun yang mencetak surat atau menyimpannya sebagai PDF.
- Dokumen nyata yang terlibat: STP, SKP, surat keputusan keberatan/putusan banding/PK, PBB, SPT nihil/lebih bayar. Keluaran: surat permohonan, dua surat pernyataan bermeterai, surat pencabutan keberatan, surat pencabutan banding/gugatan, surat permohonan cetak ulang (salinan) STP/SKP.
- Bisa diinstal sebagai PWA dan tetap berfungsi tanpa internet, kecuali video YouTube.
- Tenggat program dan tanggal kunci tercatat di `index.html`; selalu ambil dari sana atau dari regulasi, jangan dari ingatan.

## Capabilities and Constraints

- Tampilan (tab): Kalkulator Lengkap, Cek Syarat, Surat Permohonan, Kamus Pasal, Tentang PSA.
- Teknis: satu berkas statis `index.html` (HTML/CSS/JS tanpa framework atau build step), `sw.js` untuk offline, `manifest.webmanifest`. Dideploy di Vercel (`simulasi-psa.vercel.app`). Bahasa antarmuka: Indonesia (`lang="id"`), dengan pilihan Inggris (kamus `window.LEGA_EN` di `index.html`; teks tanpa terjemahan tetap tampil dalam bahasa Indonesia). Surat yang dihasilkan selalu berbahasa Indonesia.
- Video penjelasan lewat embed YouTube; bila id video kosong, semua tempat video disembunyikan.
- Jawaban yang sudah diisi di tanya-jawab selalu bisa diubah satu per satu.
- Hasil simulasi bukan keputusan DJP. Keputusan akhir ada di Surat Keputusan atas permohonan WP.

## Brand Commitments

- Nama **LEGA** beserta akronimnya; logo di `lega-logo.png`, ikon PWA dan `og-image.png` sudah ada.
- Suara: tenang, jelas, bisa dipercaya, seperti layanan publik. Bahasa sehari-hari, bukan promosi.
- Wajib tampil jelas: **"Bukan situs resmi DJP"** — alat edukasi independen, hasil bukan keputusan Direktorat Jenderal Pajak.
- Pembuat: Muhammad Widodo Ma'ruf, Edukator Pajak (Instagram, LinkedIn, s.id/widodomaruf). Saran/koreksi lewat email yang tercantum di README.
- Rujukan bantuan resmi: KPP terdaftar atau Kring Pajak 1500200, dan pajak.go.id/psa.

## Evidence on Hand

- Dasar hukum: PMK 71 Tahun 2026 (perubahan PMK 118/2024) dan KEP-239/PJ/2026. Semua angka, persentase, dan tenggat berasal dari keduanya.
- Video penjelasan program PSA dan cara memakai situs (YouTube).
- Catatan versi v.1.0 sampai v.2 di `README.md`.
- **Tidak ada** testimoni, statistik pengguna, jumlah unduhan, atau dukungan resmi DJP. Jangan dikarang.

## Product Principles

1. **Dari cemas ke tindakan.** Setiap hasil berakhir pada langkah konkret: bayar berapa, kapan, dan surat apa.
2. **Regulasi adalah sumber kebenaran.** Tidak ada angka, contoh, atau klaim yang tidak bisa ditelusuri ke PMK 71/2026 atau KEP-239/PJ/2026.
3. **WP awam lebih dulu.** Kedalaman untuk petugas dan konsultan tersedia, tetapi tidak menghalangi alur utama.
4. **Jujur soal batas.** Selalu jelas bahwa ini simulasi independen, dan arahkan ke KPP/Kring Pajak untuk kepastian.
5. **Bisa dipakai di mana saja.** HP maupun laptop, online maupun offline, cetak maupun PDF.

## Accessibility & Inclusion

- Kontras teks minimal 4,5:1 dan garis kontrol minimal 3:1, di tema terang dan gelap.
- Area ketuk minimal 44 px di layar sentuh; semua alur bisa dipakai penuh dengan keyboard.
- Bahasa sederhana untuk pembaca yang tidak paham istilah pajak; istilah pasal dijelaskan di Kamus Pasal.
