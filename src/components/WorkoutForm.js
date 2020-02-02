import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class WorkoutForm extends Component {
    render() {
        return (
            <div className="container text-center">
                <h1>Nuevo Entreno</h1>
                <form>
                    <div className="form-group row">
                        <label for="inputEmail3" className="col-sm-2 col-form-label">Titulo:</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="inputEmail3" placeholder="Titulo del entreno" />
                        </div>
                    </div>
                    <div class="row">
                        <div className="col" style={dateForm}>

                            <label for="inputPassword3" className="col-sm-2 col-form-label" style={dateForm}>Fecha:</label>
                            <div className="col-sm-10" >
                                <input type="date" className="form-control" id="inputPassword3" />
                            </div>
                        </div>

                        <div className="col" style={timeForm} >
                            <label for="inputPassword3" className="col-sm-2 col-form-label" >Hora:</label>
                            <div className="col-sm-10">
                                <input type="time" className="form-control" id="inputPassword3" placeholder="Entreno a las" />
                            </div>
                        </div>
                    </div>



                    <h2>Series Programadas</h2>
                    <table class="table table-sm">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Serie</th>
                                <th scope="col">Creada</th>
                                <th scope="col">Accion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>10x50 e:Crawl s:Patada m:Tabla p:1:30</td>
                                <td>hace 1 minuto</td>
                                <td><button className="btn btn-danger">Eliminar</button></td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>10x50 e:Crawl s:Patada m:Tabla p:1:30</td>
                                <td>hace 1 minuto</td>
                                <td><button className="btn btn-danger">Eliminar</button></td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>10x50 e:Crawl s:Patada m:Tabla p:1:30</td>
                                <td>hace 1 minuto</td>
                                <td><button className="btn btn-danger">Eliminar</button></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="form-group row">
                        <div className="col-sm-10">
                            <Link to="/addSerie" className="btn btn-success " >Agregar Otra Serie</Link>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label for="inputPassword3" className="col-sm-2 col-form-label">Comentarios</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="inputPassword3" placeholder="¿Comentarios o intrucciones extra?" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="col-sm-10">
                            <Link to="/workouts" className="btn btn-primary btn-lg">Guardar Entrenamiento</Link>
                        </div>
                    </div>


                </form>
            </div >
        )
    }
}

const dateForm = {
    minWidth: "200px"
}

const timeForm = {
    maxWidth: "200px"
}
