import React, { Component } from "react";
// import Container from "./Container";
// import Row from "./Row";
// import Col from "./Col";
import Card from "./Card";
// import SearchForm from "./SearchForm";
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
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="container">
        <div>
            <Card heading="Search">
              <div
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                // handleFormSubmit={this.handleFormSubmit}
                />
            </Card>
          <div>
            <div heading="Employees">
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserContainer;
