import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { notify } from "react-notify-toast";

class TruckInput extends Component {
  state = {
    foodtruck: {
      name: "",
      foodType: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
      phoneNumber: "",
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

      const foodtruck = {
        name: this.state.foodtruck.name,
        foodType: this.state.foodtruck.foodType,
        street: this.state.foodtruck.street,
        city: this.state.foodtruck.city,
        state: this.state.foodtruck.state,
        zipCode: this.state.foodtruck.zipCode,
        phoneNumber: number,
        ownerId: owner,
      };

      // console.log(json.message);
      // this.props.getErrors(json.message);
      // this.props.history.push("/errors");
      // this.props.deleteProfile({ owner: owner });

      const formData = foodtruck;

      axios
        .post(`http://localhost:5000/onthego/foodtrucks`, formData)
        .then((res) => {
          if (res.status === 200) {
            localStorage.setItem(
              "truckId",
              JSON.stringify(res.data.foodtruck._id)
            );
            this.props.addTruck(res.data);
            this.props.history.push("/schedule");
          } else {
            notify.show("Error", "warning");
          }
        });

      // if (json.message) {
      //   console.log(json.message);
      //   this.props.getErrors(json.message);
      //   this.props.history.push("/errors");
      //   this.props.deleteProfile({ owner: owner });
      // }
      // if (!json.message) {
      //   this.props.addTruck(json);
      //   this.props.history.push("/schedule");
      // }
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
            id="zipCode"
            value={this.state.foodtruck.zipCode}
            required
          />
          <br />
          <label>Food type</label>
          <input
            onChange={(event) => {
              this.handleChange(event);
            }}
            type="text"
            id="foodType"
            value={this.state.foodtruck.foodType}
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
