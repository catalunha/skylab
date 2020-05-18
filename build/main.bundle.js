// // Exercicio 01
// class Usuario {
//   constructor(email, senha) {
//     this.email = email
//     this.senha = senha
//     this.admin = false
//   }
//   isAdmin() {
//     return this.admin
//   }
// }
// class Admin extends Usuario {
//   constructor(email, senha) {
//     super(email, senha)
//     this.admin = true
//   }
// }
// const user1 = new Usuario('a@a.com', 'a')
// const adm1 = new Admin('a@a.com', 'b')
// console.log(user1.isAdmin())
// console.log(adm1.isAdmin())
// // Exercicio 2
// const usuarios = [
//   { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
//   { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
//   { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
// ]
// // 2.1
// console.log('2.1')
// const idades = usuarios.map((item) => {
//   return item.idade
// })
// console.log(idades)
// // 2.2
// console.log('2.2')
// const rocketseat = usuarios.filter((item) => {
//   return item.idade > 18 && item.empresa === 'Rocketseat'
// })
// console.log(rocketseat)
// // 2.3
// console.log('2.3')
// const google = usuarios.find((item) => {
//   return item.empresa === 'Google'
// })
// console.log(google)
// // 2.4
// console.log('2.4')
// const youngs = usuarios.map((item)=>{
//   return {...item,idade:item.idade*2}
// }).filter((item)=>{
//   return item.idade<50
// })
// console.log(youngs)
// Exercicio 3
// // 3.1
// const arr = [1,2,3,4,5]
// const arr2 = arr.map((item)=>item+10)
// console.log(arr2)
// // 3.2
// const usuario = {nome:'Diego',idade:23}
// const mostraIdade = (usuario)=>usuario.idade
// console.log(mostraIdade(usuario))
// // 3.3
// const nome = 'Diego'
// const idade = 23
// const mostraUsuario = (nome = 'Diego', idade = 23) => ({ nome, idade })
// console.log(mostraUsuario(nome, idade))
// console.log(mostraUsuario(nome))
// 3.4
// nao entendi
// // Exercicio 4
// 4.1
// const empresa ={
//   nome:'Rocketseat',
//   endereco:{
//     cidade:'Rio do Sul',
//     estado:'SC'
//   }
// }
// const {nome}=empresa
// console.log(nome)
// 4.2
// muito simples
// Exercicio 5
// // 5.1
// const arr=[1,2,3,4,5,6]
// const [x,...y]=arr
// console.log(x)
// console.log(y)
// function soma(...params){
//   return params.reduce((total,next)=>{
//     return total+next
//   })
// }
// console.log(soma(1,2,3,4,5,6))
// const arr = [1, 2, 3, 4, 5, 6]
// function soma(params) {
//   return params.reduce((total, next) => {
//     return total + next
//   })
// }
// console.log(soma(arr))
// // 5.2 
// const usuario = {
//   nome: 'Diego',
//   idade:20,
//   endereco: {
//     cidade: 'Rio do Sul',
//     pais:'Br'
//   }
// }
// console.log(usuario)
// const usuario2 = { ...usuario, nome: 'Gabriel' }
// console.log(usuario2)
// const usuario3 = { ...usuario, endereco: { ...usuario.endereco,cidade: 'Lontras' } }
// console.log(usuario3)
// Exercicio 6
// simple
// Exercicio 7
// simples
"use strict";
