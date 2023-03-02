import React from "react";
// import { Link } from "react router dom";
import "./Home.css";
export const Home = () => {
    return (
        <>
            <div className="home-page BackGround">
                <h2>Welcome to Krishi Home</h2>
            </div>
            <div>
                <div className="card" style={{ width: '30rem' }}>
                    <img src="D:\learnwebdevreact\firstpro\src\img\firstpro1.jpg" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;

/*
   {/* <div className="card my-6 mx-5" style={{ width: "20rem" }}>
          <div className="image">
            <img alt="" className="card-img-top " />
          </div>
          <div className="card-body">
            <h4 className="card-title">Manrega Updates</h4>
            <p className="card-text">
              full information about Manrega jobs and updates regarding it!!!
            </p>
            <a href="/" className="btn btn-success">
              Manrega Jobs
            </a>
          </div>

        </div> */
