import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react'
import{auth} from"../firebase"

const Signup = () => {

    const [values,setValues] =useState({
        name:" ",
        email:" ",
        pass:" ",
        cnfpass:" ",
    });
    
    const [errorMsg, setErrorMsg] =useState(" ");
    const [submitButtonDisabled, setSubmitButtonDisabled] =useState(false);

    const handleSubmit=()=>{
        if(!values.name || !values.email|| !values.pass||  !values.cnfpass){
            setErrorMsg(" fill all the fields");
            return;
        }
        
        setErrorMsg("");
        console.log(values);
        
        setSubmitButtonDisabled(true);
        createUserWithEmailAndPassword(auth,values.email, values.pass)
          .then(async(res)=>{
            setSubmitButtonDisabled(false);
           const user=res.user;
           await updateProfile(user,{
            displayName: values.name,
           })
         
          })
          .catch((err)=> {
            setSubmitButtonDisabled(false);
            setErrorMsg(err.message);
        });
    };


  return (
    <div className=" d-flex align-items-center justify-content-center " style={{color : '#34495E ',  paddingTop:'5rem', }}>
     
      <div className=" card auth-card input-field mt-2 align-items-center   "   style={{width:'25rem' ,paddingBottom:'5px', color:'#212F3D', backgroundColor:'#979A9A'}} >
         <h2>SignUp</h2>

         <div className="mb-3 mt-2 pl-2 pb-2 ">
         <label htmlFor="name" className="form-label">Name</label>
         <input onChange={(event)=>setValues((prev)=>({...prev , name:event.target.value}))} type="name" className="form-control" id="name" aria-describedby="nameHelp" placeholder='Enter Your Name'/>
         </div>

         <div className="mb-3 mt-2 pl-2 pb-2">
         <label htmlFor="email" className="form-label">Email address</label>
         <input onChange={(event)=>setValues((prev)=>({...prev , email:event.target.value}))} type="email" className="form-control" id="email" aria-describedby="emailHelp"  placeholder='Enter Your Email'/>
         <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
         </div>
         
         <div className="mb-3">
         <label htmlFor="password" className="form-label">Password</label>
         <input onChange={(event)=>setValues((prev)=>({...prev, pass:event.target.value}))} type="password" className="form-control" id="password"   placeholder='Enter password'/>
         </div>

         <div className="mb-3">
         <label htmlFor="cnfpassword" className="form-label">Confirm Password</label>
         <input  onChange={(event)=>setValues((prev)=>({...prev, cnfpass:event.target.value}))}type="cnfpassword" className="form-control" id="cnfpassword"  placeholder='Confirm Your password'/>
         </div>

         <div>
          <b>{errorMsg}</b><br></br>
        <button disabled={submitButtonDisabled} type="button" className="btn btn-success" onClick={handleSubmit}>submit</button>
        <p>Already have an account ?
        <span>
        <a href="/login">Login</a>
        </span>
        </p>
        </div>
         
        </div>
      </div>
        
  )
}

export default Signup
