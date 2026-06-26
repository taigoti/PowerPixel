// ── Carrega e valida sessão ───────────────────────────────────
const usuario = JSON.parse(localStorage.getItem("usuario"));

if (!usuario) {
  window.location.href = "login.html";
}

// ── Elementos da view de dados ────────────────────────────────
const elNome       = document.getElementById("nomeUsuario");
const elEmail      = document.getElementById("emailUsuario");
const elFoto       = document.getElementById("fotoUsuario");
const perfilBody   = document.querySelector(".perfil-body");

// ── Elementos do formulário de edição ─────────────────────────
const form         = document.getElementById("formEditarPerfil");
const inputNome    = document.getElementById("editarNome");
const inputEmail   = document.getElementById("editarEmail");
const inputFoto    = document.getElementById("editarFoto");
const preview      = document.getElementById("previewEditarFoto");
const aviso        = document.getElementById("perfilAviso");

// ── Exibe dados atuais ────────────────────────────────────────
function exibirDados() {
  elNome.innerText  = "Nome: "  + usuario.nome;
  elEmail.innerText = "Email: " + usuario.email;
  elFoto.src        = usuario.foto || "../images/user.png";
}

exibirDados();

// ── Abre formulário de edição ─────────────────────────────────
document.getElementById("editarConta").addEventListener("click", () => {
  // Pré-preenche campos com dados atuais
  inputNome.value  = usuario.nome  || "";
  inputEmail.value = usuario.email || "";
  preview.src      = usuario.foto  || "../images/user.png";

  // Limpa aviso e arquivo selecionado anteriormente
  aviso.textContent = "";
  aviso.className   = "perfil-aviso";
  inputFoto.value   = "";

  // Ativa modo edição
  perfilBody.classList.add("editing");
  form.removeAttribute("aria-hidden");
  inputNome.focus();
});

// ── Cancela edição ────────────────────────────────────────────
document.getElementById("btnCancelar").addEventListener("click", () => {
  perfilBody.classList.remove("editing");
  form.setAttribute("aria-hidden", "true");
});

// ── Preview da nova foto em tempo real ────────────────────────
inputFoto.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (ev) => { preview.src = ev.target.result; };
  reader.readAsDataURL(file);
});

// ── Salva alterações ──────────────────────────────────────────
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const novoNome  = inputNome.value.trim();
  const novoEmail = inputEmail.value.trim();

  if (!novoNome || !novoEmail) {
    aviso.textContent = "Preencha todos os campos.";
    aviso.className   = "perfil-aviso erro";
    return;
  }

  // Se houver nova foto, lê como base64 antes de salvar
  if (inputFoto.files[0]) {
    const reader = new FileReader();
    reader.onload = (ev) => salvarDados(novoNome, novoEmail, ev.target.result);
    reader.readAsDataURL(inputFoto.files[0]);
  } else {
    salvarDados(novoNome, novoEmail, usuario.foto || null);
  }
});

function salvarDados(nome, email, foto) {
  // Atualiza o objeto e persiste
  usuario.nome  = nome;
  usuario.email = email;
  if (foto) usuario.foto = foto;
  localStorage.setItem("usuario", JSON.stringify(usuario));

  // Atualiza a view sem recarregar
  exibirDados();

  // Feedback de sucesso
  aviso.textContent = "✓ Alterações salvas!";
  aviso.className   = "perfil-aviso sucesso";

  // Fecha o formulário após 1 segundo
  setTimeout(() => {
    perfilBody.classList.remove("editing");
    form.setAttribute("aria-hidden", "true");
  }, 1000);
}

// ── Logout ────────────────────────────────────────────────────
document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("usuario");
  window.location.href = "../index.html";
});
