import React from 'react'
import {AgriItem} from "./AgriItem";
 
const Agris = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto"
}
  return (
    
     <div className="container" style={myStyle}>
     <h3 className="my-5" style={{fontWeight:"bold"}}>Application for AgriMachinery</h3>
            {props.agris.length===0? "No Request available":  
            props.agris.map((agri)=>{
                return (
                  <div>
                    <AgriItem agri={agri} key={agri.sno} onDelete={props.onDelete}/>   
                  </div>
                )
            })
              }
      </div> 
    
  )
}

export default Agris
