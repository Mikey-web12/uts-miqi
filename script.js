//Saya belum mengeksplore lebih banyak mengenai JavaScript, tetapi saya memberikan beberapa interaksi yang sesuai dengan website saya
// Script ini untuk menopang dalam html kontak yaitu pada kolom name, email, messagE
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.querySelector("#contact-form form");
    
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Ambil nilai dari input
        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const message = document.querySelector("#message").value;

        // Bagian ini memvalidasi sederhana bagaimana jika ada satu kolom yang tidak terisi
        if (name === "" || email === "" || message === "") {
            alert("Semua kolom harus diisi!");
            return;
        }

        // Simulasi pengiriman formulir
        alert("Pesanmu Berhasil Dikirim, Terima Kasih Sudah Sharing!.");
        // Kosongkan form setelah submit
        contactForm.reset();
    });
});

// Saya menambahkan Slide Show Banner agar lebih menarik dan interaktif bagi mata pengunjung
let currentSlide = 0;
const slides = [
    {
        image: '/utsmiqi/img/genshin.jpg',
        text: 'Explore the Fantasy World of Teyvat in Genshin Impact'
    },
    {
        image: '/utsmiqi/img/hsr.jpg',
        text: 'Embark on a Cosmic Odyssey, Rewrite the Stars!'
    },
    {
        image: '/utsmiqi/img/zzz.png',
        text: 'Survive in the Chaos of Zenless Zone Zero'
    },
    {
        image: '/utsmiqi/img/hi.png',
        text: 'Join the Valkyries in Honkai Impact 3rd'
    }, 
];

const banner = document.getElementById('banner');
const bannerText = banner.querySelector('p');

function showSlide(index) {
    banner.style.backgroundImage = `url(${slides[index].image})`;
    bannerText.textContent = slides[index].text;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 5000); // buat gonta - ganti slide setiap 5 detik

document.addEventListener("DOMContentLoaded", () => {
    const sidebarLinks = document.querySelectorAll(".sidebar ul li a");

    // Highlight tautan aktif
    sidebarLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            sidebarLinks.forEach(l => l.classList.remove("active"));
            e.target.classList.add("active");
        });
    });
});



