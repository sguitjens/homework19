import React from "react";

function UserDetail(props) {
  return (
    <div className="row">
      <div className="col-md-1">
        <img alt={props.fullName} className="img-fluid" src={props.imgSrc} style={{ margin: "0 auto" }} />
      </div>
      <div className="col-md-3">
        <p>{props.fullName}</p>
      </div>
      <div className="col-md-2">
        <p>{props.phone}</p>
      </div>
      <div className="col-md-4">
        <p>{props.email}</p>
      </div>
      <div className="col-md-2">
        <p>{props.birthdate}</p>
      </div>
    </div>
  );
}

export default UserDetail;
