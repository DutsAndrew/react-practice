import './App.css';
import React, { Component } from 'react';
import Overview from './components/Overview';
import uniqid from 'uniqid';

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      task: { 
        text: '',
        id: uniqid(),
      },
      tasks: [],
    };
  };

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      }
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { 
        text: '',
        id: uniqid(),
      },
    });
  };

  render() {
    const { task, tasks } = this.state;

    return (
      <div>
        <form>
          <label htmlFor="taskInput">Enter Task:</label>
          <input onChange={this.handleChange} value={task.text} type="text" id="taskInput"/>
          <button type="submit" onClick={this.onSubmit}>Submit Task</button>
        </form>
        <p>Below are your tasks:</p>
        <Overview tasks={tasks}/>
      </div>
    );
  }
}

export default App;


// render input field

// render submit button

// onSubmit add user input as a "tasks array" that is managed in state
  // for each task an HTML list should be rendered