import React, {Component} from 'react'

class EditTodoForm extends Component {
  constructor(){
    super()
    this.state = {
      updatedTodoBody: ''
    }
  }

  onInputChange(event){
    console.log('changing a todo!')
    this.setState({
      updatedTodoBody: event.target.value
    })
  }

  onFormSubmit(event){
    event.preventDefault()
    console.log('edit todo form submitted')
    this.props.onUpdateTodo(this.state.updatedTodoBody, this.props.todo._id)
    this.setState({
      updatedTodoBody: ''
    })
  }

  render(){
    return (
      <div className='editTodoForm' data-todos-index={this.props.todo._id}>
        <form onSubmit={event => this.onFormSubmit(event)}>
          <div className="col-xs-6">
            <input
              onChange={event => this.onInputChange(event)}
              className="form-control"
              placeholder='Write updated todo here...'
              type='text'
              value={this.state.updatedTodoBody} />
          </div>
          <div className="col-xs-6">
            <button className="btn btn-default edit-btn" type='submit'>Edit Todo!</button>
          </div>
        </form>
      </div>
    )
  }
}

export default EditTodoForm
