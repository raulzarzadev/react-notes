import mobiscroll from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';

class App extends React.Component {
    constructor(props) {
        super(props);

         this.state = {
           lapsNr: 1,
		   laps: []
         };
    }
    
    onReset = () => { 
        this.setState({
            lapsNr: 1,
			laps: []
		});
    }
    
    onLap = (event, inst) => {
        function format(ms) {
            var minutes = Math.floor(ms / (1000 * 60)),
                seconds = Math.floor((ms - minutes * 1000 * 60) / 1000),
                fract = Math.floor((ms - minutes * 1000 * 60 - seconds * 1000) / 10);

            return minutes + 'm ' + (seconds < 10 ? '0' : '') + seconds + 's.' + (fract < 10 ? '0' : '') + fract;
        }				
			this.state.laps.splice(0, 0, {
				id: this.state.lapsNr,
				lap: format(event.lap),
				ellapsed: format(event.ellapsed)
			});
			
			this.state.lapsNr+=1;
			var state = this.state;
			this.setState(state);
    }
    
    render() {
		var laps = this.state.laps;
        return (
            <div>
                <mobiscroll.Timer
                    ref="timer"
                    theme="ios" 
                    themeVariant="light"
                    lang="es"
                    display="inline"
                    step={0.01}
                    rows={3}
                    buttons={['start', 'reset', 'lap']}
                    onReset={this.onReset}
                    onLap={this.onLap}
                    mode="stopwatch"
                    type="hidden"
                />
                <table id="laps">
					<tbody>
						{ laps.map(function(lap) {
							return <tr key={lap.id}>
    							<td>#{lap.id}</td>
    							<td>{lap.lap}</td>
    							<td>{lap.ellapsed}</td>
    						</tr>;
						}) }
					</tbody>
				</table>
            </div>
        );
    }    
}
