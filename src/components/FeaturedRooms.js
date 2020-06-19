import React, { Component } from 'react'
import {firstContext} from "../context";
import Loading from "./Loading";
import Title from "./Title";
import Room from "./Room";
export default class FeaturedRooms extends Component {


    static contextType = firstContext;

    render() {
        const { loading, featuredRooms }=this.context;
        let listfeatromm= featuredRooms.map(featroom=>{
            return(
                <Room key={featroom.id} sami={featroom} />
            )
        })
        
        return (
            <section className="featured-rooms">
            <Title help="featuredRooms"/>
            <div className="featured-rooms-center">
              { loading ? <Loading /> : listfeatromm }
            </div>
            </section>
        )
    }
}
