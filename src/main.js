class App {
  constructor() {
    this.repositories = []
    this.formEl = document.getElementById('repo-form')
    this.listEl = document.getElementById('repo-list')
    this.registerHandlers()
  }
  registerHandlers() {
    this.formEl.onsubmit = event => this.addRepository(event)
  }
  addRepository(event) {
    event.preventDefault()
    this.repositories.push({
      name: 'aa',
      description: 'bb',
      avatar_url: 'https://avatars0.githubusercontent.com/u/19995819?v=4',
      html_url: 'https://avatars0.githubusercontent.com/u/19995819?v=4'
    })
    console.log(this.repositories)
    this.render()
  }
  render() {
    this.listEl.innerHTML = ''
    this.repositories.forEach(repo => {
      let imgEl = document.createElement('img')
      imgEl.setAttribute('src', repo.avatar_url)

      let titleEl = document.createElement('strong')
      titleEl.appendChild(document.createTextNode(repo.name))

      let descEl = document.createElement('p')
      descEl.appendChild(document.createTextNode(repo.name))

      let urlEl = document.createElement('a')
      urlEl.appendChild(document.createTextNode('Acessar'))
      urlEl.setAttribute('target', '_blank')
      urlEl.setAttribute('href', repo.html_url)

      let liEl = document.createElement('li')
      liEl.appendChild(titleEl)
      liEl.appendChild(imgEl)
      liEl.appendChild(descEl)
      liEl.appendChild(urlEl)
      this.listEl.appendChild(liEl)
    })
  }
}

new App()