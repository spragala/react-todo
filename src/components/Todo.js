import React, {Component} from 'react'
import EditTodoForm from './EditTodoForm'

class Todo extends Component {
  constructor() {
    super();
    this.toggleHidden = this.toggleHidden.bind(this)
    this.state = {
      isHidden: true,
    }
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden,
    })
  }

  render(){
    return(
      <div className="row todo-row">
        <p className="todo-pee" data-todos-index={this.props.todo._id}>
          <span className="two-do"> {this.props.todo.body}</span>
        </p>
        <span
          className='deleteButton glyphicon glyphicon-trash'
          onClick={() => this.props.onDeleteTodo(this.props.todo._id)}>
        </span>
        <span
          className='editingButton glyphicon glyphicon-pencil'
          onClick={this.toggleHidden}>
        </span>
        {!this.state.isHidden && <EditTodoForm
          todo={this.props.todo}
          onUpdateTodo={this.props.onUpdateTodo} /> }
      </div>
    )
  }
}

export default Todo
