// Pega o formulário de login
const form = document.getElementById("formLogin");
const fotoPerfil = document.getElementById("fotoPerfil");
const imgSalva = document.getElementById("imgSalva");
const tiposImagemPermitidos = ["image/jpeg", "image/png", "image/webp"];
let fotoSelecionadaBase64 = "";

fotoPerfil.addEventListener("change", () => {
    const arquivo = fotoPerfil.files[0];

    if(!arquivo){
        fotoSelecionadaBase64 = "";
        imgSalva.innerHTML = "<span>Nenhuma imagem selecionada</span>";
        return;
    }

    if(!tiposImagemPermitidos.includes(arquivo.type)){
        fotoSelecionadaBase64 = "";
        fotoPerfil.value = "";
        imgSalva.innerHTML = "<span>Arquivo invalido</span>";
        alert("Escolha uma imagem nos formatos .jpg, .png ou .webp.");
        return;
    }

    const reader = new FileReader();

    reader.onload = function(){
        fotoSelecionadaBase64 = reader.result;
        imgSalva.innerHTML = "";

        const preview = document.createElement("img");
        preview.src = fotoSelecionadaBase64;
        preview.alt = "Preview da foto de perfil";

        imgSalva.appendChild(preview);
    };

    reader.readAsDataURL(arquivo);
});


// Evento quando clicar em Entrar
form.addEventListener("submit", function(event){

    // Impede a página de recarregar
    event.preventDefault();

    // Pega os dados digitados
    const nomeInput = document.getElementById("nome");
    const emailInput = document.getElementById("email");
    const senhaInput = document.getElementById("senha");
    const aviso = document.getElementById("loginAviso");
    const campos = [nomeInput, emailInput, senhaInput];
    const camposVazios = campos.filter((campo) => campo.value.trim() === "");

    campos.forEach((campo) => campo.classList.remove("campo-invalido"));

    if(camposVazios.length > 0){
        camposVazios.forEach((campo) => campo.classList.add("campo-invalido"));
        aviso.innerText = "Preencha todos os campos para continuar.";
        alert("Preencha todos os campos para continuar.");
        camposVazios[0].focus();
        return;
    }

    if(!emailInput.checkValidity()){
        emailInput.classList.add("campo-invalido");
        aviso.innerText = "Informe um e-mail valido.";
        alert("Informe um e-mail valido.");
        emailInput.focus();
        return;
    }

    aviso.innerText = "";

    const nome = nomeInput.value.trim();
    const email = emailInput.value.trim();
    const senha = senhaInput.value;

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


    salvarUsuario(fotoSelecionadaBase64);

});

// Barra de pesquisa
const pesquisa = document.getElementById("find");

// Quando o usuário digitar
if(pesquisa){
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
}
