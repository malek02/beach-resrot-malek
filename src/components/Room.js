import React from 'react';
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import { memo } from "react";
import PropTypes from "prop-types";

const Room= memo(({ sami }) => {
    const {price,imagelist,slug,name}= sami;
   

        return (
            
           <artical className="room">
               <div className="img-container">
                   <img src={imagelist[0] || defaultImg } alt="sfok " />
            <div className="price-top">
                <h6>${price}</h6>
                <p>per night</p>
            </div>
            <Link to={`/rooms/${slug}`} className="btn-primary room-link">
                Features
            </Link>
               </div>
               <p className="room-info">{name}</p>
           </artical>
                
            
        )
    });
    Room.propTypes = {
        room: PropTypes.shape({
          name: PropTypes.string.isRequired,
          slug: PropTypes.string.isRequired,
          images: PropTypes.arrayOf(PropTypes.string).isRequired,
          price: PropTypes.number.isRequired
        })
      };

    export default Room;