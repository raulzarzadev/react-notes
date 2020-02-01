import React, { Component } from 'react';


import './App.css';

//--COMPONENTS
import Navigation from './components/Navigation'
import Footer from './components/Footer'

//--BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css'



class App extends Component {
  
  render() {
    return (
      <div >
        <Navigation/>
        <Footer/>
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
