// Pega o formulário de login
const form = document.getElementById("formLogin");


// Evento quando clicar em Entrar
form.addEventListener("submit", function(event){

    // Impede a página de recarregar
    event.preventDefault();

    // Pega os dados digitados
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    // Pega a foto escolhida
    const arquivo = document.getElementById("fotoPerfil").files[0];


    // Função que salva o usuário
    function salvarUsuario(fotoBase64 = ""){

        const usuario = {

            nome: nome,
            email: email,
            foto: fotoBase64

        };

        // Salva no localStorage
        localStorage.setItem(
            "usuario",
            JSON.stringify(usuario)
        );


        // LOGIN ADMIN
        if(email === "admin@powerpixel.com" && senha === "1234"){
            window.location.href = "admin.html";

        }

        // LOGIN USUÁRIO NORMAL
        else{
            window.location.href = "perfil.html";

        }

    }


    // Se o usuário escolheu foto
    if(arquivo){
        const reader = new FileReader();
        reader.onload = function(){
            salvarUsuario(reader.result);

        };
        reader.readAsDataURL(arquivo);

    }

    // Se não escolheu foto
    else{
        salvarUsuario();

    }

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
        const nomeProduto = card
            .querySelector("h3")
            .innerText
            .toLowerCase();

        // Verifica se contém a palavra digitada
        if(nomeProduto.includes(valor)){

            card.style.display = "flex";

        } else {

            card.style.display = "none";

        }

    });

});