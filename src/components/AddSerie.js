import React, { Component } from 'react'

export default class AddSerie extends Component {
    render() {
        return (
            <div className="container text-center">
                <h2 className="my-4">Agrega una o varias series al entrenamiento</h2>
                <form>
                    <div className="col-md-6 offset-md-3">
                        <br />

                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect2"><h3>creadas por ti</h3></label>
                            <select multiple className="form-control" id="exampleFormControlSelect2">
                                <option>Serie comleta quese muestra hace 1 minto</option>
                                <option>Serie comleta quese muestra hace 1 minto</option>
                                <option>Serie comleta quese muestra hace 1 minto</option>
                                <option>Serie comleta quese muestra hace 1 minto</option>
                                <option>Serie comleta quese muestra hace 1 minto</option>
                                <option>Serie comleta quese muestra hace 1 minto</option>
                            </select>
                        </div>
                        <br /><br />
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect2"><h3>creadas por la comunidad</h3></label>
                            <select multiple className="form-control" id="exampleFormControlSelect2">
                                <option>Serie comleta quese muestra hace 1 minto</option>
                                <option>Serie comleta quese muestra hace 1 minto</option>
                                <option>Serie comleta quese muestra hace 1 minto</option>
                                <option>Serie comleta quese muestra hace 1 minto</option>
                                <option>Serie comleta quese muestra hace 1 minto</option>
                                <option>Serie comleta quese muestra hace 1 minto</option>
                            </select>
                        </div>
                        <button className="btn btn-primary btn-block my-4">Agregar al Entrenamiento</button>
                    </div>
                </form>
            </div>
        )
    }
}
