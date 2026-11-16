# CLAUDE.md · LEGA (Simulasi PSA 2026)

Situs statis satu berkas (`index.html`), dideploy Vercel dari branch `main`. Lihat `PRODUCT.md` untuk konteks produk dan `DESIGN.md` bila ada.

## Aturan rilis

Setiap kali versi naik, atau ada perubahan isi yang terlihat pengguna (aturan PSA, skenario, syarat, surat, tenggat, FAQ, kontak), perbarui juga:

1. `knowledge/lega-kb.md`: basis pengetahuan untuk chatbot. Ubah `versi_situs` dan `diperbarui` di frontmatter, bagian yang isinya berubah, dan bagian "Catatan versi". Bagian "Skenario per kluster" harus sama dengan `PSA.SC` di `index.html` (judul, pasal, diktum, syarat, contoh resmi).
2. Catatan versi di halaman Tentang (`index.html`) dan di `README.md`.
3. `VERSI` di `sw.js`, agar aplikasi yang sudah terpasang mengambil berkas baru.
4. Kamus bahasa Inggris `window.LEGA_EN` di `index.html` untuk teks baru yang tampil di layar.
