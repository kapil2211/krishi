import React,{useState} from 'react'


export const Wager = ({addJob}) => {
  const [fstName, setfstName] = useState("");
  const [lstName, setlstName] = useState("");
  const [emailId, setemailId] = useState("");
  const [contactNo, setcontactNo] = useState("");
  const [address, setaddress] = useState("");
  const [District, setDistrict] = useState("");
  const [state, setstate] = useState("");
  const [work, setwork] = useState("");
  const [Wagers, setWagers] = useState(0);

  const submit=(e)=>{
    e.preventDefault();
    if(!fstName|| !lstName|| !emailId|| !contactNo|| !address|| !District|| !state|| !Wagers|| !work){
      alert("Enter valid details");
    }
    else{
      addJob(fstName,lstName,emailId,contactNo,address,District,state,Wagers,work);
      setfstName("");
      setlstName("");
      setcontactNo("");
      setaddress("");setDistrict("");setstate("");
      setWagers("");setwork("");
    }
  }
  return (
    <>
     <div className=" d-flex align-items-center justify-content-center " style={{color : '#34495E ',  paddingTop:'5rem',}}>

      <div className=" card auth-card input-field align-items-center " style={{width:'50rem' ,paddingBottom:'10px', color:'#212F3D', backgroundColor:'#979A9A'}}>

      <h2>Enter Your Valid Details</h2>
      <p> *should be filled by only one member of the group</p>
    <form onSubmit ={submit} className="row g-3">
      
    <div className="col-md-6">
   <label htmlFor="fstName" className="form-label"></label>
    <input type="text" value={fstName} onChange={(e)=> setfstName(e.target.value)} className="form-control" placeholder="First Name"  id="fstName"/>
  </div>
  <div className="col-md-6">
    <label htmlFor="lstName" className="form-label"></label>
    <input type="text" value={lstName} onChange={(e)=>setlstName(e.target.value)} className="form-control" placeholder="Last name"  id="lstName"/>
  </div>
   <div className="col-md-6">
   <label htmlFor="emailId" className="form-label"></label>
    <input type="email" value={emailId} onChange={(e)=>setemailId(e.target.value)} className="form-control" placeholder="Email"  id="emailId"/>
  </div>
  <div className="col-md-6">
    <label htmlFor="contactNo" className="form-label"></label>
    <input type="Number" value={contactNo} onChange={(e)=>setcontactNo(e.target.value)}  className="form-control" placeholder="Contact Number" id="contactNo"/>
  </div>
  <div className="col-12">
    <label htmlFor="address" className="form-label">Address</label>
    <input type="text" value={address} onChange={(e)=>setaddress(e.target.value)} className="form-control" id="address" placeholder="Residential address"/>
  </div>
  <div className="col-md-4">
    <label htmlFor="District" className="form-label">District</label>
    <input type="text" value={District} onChange={(e)=>setDistrict(e.target.value)} className="form-control" placeholder="Your District" id="District"/>
  </div>
  <div className="col-md-4">
    <label htmlFor="state" className="form-label">State</label>
    <select id="state"  value={state} onChange={(e)=>setstate(e.target.value)} className="form-select">
      <option selected>Choose...</option>
      <option>UttarPradesh</option>
      <option>MadhyaPradesh</option>
      <option>AndhraPradesh</option>
      <option>ArunachalPradesh</option>
      <option>Gujrat</option>
      <option>Maharashtra</option>
      <option>Rajasthan</option>
      <option>Bihar</option>
      <option>Punjab</option>
      <option>HimachalPradesh</option>
      <option>Haryana</option>
      <option>Delhi</option>
      <option>Uttarakhand</option>
      <option>Jammu&Kashmir</option>
      <option>WestBengal</option>
      <option>Goa</option>
      <option>Kerela</option>
      <option>Orrisa</option>
      <option>Jharkhand</option>
      <option>Telengana</option>
      <option>Karnataka</option>
      <option>Tamilnadu</option>
    </select>
  </div>
  <div className="col-md-4">
    <label htmlFor="inputZip" className="form-label">Pincode</label>
    <input type="text" className="form-control" placeholder="Enter Valid Six-Digit code" id="inputZip"/>
  </div>
  
  <div className="col-md-4">
    <label htmlFor="Wagers" className="form-label">Number of member in your team</label>
    <input type="text" value={Wagers} onChange={(e)=>setWagers(e.target.value)} className="form-control" placeholder={Wagers} id="Wagers"/>
    
   {/* <button type="button"  className="btn btn-primary mx-4">+</button>
   <button type="button"  className="btn btn-primary mx-4">-</button> */}
   </div>
   <div className="col-md-4">
    <label htmlFor="work" className="form-label">For Which Purpose</label>
    <select id="work" value={work} onChange={(e)=>setwork(e.target.value)}  className="form-select">
      <option selected>Choose...</option>
      <option>Soil/land preparation</option>
      <option>Sowing</option>
      <option>Manuring</option>
      <option>Irrigation</option>
      <option>Protecting the weeds/Crops</option>
      <option>Harvesting</option>
      <option>Weeding</option>
      <option>Crop Storage</option>
      </select>
    
   </div>
  
  <div className="col-12">
    <button type="submit"  className="btn btn-primary">Add Job</button>
  </div>
</form>
      </div>
    
    </div>
    </>
   
  )
}

export default Wager


/*
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" htmlFor="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  
 

  
*/
