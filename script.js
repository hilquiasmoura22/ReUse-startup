// Função para rolagem suave ao clicar nos botões/links
function scrollPara(id) {
    const elemento = document.querySelector(id);
    elemento.scrollIntoView({
        behavior: 'smooth'
    });
}

// Interatividade nos botões de navegação
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if(this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            scrollPara(this.getAttribute('href'));
        }
    });
});

// Mensagem de boas-vindas no console para confirmar carregamento
console.log("Site da ReUse carregado com sucesso! Iniciando ciclo de economia circular.");
// O código que você já tem para rolagem suave funcionará 
// automaticamente com o <a href="#cadastro">
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});