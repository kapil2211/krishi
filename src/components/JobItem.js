import React from "react";



export const JobItem = ({ job, onDelete }) => {
  return (
    <>
      <div className="card body mx-4">
        <p>Full Name:-<h6>{job.fstName} {job.lstName}</h6> ContactNo:-<h6>{job.contactNo}</h6>  EmailId:-<h6>{job.emailId}</h6>
        Number of workers Needed:-<h6>{job.Wagers} for {job.work}</h6>
        
        Address:-<h6>{job.address},{job.District},{job.state}</h6></p>
        <button
          className="btn btn-sm btn-success" onClick={() => { onDelete(job)}}>Accept
        </button>
      </div>
      <hr />
    </>
  );
};

export default JobItem;
