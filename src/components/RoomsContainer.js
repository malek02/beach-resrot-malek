import React, { Component } from 'react';
import RoomsList from "./RoomsList";
import {firstContext} from "../context";
import Loading from './Loading';
import FilterRooms from './FilterRooms';



export default class RoomsContainer extends Component {


    static contextType = firstContext;


    render() {
        const {allRoom,defienRomms,loading,maleFunction}=this.context;

  if(loading) {
      return <Loading />;
  }
        return (
            <div>
          <FilterRooms samir={allRoom} amira={maleFunction} />
               <RoomsList samira={defienRomms} /> 
            </div>
        )
    }
}
