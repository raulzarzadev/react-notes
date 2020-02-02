import React, { Component } from 'react'
import Workouts from './Workouts'

export default class Home extends Component {
    render() {
        
        return (
            <div className="container text-center">
                <h1 className="m-5">
                    Series Programadas
                </h1>
                <Workouts/>
            </div>
        )
    }
}
