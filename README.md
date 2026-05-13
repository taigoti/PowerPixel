# ⚡ PowerPixel

> Loja virtual de periféricos, eletrônicos para PC, jogos e gift cards.

---

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Requisitos do Sistema](#requisitos-do-sistema)
- [Módulos Funcionais](#módulos-funcionais)
- [Tecnologias](#tecnologias)
- [Estrutura de Diretórios](#estrutura-de-diretórios)
- [Fluxos de Navegação](#fluxos-de-navegação)
- [Como Executar](#como-executar)
- [Páginas](#páginas)
- [Convenções](#convenções)
- [Melhorias Futuras](#melhorias-futuras)

---

## Sobre o Projeto

A **PowerPixel** é uma loja virtual focada no público gamer e entusiasta de tecnologia. O projeto é uma aplicação frontend estática que cobre todo o ciclo de compra — da vitrine ao checkout — além de uma área administrativa para gestão da loja.

**Categorias de produtos:**
- 🖱️ Periféricos — mouses, teclados, headsets, controles
- 🖥️ Eletrônicos para PC — monitores, hardware e acessórios
- 🎮 Jogos — PS5, Xbox, PC e plataformas digitais
- 🎁 Gift Cards

**O que o sistema oferece ao cliente:**
A página inicial apresenta um banner de promoções, produtos em destaque por categoria, avaliações de clientes e acesso rápido ao catálogo completo. O catálogo permite navegar por categorias e filtrar por preço, marca, plataforma, avaliação e promoção. Cada produto exibe imagens, descrição, especificações técnicas, avaliações de compradores, informações de entrega e o botão "Adicionar ao Carrinho". O carrinho permite ajustar quantidades, remover itens, calcular frete e visualizar o total antes de prosseguir. O checkout cobre endereço de entrega, formas de pagamento (Pix, cartão e boleto) e confirmação do pedido.

**Área do cliente:**
O usuário pode criar conta, fazer login, recuperar senha e acessar uma área pessoal com histórico de pedidos, dados cadastrais e endereços salvos.

**Painel administrativo:**
Área restrita para a equipe da PowerPixel gerenciar cadastro e edição de produtos, controle de estoque, acompanhamento e atualização de pedidos, gestão de usuários e relatórios de vendas.

**Recursos extras:**
Sistema de avaliações com notas e comentários, produtos relacionados, lista de desejos, cupons de desconto, chat online e blog com novidades do universo gamer. O site também conta com páginas institucionais: Sobre a empresa, Política de Troca, Política de Privacidade, Termos de Uso e página de Contato (WhatsApp, e-mail e formulário).

---

## Requisitos do Sistema

Resumo dos requisitos funcionais levantados para cada área da plataforma.

| # | Área | Principais requisitos |
|---|---|---|
| 1 | **Home** | Banner de promoções, produtos em destaque, categorias principais, botão "Ver todos", avaliações de clientes, rodapé institucional |
| 2 | **Catálogo** | Listagem por categoria (Jogos, Mouse, Teclado, Headset, Monitor, Controle), filtros por preço, marca, plataforma, avaliação e promoção |
| 3 | **Página de Produto** | Imagens, nome, preço, descrição, especificações técnicas, avaliações, botão "Adicionar ao Carrinho", informações de entrega |
| 4 | **Carrinho** | Lista de itens, alterar quantidade, remover produto, cálculo de frete, valor total, botão "Finalizar Compra" |
| 5 | **Login / Cadastro** | Criar conta, login, recuperar senha, área do cliente (pedidos, dados, endereço, histórico) |
| 6 | **Checkout** | Endereço de entrega, forma de pagamento (Pix, Cartão, Boleto), resumo do pedido, confirmação |
| 7 | **Painel Admin** | Cadastro/edição/exclusão de produtos, controle de estoque, gestão de pedidos e usuários, relatórios de vendas |
| 8 | **Páginas Institucionais** | Sobre a empresa, Política de Troca, Privacidade, Termos de Uso, Contato |
| 9 | **Extras** | Avaliações ⭐, produtos relacionados, lista de desejos ❤️, cupom de desconto, chat online, blog |

---

## Módulos Funcionais

O sistema é organizado em módulos independentes, cada um responsável por uma área de negócio.

| Módulo | Responsabilidade | Funções principais |
|---|---|---|
| **Catálogo** | Apresentar os produtos da loja | Listagem, categorização, busca, filtros, página de detalhe |
| **Carrinho** | Gerenciar seleção de produtos | Adicionar, alterar quantidade, remover, calcular frete, exibir total |
| **Usuários** | Gerenciar clientes da plataforma | Cadastro, login, recuperação de senha, área do cliente, histórico |
| **Pedidos** | Registrar e acompanhar compras | Registro do pedido, status (aguardando pagamento → entregue), histórico |
| **Administrativo** | Gestão interna da loja | CRUD de produtos, estoque, pedidos, usuários, relatórios |
| **Avaliações** | Credibilidade e decisão de compra | Nota por estrelas, comentários, exibição de média por produto |

---

## Tecnologias

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura e semântica das páginas |
| CSS3 | Estilização e layout responsivo |
| JavaScript (Vanilla) | Interatividade e manipulação do DOM |

> **Decisão de implementação:** todo o JavaScript do projeto é escrito diretamente dentro das páginas HTML, utilizando a tag `<script>` ao final do `<body>` de cada arquivo. Não há arquivos `.js` externos separados.

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