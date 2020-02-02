import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



import TimerDisplay from './TimerDisplay';
import Home from './Home'
import SerieForm from './SerieForm';
import AddSerie from './AddSerie'
import WorkoutForm from './WorkoutForm'
import Workouts from './Workouts'
import Calendar from './Calendar';
import WorkoutDetails from './WorkoutDetails';

export default class Navigation extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-dark bg-dark d-flex justify-content-around ">
                        <Link to="/" className="btn btn-outline-primary m-2" >Home</Link>
                        {/* <Link to="/entrenador" className="btn btn-outline-primary btn-lg m-2">Iniciar Proximo Entreno</Link> */}
                        {/* <Link to="/newSerie" className="btn btn-outline-primary m-2">Crear Serie</Link> */}
                        {/* <Link to="/addSerie" className="btn btn-outline-primary m-2">Agregar Serie</Link> */}
                        {/* <Link to="/newWorkout" className="btn btn-outline-primary m-2">Crear Entreno</Link> */}
                        <Link to="/workouts" className="btn btn-outline-primary m-2">Ver Entrenos</Link>
                        <Link to="/calendar" className="btn btn-outline-primary m-2">Calendario</Link> 
                    </nav>
                </div>
                <Route path="/" exact component={Home} />
                <Route path="/entrenador/:id" component={TimerDisplay} />
                <Route path="/newSerie" component={SerieForm}/>                
                <Route path="/addSerie" component={AddSerie}/>                
                <Route path="/newWorkout" component={WorkoutForm}/>                
                <Route path="/workouts" component={Workouts}/>    
                <Route path="/calendar" component={Calendar}/>
                <Route path="/workout/:id" component={WorkoutDetails}/>            
            </Router>

        )
    }
}
