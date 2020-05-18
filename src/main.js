import api from './api'

class App {
  constructor() {
    this.repositories = []
    this.formEl = document.getElementById('repo-form')
    this.inputEl = document.querySelector('input[name=repository]')
    this.listEl = document.getElementById('repo-list')
    this.registerHandlers()
  }
  registerHandlers() {
    this.formEl.onsubmit = event => this.addRepository(event)
  }

  setLoading(loading = true) {
    if (loading === true) {
      let loadingEl = document.createElement('span')
      loadingEl.appendChild(document.createTextNode('Carregando...'))
      loadingEl.setAttribute('id', 'loading')
      this.formEl.appendChild(loadingEl)
    }else{
      document.getElementById('loading').remove()
    }
  }
  async addRepository(event) {
    event.preventDefault()

    const repoInput = this.inputEl.value
    if (repoInput.length === 0) {
      return
    }
    this.setLoading()
    try {
      const response = await api.get(`${repoInput}`)
      const { name, description, avatar_url, html_url } = response.data
      this.repositories.push({
        name,
        description,
        avatar_url,
        html_url,
      })

      this.render()
    } catch (error) {
      alert('Repositório não existe')
    }
    this.setLoading(false)
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