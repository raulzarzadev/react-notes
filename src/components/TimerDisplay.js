import React, { Component } from 'react'
import NewCountdown from './NewCountdown'

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faStepForward, faStepBackward, faFastForward, faFastBackward } from '@fortawesome/free-solid-svg-icons'

import seriesDB from '../sample/series.json'


export default class TimerDisplay extends Component {


    state = {
        series: seriesDB,
        serieIndex: 0,
        lapIndex: 0,
        step: 0,
    }





    nextSerie = () => {

        if (this.state.serieIndex < this.state.series.length - 1) {
            this.setState({ serieIndex: this.state.serieIndex + 1 })
            this.setState({ lapIndex: 0 })
            console.log('siguente serie')
        } else {
            console.log('ultima serie')
        }
    }

    prevSerie = () => {
        if (this.state.serieIndex === 0) {
            console.log('Primer serie')
        } else {
            this.setState({ lapIndex: 0 })

            this.setState({ serieIndex: this.state.serieIndex - 1 })
            console.log('serie anterior')
        }
    }

    nextLap = () => {
        const laps = this.state.series.map(serie => serie.laps)
        console.log(laps[this.state.serieIndex])
        if (this.state.lapIndex > laps[this.state.serieIndex] - 2) {
            console.log('ultima vuelta')
        } else {
            this.setState({ lapIndex: this.state.lapIndex + 1 })
            console.log('siguiente vuelta')
        }

    }
    prevLap = () => {
        if (this.state.lapIndex === 0) {
            console.log('primera vuelta')
        } else {
            this.setState({ lapIndex: this.state.lapIndex - 1 })
        }
    }





    /* ----- RENDER HERE ---- */

    render() {

        const series = this.state.series
        const iSerie = this.state.serieIndex
        const iLap = this.state.lapIndex

        return (
            <div className="container">
                <div className="card-body text-center">

                    <div className="d-flex justify-content-between">
                        <button className="btn" onClick={this.prevSerie} ><Icon icon={faFastBackward} size="3x" /></button>
                        <p>Serie: <br /> <strong className="strong-countdown">{iSerie + 1} </strong > de <strong className="strong-countdown"> {series.length}</strong> </p>
                        <button className="btn" onClick={this.nextSerie} ><Icon icon={faFastForward} size="3x" /></button>
                    </div>
                    <h1>{series[iSerie].distance} m</h1>
                    <div className="d-flex justify-content-around">
                        <p><strong className="strong-countdown">{series[iSerie].style}</strong></p>
                        <p><strong className="strong-countdown">{series[iSerie].subStyle}</strong></p>
                        <p><strong className="strong-countdown">{series[iSerie].material}</strong></p>
                    </div>
                    <p>{series[iSerie].coments}</p>
                </div>
                <div className="text-center">
                    <div className="d-flex justify-content-around ">
                        <button className="btn btn-primary" onClick={this.prevLap}><Icon icon={faStepBackward} size="2x" /></button>
                        <p>Vuelta: <br /> <strong className="strong-countdown">{iLap + 1} </strong> de <strong className="strong-countdown">{series[iSerie].laps}</strong></p>
                        <button className="btn btn-primary" onClick={this.nextLap}><Icon icon={faStepForward} size="2x" /></button>
                    </div>
                    <NewCountdown />
                </div>

            </div>
        )
    }

}