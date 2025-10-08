function verificarLogin() {
    // Credenciais: usuário=giovanna, senha=gabriel
    const USUARIO_CORRETO = "giovanna";
    const SENHA_CORRETA = "gabriel";

    // Captura os valores e converte para minúsculas
    const usuarioDigitado = document.getElementById('usuario').value.toLowerCase(); 
    const senhaDigitada = document.getElementById('senha').value.toLowerCase();

    const mensagemErro = document.getElementById('mensagem-erro');

    if (usuarioDigitado === USUARIO_CORRETO && senhaDigitada === SENHA_CORRETA) {
        // 1. SALVA O TEMPO DE REPRODUÇÃO ATUAL NO SESSION STORAGE
        const audio = document.getElementById('audio-player');
        if (audio) {
            sessionStorage.setItem('musicaTempo', audio.currentTime.toString());
            // O ideal seria pausar aqui para não haver ruído na transição, mas o navegador já fará isso.
        }
        
        // 2. Credenciais corretas: Redireciona para o seu arquivo da galeria
        mensagemErro.style.display = 'none';
        window.location.href = "momentos.html"; // Redirecionamento
    } else {
        // Credenciais incorretas: Mostra a mensagem de erro personalizada
        mensagemErro.style.display = 'block';
    }
}

// LÓGICA PARA INICIAR O ÁUDIO NA PRIMEIRA INTERAÇÃO (CLIQUE/TOQUE)
// Esta é a forma mais robusta de garantir o som no index.html.
document.addEventListener('click', () => {
    const audio = document.getElementById('audio-player');
    if (audio && audio.paused) {
        audio.play().catch(e => console.log('Autoplay bloqueado, mas será iniciado no clique:', e));
    }
});

// Tenta iniciar ao carregar, mas o navegador quase sempre bloqueia. O clique acima resolve.
const audioInicial = document.getElementById('audio-player');
if (audioInicial) {
    audioInicial.play().catch(e => console.log('Autoplay bloqueado ao carregar:', e));
}