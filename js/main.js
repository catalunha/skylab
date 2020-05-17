//usando Rest
const usuario = {
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}

// const { nome, ...resto } = usuario
// console.log(nome)
// console.log(resto)


const arr = [1, 2, 3, 4]

const [a, b, ...c] = arr
console.log(a)
console.log(b)
console.log(c)


function soma(...params) {
  return params
}
console.log(soma(10, 20, 30))

// usando spread

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const arr3 = [...arr1, ...arr2]
console.log(arr3)

const usuario2 = { ...usuario, nome: 'catalunha' }
console.log(usuario2)
const usuario3 = { ...usuario, cidade: 'Palmas' }
console.log(usuario3)
const {nome,...usuario5} = { ...usuario, cidade: 'Palmas' }
console.log(usuario5)