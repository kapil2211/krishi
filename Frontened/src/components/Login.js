//import { signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { BiShow, BiHide } from "react-icons/bi";
//import{auth} from"../firebase"
//import styles from './Login.css';

import {toast} from "react-hot-toast"
//import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginRedux } from "../redux/userSlice";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useHistory()  
  const userData = useSelector(state => state)


  const dispatch = useDispatch()

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    if (email && password) {
      const fetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMIN}/login`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const dataRes = await fetchData.json();
      console.log(dataRes);

      toast(dataRes.message)

      if(dataRes.alert){
        dispatch(loginRedux(dataRes))
        setTimeout(() => {
          navigate("/")
        }, 1000);
      }

      console.log(userData)
    } else {
      alert("Please Enter required fields");
    }
  };

  return (
    <div
      className=" d-flex align-items-center justify-content-center "
      style={{ color: "#34495E ", paddingTop: "5rem" }}
    >
      <div
        className=" card auth-card input-field align-items-center "
        style={{
          width: "25rem",
          paddingBottom: "5px",
          color: "#212F3D",
          backgroundColor: "#979A9A",
        }}
      >
        <h2>Login</h2>

        <form className="mb-3 mt-2 pl-2 pb-2" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type={"email"}
              id="email"
              name="email"
              className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
              value={data.email}
              onChange={handleOnChange}
              placeholder="Enter Your Email"
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
              value={data.password}
              onChange={handleOnChange}
              placeholder="Enter Your password"
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowPassword}
            >
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <button type="button" className="btn btn-success">
            submit
          </button>
        </form>

        <div>
          <p>
            Don't have an account ?
            <span>
              <Link to="/signup">Sign Up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

// margin-bottom: '15px', padding-right: '15px',
//     padding-left: '15px',
//     flex: '1',
//     max-width: '50%',
//     flex-basis: '50%'
