# DESIGN.md · LEGA Simulasi PSA 2026

Arah desain LEGA. Dibaca sebelum mengubah tampilan, supaya setiap keputusan punya alasan yang tercatat.

## Karakter

Alat bantu pajak untuk Wajib Pajak, petugas, dan konsultan. Nadanya tenang, jelas, dan bisa dipercaya, mirip layanan publik. Bukan halaman promosi.

Dial: ENERGY 1 / RHYTHM 2 / MOTION 1
- ENERGY 1: orang datang dengan surat tagihan di tangan dan sedikit cemas. Tampilan tidak boleh ramai.
- RHYTHM 2: tiap halaman punya bentuk sesuai isinya (tanya-jawab, kalkulator dua kolom, surat dengan pratinjau), tetapi komponennya seragam.
- MOTION 1: gerak hanya untuk hover, ketukan, dan perpindahan halaman. Tidak ada animasi hiasan.

## Warna

| Token | Terang | Gelap | Fungsi |
|---|---|---|---|
| `--band` | #0A3263 | #0A2A52 | Pita atas dan identitas LEGA, navy khas DJP |
| `--yellow` | #F5B800 | #F5B800 | Satu aksen: nama LEGA, tab aktif, tenggat terdekat |
| `--good` | #1A7049 | #63CB9C | Sanksi dihapus 100%, syarat terpenuhi, surat wajib |
| `--gold` / `--gold-ink` | #A87400 / #855C00 | #F5C02E | Potongan 90/75/50%. `--gold-ink` untuk teks dan isi segmen, `--gold` untuk garis |
| `--warn` | #A2501A | #F2A46B | Potongan 25%, perlu perhatian |
| `--bad` | #9C2F29 | #F2908A | Tidak ada potongan, tidak bisa lewat PSA |
| `--ink-3` | #56657D | #8193AE | Teks keterangan. Minimal 4,5:1 di semua latar |
| `--field-line` | #7D8DA5 | #5A6F92 | Garis kotak isian. Minimal 3:1 terhadap kartu |

Hijau, emas, oranye, dan merah adalah satu skala yang artinya "seberapa besar potongan sanksi". Warna-warna ini tidak dipakai sebagai hiasan.

## Huruf

- Helvetica untuk teks dan judul: netral, mirip dokumen resmi, dan sudah terpasang di hampir semua perangkat sehingga tidak perlu diunduh.
- IBM Plex Mono hanya untuk angka (rupiah, tanggal, persen) agar digit sejajar di tabel dan mudah dibandingkan.
- Label kecil memakai huruf biasa yang tebal. Huruf kapital hanya untuk status surat (Wajib/Opsional) dan teks cap persentase.

## Motif identitas

Cap persentase yang miring (`.stamp`) di hasil kalkulator, seperti stempel di surat keputusan. Spasi huruf lebar di bawah angka cap memang disengaja untuk meniru stempel.

## Aturan tetap

- Kontras teks minimal 4,5:1, garis kontrol minimal 3:1, di tema terang maupun gelap.
- Area ketuk minimal 44 px di layar sentuh.
- Semua angka berasal dari PMK 71/2026 dan KEP-239/PJ/2026. Tidak ada statistik atau testimoni karangan.
- Panah → hanya untuk langkah maju di tanya-jawab ("Lanjut", pilihan jawaban, "Cek sanksi saya").
