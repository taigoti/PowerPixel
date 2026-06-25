# PowerPixel

Loja virtual estática de produtos gamer e tecnologia, criada com HTML, CSS e JavaScript puro.

## Índice

- [Sobre o projeto](#sobre-o-projeto)
- [Funcionalidades atuais](#funcionalidades-atuais)
- [Tecnologias](#tecnologias)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Páginas](#páginas)
- [Dados e persistência](#dados-e-persistência)
- [Como executar](#como-executar)
- [Credenciais de teste](#credenciais-de-teste)
- [Observações técnicas](#observações-técnicas)
- [Melhorias futuras](#melhorias-futuras)
- [Licença](#licença)

## Sobre o projeto

A PowerPixel é uma loja virtual voltada para periféricos, hardware, áudio, acessórios, gift cards e produtos relacionados ao público gamer.

O projeto funciona como uma aplicação frontend estática. Ele não possui backend, banco de dados, etapa de build ou instalação de dependências. Os produtos são carregados a partir de um arquivo JavaScript local e algumas informações da sessão, como usuário logado e carrinho, são salvas no `localStorage` do navegador.

## Funcionalidades atuais

- Home com banner, menu responsivo, busca e cards de produtos gerados por JavaScript.
- Catálogo com listagem completa de produtos.
- Filtros por categoria na página de produtos.
- Busca por nome de produto na home, no catálogo e no carrinho.
- Adição de produtos ao carrinho.
- Carrinho persistido no navegador com exibição de itens, total e remoção de produtos.
- Login simplificado com nome, e-mail, senha e foto de perfil.
- Perfil do usuário com dados salvos no `localStorage`.
- Logout com limpeza dos dados do usuário.
- Acesso administrativo simples por credencial fixa.
- Painel admin inicial para adicionar produtos em uma lista temporária da própria página.
- Layout separado por folhas CSS globais e específicas de cada página.

## Tecnologias

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura das páginas |
| CSS3 | Estilos globais, estilos por página e responsividade |
| JavaScript puro | Renderização de produtos, interações, filtros, carrinho, login e perfil |
| localStorage | Persistência local de usuário e carrinho |

## Estrutura do projeto

```text
powerPixel/
|-- index.html
|-- README.md
|-- css/
|   |-- style.css
|   |-- index.css
|   |-- produtos.css
|   |-- carrinho.css
|   |-- login.css
|   |-- perfil.css
|   `-- admin.css
|-- js/
|   |-- dados.js
|   |-- index.js
|   |-- produtos.js
|   |-- carrinho.js
|   |-- login.js
|   |-- perfil.js
|   `-- admin.js
|-- pages/
|   |-- produtos.html
|   |-- carrinho.html
|   |-- login.html
|   |-- perfil.html
|   `-- admin.html
`-- images/
    |-- PowerPixel.png
    |-- logo.jpg
    |-- perfil.png
    |-- user.png
    `-- imagens dos produtos e banners
```

## Páginas

| Página | Arquivo | Descrição |
|---|---|---|
| Home | `index.html` | Entrada da loja, banner, busca, menu e produtos em destaque |
| Produtos | `pages/produtos.html` | Catálogo completo com busca, filtros e botão para adicionar ao carrinho |
| Carrinho | `pages/carrinho.html` | Lista dos itens adicionados, cálculo do total e remoção de produtos |
| Login | `pages/login.html` | Formulário simples de acesso e envio de foto de perfil |
| Perfil | `pages/perfil.html` | Exibe nome, e-mail e foto do usuário logado |
| Admin | `pages/admin.html` | Painel administrativo inicial para cadastro temporário de produtos |

## Dados e persistência

### Produtos

Os produtos principais ficam em `js/dados.js`, no array global `listaProdutos`.

Cada produto segue esta estrutura:

```js
{
  nome: "Nome do produto",
  preco: "R$ 199,90",
  imagem: "imagem-do-produto.jpg",
  alt: "Texto alternativo da imagem",
  categoria: "periferico"
}
```

Categorias usadas atualmente:

- `periferico`
- `hardware`
- `audio`
- `giftcard`
- `acessorio`

### Carrinho

O carrinho é salvo no `localStorage` com a chave `carrinho`.

Os produtos são adicionados pelas páginas `index.html` e `pages/produtos.html`. A página `pages/carrinho.html` lê essa chave, renderiza os itens, calcula o total e permite excluir produtos.

### Usuário

O usuário é salvo no `localStorage` com a chave `usuario`.

O login atual não valida usuários em um servidor. Ele apenas salva os dados digitados e redireciona:

- usuário comum: `pages/perfil.html`
- usuário admin: `pages/admin.html`

## Como executar

Como o projeto é estático, não existe processo de instalação.

### Abrindo diretamente

Abra o arquivo `index.html` no navegador.

### Usando servidor local

Esta opção é recomendada durante o desenvolvimento.

Com a extensão Live Server no VS Code:

1. Clique com o botão direito em `index.html`.
2. Selecione `Open with Live Server`.

Via terminal:

```bash
python -m http.server 8080
```

Depois acesse:

```text
http://localhost:8080
```

## Credenciais de teste

Para acessar o painel administrativo pela tela de login:

```text
E-mail: admin@powerpixel.com
Senha: 1234
```

Qualquer outro e-mail e senha informados no formulário redirecionam para o perfil de usuário comum.

## Observações técnicas

- `js/dados.js` precisa ser carregado antes de `js/index.js` e `js/produtos.js`, pois esses scripts dependem de `listaProdutos`.
- O botão "Finalizar Compra" do carrinho redireciona para o repositório do projeto no GitHub. Ainda não existe página de checkout implementada.
- O painel admin ainda não altera o catálogo principal em `js/dados.js`; ele apenas adiciona itens visualmente na página atual.

## Melhorias futuras

- Criar uma página real de checkout.
- Persistir produtos cadastrados no painel admin ou integrar com uma API.
- Implementar controle de quantidade no carrinho.
- Evitar itens duplicados no carrinho somando quantidades.
- Melhorar validações de formulário no login.
- Criar cadastro separado de login.
- Adicionar tratamento visual para mensagens de sucesso e erro no lugar de `alert`.

## Licença

© 2026 PowerPixel. Todos os direitos reservados.
