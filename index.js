// Scroll suave
function scrollToSection() {
    document.getElementById("sobre").scrollIntoView({
        behavior: "smooth"
    });
}
  
// Accordion
const accordions = document.querySelectorAll(".accordion");
accordions.forEach(btn => {
    btn.addEventListener("click", () => {
        const panel = btn.nextElementSibling;
        panel.style.display = panel.style.display === "block" ? "none" : "block";
    });
});

// Formulário
const imagem = document.getElementById('imagem-galeria');
const btnProximo = document.getElementById('btn-proximo');
const btnAnterior = document.getElementById('btn-anterior');

const galeria = [
    "",
    "",
    "",
    "",
    "",
    "",
    ""  
];

let indiceAtual = 0;

function atualizarGaleria() {
    imagem.src = galeria[indiceAtual];
}

btnProximo.addEventListener('click', function() {
    indiceAtual = (indiceAtual + 1) % galeria.length;
    atualizarGaleria();
});

btnAnterior.addEventListener('click', function() {
    indiceAtual = (indiceAtual - 1 + galeria.length) % galeria.length;
    atualizarGaleria();
});

atualizarGaleria();

// Carrossel
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
  
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
          slide.classList.add("active");
        }
    });
}
  
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}
  
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}
  
// deixa funções globais (pra funcionar no onclick)
window.nextSlide = nextSlide;
window.prevSlide = prevSlide;