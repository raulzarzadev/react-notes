import React, { Component } from 'react'

export default class SerieForm extends Component {
    render() {
        return (
            <div className="container text-center my-5">
                <form>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <select className="form-control">
                                    <option>Repeticiones</option>
                                </select>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <select className="form-control">
                                    <option>Distancia</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <select className="form-control">
                                    <option>Estilo</option>
                                </select>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <select className="form-control">
                                    <option>Sub Estilo</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <select className="form-control">
                                    <option>Material</option>
                                </select>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <select className="form-control">
                                    <option>Paso</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <select className="form-control">
                                    <option>Descanso</option>
                                </select>
                            </div>
                        </div>
                        <div className="col">

                            <input className="form-control" type="text" placeholder="10x50 e:Crawl s:Patada m:Tabla p:1:30" readOnly />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">¿Alguna Instruccion Extra?</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <div className="form-check p-0">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label" htmlFor="gridCheck">
                                Compartir con la comunidad
                                </label>
                            <button type="submit" className="btn btn-primary btn-lg btn-block my-4">Guardar serie</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}