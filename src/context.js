import React, { Component } from 'react'
import objit from "./data";
const firstContext = React.createContext();

 class ContextProvider extends Component {
     state={
         allRoom:[],
         defienRomms:[],
         featuredRooms:[],
         loading: true,
         type: "all",
     }


     componentDidMount(){
         let rooms = this.HfrezHate(objit);
      
         let featuredRooms = rooms.filter(obj=>
             obj.featured === true
         )
         this.setState({
             allRoom:rooms,
             featuredRooms,
             defienRomms:rooms,
             loading:false
         })
     }
getRoom=(slug)=>{
    
   const sluglist= this.state.allRoom.find(room=>room.slug === slug);
   return(sluglist)
}

maleFunction=(array,value)=>{
    let hello = array.map(item=>{
        let hia=item.value
        return hia
    })
    return hello
    }


     HfrezHate=(obj)=>{
         let firstlist= obj.map(ob=>{
             let idlist = ob.sys.id;
             let imagelist= ob.fields.images.map(img=>
                img.fields.file.url);
                let room = { ...ob.fields, imagelist, idlist };
                return(room);
         });
         return(firstlist);

     }
   
      handleChange=(type)=>{
let tempo = [...this.state.allRoom];
if (type !== "all") {
    tempo = tempo.filter(room => room.type === type);
    this.setState({
        defienRomms: tempo
    });
  }

      }
        render() {
        return (
            <firstContext.Provider value={{...this.state, hepy:this.getRoom, maleFunction:this.maleFunction, handleChange: this.handleChange} }>
                {this.props.children}
            </firstContext.Provider>
                
        );
    }
}
const secondContext= firstContext.Consumer;
export {ContextProvider,firstContext,secondContext};