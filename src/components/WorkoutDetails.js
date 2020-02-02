import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import SerieList from './SeriesList'


import workouts from '../sample/workouts.json'
import series from '../sample/series.json'



export default class WorkoutDetails extends Component {

    state = {
        id: parseInt(this.props.match.params.id)
    }


    render() {
        const res = workouts.filter(workout => workout.id === this.state.id)[0]

        function multiFilter(array, filters) {
            let filterKeys = Object.keys(filters);
            return array.filter((item) => filterKeys.every((key) => (filters[key].indexOf(item[key]) !== -1)));
        }

        let filters =
        {
            id: res.series
        };

        const getSeries = multiFilter(series, filters)



        return (
            <div className="container text-center">
                <h2>Detalles del entreno</h2>
                <h3>{res.title}</h3>
                <p>Programado para: {res.date}</p>
                <p>{res.coments}</p>

                <SerieList series={getSeries} />
                <p>Creado: hace 1 día</p>
                <Link to={"/entrenador/" + res.id}  class="btn btn-primary btn-lg m-4" >Iniciar entreno</Link>
            </div>
        )
    }
}
