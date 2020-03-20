import React from "react";

function Search(props) {
  // console.log("search props:", props);
  return (
    <form>
      <div>
        <h3>Search</h3>
        <input
          className="form-control"
          placeholder="Search For an employee"
          id="search"
          name="search"
          // type="text"
          // name={props.name}
          // value={props.search}
          // type={props.type}
          onChange={props.handleInputChange} // this works for console logging
        />
        <br />
      </div>
    </form>
  );
}

export default Search;