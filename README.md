# ⚡ PowerPixel

> Loja virtual de periféricos, eletrônicos para PC, jogos e gift cards.

---

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias](#tecnologias)
- [Estrutura de Diretórios](#estrutura-de-diretórios)
- [Fluxos de Navegação](#fluxos-de-navegação)
- [Como Executar](#como-executar)
- [Páginas](#páginas)
- [Convenções](#convenções)
- [Melhorias Futuras](#melhorias-futuras)

---

## Sobre o Projeto

A **PowerPixel** é uma loja virtual focada no público gamer e entusiasta de tecnologia. O projeto é uma aplicação frontend estática que oferece navegação por produtos, gerenciamento de carrinho e autenticação de usuário.

**Categorias disponíveis:**
- 🖱️ Periféricos (teclados, mouses, headsets)
- 🖥️ Eletrônicos para PC (hardware e acessórios)
- 🎮 Jogos
- 🎁 Gift Cards

---

## Tecnologias

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura e semântica das páginas |
| CSS3 | Estilização e layout responsivo |
| JavaScript (Vanilla) | Interatividade e manipulação do DOM |

> Projeto frontend estático, sem dependências externas ou frameworks. Não requer instalação de pacotes.

---

## Estrutura de Diretórios

```
powerpixel/
│
├── index.html              # Página inicial (home)
│
├── pages/                  # Páginas internas
│   ├── produtos.html       # Listagem de produtos
│   ├── carrinho.html       # Carrinho de compras
│   ├── checkout.html       # Finalização de compra
│   └── login.html          # Login / perfil do usuário
│
├── css/                    # Estilos
│   └── style.css           # Folha de estilos principal
│
└── images/                 # Recursos visuais
    ├── teclado.jpg         # Imagem — Teclado Gamer
    ├── mouse.jpg           # Imagem — Mouse RGB
    ├── giftcard.jpg        # Imagem — Gift Card
    └── user.png            # Ícone de usuário
```

---

## Fluxos de Navegação

### 🛒 Fluxo de Compra

```
Home (index.html)
  └── Produtos (pages/produtos.html)
        └── Carrinho (pages/carrinho.html)
              └── Checkout (pages/checkout.html)
```

O usuário acessa a home, navega pelos produtos em destaque ou pela página de listagem completa, adiciona itens ao carrinho e finaliza a compra no checkout.

### 👤 Fluxo de Perfil

```
Home (index.html)
  └── Login / Perfil (pages/login.html)
```

O usuário acessa seu perfil ou realiza login/cadastro clicando na saudação exibida no cabeçalho (`"Olá, [Nome]"`).

---

## Como Executar

Por ser um projeto estático, não há etapa de build ou instalação.

**Opção 1 — Abrir diretamente no navegador:**
```
Abra o arquivo index.html diretamente no seu navegador.
```

**Opção 2 — Servidor local (recomendado para evitar erros de CORS):**

Com a extensão **Live Server** no VS Code:
1. Clique com o botão direito em `index.html`
2. Selecione `Open with Live Server`

Via terminal com Python:
```bash
# Python 3
python -m http.server 8080
```
Acesse `http://localhost:8080` no navegador.

---

## Páginas

| Página | Arquivo | Descrição |
|---|---|---|
| Home | `index.html` | Página inicial com banner e produtos em destaque |
| Produtos | `pages/produtos.html` | Listagem completa de produtos com filtros |
| Carrinho | `pages/carrinho.html` | Itens adicionados pelo usuário |
| Checkout | `pages/checkout.html` | Resumo e finalização do pedido |
| Login / Perfil | `pages/login.html` | Autenticação e dados do usuário |

---

## Convenções

### Nomenclatura de arquivos
- Páginas HTML: `kebab-case` → ex: `gift-card.html`
- Imagens: `kebab-case` com extensão simples → ex: `teclado-gamer.jpg`
- Classes CSS: `kebab-case` → ex: `.nav-login`, `.card-produto`

### Estrutura de um card de produto
Todo card de produto deve seguir a estrutura abaixo para manter consistência visual:

```html
<div class="card">
    <img src="images/nome-produto.jpg" alt="Descrição do produto">
    <h3>Nome do Produto</h3>
    <p>R$ 00,00</p>
    <button>Comprar</button>
</div>
```

### Commits
Utilize mensagens de commit descritivas seguindo o padrão:

```
tipo: descrição breve

feat: adiciona página de checkout
fix: corrige extensão das imagens de produto
style: ajusta espaçamento dos cards no mobile
docs: atualiza README com fluxos de navegação
```

---

## Melhorias Futuras

- [ ] Implementar funcionalidade do campo de busca
- [ ] Adicionar eventos de clique nos botões "Comprar"
- [ ] Carregar produtos dinamicamente a partir de um array de dados ou API
- [ ] Tornar o layout responsivo para dispositivos móveis
- [ ] Corrigir extensões duplicadas das imagens (`teclado.jpg.jpg` → `teclado.jpg`)
- [ ] Adicionar atributo `alt` em todas as imagens para acessibilidade
- [ ] Implementar persistência do carrinho via `localStorage`

---

## Licença

© 2026 PowerPixel. Todos os direitos reservados.