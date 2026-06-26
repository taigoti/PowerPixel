// =============================================================
// DADOS.JS — Fonte única de dados dos produtos PowerPixel
// Deve ser carregado ANTES de index.js e produtos.js no HTML.
// Expõe a variável global: listaProdutos
// =============================================================

const listaProdutos = [
  {
    nome:      "Teclado Mecânico Gamer - Knup",
    preco:     "R$ 199,90",
    imagem:    "teclado.jpg.jpg",
    alt:       "Teclado Mecânico Gamer",
    categoria: "periferico",
  },
  {
    nome:      "Mouse Gamer RGB Redragon M612 Predator",
    preco:     "R$ 99,90",
    imagem:    "mouse gamer rgb.jpg",
    alt:       "Mouse Gamer RGB",
    categoria: "periferico",
  },
  {
    nome:      "Gift Card",
    preco:     "R$ 50,00",
    imagem:    "giftcard.jpg.webp",
    alt:       "Gift Card",
    categoria: "giftcard",
  },
  {
    nome:      "Monitor Gamer AOC 100Hz",
    preco:     "R$ 700,00",
    imagem:    "monitor.jpg",
    alt:       "Monitor Gamer AOC",
    categoria: "hardware",
  },
  {
    nome:      "Mousepad Feminino 70x35 (Mitsuri)",
    preco:     "R$ 39,90",
    imagem:    "mousepad mitsuri.jpg",
    alt:       "Mousepad Mitsuri",
    categoria: "acessorio",
  },
  {
    nome:      "Mousepad Masculino 70x35 (One Piece)",
    preco:     "R$ 39,90",
    imagem:    "mousepad one piece.jpg",
    alt:       "Mousepad One Piece",
    categoria: "acessorio",
  },
  {
    nome:      "Mousepad Feminino 70x35 (Shinobu)",
    preco:     "R$ 39,90",
    imagem:    "mousepad shinobu.jpg",
    alt:       "Mousepad Shinobu",
    categoria: "acessorio",
  },
  {
    nome:      "Mousepad Masculino 70x35 (One Piece) Vol. 2",
    preco:     "R$ 39,90",
    imagem:    "mousepad one piece 2.jpg",
    alt:       "Mousepad One Piece 2",
    categoria: "acessorio",
  },
  {
    nome:      "PC Gamer Intel Core Ultra 5 225F, RX 590, 16GB DDR5, SSD 520GB",
    preco:     "R$ 3.899,99",
    imagem:    "pc gamer.jpg",
    alt:       "PC Gamer",
    categoria: "hardware",
  },
  {
    nome:      "Console PlayStation 5 Edição Digital 825GB - Sony",
    preco:     "R$ 4.099,99",
    imagem:    "console.webp",
    alt:       "PlayStation 5",
    categoria: "hardware",
  },
  {
    nome:      "Fone de Ouvido JBL Tune 500 Pure Bass Branco",
    preco:     "R$ 149,99",
    imagem:    "fone.jpg",
    alt:       "Fone JBL",
    categoria: "audio",
  },
  {
    nome:      "Fone de Gatinho Headset Sem Fio Com Led Bluetooth",
    preco:     "R$ 109,90",
    imagem:    "fone de gatinho.webp",
    alt:       "Fone Gatinho",
    categoria: "audio",
  },
  {
    nome:      "Pen Drive 256GB Kingston DataTraveler Exodia USB 3.2",
    preco:     "R$ 179,99",
    imagem:    "pendrive.webp",
    alt:       "Pen Drive Kingston",
    categoria: "acessorio",
  },
  {
    nome:      "Microfone USB Gaming RGB, Condensador de Mesa/Braço",
    preco:     "R$ 189,99",
    imagem:    "microfone.jpg",
    alt:       "Microfone USB RGB",
    categoria: "audio",
  },
  {
    nome:      "Webcam Full HD 1080p USB Câmera Stream Live",
    preco:     "R$ 99,90",
    imagem:    "câmera.webp",
    alt:       "Webcam Full HD",
    categoria: "periferico",
  },
  {
    nome:      "Caixa de Som RGB para PC Gamer 6W RMS, USB e P2",
    preco:     "R$ 45,90",
    imagem:    "caixa de som.jpg",
    alt:       "Caixa de Som RGB",
    categoria: "audio",
  },
  {
    nome:      "Cadeira Gamer Ergonômica Reclinável Giratória",
    preco:     "R$ 599,90",
    imagem:    "cadeira gamer.webp",
    alt:       "Cadeira Gamer",
    categoria: "acessorio",
  },
  {
    nome:      'PC Gamer Completo Intel Core i7, 16GB RAM, SSD 512GB, Monitor 19"',
    preco:     "R$ 5.999,90",
    imagem:    "pc gamer completo.webp",
    alt:       "PC Gamer Completo",
    categoria: "hardware",
  },
  {
    nome:      "EPSON EcoTank L6270 - 4 Tintas, Wi-Fi Direct, Ethernet",
    preco:     "R$ 2.449,99",
    imagem:    "impressora.jpg",
    alt:       "Impressora EPSON",
    categoria: "periferico",
  },
  {
    nome:      "Luz de Led RGB 10m de Tira USB e Bluetooth 5V",
    preco:     "R$ 59,90",
    imagem:    "luz de led.jpg",
    alt:       "Luz de Led RGB",
    categoria: "acessorio",
  },
];

// Produtos adicionados pelo admin via painel (persistidos em localStorage)
const produtosExtras = JSON.parse(localStorage.getItem("produtosExtras") || "[]");

// Lista completa: base + admin. Usada por index.js e produtos.js
const todosProdutos = [...listaProdutos, ...produtosExtras];
