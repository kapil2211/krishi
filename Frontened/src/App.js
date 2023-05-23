import "./App.css";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Jobs from "./components/Jobs";
import About from "./components/About";
import Wager from "./components/Wager";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Agrimachinery from "./components/Agrimachinery";
import Agris from "./components/Agris";
import Login from "./components/Login";
import Signup from "./components/Signup";
// import { messaging } from "./firebase";
// import { getToken } from "firebase/messaging";



function App() {
  // // these function will show a pop up of notification allowance
  // async function requestPermission() {
  //   const permission = await Notification.requestPermission();
  //   if (permission === "granted") {
  //     // generate token
  //     const token = await getToken(messaging, {
  //       vapidKey:
  //         "BDJ79zbVoTZmHQ1JeaSs8AoxODMJKqVoIG8v_csYlzDfT236QZRaUduuHDVPJ7ANc_AnCqp2WJ-Lh7tHREc39Qc",
  //     });
  //     console.log("Token generated", token);
  //   } else if (permission === "denied") {
  //     alert("you denied for the notificatin ");
  //   }
  // }

  // useEffect(() => {
  //   requestPermission();
  // }, []);

  
  let initJob;
  if (localStorage.getItem("jobs") === null) {
    initJob = [];
  } else {
    initJob = JSON.parse(localStorage.getItem("jobs"));
  }

  const onDelete = (job) => {
    setJobs(
      jobs.filter((e) => {
        return e !== job;
      })
    );
    localStorage.setItem("jobs", JSON.stringify(jobs));
  };

  const addJob = (
    fstName,
    lstName,
    emailId,
    contactNo,
    address,
    District,
    state,
    Wagers,
    work
  ) => {
    let sno;
    if (jobs.length === 0) {
      sno = 0;
    } else {
      sno = jobs[jobs.length - 1].sno + 1;
    }
    const myJob = {
      sno: sno,
      fstName: fstName,
      lstName: lstName,
      contactNo: contactNo,
      emailId: emailId,
      address: address,
      District: District,
      state: state,
      Wagers: Wagers,
      work: work,
    };
    setJobs([...jobs, myJob]);
  };

  const [jobs, setJobs] = useState(initJob);
  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);




  let initAgri;
  if (localStorage.getItem("agris") === null) {
    initAgri = [];
  } else {
    initAgri = JSON.parse(localStorage.getItem("agris"));
  }

  const onDelete2 = (Agri) => {
    setAgris(
      agris.filter((e) => {
        return e !== Agri;
      })
    );
    localStorage.setItem("agris", JSON.stringify(agris));
  };

  const addAgri = (
    fstName,
    lstName,
    emailId,
    contactNo,
    address,
    District,
    state,
    NumberofMachine,
    machine
  ) => {
    let sno;
    if (agris.length === 0) {
      sno = 0;
    } else {
      sno = agris[agris.length - 1].sno + 1;
    }
    const myAgri = {
      sno: sno,
      fstName: fstName,
      lstName: lstName,
      contactNo: contactNo,
      emailId: emailId,
      address: address,
      District: District,
      state: state,
      NumberofMachine: NumberofMachine,
      machine: machine,
    };
    setAgris([...agris, myAgri]);
  };

  const [agris, setAgris] = useState(initAgri);
  useEffect(() => {
    localStorage.setItem("agris", JSON.stringify(agris));
  }, [agris]);




  
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route
              exact
              path="/job"
              render={() => {
                return (
                  <>
                    <Jobs jobs={jobs} onDelete={onDelete} />
                  </>
                );
              }}
            ></Route>
            <Route
              exact
              path="/wager"
              render={() => {
                return (
                  <>
                    <Wager addJob={addJob} />
                  </>
                );
              }}
            ></Route>
            <Route
              exact
              path="/mach"
              render={() => {
                return (
                  <>
                    <Agris agris={agris} onDelete={onDelete2} />
                  </>
                );
              }}
            ></Route>
            <Route
              exact
              path="/machines"
              render={() => {
                return (
                  <>
                    <Agrimachinery addAgri={addAgri} />
                  </>
                );
              }}
            ></Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/signup">
              <Signup></Signup>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
