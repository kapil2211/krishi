import React from "react";

export const AgriItem = ({ agri, onDelete }) => {
  return (
    <>
      <div className="card body mx-3">
        <p>Full Name:-<h5>{agri.fstName}{agri.lstName}</h5>
        Number of machines Needed:-<h5>{agri.NumberofMachine} for {agri.machine}</h5>
        ContactNo:-<h5>{agri.contactNo}</h5>  EmailId:-<h5>{agri.emailId}</h5>
        Address:-<h5>{agri.address},{agri.District},{agri.state}</h5></p>
        <button
          className="btn btn-sm btn-success" onClick={() => { onDelete(agri)}}>Accept
        </button>
      </div>
      <hr />
    </>
  );
};

export default AgriItem;
