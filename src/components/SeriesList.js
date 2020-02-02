import React, { Component } from 'react'

export default class SeriesList extends Component {
    render() {
        const { series } = this.props
        console.log(series)

        return series.map((serie => <div className="container" key={serie.id}>

            <table class="table">

                <tbody>
                    <tr>
                        <th  scope="row">{serie.id}</th>
                        <td className="w-25">{serie.laps} X {serie.distance} {serie.style}  {serie.subStyle} <br/> {serie.material}  <br/> {serie.step} / {serie.rest}</td>
                        <td className="w-75">{serie.coments}</td>

                    </tr>
                </tbody>
            </table>
        </div>))
    }
}
