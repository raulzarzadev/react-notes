import React, { Component } from 'react'
import TimerLabel from 'react-compound-timer'



import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faPlay, faStop, faStepForward, faStepBackward, faPause } from '@fortawesome/free-solid-svg-icons'


export default class Timer extends Component {

    

    state = {
        serie: 0,
        lap: 0,
    }

    serieForward = () => {

        if (this.state.serie < this.props.series.length - 1) {
            this.setState({
                serie: this.state.serie + 1,
                lap: 0,
            })
        } else {
            alert('No hay mas series')
        }
    }

    serieBackward = () => {

        if (this.state.serie > 0) {
            this.setState({
                serie: this.state.serie - 1,
                lap: 0
            })
        } else {
            alert('Esta es la primera serie')
        }
    }

    lapFarward = () => {
        const serie = this.props.series.filter(serie => serie.id === this.state.serie)[0]

        if (this.state.lap < serie.laps - 1) {
            this.setState({ lap: this.state.lap + 1 })
        } else {
            alert('Esta es la ultima vuelta')
        }
    }

    lapBackward = () => {

        if (this.state.lap > 0) {
            this.setState({ lap: this.state.lap - 1 })
            
        } else {
            alert('Esta es la primera vuelta')
        }
    }

    stopCrono = () => {
        console.log('stoping...')
    }

    startCrono = () => {
        console.log('starting...')
    }





    render() {

        const serie = this.props.series.filter(serie => serie.id === this.state.serie)[0]
        console.log(serie)

        return (
            <div style={backraoundColor} className="container text-center">



                <div>
                    <p>Largos:
                        <strong className="miniCrono">
                            {this.state.lap + 1}
                        </strong >
                        de
                        <strong className="miniCrono">
                            {serie.laps}
                        </strong>
                    </p>
                    <p className="crono">{serie.distance} <strong className="miniCrono">m</strong></p>
                    <div className="d-flex justify-content-around">
                        <p>{serie.subStyle}</p>
                        <p>{serie.style} </p>
                        <p>{serie.step}</p>
                    </div>

                    {/* ---TIMER STARTS--- */}

                    <div>
                        
                        <TimerLabel
                            initialTime={serie.step}
                            startImmediately={false}
                            direction="backward"
                            timeToUpdate='1'
                                onStart={() => console.log('onStart hook')}
                                onResume={() => console.log('onResume hook')}
                                onPause={() => console.log('onPause hook')}
                                onReset={() => console.log('onReset hook')}
                        >
                            {({ start, pause, reset, getTimerState, getTime }) => (
                                <React.Fragment>
                                    
                                    <div className="crono">
                                        <TimerLabel.Minutes /> :
                                        <TimerLabel.Seconds /> 
                                    </div>
                                        <TimerLabel.Milliseconds />
                                    <div>{getTimerState()}</div>
                                    <br />
                                    <div>
                                        {/* BTN BACK */}
                                        <button onClick={this.lapBackward} >
                                            <Icon icon={faStepBackward} size="2x" />
                                        </button>
                                        
                                        
                                        {/* BTN RESET */}
                                        <button onClick={reset}>
                                            <Icon icon={faStop} size="2x"/>
                                        </button>
                                        {/* BTN PAUSE */}
                                        <button onClick={pause}>
                                            <Icon icon={faPause} size="2x" />
                                        </button>
                                        {/* BTN START */}
                                        <button onClick={start}>
                                            <Icon icon={faPlay} size="2x" />
                                        </button> 

                                            {/* BTN FARW */}
                                        <button onClick={this.lapFarward} >
                                            <Icon icon={faStepForward} size="2x" />
                                        </button>

                                    </div>
                                </React.Fragment>
                            )}
                        </TimerLabel>
                    </div>




                </div>

                {/* -- BOX OF LAPS REPRODUCCIONS */}

                <div className="d-flex justify-content-around mt-3 rep-box" >




                </div>

                {/* --COMENTS BOX-- */}

                <p>{serie.coments}</p>

                {/* -- BOX OF SERIES REPS-- */}

                <div className="d-flex justify-content-between mt-3">
                    <button onClick={this.serieBackward}>
                        Serie <br /> anterior
                    </button>
                    <p>
                        Serie <br />
                        <strong>{this.state.serie + 1} </strong>
                        de
                        <strong>{this.props.series.length}</strong>
                    </p>
                    <button onClick={this.serieForward}>
                        Serie <br /> siguiente
                    </button>
                </div>
            </div>
        )
    }
}

const backraoundColor = {
    backraoundColor: 'red'
}
