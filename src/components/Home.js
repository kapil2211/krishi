import React from "react";
// import { Link } from "react router dom";
import "./Home.css";
//import farming from "../assets/farming.mp4";
export const Home = () => {
  return (
    <>
      <div >
        < div style={{ display: "flex",alignItems: "center",justifyContent: "center",height: "100vh",}} >
          <div>
          <h1 style={{ color:'black' }}>Welcome To<br></br> INNOVATIVE Farming</h1>
          </div>
          
          <div>
          <p ><b>
           IT is a platform that provides information and resources<br></br> 
           for farmers to enhance their agricultural practices.</b></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
