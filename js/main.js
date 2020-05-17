const usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do sul',
    estado: "SC"
  }
}

// const nome = usuario.nome
// const idade = usuario.idade
// const cidade = usuario.endereco.cidade

const { nome, idade, endereco: { cidade } } = usuario

console.log(nome)
console.log(idade)
console.log(cidade)


function mostraNome(usuario) {
  console.log(usuario.nome)
}
mostraNome(usuario)

function mostraNome2({nome}) {
  console.log(nome)
}
mostraNome2(usuario)