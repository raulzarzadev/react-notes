import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import './App.css';

//import tasks from './sample/tasks.json';
import series from './sample/series'

//--COMPONENTS
//import Tasks from './components/Tasks';
//import TaskForm from './components/TaskForm';
import Home from './components/Home'
import Timer from './components/Timer'

//--BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css'

//console.log(tasks)


class App extends Component {
  state = {
    series: series
  }
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

  render() {
    return (
      <div className="container">
        <Router>
          <Link to="/">Home</Link>
          <br/>
          <Link to="/timer">Start</Link>
          
          <Route exact path="/" component={Home} />
          <Route path="/timer" render={() => {
            return <div>
              <Timer series={this.state.series}/>
            </div>
          }}/>
          
        </Router>
      </div>
    )
  }
}

export default App;

/* 
<br/>
          <Route exact path="/" render={() => {
            return <div>
              <TaskForm addTask={this.addTask} />
              <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} checkDone={this.checkDone} />
              
            </div>
          }}>
          </Route>
          <Route path="/Start" component={Start}/>
*/