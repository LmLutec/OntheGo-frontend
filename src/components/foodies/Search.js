import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Search extends Component {
  state = {
    city: "",
    state: "",
  };

  handleChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.search(this.state);
    this.props.history.push("/results");
  };

  goBack = () => {
    window.history.back();
  };

  render() {
    return (
      <div className="search">
        <h3>Find Foodtrucks by location</h3>
        <form
          onSubmit={(event) => {
            this.handleSubmit(event);
          }}
        >
          <label>City</label>
          <input
            onChange={(event) => {
              this.handleChange(event);
            }}
            type="text"
            id="city"
            value={this.state.city}
            required
          />
          <br />
          <label>State</label>
          <input
            onChange={(event) => {
              this.handleChange(event);
            }}
            type="text"
            id="state"
            value={this.state.state}
            required
          />
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
            <input type="submit" value="Search for Trucks" />
          </div>
        </form>
        <br />
      </div>
    );
  }
}

export default withRouter(Search);
