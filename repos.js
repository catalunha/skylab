var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')
var listaElement = document.querySelector('#app ul')


function getRepos() {
  var user = 'https://api.github.com/users/' + inputElement.value
  console.log(user)
  axios.get(user)
    .then((user) => {
      console.log(user.data.repos_url)
      var reposUrl = user.data.repos_url
      axios.get(reposUrl)
        .then((repos) => {
          // console.log(repos.data)
          repos.data.forEach(element => {
            // console.log(element.name)
            var repoElement = document.createElement('li')
            var txtRepoElement = document.createTextNode(element.name)
            repoElement.appendChild(txtRepoElement)
            listaElement.appendChild(repoElement)
          });
        })
        .catch((error) => {
          alert('Erro ao pegar repos')
        })
    })
    .catch((error) => {
      alert('Erro ao pegar user')
    })
}