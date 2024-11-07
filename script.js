document.addEventListener("DOMContentLoaded", () => {
  // Executa o código após o carregamento completo do HTML
  const button = document.getElementById("fugitivo"); // Seleciona o botão com o id "fugitivo"
  const container = document.querySelector(".container"); // Seleciona o elemento com a classe "container"

  function getRandomColor() {
    // Função que gera uma cor aleatória
    const letters = "0123456789ABCDEF"; // Possíveis valores para cada dígito hexadecimal da cor
    let color = "#"; // Inicia a cor com o símbolo '#'
    for (let i = 0; i < 6; i++) {
      // Gera 6 dígitos para uma cor hexadecimal
      color += letters[Math.floor(Math.random() * 16)]; // Adiciona um valor aleatório de 0 a F à cor
    }
    return color; // Retorna a cor gerada
  }

  button.addEventListener("mouseover", () => {
    // Evento ativado quando o ponteiro passa sobre o botão
    const containerWidth = container.clientWidth; // Largura visível do container
    const containerHeight = container.clientHeight; // Altura visível do container
    const buttonWidth = button.offsetWidth; // Largura do botão
    const buttonHeight = button.offsetHeight; // Altura do botão

    const randomX = Math.random() * (containerWidth - buttonWidth); // Posição X aleatória dentro do container
    const randomY = Math.random() * (containerHeight - buttonHeight); // Posição Y aleatória dentro do container

    button.style.transform = `translate(${randomX}px, ${randomY}px)`; // Move o botão para a posição aleatória calculada

    button.style.backgroundColor = getRandomColor(); // Altera a cor de fundo do botão para uma cor aleatória
  });
});
