import React from 'react'
import {JobItem} from "./JobItem";
 
const Jobs = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto"
}
  return (
    
     <div className="container" style={myStyle}>
     <h3 className="my-5" style={{fontWeight:"bold"}}>Jobs List</h3>
            {props.jobs.length===0? "No Jobs available":  
            props.jobs.map((job)=>{
                return (
                  <div>
                   
                    <JobItem job={job} key={job.sno} onDelete={props.onDelete}/>   
                    
                    
                  </div>
               
                )
            })
              }
      </div> 
    
  )
}

export default Jobs
