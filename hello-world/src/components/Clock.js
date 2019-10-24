import React from "react"
import "./clock.css"
export class Clock extends React.Component{
    render() {
        return (
            <div className={"clock"}>
                <h1>Clock</h1>
                <h2> Saat = {this.props.date.toLocaleTimeString()}</h2>
            </div>
        )
    }

}