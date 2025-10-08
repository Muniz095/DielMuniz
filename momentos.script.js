document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // INÍCIO DA NOVA LÓGICA DE ÁUDIO
    // ----------------------------------------------------
    const audioPlayer = document.getElementById('audio-player');
    
    // Função para tentar reproduzir o áudio
    function tentarReproduzir() {
        // play() retorna uma Promise que pode falhar se o autoplay for bloqueado
        audioPlayer.play().catch(error => {
            // Em caso de falha, não fazemos nada, pois o listener de clique continuará ativo.
        });
    }

    // Tenta reproduzir imediatamente. Se falhar, o listener abaixo atuará.
    tentarReproduzir();

    // Adiciona um listener de clique no corpo do documento
    // O "{ once: true }" garante que esta função será executada SOMENTE UMA VEZ.
    document.body.addEventListener('click', tentarReproduzir, { once: true });
    // ----------------------------------------------------
    // FIM DA NOVA LÓGICA DE ÁUDIO
    // ----------------------------------------------------

    // Lógica existente de inicialização do slideshow (permanece inalterada)
    let slideshows = document.querySelectorAll('.slideshow-container');
    slideshows.forEach((container) => {
        let slides = container.querySelectorAll('.slide');
        if (slides.length > 0) {
            slides[0].style.display = 'block';
            let bolinhasContainer = container.nextElementSibling;
            if (bolinhasContainer) {
                let bolinhas = bolinhasContainer.querySelectorAll('.bolinha');
                if (bolinhas.length > 0) {
                    bolinhas[0].classList.add('ativa');
                }
            }
        }
    });
});

function mudarFoto(elemento, n) {
    let slideshowContainer = elemento.parentElement;
    let slides = slideshowContainer.querySelectorAll('.slide');
    let bolinhasContainer = slideshowContainer.nextElementSibling;
    
    let bolinhas = [];
    if (bolinhasContainer) {
        bolinhas = bolinhasContainer.querySelectorAll('.bolinha');
    }
    
    let currentIndex = 0;
    for(let i = 0; i < slides.length; i++) {
        if(slides[i].style.display === 'block') {
            currentIndex = i;
            break;
        }
    }

    let newIndex = currentIndex + n;

    if (newIndex >= slides.length) {
        newIndex = 0;
    }
    if (newIndex < 0) {
        newIndex = slides.length - 1;
    }

    mostrarFotos(slideshowContainer, newIndex + 1);
}

function fotoAtual(elemento, n) {
    let slideshowContainer = elemento.parentElement.previousElementSibling;
    mostrarFotos(slideshowContainer, n);
}

function mostrarFotos(slideshowContainer, n) {
    let slides = slideshowContainer.querySelectorAll('.slide');
    let bolinhasContainer = slideshowContainer.nextElementSibling;

    let bolinhas = [];
    if (bolinhasContainer) {
        bolinhas = bolinhasContainer.querySelectorAll('.bolinha');
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < bolinhas.length; i++) {
        bolinhas[i].classList.remove("ativa");
    }

    if (slides[n - 1]) {
        slides[n - 1].style.display = "block";
    }
    if (bolinhas[n - 1]) {
        bolinhas[n - 1].classList.add("ativa");
    }
}