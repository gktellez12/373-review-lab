import React from "react"
import PropTypes from "prop-types"
class NewChoreForm extends React.Component {
  state = {
    child: this.props.children ? this.props.children[0] : null,
    task: this.props.tasks ? this.props.tasks[0] : null,
    due_on: null
  }

  handleChildChange = (e) => {
    this.setState({child: this.props.children[e.target.value]})
  }

  handleTaskChange = (e) => {
    this.setState({task: this.props.tasks[e.target.value]})
  }

  handleDateChange = (e) => {
    this.setState({due_on: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const new_chore = {
      child_id: this.state.child.id,
      task_id: this.state.task.id,
      due_on: this.state.due_on,
      completed: this.state.completed
    }
    this.props.run_ajax('/chores.json', 'POST', {"chore": new_chore});
    this.props.switchModal()
  }

  childrenOptions = () => {
    return this.props.children.map((child, index) => {
      return (
        <option value={index}>{child.first_name}</option>
      )
    })
  }

  taskOptions = () => {
    return this.props.tasks.map((task, index) => {
      return (
        <option value={index}>{task.name}</option>
      )
    })
  }



  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Child:
            <select onChange={this.handleChildChange}>
              {this.childrenOptions()}
            </select>
            <br/>
            Task:
            <select onChange={this.handleTaskChange}>
              {this.taskOptions()}
            </select>
            <br />
            Due on:
            <input type="date" onChange={this.handleDateChange}></input>
          </label>
          <br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default NewChoreForm
