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
    "img/Faixa Etária.png",
    "img/Opinião Sobre Arte.png",
    "img/Escolaridade.png",
    "img/Visão Profissional.png",
    "img/Opinião Sobre Uso da Arte.png",
    "img/Uso da Arte.png",
    "img/Frequência Uso da Arte.png",
    "img/Eventos.png",
    "img/Divulgação.png",
    "img/Compra de Arte.png",
    "img/Compra de Arte2.png",
    "img/Valorização da Arte.png",
    "img/Remuneração.png",
    "img/Contribuição.png",
    "img/Desvalorização.png",
    "img/Valorização2.png",
    "img/Importância.png",
    "img/Sugestões.png",
    "img/Visão Geral.png"
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

// Estilo

const descricoes = {
    "verde-oliva": {
        titulo: "Verde Oliva Suave",
        texto: "Escolhemos essa cor base porque representa equilíbrio, natureza e tranquilidade. Seu tom levemente envelhecido reforça a estética vintage e transmite uma sensação acolhedora e artística."
    },

    "verde-salvia": {
        titulo: "Verde Sálvia Claro",
        texto: "Esse tom de verde mais claro traz leveza e suavidade para a identidade visual. A tonalidade delicada ajuda a criar uma atmosfera calma e clássica, muito presente em estilos vintage como nossa aplicação."
    },

    "terracota": {
        titulo: "Terracota Suave",
        texto: "Esse tom mais escuro é o ponto de destaque da nossa paleta, transmitindo energia e inspiração. O tom terroso mantém a proposta vintage da aplicação sem criar contraste excessivo."
    },

    "branco-creme": {
        titulo: "Branco Creme",
        texto: "Essa cor substitui o branco puro por um tom mais quente e aconchegante, lembrando papel antigo e elementos retrô, além de manter a leveza do design."
    },

    "pessego": {
        titulo: "Pêssego Queimado",
        texto: "Essa cor traz calor e personalidade sem perder a suavidade. Reforça o lado criativo e artesanal da identidade, contrastando com os tons de verde."
    },

    "bege": {
        titulo: "Bege Pêssego Claro",
        texto: "Essa cor suave adiciona conforto e delicadeza à paleta. Seu aspecto contribui para uma aparência elegante e harmoniosa do projeto."
    }
};

const circulos = document.querySelectorAll(".circulo");
const descricao = document.getElementById("descricao-cor");

circulos.forEach(circulo => {
    circulo.addEventListener("click", () => {
        const cor = descricoes[circulo.dataset.cor];

        descricao.innerHTML = `
            <h3>${cor.titulo}</h3>
            <p>${cor.texto}</p>
        `;
    });
});