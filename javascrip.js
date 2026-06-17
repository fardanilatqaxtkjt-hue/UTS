// Logika Global Menghilangkan Layar Preloader Ketika Aset Selesai Dimuat Browser
window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        // Efek memudar halus
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.visibility = 'hidden';
        }, 600); // Sinkronisasi transisi waktu CSS
    }
});
// ==========================================
// PRELOADER - Berlaku untuk semua halaman
// ==========================================
window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => { preloader.style.visibility = 'hidden'; }, 400);
    }
});

// ==========================================
// BOOK-TOUR FORM
// ==========================================
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const nama      = document.getElementById('inputNama').value.trim();
        const phone     = document.getElementById('inputPhone').value.trim();
        const paket     = document.getElementById('inputPackage').value;
        const penumpang = document.getElementById('inputPassenger').value;

        if (!nama) {
            Swal.fire({ icon: 'error', title: 'Gagal!', text: 'Harap isi Nama Lengkap Anda!' });
        } else if (!phone) {
            Swal.fire({ icon: 'error', title: 'Gagal!', text: 'Harap isi Nomor Telepon Anda!' });
        } else if (!paket) {
            Swal.fire({ icon: 'error', title: 'Gagal!', text: 'Harap pilih Paket Perjalanan!' });
        } else if (!penumpang || penumpang < 1) {
            Swal.fire({ icon: 'error', title: 'Gagal!', text: 'Harap isi Jumlah Penumpang!' });
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Pemesanan Berhasil!',
                text: 'Paket perjalanan Anda berhasil dipesan! Tim kami akan segera menghubungi Anda.',
                confirmButtonColor: '#51bbd8'
            });
            bookingForm.reset();
        }
    });
}

// ==========================================
// CONTACT FORM
// ==========================================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const nama  = document.getElementById('inputContactName').value.trim();
        const email = document.getElementById('inputContactEmail').value.trim();
        const pesan = document.getElementById('inputContactMsg').value.trim();

        if (!nama || !email || !pesan) {
            Swal.fire({ icon: 'error', title: 'Gagal!', text: 'Semua field harus diisi!' });
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Pesan Terkirim!',
                text: 'Pesan Anda telah terkirim ke Customer Representative kami!',
                confirmButtonColor: '#51bbd8'
            });
            contactForm.reset();
        }
    });
}

// ==========================================
// SIGN IN FORM
// ==========================================
const signinForm = document.getElementById('signinForm');
if (signinForm) {
    signinForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email    = document.getElementById('inputEmail').value.trim();
        const password = document.getElementById('inputPassword').value;

        if (!email || !password) {
            Swal.fire({ icon: 'error', title: 'Gagal!', text: 'Email dan Password tidak boleh kosong!' });
        } else if (password.length < 6) {
            Swal.fire({ icon: 'error', title: 'Gagal!', text: 'Password minimal 6 karakter!' });
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Login Berhasil!',
                text: 'Mengalihkan ke dashboard...',
                confirmButtonColor: '#51bbd8',
                timer: 2000,
                showConfirmButton: false
            });
            // window.location.href = 'index.html';
        }
    });
}
