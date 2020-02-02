import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Workout extends Component {
    render() {

        const { workout } = this.props

        return (
            <div className="container text-center">

                <div class="card text-center my-4">

                    <div class="card-header">
                        {workout.date}
                    </div>

                    <div class="card-body">
                        <h5 class="card-title">{workout.title}</h5>
                        <p class="card-text">{workout.coments}</p>
                        <div className="d-flex justify-content-around">
                            <Link to={"/workout/"+ workout.id} class="btn btn-primary">Detalles</Link>
                            <Link to={"/entrenador/"+workout.id}  class="btn btn-primary" >Iniciar entreno</Link>
                        </div>
                    </div>

                    <div class="card-footer text-muted">
                        Series: {workout.series.length}
                        <br />
                        {/* HAY QUE IMPLEMENTAR ESTE ELEMENTO  estimado: 02:45 horas */}
                    </div>
                </div>
            </div>
        )
    }
}
