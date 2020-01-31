import React, { Component, createRef } from 'react'

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faPlay, faStepForward, faStepBackward, faPause } from '@fortawesome/free-solid-svg-icons'

//import Countdown, { zeroPad, calcTimeDelta, formatTimeDelta } from 'react-countdown'
import TimerDispay from './TimerDispay.js'

import series from '../sample/series.json'

const countdownRef = createRef();

export default class SerieInfo extends Component {


    state = {
        series: series,
        serieIndex: 0,
        lapIndex: 0,
        step: 0
    }

    componentDidMount() {
        const step = this.state.series[this.state.serieIndex].step
        this.setState({ step: step })

    }



    nextSerie = () => {

        this.setState({ serieIndex: this.state.serieIndex + 1 })
        console.log('siguente serie')
    }

    prevSerie = () => {
        this.setState({ serieIndex: this.state.serieIndex - 1 })
        console.log('serie anterior')
    }


    nextLap = () => {
        this.setState({ lapIndex: this.state.lapIndex + 1 })

    }
    prevLap = () => {
        this.setState({ lapIndex: this.state.lapIndex - 1 })
    }

    handleStart = () => {
        console.log('starting ...')
        countdownRef.current.start();
    }
    handlePause = () => {
        console.log('pausing...')
        countdownRef.current.pause()
    }
    render() {
        const series = this.state.series
        const iSerie = this.state.serieIndex
        const iLap = this.state.lapIndex
        return (
            <div>
                <div className="d-flex justify-content-between">
                    <button onClick={this.prevSerie} >Serie <br /> anterior</button>
                    <p>Serie:  {iSerie + 1} de {series.length} </p>
                    <button onClick={this.nextSerie} >Serie <br /> siguiente</button>
                </div>
                <p>Largo: {iLap + 1} de {series[iSerie].laps}</p>
                <div className="d-flex justify-content-around">
                    <p>{series[iSerie].style}</p>
                    <p>{series[iSerie].subStyle}</p>
                    <p>{series[iSerie].material}</p>
                </div>
                <p>{series[iSerie].distance} m</p>
                <TimerDispay step={series[iSerie].step}/>
                
            </div>
        )
    }
}
