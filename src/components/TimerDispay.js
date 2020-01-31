import React, { Component } from 'react'
import Timer from 'react-compound-timer'


import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faPlay, faStop, faStepForward, faStepBackward, faPause } from '@fortawesome/free-solid-svg-icons'


export default class TimerDisplay extends Component {

    setStyleProgressBar () {
        return {
            width : "95%"
        }
    }

    render() {
        //console.log(this.props.step)
        return (
            <div>

                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated"
                        role="progressbar"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"

                        style={progresBar}>
                    </div>
                </div>
                <Timer
                    initialTime={this.props.step}
                    startImmediately={false}
                    direction="backward"
                    lastUnitq="ms"
                    timeToUpdate={1}
                    onStop={() => console.log('stop') }
                    checkpoints={
                        [
                            {
                                time: this.props.step,
                                callback: () => console.log('inicio')
                            },
                            {
                                time: '5000',
                                callback: () => console.log('5000')
                            }
                            
                        ]
                    }
                >
                    {({ start, resume, pause, stop, reset, timerState }) => (
                        <React.Fragment>
                            <div>
                                <Timer.Milliseconds />
                            </div>
                            <div>{timerState}</div>
                            <br />
                            <div>
                                <button onClick={start}>Start</button>
                                <button onClick={pause}>Pause</button>
                                <button onClick={resume}>Resume</button>
                                <button onClick={stop}>Stop</button>
                                <button onClick={reset}>Reset</button>
                            </div>
                        </React.Fragment>
                    )}
                </Timer>
            </div>
        )
    }
}

const progresBar = {
    width : "10%"
}
