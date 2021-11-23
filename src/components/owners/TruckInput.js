import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class TruckInput extends Component {
  state = {
    foodtruck: {
      name: "",
      food_type: "",
      street: "",
      city: "",
      state: "",
      zip_code: "",
      phone_number: "",
    },
    numberParts: {
      areaCode: "",
      begNum: "",
      lastNum: "",
    },
  };

  handleChange = (event) => {
    this.setState({
      foodtruck: {
        ...this.state.foodtruck,
        [event.target.id]: event.target.value,
      },
    });
  };

  handlePhoneNumber = (event) => {
    this.setState({
      numberParts: {
        ...this.state.numberParts,
        [event.target.id]: event.target.value,
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.newTruck();
  };

  async newTruck() {
    let number =
      `(${this.state.numberParts.areaCode})` +
      `${this.state.numberParts.begNum}` +
      "-" +
      `${this.state.numberParts.lastNum}`;

    try {
      const owner = JSON.parse(localStorage.getItem("owner"));
      const foodtruck = this.state.foodtruck;
      foodtruck["owner_id"] = owner.id;

      foodtruck["phone_number"] = number;

      const formData = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(foodtruck),
      };
      const response = await fetch(
        "http://localhost:5000/onthego/foodtrucks/",
        formData
      );
      const json = await response.json();
      console.log(json);
      if (json.message) {
        console.log(json.message);
        this.props.getErrors(json.message);
        this.props.history.push("/errors");
        this.props.deleteProfile({ owner: owner });
      }
      if (!json.message) {
        this.props.addTruck(json);
        this.props.history.push("/schedule");
      }
    } catch (error) {
      console.log(error);
      // this.props.getErrors(error)
      // this.props.history.push("/errors")
    }
  }

  render() {
    return (
      <div className="truck-input">
        <h3>Food Truck Information</h3>
        <form
          onSubmit={(event) => {
            this.handleSubmit(event);
          }}
          className="newTruck"
        >
          <label>Name</label>
          <input
            onChange={(event) => {
              this.handleChange(event);
            }}
            type="text"
            id="name"
            value={this.state.foodtruck.name}
            required
          />
          <br />
          <label>Street</label>
          <input
            onChange={(event) => {
              this.handleChange(event);
            }}
            type="text"
            id="street"
            value={this.state.foodtruck.street}
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
            value={this.state.foodtruck.state}
            required
          />
          <br />
          <label>City</label>
          <input
            onChange={(event) => {
              this.handleChange(event);
            }}
            type="text"
            id="city"
            value={this.state.foodtruck.city}
            required
          />
          <br />
          <label>Zip code</label>
          <input
            onChange={(event) => {
              this.handleChange(event);
            }}
            type="text"
            id="zip_code"
            value={this.state.foodtruck.zip_code}
            required
          />
          <br />
          <label>Food type</label>
          <input
            onChange={(event) => {
              this.handleChange(event);
            }}
            type="text"
            id="food_type"
            value={this.state.foodtruck.food_type}
            required
          />
          <br />
          <label>Phone number</label>
          (
          <input
            onChange={(event) => {
              this.handlePhoneNumber(event);
            }}
            type="text"
            id="areaCode"
            value={this.state.numberParts.areaCode}
            style={{ width: "25px" }}
            required
          />
          )
          <input
            onChange={(event) => {
              this.handlePhoneNumber(event);
            }}
            type="text"
            id="begNum"
            value={this.state.numberParts.begNum}
            style={{ width: "25px" }}
            required
          />{" "}
          -
          <input
            onChange={(event) => {
              this.handlePhoneNumber(event);
            }}
            type="text"
            id="lastNum"
            value={this.state.numberParts.lastNum}
            style={{ width: "30px" }}
            required
          />
          <br />
          {/* <input onChange= { event => {this.handleChange(event)}} type="text" id="phone_number" value={this.state.foodtruck.phone_number} required/><br/> */}
          <input type="submit" value="Submit Truck" />
        </form>
      </div>
    );
  }
}

export default withRouter(TruckInput);
