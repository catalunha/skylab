// Exercicio 01
class Usuario {
  constructor(email, senha) {
    this.email = email
    this.senha = senha
    this.admin = false
  }
  isAdmin() {
    return this.admin
  }
}
class Admin extends Usuario {
  constructor(email, senha) {
    super(email, senha)
    this.admin = true
  }
}

const user1 = new Usuario('a@a.com', 'a')
const adm1 = new Admin('a@a.com', 'b')
console.log(user1.isAdmin())
console.log(adm1.isAdmin())

// Exercicio 2
const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
]

const idades = usuarios.map((item) => {
  return item.idade
})

console.log(idades)

const rocketseat = usuarios.filter((item) => {
  return item.idade > 18 && item.empresa === 'Rocketseat'
})

console.log(rocketseat)
