import { signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react'
import{auth} from"../firebase"
//import styles from './Login.css';
const Login = () => {
  const [values,setValues] =useState({
    email:" ",
    pass:" ", 
});

const [errorMsg, setErrorMsg] =useState(" ");
const [submitButtonDisabled, setSubmitButtonDisabled] =useState(false);

const handleSubmit=()=>{
    if( !values.email|| !values.pass){
        setErrorMsg(" fill all the fields");
        return;
    }
    setErrorMsg("");
    console.log(values);
    
    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth,values.email, values.pass)
      .then(async(res)=>{
        setSubmitButtonDisabled(false);
     
      })
      .catch((err)=> {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
    });
};

   
  return (
    <div className=" d-flex align-items-center justify-content-center " style={{color : '#34495E ',  paddingTop:'5rem',}}>
     
      <div className=" card auth-card input-field align-items-center " style={{width:'25rem' ,paddingBottom:'5px', color:'#212F3D', backgroundColor:'#979A9A'}}>
         <h2>Login</h2>
         

         <div className="mb-3 mt-2 pl-2 pb-2">
         <label htmlFor="email" className="form-label">Email address</label>
         <input onChange={(event)=>setValues((prev)=>({...prev , email:event.target.value}))} type="email" className="form-control" id="email" aria-describedby="emailHelp"  placeholder='Enter Your Email'/>
         <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
         </div>
        
          
         <div className="mb-3">
         <label htmlFor="password" className="form-label">Password</label>
         <input onChange={(event)=>setValues((prev)=>({...prev, pass:event.target.value}))} type="password" className="form-control" id="password"   placeholder='Enter password'/>
         </div>

        <div>
          <b>{errorMsg}</b><br></br>
        <button disabled={submitButtonDisabled} type="button" className="btn btn-success" onClick={handleSubmit}>submit</button>
        <p>Don't have an account ?
        <span>
        <a href="/signup">Sign Up</a>
        </span>
        </p>
        </div>
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

