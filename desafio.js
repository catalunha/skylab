// function checaIdade(idade) {
//   return new Promise(function (resolve, reject) {
//     if (idade > 10) {
//       resolve('maior q 10')
//     } else {
//       reject('menor q 10')
//     }
//   })
// }

// checaIdade(5)
//   .then((txt) => {
//     console.log(txt)
//   })
//   .catch((error) => {
//     console.log(error)
//   })


function checaIdade(idade) {
  return new Promise(function (resolve, reject) {
    function faz() {
      console.log('...')
    }
    console.log('Analisando...')
    if (idade > 18) {
      // setTimeout(faz, 2000)
      // resolve('maior q 18')
      setTimeout(() => { resolve('maior q 18') }, 2000)

    } else {
      reject('menor q 18')
    }
  })
}
console.log('+++')
checaIdade(25)
  .then((txt) => {
    console.log(txt)
  })
  .catch((error) => {
    console.log(error)
  })
console.log('---')