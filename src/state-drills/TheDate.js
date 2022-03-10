import React from "react"

export default class TheDate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {dateTime: new Date()}
    }

    render() {
        return(
            <div>
                {this.state.dateTime.toLocaleTimeString()} <br/>
                {this.state.dateTime.toLocaleDateString()}
            </div>
        )
    }
}