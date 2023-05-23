//import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react'
import { toast } from "react-hot-toast";
import { BiShow, BiHide } from "react-icons/bi";
import {Link,  useHistory} from "react-router-dom";

const Signup = () => {
  const navigate = useHistory();
  

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

    const [showPassword, setShowPassword] = useState(false);

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleShowPassword = () => {
      setShowPassword((preve) => !preve);
    };

    const handleShowConfirmPassword = () => {
      setShowConfirmPassword((preve) => !preve);
    };

    const handleOnChange = (e) => {
      const { name, value } = e.target;
      setData((preve) => {
        return {
          ...preve,
          [name]: value,
        };
      });
    };
  
    console.log(process.env.REACT_APP_SERVER_DOMIN)
    const handleSubmit= async(e)=>{
      e.preventDefault();
    const { firstName, email, password, confirmPassword } = data;
    if (firstName && email && password && confirmPassword) {
      if (password === confirmPassword) {
    
          const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/signup`,{
            method : "POST",
            headers : {
              "content-type" : "application/json"
            },
            body : JSON.stringify(data)
          })

          const dataRes = await fetchData.json()
          console.log(dataRes)

        // alert(dataRes.message);
        // toast(dataRes.message)
        // if(dataRes.alert){
        //   navigate("/login");
        // }
       
      } else {
        alert("password and confirm password not equal");
      }
    } else {
      alert("Please Enter required fields");
    }
    };


  return (
      <div className=" d-flex  justify-content-center " style={{color : '#34495E ',  paddingTop:'3rem',}} >
        <div style={{width:'25rem' ,paddingBottom:'5px', color:'#212F3D', backgroundColor:'#979A9A'}} >

        <h2>SignUp</h2>
          <form className="mb-3 mt-2 pl-2 pb-2" onSubmit={handleSubmit}>
            <div>
            <label htmlFor='firstname'>First name</label>
            <input
            type={"text"}
            id="firstName"
            name="firstName"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.firstName}
            onChange={handleOnChange}
            placeholder='Enter Your first name'
          />
            </div>
            
           <div>
           <label htmlFor="lastName">Last Name</label>
          <input
            type={"text"}
            id="lastName"
            name="lastName"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.lastName}
            onChange={handleOnChange}
            placeholder='Enter Your last name'
          />
           </div>

           <div>
           <label htmlFor="email" className="form-label">Email</label>
          <input
            type={"email"}
            id="email"
            name="email"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.email}
            onChange={handleOnChange}
            placeholder='Enter Your Email'
          />
           </div>
            
           
           <div >
           <label htmlFor="password">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
              value={data.password}
              onChange={handleOnChange}
              placeholder='Enter Your password'
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowPassword}
            >
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>


         
          <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2  focus-within:outline focus-within:outline-blue-300">
          <label htmlFor="confirmpassword">Confirm Password</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmpassword"
              name="confirmPassword"
              className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
              value={data.confirmPassword}
              onChange={handleOnChange}
              placeholder='Confirm Your password'
              
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowConfirmPassword}
            >
              {showConfirmPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <button  type="button" className="btn btn-success" >submit</button>
          </form>
          <p className="text-left text-sm mt-2">
          Already have account ?{" "}
          <Link to={"/login"} className="text-red-500 underline">
            Login
          </Link>
        </p>
        </div>
      </div>
  );
}

export default Signup;


// <div className=" d-flex align-items-center justify-content-center " style={{color : '#34495E ',  paddingTop:'5rem', }}>
// <form>  
// <div className=" card auth-card input-field mt-2 align-items-center   "   style={{width:'25rem' ,paddingBottom:'5px', color:'#212F3D', backgroundColor:'#979A9A'}} >
//     <h2>SignUp</h2>

//     <div className="mb-3 mt-2 pl-2 pb-2 ">
//     <label htmlFor="name" className="form-label">Name</label>
//     <input onChange={(event)=>setdata((prev)=>({...prev , name:event.target.value}))} type="name" className="form-control" id="name" aria-describedby="nameHelp" placeholder='Enter Your Name'/>
//     </div>

//     <div className="mb-3 mt-2 pl-2 pb-2">
//     <label htmlFor="email" className="form-label">Email address</label>
//     <input onChange={(event)=>setdata((prev)=>({...prev , email:event.target.value}))} type="email" className="form-control" id="email" aria-describedby="emailHelp"  placeholder='Enter Your Email'/>
//     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//     </div>
    

//     <div className="mb-3">
//     <label htmlFor="password" >Password</label>
//     <input onChange={(event)=>setdata((prev)=>({...prev, pass:event.target.value}))} type="password" className="form-control" id="password"   placeholder='Enter password'/>
//     </div>


//     <div className="mb-3">
//     <label  htmlFor="cnfpassword" className="form-label">Confirm Password</label>
//     <input  onChange={(event)=>setdata((prev)=>({...prev, cnfpass:event.target.value}))}type="password" className="form-control" id="cnfpassword"  placeholder='Confirm Your password'/>
//     </div>

//     <div>
//      <b></b><br></br>
//    <button type="button" className="btn btn-success" onClick={handleSubmit}>submit</button>
//    <p>Already have an account ?
//    <span>
//    <a href="/login">Login</a>
//    </span>
//    </p>
//    </div>
    
//    </div>
// </form>

//  </div>
