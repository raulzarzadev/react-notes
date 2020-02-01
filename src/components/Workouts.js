import React, { Component } from 'react'

export default class Workouts extends Component {
    render() {
        return (
            <div className="container text-center">
                <h2 className="my-4">Entrenos</h2> <button className="btn btn-success">Crear Entreno</button>
                <div class="card text-center my-4">

                    <div class="card-header">
                        inicia: en 2 horas
                    </div>

                    <div class="card-body">
                        <h5 class="card-title">Aqui va escrito el nombre del entreno, una rapida identificacion</h5>
                        <p class="card-text">Comentarios importantes del mismo entreno, ayuda a los nadadores antes de comenzar y al entrenador a identificar el objetivo clave del entrenamiento</p>
                        <a href="#" class="btn btn-primary">Detalles</a> <a href="#" class="btn btn-primary">Iniciar Entreno</a>
                    </div>

                    <div class="card-footer text-muted">
                        series: 6 
                        <br/>
                        estimado: 02:45 horas
                    </div>

                </div>
                <div class="card text-center my-4">

                    <div class="card-header">
                        incia: en 2 dias
                    </div>

                    <div class="card-body">
                        <h5 class="card-title">Aqui va escrito el nombre del entreno, una rapida identificacion</h5>
                        <p class="card-text">Comentarios importantes del mismo entreno, ayuda a los</p>
                        <a href="#" class="btn btn-primary">Detalles</a> <a href="#" class="btn btn-primary">Iniciar Entreno</a>
                    </div>

                    <div class="card-footer text-muted">
                        series: 9 
                        <br/>
                        estimado: 01:35 horas
                    </div>

                </div>
            </div>
        )
    }
}
