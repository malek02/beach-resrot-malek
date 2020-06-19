import React, { Component } from 'react'

export default class Hero extends Component {
    render() {
        return (
            <header className={this.props.helo}>
                {this.props.children}
            </header>
        )
    }
}
