import React, {Component} from 'react'

class CreateTodoForm extends Component {
  constructor(){
    super()
    this.state = {
      todo: ''
    }
  }

  onInputChange(event){
    console.log('create todo input changed')
    this.setState ({
      todo: event.target.value
    })
  }

  onFormSubmit(event){
  console.log('form submitted')
  event.preventDefault()
  let newTodo = this.state.todo
  this.props.createTodo(newTodo)
  this.setState({
    todo: ''
  })
}

  render(){
    return (
      <div className='createForm todoForm'>
        <h3>What do you need to do!?</h3>
          <form onSubmit={event => this.onFormSubmit(event)}>
            <div className="form-group row">
              <div className="col-xs-8">
                <input
                  className="form-control"
                  onChange={event => this.onInputChange(event)}
                  placeholder='Write a todo here ...'
                  type='text'
                  value={this.state.todo} />
              </div>
              <div className="col-xs-4">
                <button className="btn btn default create-button" type='submit'>Create Todo!</button>
              </div>
           </div>
        </form>
      </div>
    )
  }
}

export default CreateTodoForm
