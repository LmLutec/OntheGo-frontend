import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../../styles/OwnerInput.css";

class OwnerInput extends Component {
  state = {
    owner: {
      first_name: "",
      last_name: "",
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

  async newOwner() {
    try {
      const formData = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ owner: this.state.owner }),
      };
      const response = await fetch(
        "https://alwaysonthego.herokuapp.com/api/v1/owners/",
        formData
      );
      const json = await response.json();

      if (!json.message) {
        this.props.addOwner(this.state.owner);
        localStorage.setItem("jwt_token", json.jwt);
        localStorage.setItem("owner", JSON.stringify(json.owner));
        this.props.history.push("/setup");
      } else {
        this.props.getErrors(json.message);
        this.props.history.push("/errors");
      }
    } catch (error) {
      this.props.getErrors(error);
      this.props.history.push("/errors");
    }
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
              id="first_name"
              value={this.state.owner.first_name}
              required
            />
            <br />
            <label>Last name</label>
            <input
              onChange={(event) => {
                this.handleChange(event);
              }}
              type="text"
              id="last_name"
              value={this.state.owner.last_name}
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
            <input type="submit" name="submit" />
          </form>
          <br />
          <button onClick={this.goBack}>Back</button>
        </div>
      </div>
    );
  }
}

export default withRouter(OwnerInput);
