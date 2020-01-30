import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import TimerDisplay from './TimerDisplay';
import Home from './Home'

export default class Navigation extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav classN="navbar navbar-dark bg-dark ">
                        <div className="form-inline">
                            <div className="d-flex justify-content-around">
                                <Link to="/" className="btn btn-outline-primary" >Home</Link>
                                <Link to="/entrenador" className="btn btn-outline-secondary">Entrenador</Link>
                            </div>
                        </div>
                    </nav>
                </div>
                <Route path="/" exact component={Home} />
                <Route path="/entrenador" component={TimerDisplay} />
            </Router>

        )
    }
}
