import React, { Component } from "react";
import Card from "./Card";
import Search from "./Search";
import UserDetail from "./UserDetail";
import API from "../utils/API";

class UserContainer extends Component {
  state = {
    userData: [],
    search: ""
  };

  componentDidMount() {
    API.search()
    .then(result => {
      console.log("API CALL RESULT", result.data.results)
      this.setState({ userData: result.data.results })
    })
    // .then(result => this.setState({ userData: result.data }))
    .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    console.log("name:", name);
    console.log("value:", value);
    this.setState({
      [name]: value
    });
  }

  // this is only an ascending sort
  sortBy = colName => {
    console.log("user data before sorting", this.state.userData);
    let userDataCopy = [...this.state.userData];
    // this.state.userData.sort((a, b) => {
    userDataCopy.sort((a, b) => {
      let aCol;
      let bCol;
      switch(colName) {
        case "name":
          aCol = a.name.first.toUpperCase() + a.name.last.toUpperCase();
          bCol = b.name.first.toUpperCase() + b.name.last.toUpperCase();
          break;
        case "phone":
          // TBD: strip out non-numeric characters
          aCol = a.phone;
          bCol = b.phone;
          break;
        case "email":
          aCol = a.email;
          bCol = b.email;
          break;
        case "dob":
          aCol = a.dob.date;
          bCol = b.dob.date;
          break;
      }
      
      if (aCol < bCol) {
        return -1;
      }
      if (aCol > bCol) {
        return 1;
      }
      return 0;
    })
    console.log("user data copy (sorted now)", userDataCopy);
    console.log("user data AFTER", this.state.userData);
    this.setState({userData: userDataCopy});
  }

  findUsers = str => {
    console.log("str", str);

  }

  render() {
    return (
      <div className="container">
        <div>
          <Card heading="Employees">
            <Search className="card-body"
              value={this.state.search}
              name="search"
              onChange={this.handleInputChange}
            />
          </Card>
          <table className="table">
            <thead>
              <tr>
                <th scope="row">Image</th>
                <th scope="row" onClick={()=>this.sortBy("name")}>Name</th>
                <th scope="row" onClick={()=>this.sortBy("phone")}>Phone</th>
                <th scope="row" onClick={()=>this.sortBy("email")}>Email</th>
                <th scope="row" onClick={()=>this.sortBy("dob")}>DOB</th>
              </tr>
            </thead>
            <tbody>
              {this.state.userData.map(user => (
                <UserDetail
                  id={user.login.uuid}
                  key={user.login.uuid}
                  imgSrc={user.picture.thumbnail}
                  firstName={user.name.first}
                  lastName={user.name.last}
                  fullName={user.name.first + " " + user.name.last}
                  phone={user.phone}
                  email={user.email}
                  birthdate={user.dob.date}
                  />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default UserContainer;
