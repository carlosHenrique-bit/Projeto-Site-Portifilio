function animarIllustrator() {
    let circuloIllustrator = document.querySelector(".circulo-progresso-illustrator");
    let valorIllustrator = document.querySelector(".valor-illustrator");

    let valorInicialIllustrator = 0;
    let valorFinalIllustrator = 60;

    let progressoIllustrator = setInterval(() => {
        valorInicialIllustrator++;
        valorIllustrator.textContent = `${valorInicialIllustrator}%`;
        circuloIllustrator.style.background = `conic-gradient(#3A5C4F ${valorInicialIllustrator * 3.6}deg, #F5F1EB 0deg)`;

        if (valorInicialIllustrator === valorFinalIllustrator) {
            clearInterval(progressoIllustrator);
        }
    }, 50);
}

// Criar o observador
const observerIllustrator = new IntersectionObserver((entriesIllustrator, observerIllustrator) => {
    entriesIllustrator.forEach(entryIllustrator => {
        if (entryIllustrator.isIntersecting) {
            animarIllustrator(); // Chama a animação apenas quando aparecer na tela
            observerIllustrator.unobserve(entryIllustrator.target); // Para não repetir a animação
        }
    });
}, { threshold: 0.5 }); // 50% do elemento precisa estar visível

// Iniciar observação
observerIllustrator.observe(document.getElementById('dominio'));
