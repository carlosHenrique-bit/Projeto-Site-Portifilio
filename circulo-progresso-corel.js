function animarCorel() {
    let circuloCorel = document.querySelector(".circulo-progresso-corel");
    let valorCorel = document.querySelector(".valor-corel");

    let valorInicialCorel = 0;
    let valorFinalCorel = 95;

    let progressoCorel = setInterval(() => {
        valorInicialCorel++;
        valorCorel.textContent = `${valorInicialCorel}%`;
        circuloCorel.style.background = `conic-gradient(#3A5C4F ${valorInicialCorel * 3.6}deg, #F5F1EB 0deg)`;

        if (valorInicialCorel === valorFinalCorel) {
            clearInterval(progressoCorel);
        }
    }, 50);
}

// Criar o observador
const observerCorel = new IntersectionObserver((entriesCorel, observerCorel) => {
    entriesCorel.forEach(entryCorel => {
        if (entryCorel.isIntersecting) {
            animarCorel(); // Chama a animação apenas quando aparecer na tela
            observerCorel.unobserve(entryCorel.target); // Para não repetir a animação
        }
    });
}, { threshold: 0.5 }); // 50% do elemento precisa estar visível

// Iniciar observação
observerCorel.observe(document.querySelector('.dominio'));
