import React, { Component } from 'react'
import Title from "../components/Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
export default class Services extends Component {
    state = {
        tab:[
            {
                icon: <FaCocktail />,
                title: "Free Cocktails",
                info:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero"
            },
            {
                icon: <FaHiking />,
                title: "Free Free Shuttle",
                info:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero"
            },
            {
                icon: <FaShuttleVan />,
                title: "Free Endless Hiking",
                info:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero"
            },
            {
                icon: <FaBeer />,
                title: "Free Beer",
                info:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero"
            }
        ]
    };
    render() {
        return (
           <div className="services">
             <Title help="Services"/>
               <div className="services-center"> 
             
                   {this.state.tab.map((obj,i)=>{
                   return(
                       < artical key={i}>
                       <span>{obj.icon}</span>
                       <h6>{obj.title}</h6>
                       <p>{obj.info}</p>
                       </artical>
                   )
                   })}
               </div>
           </div>
        )
    }
}
