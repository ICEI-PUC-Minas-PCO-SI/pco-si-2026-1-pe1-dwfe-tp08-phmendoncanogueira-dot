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
    console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);
});
const titulosEmCaixaAlta = catalogo.map(function(item){
     return item.titulo.toUpperCase();
});
console.log("Títulos em caixa alta:");
console.log(titulosEmCaixaAlta);

const naoAssistidos = catalogo.filter(item => item.assistido === false);
console.log(naoAssistidos);
console.log("Quantidade:", naoAssistidos.length);

const itemNotaAlta = catalogo.find(item => item.nota >= 9);

if (itemNotaAlta) {
  console.log(
    `Primeiro item com nota >= 9: ${itemNotaAlta.titulo} - Nota ${itemNotaAlta.nota}`
  );
} else {
  console.log("Nenhum item com nota maior ou igual a 9 encontrado.");
}

const somaNotas = catalogo.reduce((acumulador, item) => acumulador + item.nota, 0 );

const mediaGeral = somaNotas / catalogo.length;

console.log(
  "Média geral das notas:",
  mediaGeral.toFixed(2)
);
const assistidos = catalogo.filter(item => item.assistido === true);
const somaAssistidos = assistidos.reduce((acumulador, item) => acumulador + item.nota, 0 );

const mediaAssistidos =
  somaAssistidos / assistidos.length;

console.log("Média dos assistidos:", mediaAssistidos.toFixed(2));

const existeAntigo = catalogo.some(item => item.ano < 2000);
console.log("Existe item com ano menor que 2000?", existeAntigo);
const todosTemGenero = catalogo.every( item => item.generos.length > 0);
console.log("Todos os itens possuem pelo menos um gênero?", todosTemGenero);

const quantidadeFilmes = catalogo.filter(
  item => item.tipo === "filme"
).length;

const quantidadeSeries = catalogo.filter(
  item => item.tipo === "serie"
).length;

const ranking = [...catalogo]
  .sort((a, b) => b.nota - a.nota)
  .slice(0, 3);

const output = document.getElementById("output");

output.innerHTML = `
  <h2>Resumo do Catálogo</h2>

  <p>Total de itens: ${catalogo.length}</p>

  <p>Quantidade de filmes: ${quantidadeFilmes}</p>

  <p>Quantidade de séries: ${quantidadeSeries}</p>

  <p>Quantidade de não assistidos: ${naoAssistidos.length}</p>

  <p>Média geral das notas: ${mediaGeral.toFixed(2)}</p>

  <h3>Top 3 notas</h3>

  <ol>
    ${ranking
      .map(item =>
        `<li>${item.titulo} - Nota ${item.nota}</li>`
      )
      .join("")}
  </ol>
`;