import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../../styles/OwnerInput.css";
import axios from "axios";

class OwnerInput extends Component {
  state = {
    owner: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  };

  handleChange = (event) => {
    this.setState({
      owner: {
        ...this.state.owner,
        [event.target.id]: event.target.value,
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.newOwner();
  };

  // axios
  //     .put(`http://localhost:5000/qsolutions/demographicsreport/${id}`, data)
  //     .then((res) => console.log(res));

  async newOwner() {
    console.log("submit");
    // try {
    const formData = this.state.owner;

    axios
      .put(`http://localhost:5000/onthego/owners`, formData)
      .then((res) => console.log(res));

    // const json = await response.json();

    //   if (!json.message) {
    //     this.props.addOwner(this.state.owner);
    //     localStorage.setItem("jwt_token", json.jwt);
    //     localStorage.setItem("owner", JSON.stringify(json.owner));
    //     this.props.history.push("/setup");
    //   } else {
    //     this.props.getErrors(json.message);
    //     this.props.history.push("/errors");
    //   }
    // } catch (error) {
    //   this.props.getErrors(error);
    //   this.props.history.push("/errors");
    // }
  }

  goBack = () => {
    window.history.back();
  };

  render() {
    return (
      <div>
        <h3>Hey Truck Owners! Create a New Account below:</h3>
        <div className="new-owner">
          <form
            onSubmit={(event) => {
              this.handleSubmit(event);
            }}
            className="owner-form"
          >
            <label>First name</label>
            <input
              onChange={(event) => {
                this.handleChange(event);
              }}
              type="text"
              id="firstName"
              value={this.state.owner.firstName}
              required
            />
            <br />
            <label>Last name</label>
            <input
              onChange={(event) => {
                this.handleChange(event);
              }}
              type="text"
              id="lastName"
              value={this.state.owner.lastName}
              required
            />
            <br />
            <label>Email</label>
            <input
              onChange={(event) => {
                this.handleChange(event);
              }}
              type="text"
              id="email"
              value={this.state.owner.email}
              required
            />
            <br />
            <label>Password</label>
            <input
              onChange={(event) => {
                this.handleChange(event);
              }}
              type="password"
              id="password"
              value={this.state.owner.password}
              required
            />
            <br />
          </form>
          <br />
          <div className="icons">
            <svg
              width="18"
              height="12"
              viewBox="0 0 18 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={this.goBack}
            >
              <path
                d="M18 5H3.83L7.41 1.41L6 0L0 6L6 12L7.41 10.59L3.83 7H18V5Z"
                fill="black"
              />
            </svg>
            <input
              type="submit"
              name="submit"
              onClick={(event) => this.handleSubmit(event)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(OwnerInput);
