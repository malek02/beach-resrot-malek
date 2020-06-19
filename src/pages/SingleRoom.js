import React, { Component } from 'react';
import {firstContext} from "../context";
import { Link } from 'react-router-dom';

import Banner from '../components/Banner';
import StyleHero from "../components/StyleHero";

export default class SingleRoom extends Component {

state={
    slug:this.props.match.params.slug
}

static contextType = firstContext;
    render() {
        const {hepy,allRoom}=this.context;
     const rami= hepy(this.state.slug)
    console.log(rami)
     if(!rami){
        return(
            <div className="error">
            <h3>no such room could find</h3>
            <Link to="/rooms" className="btn-primary">
                back to rooms
            </Link>
            </div>
        )}
        return (
            <>
            <StyleHero img={rami.imagelist[0]}>
            
              <Banner title={`${rami.name} room`}>
              
<Link to="/rooms" className="btn-primary">
    Back to Rooms
</Link>
              </Banner>
            </StyleHero >
            <section className="single-room">
          <div className="single-room-images">
            {rami.imagelist.map((item, index) => (
              <img key={index} src={item} alt={allRoom.name} />
            ))}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{rami.description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : ${rami.price}</h6>
              <h6>size : {rami.size} SQFT</h6>
              <h6>
                max capacity :
                {rami.capacity > 1 ? `${rami.capacity} people` : `${rami.capacity} person`}
              </h6>
              <h6>{rami.pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{rami.breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {rami.extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </section>
        
     
        </>
        )
        
    
    }
}
