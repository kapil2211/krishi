import React, { useState } from 'react';
import { BiShow, BiHide } from "react-icons/bi";
import {Link} from "react-router-dom";
import {toast} from "react-hot-toast"

const Login = () => {
  const[showPassword,setShowPassword]= useState(false);
  const[data,setData]=useState({
    email:"",
    password:"",
  });

  const handleOnChange = (e)=>{
    const {name,value} = e.target
    setData((preve)=>{
        return{
            ...preve,
            [name] : value
        }
    })
  }
  
  
  const handleSubmit = async(e)=>{
    e.preventDefault()
    const {email,password} = data
    if(email && password ){
      const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/login`,{
        method : "POST",
        headers : {
          "content-type" : "application/json"
        },
        body : JSON.stringify(data)
      })

      const dataRes = await fetchData.json()
      console.log(dataRes)
      
      toast(dataRes.message)
      
      // if(dataRes.alert){
      //   dispatch(loginRedux(dataRes))
      //   setTimeout(() => {
      //     navigate("/")
      //   }, 1000);
      // }

      // console.log(userData)
    }
    else{
        alert("Please Enter required fields")
    }
  }
  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };
  return (
    <div className=" d-flex  justify-content-center " style={{color : '#34495E ',  paddingTop:'3rem',}} >
      <div style={{width:'25rem' ,paddingBottom:'5px', color:'#212F3D', backgroundColor:'#979A9A'}} >
         <h1 className='text-center text-2xl font bold'> LOGIN</h1>
         <form className='w-full py-3 flex flex-col' onSubmit={handleSubmit}>

          <div>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' name='email' value={data.email}  placeholder='Enter Your Email'onChange={handleOnChange} className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300'></input>
          </div>

          <div>
          <label htmlFor='password'>Password</label>
          <input type={showPassword ? "text" : "password"} id='password' name='password' placeholder='Enter Your password' onChange={handleOnChange} value={data.password} className=' w-full bg-slate-200 border-none outline-none' ></input>
          <span
            className="flex text-xl cursor-pointer"
            onClick={handleShowPassword}
          >
             {showPassword ? <BiShow /> : <BiHide />}
             </span>
          </div>

         <div className='py-3' > 
         <button  type="button" className="btn btn-success " >submit</button>
         </div>
          
         </form>
         <p className="text-left text-sm">
        Don't  have account ?{" "}
        <Link to={"/signup"} className="text-red-500 underline">
          Sign Up
        </Link>
      </p>
      </div>
      
    </div>
  )
}

export default Login


// margin-bottom: '15px', padding-right: '15px',
//     padding-left: '15px',
//     flex: '1',
//     max-width: '50%',
//     flex-basis: '50%'
