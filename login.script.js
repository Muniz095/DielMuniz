function verificarLogin() {
    // Credenciais: usuário=giovanna, senha=gabriel
    const USUARIO_CORRETO = "giovanna";
    const SENHA_CORRETA = "gabriel";

    // Captura os valores e converte para minúsculas
    const usuarioDigitado = document.getElementById('usuario').value.toLowerCase(); 
    const senhaDigitada = document.getElementById('senha').value.toLowerCase();

    const mensagemErro = document.getElementById('mensagem-erro');

    if (usuarioDigitado === USUARIO_CORRETO && senhaDigitada === SENHA_CORRETA) {
        // Credenciais corretas: Redireciona para o seu arquivo da galeria
        mensagemErro.style.display = 'none';
        window.location.href = "momentos.html"; // Redirecionamento
    } else {
        // Credenciais incorretas: Mostra a mensagem de erro personalizada
        mensagemErro.style.display = 'block';
    }
}