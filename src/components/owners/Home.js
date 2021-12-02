import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import MenuItem from "./MenuItem";
import Note from "./Note";
import GetRatings from "./GetRatings";

class Home extends Component {
  state = {
    deleteProf: false,
    data: null,
    profileData: "",
  };

  componentDidMount() {
    this.fetchProfile();
  }

  async fetchProfile() {
    try {
      //   const data = {
      //     method: "GET",
      //     headers: {
      //       Authorization: `Bearer: ${localStorage.getItem("jwt_token")}`,
      //     },
      //   };

      //   axios.get("/yourURL").then(function(response) {
      //     this.setState({ events: response.data });
      //   }.bind(this));

      const id = JSON.parse(localStorage.getItem("owner"));

      axios.get(`http://localhost:5000/onthego/owner/${id}`).then(
        (res) => console.log(res.data)
        // set up a way to get foodtruck by ownerId
        // console.log(res.data)
      );

      //   const json = await response.json();

      //   this.props.profile(json);
      //   this.setState({
      //     data: json,
      //   });
    } catch (error) {
      console.log(error);
    }
  }

  profile = () => {
    const renderItems = () => {
      return this.props.food.map((items) => {
        return items.map((i, id) => (
          <MenuItem deleteFood={this.props.deleteFood} key={id} item={i} />
        ));
      });
    };

    const renderNotes = () => {
      return this.props.notes.map((allnotes) => {
        return allnotes.map((n, id) => (
          <Note deleteNote={this.props.deleteNote} key={id} note={n} />
        ));
      });
    };

    return (
      <div>
        <h1>Welcome back</h1>
        <div className="profileInfo">
          <section className="truck_info">
            <h3>Food Truck Information</h3>

            {/* {this.props.truck === Object ? (
              <button onClick={this.createTruck}>Create Truck</button>
            ) : (
              this.truckDiv
            )} */}
            <button onClick={this.createTruck}>Create Truck</button>
          </section>

          <section className="schedule_info">
            <h3>Schedule</h3>
            Monday: {this.props.schedule.mon_start} to{" "}
            {this.props.schedule.mon_end} <br />
            Tuesday: {this.props.schedule.tues_start} to{" "}
            {this.props.schedule.tues_end} <br />
            Wednesday: {this.props.schedule.wed_start} to{" "}
            {this.props.schedule.wed_end} <br />
            Thursday: {this.props.schedule.thurs_start} to{" "}
            {this.props.schedule.thurs_end} <br />
            Friday: {this.props.schedule.fri_start} to{" "}
            {this.props.schedule.fri_end} <br />
            Saturday: {this.props.schedule.sat_start} to{" "}
            {this.props.schedule.sat_end} <br />
            Sunday: {this.props.schedule.sun_start} to{" "}
            {this.props.schedule.sun_end} <br />
            <br />
            New Years Day: {this.props.schedule.new_years_day_start} to{" "}
            {this.props.schedule.new_years_day_end}
            <br />
            Thanksgiving Day: {
              this.props.schedule.thanksgiving_day_start
            } to {this.props.schedule.thanksgiving_day_end}
            <br />
            Christmas Day: {this.props.schedule.christmas_day_start} to{" "}
            {this.props.schedule.christmas_day_end}
            <br />
            <br />
            <button onClick={this.editSchedule}>Edit Schedule</button>
          </section>

          <section className="add_notes">
            <h3>Notes</h3>
            <button onClick={this.addNote} className="addNote">
              Add note
            </button>
            {renderNotes()}
          </section>
        </div>
        <section className="menu_info full-menu">
          <h3>Menu</h3>
          <button onClick={this.editMenu} className="home_edit_menu">
            Edit Menu
          </button>
          <ul>{renderItems()}</ul>
        </section>

        <section
          className="ratings"
          style={{ display: this.props.ratings.length > 0 ? "block" : "none" }}
        >
          <h3>Ratings</h3>
          <button onClick={this.allRatings} className="allRatings">
            See all ratings
          </button>
          <GetRatings ratings={this.props.ratings} />
        </section>
        <br />
        <br />

        <button onClick={this.logout}>Logout</button>
        <br />
        <br />
        <br />

        <section className="delete_confirmation">
          <div
            style={{
              display: this.state.deleteProf === false ? "none" : "block",
            }}
          >
            Are you sure you want to delete your account? Account will be
            permanently deleted.
            <button onClick={this.delete}>Yes</button>
            <button onClick={this.dontDelete}>No</button>
          </div>
          <button onClick={this.deleteProfileConf} id="deleteAccount">
            DELETE ACCOUNT
          </button>
        </section>
      </div>
    );
  };

  createTruck = () => {
    this.props.history.push("/setup");
  };

  editTruck = () => {
    this.props.history.push("/edit/truck");
  };

  editSchedule = () => {
    this.props.history.push("/edit/schedule");
  };

  editMenu = () => {
    this.props.history.push("/edit/menu");
  };

  addNote = () => {
    this.props.history.push("new/note");
  };

  allRatings = () => {
    this.props.history.push("/truck/ratings");
  };

  truckDiv = () => {
    return (
      <div>
        Food Truck: {this.props.truck.name}
        <br />
        Food type: {this.props.truck.food_type}
        <br />
        Street: {this.props.truck.street}
        <br />
        City: {this.props.truck.city}
        <br />
        State: {this.props.truck.state}
        <br />
        Zip code: {this.props.truck.zip_code}
        <br />
        Phone Number: {this.props.truck.phone_number}
        <br />
        <br />
        <button onClick={this.editTruck}>Edit Truck Information</button>
        <br />
        <br />
      </div>
    );
  };

  logout = () => {
    localStorage.clear();
    this.props.history.push("/");
    window.location.reload();
  };

  deleteProfileConf = () => {
    if (this.state.deleteProf === false) {
      this.setState({
        deleteProf: true,
      });
    } else {
      this.setState({
        deleteProf: false,
      });
    }
  };

  delete = () => {
    this.props.deleteAcct(this.props.owner);
    this.props.history.push("/");
    localStorage.clear();
    window.location.reload();
  };

  dontDelete = () => {
    this.setState({
      deleteProf: false,
    });
  };

  render() {
    // if (this.state.data === null) {
    //   return <div>Loading...</div>;
    // }

    return <div className="profile">{this.profile()}</div>;
  }
}

export default withRouter(Home);
