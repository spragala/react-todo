import React, {Component} from 'react'
import TodoModel from '../models/Todo'
import TodoList from '../components/TodoList'
import CreateTodoForm from '../components/CreateTodoForm'

class TodosContainer extends Component {
  constructor(){
   super()
   this.state = {
     todos: []
   }
 }

 componentDidMount(){
   this.fetchData()
 }

 fetchData(){
   TodoModel.all().then( (res) => {
     this.setState ({
       todos: res.todos
     })
   })
 }

 createTodo(newBody) {
  console.log('creating todo', newBody)
  let newTodo = {
    body: newBody,
    completed: false
  }

  TodoModel.create(newTodo).then((res) => {
    console.log('created todo', res)
    let todos = this.state.todos
    let newTodos = todos.push(res)
    this.setState({newTodos})
  })
}

updateTodo(newInput, id) {
  console.log('updating todo', newInput, id)
  TodoModel.update(newInput, id).then((res)=> {
      let targetTodo = this.state.todos.find((item)=>{
        return item._id === id;
      })
      // update this.state.todos based on response
      targetTodo.body = res.body
      console.log(targetTodo.body)
      this.setState({targetTodo})
    })
}

deleteTodo(todo){
  console.log('deleting todo', todo)
  TodoModel.delete(todo).then((res) => {
      let todos = this.state.todos.filter(function(todo) {
        return todo._id !== res._id
      }); console.log(res._id)
      this.setState({todos})
  })
}

  render(){
    return (
      <div className='todosContainer'>
        <h2 className='todo-title'>Daily Todo List</h2>
        <CreateTodoForm
          createTodo={this.createTodo.bind(this)} />
        <TodoList
          todos = {this.state.todos}
          onDeleteTodo={this.deleteTodo.bind(this)}
          onUpdateTodo={this.updateTodo.bind(this)} />
      </div>
    )
  }
}

export default TodosContainer
