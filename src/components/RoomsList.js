import React, { Component } from 'react'
import Room from './Room'

export default class RoomsList extends Component {
    render() {

        return (
            <section className="roomslist">
                <div className="roomslist-center">
                    {this.props.samira.map(amira => (
                        <Room key={amira.id} sami={amira} />
                    ))}
                </div>
            </section>
        )
    }
}
