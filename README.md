# Simulasi PSA 2026

Kalkulator simulasi **Pengurangan atau Penghapusan Sanksi Administratif (PSA)** untuk Wajib Pajak, berdasarkan **PMK 71 Tahun 2026** dan **KEP-239/PJ/2026**.

Situs ini membantu Wajib Pajak memahami program PSA. Pengguna bisa melihat skema yang berlaku untuk surat yang dipegang, berapa sanksi yang bisa dihapus atau dikurangi, dan sampai kapan harus bertindak agar mendapat persentase terbaik.

> **Bukan situs resmi DJP.** Situs ini alat edukasi independen. Hasil simulasi bukan keputusan Direktorat Jenderal Pajak. Hasil akhir ditentukan dalam Surat Keputusan atas permohonan Wajib Pajak.

## Fitur

- **Cek Kluster Saya (halaman awal).** Tanya-jawab singkat sesuai surat yang dipegang Wajib Pajak, lalu langsung diarahkan ke skenario kalkulator yang tepat.
- **Kalkulator per kluster.** Ada 4 kluster sesuai Tabel A–D Lampiran KEP-239/PJ/2026, dengan total 19 skenario:
  - Pengawasan
  - Pemeriksaan
  - Penagihan
  - Basis Data
- **Simulasi dengan contoh resmi.** Setiap skenario terbuka dalam keadaan terisi contoh kasus dari Lampiran E KEP. Pengguna langsung melihat hasilnya, lalu tinggal mengganti angka dan tanggal sesuai suratnya.
- **Jadwal pengurangan.** Berupa garis waktu dan tabel yang menunjukkan persentase di tiap periode, berapa yang harus disetor, dan berapa yang dihemat.
- **Ceklist syarat umum.** Mencakup Pasal 23 dan 24 PMK 118/2024 s.t.d.d. PMK 71/2026, serta Diktum KETIGA dan KEEMPAT KEP-239.
- **Generator surat pernyataan.** Membuat surat sesuai Lampiran F (tidak mengajukan gugatan) dan Lampiran G (sanksi timbul karena kekhilafan), lengkap dengan tombol salin teks.
- **Kamus pasal sanksi.** Setiap pasal ditautkan ke skenario yang relevan.
- **Hitung mundur tenggat program.**
- **Tampilan menyesuaikan perangkat.** Di PC memakai tab di atas; di HP memakai menu di bagian bawah (Cek Kluster · Hitung · Syarat · Surat · Lainnya).
- Mendukung mode terang maupun gelap.

## Pola penghitungan

Seluruh baris di Tabel A–D KEP-239 diturunkan ke enam pola:

| Pola | Aturan | Dipakai untuk |
|---|---|---|
| Kalender (lapor/bayar SPT) | 100% s.d. 31 Des 2026 · 50% s.d. 31 Mar 2027 · 25% s.d. 30 Jun 2027 | Diktum a, b, c |
| Kalender (pelunasan pokok/utang) | Periode sama dengan pola di atas | Diktum e dan f (Pasal 19, PBB) |
| Relatif terhadap tanggal terbit | 100% ≤1 bulan · 50% ≤2 bulan · 25% sesudahnya | Pasal 14 ayat (3), PPS |
| Relatif + pengecualian 31 Des | Seperti pola relatif, ditambah surat yang terbit s.d. 31 Des 2026 tetap 100% bila lunas s.d. 31 Des 2026 | SKP hasil pemeriksaan |
| Bayar sebagian, kalender | Bayar 10% s.d. 31 Des 2026 → 90% · bayar 25% s.d. 30 Jun 2027 → 75% | Surat terbit sebelum 8 Okt 2026 |
| Bayar sebagian, relatif | Bayar 10% ≤1 bulan setelah STP terbit (atau s.d. 31 Des 2026) → 90% · bayar 25% sesudahnya → 75% | STP terbit mulai 8 Okt 2026 |

Aturan lain yang diterapkan:

- Pengurangan hanya atas sanksi yang **belum dibayar** (Diktum KEEMPAT huruf d).
- Pembayaran atas SKP diperhitungkan ke **pokok dulu**, kelebihannya baru ke sanksi (Pasal 23 ayat (6)–(7)).

## Pengujian

Kalkulator diuji terhadap **114 contoh kasus** di Lampiran E KEP-239/PJ/2026. Hasilnya **113 sama persis**.

Satu yang berbeda adalah kasus PPS di Lampiran E angka 4.b Contoh 1. Di contoh itu KEP memberi 25% untuk pelunasan 1 Maret 2027 atas SKPKB yang terbit 1 Januari 2027. Padahal menurut tabel KEP sendiri, tanggal itu masih "paling lambat 2 bulan" (50%). Kalkulator mengikuti tabel, dan catatan ini ditampilkan di halaman Tentang.

### Catatan interpretasi

- **"1 bulan setelah terbit"** dihitung sampai tanggal yang sama di bulan berikutnya (terbit 16 Des → batas 16 Jan). Ini sesuai contoh KEP. Bila surat terbit pada tanggal terakhir bulan, batasnya tanggal terakhir bulan berikutnya.
- **Basis Data:** bila tanggal daftar dan tanggal lapor SPT jatuh di periode berbeda, persentase mengikuti tanggal yang lebih akhir, sesuai Lampiran E angka 4.a.
- **Tidak tercakup KEP:**
  - STP Pasal 14 ayat (3) yang terbit sebelum 8 Okt 2026.
  - STP Pasal 19 ayat (3) yang pokoknya baru dilunasi setelah 31 Des 2026.

## Memperbarui isi

Semua aturan skenario ada dalam satu objek di bagian skrip `index.html`. Cari `var SC = [`. Setiap skenario memuat:

- `pattern`: pola penghitungan
- `windowT`: syarat tanggal terbit
- `syarat`: persyaratan khusus yang ditampilkan
- `contoh`: cerita, nilai awal, dan tanggal yang bisa dicoba

Bila DJP merevisi ketentuan, cukup ubah objek tersebut. Tanggal tenggat program ada di baris awal mesin hitung: `START`, `D31`, `M31`, `J30`, `DEC27`, dan `BATAS_PERMOHONAN`.

## Dasar hukum

- [PMK 71 Tahun 2026](https://pajak.go.id/peraturan/perubahan-atas-peraturan-menteri-keuangan-nomor-118-tahun-2024-tentang-tata-cara) tentang Perubahan atas PMK 118 Tahun 2024 (Pasal 27A).
- KEP-239/PJ/2026 tentang Kebijakan Perpajakan sehubungan dengan Pengurangan atau Penghapusan Sanksi Administratif (ditetapkan 8 Oktober 2026).
- Ringkasan resmi DJP: [pajak.go.id/psa](https://pajak.go.id/psa)

Untuk kepastian atas kasus tertentu, hubungi KPP terdaftar atau Kring Pajak **1500200**.

## Saran dan koreksi

Ada saran, koreksi, atau menemukan hasil hitung yang janggal? Kirim email ke **hi.widodomaruf@gmail.com**.

## Pembuat

Dibuat oleh **Muhammad Widodo Ma'ruf**, Edukator Pajak.
Instagram & YouTube: [@widodomaruf](https://www.instagram.com/widodomaruf) · Pertanyaan: hi.widodomaruf@gmail.com

© 2026 Muhammad Widodo Ma'ruf. Alat edukasi independen, bukan situs resmi atau keputusan Direktorat Jenderal Pajak.
