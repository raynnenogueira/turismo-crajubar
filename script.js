let currentIndex = 0;
const slides = document.querySelectorAll('.carousel img');
const totalSlides = slides.length;
let autoSlideInterval;



// Função para mudar de slide
function showSlide(index) {
    currentIndex = (index + totalSlides) % totalSlides;
    const offset = -currentIndex * 100;
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

// Função para alternar slides automaticamente
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        showSlide(currentIndex + 1);
    }, 3000); // Muda a cada 3 segundos
}

// Funções para avançar ou retroceder o slide
function changeSlide(direction) {
    clearInterval(autoSlideInterval); // Pausa o auto-slide ao clicar nos botões
    showSlide(currentIndex + direction);
    startAutoSlide(); // Reinicia o auto-slide
}

// Adiciona eventos de clique aos botões
function setupNavigationButtons() {
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');

    prevButton.addEventListener('click', () => changeSlide(-1));
    nextButton.addEventListener('click', () => changeSlide(1));
}


// Inicializa o carrossel e os botões de navegação ao carregar a página
window.onload = () => {
    startAutoSlide();
    setupNavigationButtons();
};

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.toggle-menu');
    const menuList = document.querySelector('.menu-secundario ul');

    toggleButton.addEventListener('click', () => {
        // Alterna entre as classes 'hidden' e 'visible'
        menuList.classList.toggle('hidden');
        menuList.classList.toggle('visible');
    });
});

// Google tag (gtag.js) 
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
    
gtag('config', 'G-P577JWSERG');