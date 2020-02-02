import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Workout from './Workout'

import workoutsDB from '../sample/workouts.json'

export default class Workouts extends Component {
    render() {
        return workoutsDB.map(workout =>
            <Workout
                key={workout.id}
                workout={workout}
            />
        )
    }
}