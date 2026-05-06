const catalogo = [
  {
    id: 1,
    titulo: "Sopranos",
    tipo: "serie",
    ano: 1999,
    generos: ["Drama", "Máfia", "Drama Policial"],
    nota: 10,
    assistido: true,
  },
  {
    id: 2,
    titulo: "Laranja Mecânica",
    tipo: "filme",
    ano: 1972,
    generos: ["Ficção Científica", "Drama", "Crime"],
    nota: 10,
    assistido: true,
  },
  {
    id: 3,
    titulo: "Interestelar",
    tipo: "filme",
    ano: 2014,
    generos: ["Ficção Científica", "Drama"],
    nota: 6,
    assistido: false,
  },
  {
    id: 4,
    titulo: "Game of Thrones",
    tipo: "serie",
    ano: 2011,
    generos: ["Fantasia", "Aventura", "Ação"],
    nota: 8.5,
    assistido: true,
  },
  {
    id: 5,
    titulo: "Breaking Bad",
    tipo: "serie",
    ano: 2008,
    generos: ["Crime", "Drama", "Suspense"],
    nota: 9,
    assistido: false,
  },
  {
    id: 6,
    titulo: "Os Bons Companheiros",
    tipo: "filme",
    ano: 1990,
    generos: ["Máfia", "Drama Policial"],
    nota: 10,
    assistido: true,
  }
];
console.log(catalogo);

console.log("Título do primeiro item:", catalogo[0].titulo);

console.log("Ano do último item:", catalogo[catalogo.length - 1].ano);

const terceiro = catalogo[2];

if (terceiro.generos.length >= 2) {
  console.log("Segundo gênero:", terceiro.generos[1]);
} else {
  console.log("Esse item não possui um segundo gênero.");
}
catalogo.forEach(function(item){
    console.log(`-${item.tipo}] ${item.titulo} (${item.ano})`)
});
const titulosEmCaixaAlta = catalogo.map(function(item){
     return item.titulo.toUpperCase();
});

const naoAssistidos = catalogo.filter(item = item.assistido === false);
console.log(naoAssistidos);
console.log("Quantidade:", naoAssistidos.length);