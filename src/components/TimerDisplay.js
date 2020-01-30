import React, { Component } from 'react'
//import TimerLabel from 'react-compound-timer'
import Countdown from 'react-countdown'
import Timer from './Timer.js'
import SerieInfo from './SerieInfo.js'



import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faPlay, faStop, faStepForward, faStepBackward, faPause } from '@fortawesome/free-solid-svg-icons'


export default class TimerDisplay extends Component {

    render() {
        return (
            <div className="container">
                <h1>Display</h1>
                <SerieInfo />
                <Timer />
            </div>
        )
    }
}