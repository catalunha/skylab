class TodoList {
  constructor() {
    this.todos = []
  }
  addTodo() {
    this.todos.push('a')
    console.log(this.todos)
  }
}

const MinhaLista = new TodoList()
document.getElementById('novotodo').onclick = () => {
  MinhaLista.addTodo()
}