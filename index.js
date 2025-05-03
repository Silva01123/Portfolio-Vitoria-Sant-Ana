// Seleciona todos os links do menu que começam com "#"
const linksInternos = document.querySelectorAll('a[href^="#"]');

// Para cada link encontrado
linksInternos.forEach(link => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Impede o comportamento padrão do link (que é pular direto)

    const id = link.getAttribute("href"); // Pega o valor do href (ex: "#sobre")
    const destino = document.querySelector(id); // Seleciona o elemento que tem o id correspondente

    // Faz o navegador rolar suavemente até o destino
    destino.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

// SCROLL SUAVE: este código faz com que, ao clicar em um link do menu que leva a uma seção da mesma página (ex: #sobre),
// o site role suavemente até essa seção, ao invés de pular de forma brusca.



// Seleciona o botão e o body
const botaoTema = document.getElementById('botao-tema');
const corpoPagina = document.body;

// Escuta o clique no botão
botaoTema.addEventListener('click', function() {
  corpoPagina.classList.toggle('tema-escuro');
});

// ALTERAR TEMA: este código adiciona ou remove a classe 'tema-escuro' no <body> ao clicar no botão com ID 'botao-tema'.
