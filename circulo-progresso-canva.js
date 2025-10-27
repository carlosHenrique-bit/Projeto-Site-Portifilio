function animarCanva() {
    let circuloCanva = document.querySelector(".circulo-progresso-canva");
    let valorCanva = document.querySelector(".valor-canva");

    let valorInicialCanva = 0;
    let valorFinalCanva = 96;

    let progressoCanva = setInterval(() => {
        valorInicialCanva++;
        valorCanva.textContent = `${valorInicialCanva}%`;
        circuloCanva.style.background = `conic-gradient(#3A5C4F ${valorInicialCanva * 3.6}deg, #F5F1EB 0deg)`;

        if (valorInicialCanva === valorFinalCanva) {
            clearInterval(progressoCanva);
        }
    }, 50);
}

// Criar o observador
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animarCanva(); // Chama a animação apenas quando aparecer na tela
            observer.unobserve(entry.target); // Para não repetir a animação
        }
    });
}, { threshold: 0.5 }); // 50% do elemento precisa estar visível

// Iniciar observação
observer.observe(document.querySelector('.dominio'));
