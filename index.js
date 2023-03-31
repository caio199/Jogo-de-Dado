const botao = document.getElementById("botao");

const pronto = document.getElementById("pronto");

botao.addEventListener("click", () => {

    const numeroAleatorio = Math.floor(Math.random() * 6) + 1;

    pronto.textContent = `O número sorteado foi ${numeroAleatorio}!`;
});


