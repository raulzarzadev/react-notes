import React, { Component } from 'react'

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faPlay, faStop, faStepForward, faStepBackward } from '@fortawesome/free-solid-svg-icons'


export default class Timer extends Component {




    render() {
        const serie = this.props.series.filter(serie => serie.id === 2)
        console.log()
        return (
            <div style={backraoundColor} className="container text-center">
                <div>


                    <p>Largos: <strong className="miniCrono">1</strong > de  <strong className="miniCrono">{serie[0].laps}</strong></p>
                    <p className="crono">{serie[0].distance} <strong className="miniCrono">m</strong></p>
                    <div className="d-flex justify-content-around">
                        <p>Patada</p>
                        <p>Crawl </p>
                        <p>Tabla</p>
                    </div>

                    <div>
                        <p className="crono">{serie[0].step}</p>
                        <strong className="miniCrono">{serie[0].step}</strong>
                    </div>

                    <p>{serie[0].coments}</p>
                </div>
                <div className="d-flex justify-content-around mt-3 rep-box" >
                    <button><Icon icon={faStepBackward} size="2x" /></button>
                    <button><Icon icon={faStop} size="2x" /></button>
                    <button><Icon icon={faPlay} size="2x" /></button>
                    <button><Icon icon={faStepForward} size="2x" /></button>
                </div>
                <div className="d-flex justify-content-between mt-3">
                    <button>Serie <br /> anterior</button>
        <p>Serie <br /> 1 de {this.props.series.length}</p>
                    <button>Serie <br /> siguiente</button>
                </div>
            </div>
        )
    }
}

const backraoundColor = {
    backraoundColor: 'red'
}
