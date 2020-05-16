// var xhr = new XMLHttpRequest()
// xhr.open('GET', 'https://api.github.com/users/catalunha')
// xhr.send(null)

// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4) {
//     console.log(JSON.parse(xhr.responseText))
//   }
// }

// var minhaPromise = function () {
//   return new Promise(function (resolve, reject) {
//     var xhr = new XMLHttpRequest()
//     xhr.open('GET', 'https://api.github.com/users/catalunha')
//     xhr.send(null)
//     xhr.onreadystatechange = function () {
//       if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//           resolve(JSON.parse(xhr.responseText))
//         } else {
//           reject('Erro na requisição')
//         }
//       }
//     }
//   })
// }

// // var res = minhaPromise()
// // console.log(res)

// minhaPromise()
//   .then(function (responseResolve) {
//     console.log(responseResolve)
//   })
//   .catch(function (responseReject) { 
//     console.log(responseReject)
//   })

axios.get('https://api.github.com/users/catalunha')
  .then(function (responseResolve) {
    // console.log(responseResolve)
    console.log(responseResolve.data.avatar_url)
  })
  .catch(function (responseReject) { 
    console.log(responseReject)
  })

