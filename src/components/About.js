import React from 'react'
import "./About.css"

const About = () => {
  return (
    <>
    <div style={{ margin: `50px`, display: `flex`, flexDirection: `row`, justifyContent: `center` }}>
    <div className="e-card e-card-horizontal" style={{ width: `400px` }}>
        <img src="./Code.png" alt="Sample" style={{ height: `180px` }}/>
        <div className="e-card-stacked">
            <div className="e-card-header">
                <div className="e-card-header-caption">
                    <div className="e-card-header-title">Social Project Club</div>
                </div>
            </div>
            <div className="e-card-content">
             It is not your job to save everyone.
             Some people are not even ready to be helped. 
             Focus on being of service to those who are, 
             and be wise and humble enough to know when the best service
             you can offer is to guide them toward help in another direction.
            </div>
        </div>
    </div>
  </div>
     
    </>
  )
}

export default About



/*

 <div className='container my-5 card-style'>
      <div className='card'>
        <div className='card-header'>
          <b><i>About Us</i></b>
        </div>
        <div className='card-body'>
          <p>
          It is not your job to save everyone. 
          Some people are not even ready to be helped. 
          Focus on being of service to those who are, 
          and be wise and humble enough to know when the best service
           you can offer is to guide them toward help in another direction.
          </p>
          <footer class="blockquote-footer">Social Project Club </footer>
        </div>
      </div>
      </div>
    
*/
