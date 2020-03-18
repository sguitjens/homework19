import React from "react";

function Search(props) {
  return (
    <form>
      <div>
        <h3>Search</h3>
        <input
          onChange={props.findUsers}// props.findUsers
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search For an employee"
          id="search"
        />
        <br />
      </div>
    </form>
  );
}

export default Search;