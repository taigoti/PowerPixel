// Pega os dados do usuário salvos no localStorage
const usuario = JSON.parse(localStorage.getItem("usuario"));

// Se NÃO tiver usuário, volta pro login
if (!usuario) {
  window.location.href = "login.html";
}

// Mostra nome
document.getElementById("nomeUsuario").innerText = "Nome: " + usuario.nome;

// Mostra email
document.getElementById("emailUsuario").innerText = "Email: " + usuario.email;

// Mostra foto
document.getElementById("fotoUsuario").src =
  usuario.foto || "../images/user.png";

// BOTÃO DE LOGOUT
document.getElementById("logout").addEventListener("click", () => {
  // Apaga os dados do usuário
  localStorage.removeItem("usuario");

  // Volta pra página inicial
  window.location.href = "../index.html";
});

// Barra de pesquisa
const pesquisa = document.getElementById("find");

// Quando o usuário digitar
pesquisa.addEventListener("input", () => {
  // Pega o texto digitado e deixa minúsculo
  const valor = pesquisa.value.toLowerCase();

  // Pega todos os cards
  const cards = document.querySelectorAll(".card");

  // Percorre todos os produtos
  cards.forEach((card) => {
    // Pega o nome do produto
    const nomeProduto = card.querySelector("h3").innerText.toLowerCase();

    // Verifica se contém a palavra digitada
    if (nomeProduto.includes(valor)) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
});
