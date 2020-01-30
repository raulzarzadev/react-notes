import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import './App.css';

//--COMPONENTS
import Navigation from './components/Navigation'
import TimerDisplay from './components/TimerDisplay'

//--BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css'
import Timer from './components/Timer';



class App extends Component {
  
  render() {
    return (
      <div >
        <Navigation/>
      </div>
    )
  }
}

export default App;

/* state = {
  tasks: tasks
} */

/* addTask = (title, description) => {
  const newTask = {
    title: title,
    description: description,
    id: this.state.tasks.length
  }
  this.setState({
    tasks: [...this.state.tasks, newTask]
  })
  console.log('Tarea agregada', newTask)
} */

/* deleteTask = id => {
  const newTasks = this.state.tasks.filter(tasks => tasks.id !== id)
  console.log(newTasks)
  this.setState({
    tasks: newTasks
  })
} */

/* checkDone = id => {
  const newTasks = this.state.tasks.map(task => {
    if (task.id === id) {
      task.done = !task.done
    }
    return task;
  });
  this.setState({ tasks: newTasks })
} */
