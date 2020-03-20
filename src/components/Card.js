import React from "react";
import Search from "./Search"

function Card(props) {
  // console.log("card props:", props);
  return (
    <div className="card text-center">
      <div className="card-header">
        <h2>{props.heading}</h2>
      </div>
      <div className="card-body">
        {/* {props.children} */}
        <Search className="card-body"
          name="search"
          value={props.search}
          // name={props.name}
          // value={props.search}
          // type={props.type}
          handleInputChange={props.handleInputChange} // this works for console logging
          // handleInputChange={props.findUsers}
        />
      </div>
    </div>
  );
}

export default Card;
