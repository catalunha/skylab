// // Execicio 1
// const delay = () => new Promise(resolve => setTimeout(resolve, 1000))

// // function umPorSegundo(){
// //   delay().then(()=>{
// //     console.log('1s')
// //     delay().then(()=>{
// //       console.log('2s')
// //       delay().then(()=>{
// //         console.log('3s')
// //       })
// //     })
// //   })
// // }
// // umPorSegundo()


// async function umPorSegundo2(){
//   await delay()
//   console.log('1s')
//   await delay()
//   console.log('2s')
//   await delay()
//   console.log('3s')
// }
// umPorSegundo2()

// Exercicio 2

// import axios from 'axios'
// function getUserFromGithub(user){
//   axios.get(`https://api.github.com/users/${user}`)
//   .then(response=>{
//     console.log(response.data)
//   })
//   .catch(error=>{
//     console.log('Usuario nao existe')
//   })
// }

// getUserFromGithub('catalunha')
// getUserFromGithub('catalunha2')



import axios from 'axios'
async function getUserFromGithub(user) {
  try {
    const data = await axios.get(`https://api.github.com/users/${user}`)
    console.log(data)
  } catch (error) {
    console.log('Usuario nao existe')

  }

}

getUserFromGithub('catalunha')
getUserFromGithub('catalunha2')