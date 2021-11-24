import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Select from "react-dropdown-select";
import "../../styles/Schedule.css";
import axios from "axios";

class Schedule extends Component {
  state = {
    schedule: {
      mon_start: "",
      monEnd: "",
      tuesStart: "",
      tuesEnd: "",
      wedStart: "",
      wedEnd: "",
      thursStart: "",
      thursEnd: "",
      friStart: "",
      fri_end: "",
      satStart: "",
      satEnd: "",
      sunStart: "",
      sunEnd: "",
      newYearsDayStart: "",
      newYearsDayEnd: "",
      thanksgivingDayEnd: "",
      thanksgivingDayEnd: "",
      christmasDayStart: "",
      christmasDayEnd: "",
    },
  };

  handleChange = (event) => {
    this.setState({
      schedule: {
        ...this.state.schedule,
        [event.target.id]: event[0].target.value,
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let id = this.props.truck;
    this.submitSchedule(this.state.schedule, id);
    this.props.addMenu(id);
    this.props.history.push("/manage/menu");
  };

  async submitSchedule(schedule, truck) {
    const truckId = JSON.parse(localStorage.getItem("truckId"));
    console.log(truckId);
    try {
      axios
        .put(`http://localhost:5000/onthego/schedule/:${truckId}`, schedule)
        .then((res) => console.log(res));
      //   const response = await fetch(
      //     "https://alwaysonthego.herokuapp.com/api/v1/schedules/",
      //     formData
      //   );
      //   const json = await response.json();

      //   if (json) {
      //     return (dispatch) => {
      //       dispatch({ type: "ADD_SCHEDULE", schedule: json.data });
      //     };
      //   }
    } catch (error) {
      // set a method to delete user just created
      console.log(error);
    }
  }

  render() {
    const options = [
      { value: "closed", label: "closed" },
      { value: "12:00 am", label: "12:00 am" },
      { value: "1:00 am", label: "1:00 am" },
      { value: "2:00 am", label: "2:00 am" },
      { value: "3:00 am", label: "3:00 am" },
      { value: "4:00 am", label: "4:00 am" },
      { value: "5:00 am", label: "5:00 am" },
      { value: "6:00 am", label: "6:00 am" },
      { value: "7:00 am", label: "7:00 am" },
      { value: "8:00 am", label: "8:00 am" },
      { value: "9:00 am", label: "9:00 am" },
      { value: "10:00 am", label: "10:00 am" },
      { value: "11:00 am", label: "11:00 am" },
      { value: "12:00 pm", label: "12:00 pm" },
      { value: "1:00 pm", label: "1:00 pm" },
      { value: "2:00 pm", label: "2:00 pm" },
      { value: "3:00 pm", label: "3:00 pm" },
      { value: "4:00 pm", label: "4:00 pm" },
      { value: "5:00 pm", label: "5:00 pm" },
      { value: "6:00 pm", label: "6:00 pm" },
      { value: "7:00 pm", label: "7:00 pm" },
      { value: "8:00 pm", label: "8:00 pm" },
      { value: "9:00 pm", label: "9:00 pm" },
      { value: "10:00 pm", label: "10:00 pm" },
      { value: "11:00 pm", label: "11:00 pm" },
    ];

    return (
      <div className="schedule-input">
        <h3>Foodtruck Hours</h3>
        <form className="days">
          Monday
          <Select
            onChange={(event) => {
              this.setState({
                schedule: { ...this.state.schedule, monStart: event[0].value },
              });
            }}
            className="day"
            options={options}
            value={this.state.schedule.monStart}
            required
          />
          <br />
          <Select
            onChange={(event) => {
              this.setState({
                schedule: { ...this.state.schedule, monEnd: event[0].value },
              });
            }}
            className="day"
            options={options}
            value={this.state.schedule.monEnd}
            required
          />
          <br />
          Tuesday
          <Select
            onChange={(event) => {
              this.setState({
                schedule: {
                  ...this.state.schedule,
                  tuesStart: event[0].value,
                },
              });
            }}
            className="day"
            options={options}
            value={this.state.schedule.tuesStart}
            required
          />
          <br />
          <Select
            onChange={(event) => {
              this.setState({
                schedule: { ...this.state.schedule, tuesEnd: event[0].value },
              });
            }}
            className="day"
            options={options}
            value={this.state.schedule.tuesEnd}
            required
          />
          <br />
          Wednesday
          <Select
            onChange={(event) => {
              this.setState({
                schedule: { ...this.state.schedule, wedStart: event[0].value },
              });
            }}
            className="day"
            options={options}
            value={this.state.schedule.wedStart}
            required
          />
          <br />
          <Select
            onChange={(event) => {
              this.setState({
                schedule: { ...this.state.schedule, wedEnd: event[0].value },
              });
            }}
            className="day"
            options={options}
            value={this.state.schedule.wedEnd}
            required
          />
          <br />
          Thursday
          <Select
            onChange={(event) => {
              this.setState({
                schedule: {
                  ...this.state.schedule,
                  thursStart: event[0].value,
                },
              });
            }}
            className="day"
            options={options}
            value={this.state.schedule.thursStart}
            required
          />
          <br />
          <Select
            onChange={(event) => {
              this.setState({
                schedule: { ...this.state.schedule, thursEnd: event[0].value },
              });
            }}
            className="day"
            options={options}
            value={this.state.schedule.thursEnd}
            required
          />
          <br />
          Friday
          <Select
            onChange={(event) => {
              this.setState({
                schedule: { ...this.state.schedule, friStart: event[0].value },
              });
            }}
            className="day"
            options={options}
            value={this.state.schedule.friStart}
            required
          />
          <br />
          <Select
            onChange={(event) => {
              this.setState({
                schedule: { ...this.state.schedule, friEnd: event[0].value },
              });
            }}
            className="day"
            options={options}
            value={this.state.schedule.friEnd}
            required
          />
          <br />
          Saturday
          <Select
            onChange={(event) => {
              this.setState({
                schedule: { ...this.state.schedule, satStart: event[0].value },
              });
            }}
            className="day"
            options={options}
            value={this.state.schedule.satStart}
            required
          />
          <br />
          <Select
            onChange={(event) => {
              this.setState({
                schedule: { ...this.state.schedule, satEnd: event[0].value },
              });
            }}
            className="day"
            options={options}
            value={this.state.schedule.satEnd}
            required
          />
          <br />
          Sunday
          <Select
            onChange={(event) => {
              this.setState({
                schedule: { ...this.state.schedule, sunStart: event[0].value },
              });
            }}
            className="day"
            options={options}
            value={this.state.schedule.sunStart}
            required
          />
          <br />
          <Select
            onChange={(event) => {
              this.setState({
                schedule: { ...this.state.schedule, sunEnd: event[0].value },
              });
            }}
            className="day"
            options={options}
            value={this.state.schedule.sunEnd}
            required
          />
          <br />
          New Years Day
          <Select
            onChange={(event) => {
              this.setState({
                schedule: {
                  ...this.state.schedule,
                  newYearsDayStart: event[0].value,
                },
              });
            }}
            className="day"
            options={options}
            value={this.state.schedule.newYearsDayStart}
            required
          />
          <br />
          <Select
            onChange={(event) => {
              this.setState({
                schedule: {
                  ...this.state.schedule,
                  newYearsDayEnd: event[0].value,
                },
              });
            }}
            className="day"
            options={options}
            value={this.state.schedule.newYearsDayEnd}
            required
          />
          <br />
          Thanksgiving Day
          <Select
            onChange={(event) => {
              this.setState({
                schedule: {
                  ...this.state.schedule,
                  thanksgivingDayStart: event[0].value,
                },
              });
            }}
            className="day"
            options={options}
            value={this.state.schedule.thanksgivingDayStart}
            required
          />
          <br />
          <Select
            onChange={(event) => {
              this.setState({
                schedule: {
                  ...this.state.schedule,
                  thanksgivingDayEnd: event[0].value,
                },
              });
            }}
            className="day"
            options={options}
            value={this.state.schedule.thanksgivingDayEnd}
            required
          />
          <br />
          Christmas Day
          <Select
            onChange={(event) => {
              this.setState({
                schedule: {
                  ...this.state.schedule,
                  christmasDayStart: event[0].value,
                },
              });
            }}
            className="day"
            options={options}
            value={this.state.schedule.christmasDayStart}
            required
          />
          <br />
          <Select
            onChange={(event) => {
              this.setState({
                schedule: {
                  ...this.state.schedule,
                  christmasDayEnd: event[0].value,
                },
              });
            }}
            className="day"
            options={options}
            value={this.state.schedule.christmasDayEnd}
            required
          />
          <br />
        </form>
        <input
          type="submit"
          value="Set Hours"
          onClick={(e) => this.handleSubmit(e)}
        />
      </div>
    );
  }
}

export default withRouter(Schedule);
