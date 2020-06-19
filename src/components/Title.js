import React, { Component } from 'react'

export default class Title extends Component {
    render() {
        return (
            <div className="section-title">
                <h4>{this.props.help}</h4>
                <div/>
            </div>
        )
    }
}
