function animarPhoto() {
    let circuloPhoto = document.querySelector(".circulo-progresso-photo");
    let valorPhoto = document.querySelector(".valor-photo");

    let valorInicialPhoto = 0;
    let valorFinalPhoto = 40;

    let progressoPhoto = setInterval(() => {
        valorInicialPhoto++;
        valorPhoto.textContent = `${valorInicialPhoto}%`;
        circuloPhoto.style.background = `conic-gradient(#3A5C4F ${valorInicialPhoto * 3.6}deg, #F5F1EB 0deg)`;

        if (valorInicialPhoto === valorFinalPhoto) {
            clearInterval(progressoPhoto);
        }
    }, 50);
}

// Criar o observador
const observerPhoto = new IntersectionObserver((entriesPhoto, observerPhoto) => {
    entriesPhoto.forEach(entryPhoto => {
        if (entryPhoto.isIntersecting) {
            animarPhoto(); // Chama a animação apenas quando aparecer na tela
            observerPhoto.unobserve(entryPhoto.target); // Para não repetir a animação
        }
    });
}, { threshold: 0.5 }); // 50% do elemento precisa estar visível

// Iniciar observação
observerPhoto.observe(document.getElementById('dominio'));
