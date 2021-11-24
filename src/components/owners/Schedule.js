import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Select from "react-dropdown-select";
import "../../styles/Schedule.css";

class Schedule extends Component {
  state = {
    schedule: {
      mon_start: "",
      mon_end: "",
      tues_start: "",
      tues_end: "",
      wed_start: "",
      wed_end: "",
      thurs_start: "",
      thurs_end: "",
      fri_start: "",
      fri_end: "",
      sat_start: "",
      sat_end: "",
      sun_start: "",
      sun_end: "",
      new_years_day_start: "",
      new_years_day_end: "",
      thanksgiving_day_start: "",
      thanksgiving_day_end: "",
      christmas_day_start: "",
      christmas_day_end: "",
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
    try {
      schedule["foodtruck_id"] = truck;

      const formData = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ schedule: schedule }),
      };
      const response = await fetch(
        "https://alwaysonthego.herokuapp.com/api/v1/schedules/",
        formData
      );
      const json = await response.json();

      if (json) {
        return (dispatch) => {
          dispatch({ type: "ADD_SCHEDULE", schedule: json.data });
        };
      }
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
                schedule: { ...this.state.schedule, mon_start: event[0].value },
              });
            }}
            className="day"
            options={options}
            value={this.state.schedule.mon_start}
            required
          />
          <br />
          <Select
            onChange={(event) => {
              this.setState({
                schedule: { ...this.state.schedule, mon_end: event[0].value },
              });
            }}
            className="day"
            options={options}
            value={this.state.schedule.mon_end}
            required
          />
          <br />
          Tuesday
          <Select
            onChange={(event) => {
              this.setState({
                schedule: {
                  ...this.state.schedule,
                  tues_start: event[0].value,
                },
              });
            }}
            className="day"
            options={options}
            value={this.state.schedule.tues_start}
            required
          />
          <br />
          <Select
            onChange={(event) => {
              this.setState({
                schedule: { ...this.state.schedule, tues_end: event[0].value },
              });
            }}
            className="day"
            options={options}
            value={this.state.schedule.tues_end}
            required
          />
          <br />
          Wednesday
          <Select
            onChange={(event) => {
              this.setState({
                schedule: { ...this.state.schedule, wed_start: event[0].value },
              });
            }}
            className="day"
            options={options}
            value={this.state.schedule.wed_start}
            required
          />
          <br />
          <Select
            onChange={(event) => {
              this.setState({
                schedule: { ...this.state.schedule, wed_end: event[0].value },
              });
            }}
            className="day"
            options={options}
            value={this.state.schedule.wed_end}
            required
          />
          <br />
          Thursday
          <Select
            onChange={(event) => {
              this.setState({
                schedule: {
                  ...this.state.schedule,
                  thurs_start: event[0].value,
                },
              });
            }}
            className="day"
            options={options}
            value={this.state.schedule.thurs_start}
            required
          />
          <br />
          <Select
            onChange={(event) => {
              this.setState({
                schedule: { ...this.state.schedule, thurs_end: event[0].value },
              });
            }}
            className="day"
            options={options}
            value={this.state.schedule.thurs_end}
            required
          />
          <br />
          Friday
          <Select
            onChange={(event) => {
              this.setState({
                schedule: { ...this.state.schedule, fri_start: event[0].value },
              });
            }}
            className="day"
            options={options}
            value={this.state.schedule.fri_start}
            required
          />
          <br />
          <Select
            onChange={(event) => {
              this.setState({
                schedule: { ...this.state.schedule, fri_end: event[0].value },
              });
            }}
            className="day"
            options={options}
            value={this.state.schedule.fri_end}
            required
          />
          <br />
          Saturday
          <Select
            onChange={(event) => {
              this.setState({
                schedule: { ...this.state.schedule, sat_start: event[0].value },
              });
            }}
            className="day"
            options={options}
            value={this.state.schedule.sat_start}
            required
          />
          <br />
          <Select
            onChange={(event) => {
              this.setState({
                schedule: { ...this.state.schedule, sat_end: event[0].value },
              });
            }}
            className="day"
            options={options}
            value={this.state.schedule.sat_end}
            required
          />
          <br />
          Sunday
          <Select
            onChange={(event) => {
              this.setState({
                schedule: { ...this.state.schedule, sun_start: event[0].value },
              });
            }}
            className="day"
            options={options}
            value={this.state.schedule.sun_start}
            required
          />
          <br />
          <Select
            onChange={(event) => {
              this.setState({
                schedule: { ...this.state.schedule, sun_end: event[0].value },
              });
            }}
            className="day"
            options={options}
            value={this.state.schedule.sun_end}
            required
          />
          <br />
          New Years Day
          <Select
            onChange={(event) => {
              this.setState({
                schedule: {
                  ...this.state.schedule,
                  new_years_day_start: event[0].value,
                },
              });
            }}
            className="day"
            options={options}
            value={this.state.schedule.new_years_day_start}
            required
          />
          <br />
          <Select
            onChange={(event) => {
              this.setState({
                schedule: {
                  ...this.state.schedule,
                  new_years_day_end: event[0].value,
                },
              });
            }}
            className="day"
            options={options}
            value={this.state.schedule.new_years_day_end}
            required
          />
          <br />
          Thanksgiving Day
          <Select
            onChange={(event) => {
              this.setState({
                schedule: {
                  ...this.state.schedule,
                  thanksgiving_day_start: event[0].value,
                },
              });
            }}
            className="day"
            options={options}
            value={this.state.schedule.thanksgiving_day_start}
            required
          />
          <br />
          <Select
            onChange={(event) => {
              this.setState({
                schedule: {
                  ...this.state.schedule,
                  thanksgiving_day_end: event[0].value,
                },
              });
            }}
            className="day"
            options={options}
            value={this.state.schedule.thanksgiving_day_end}
            required
          />
          <br />
          Christmas Day
          <Select
            onChange={(event) => {
              this.setState({
                schedule: {
                  ...this.state.schedule,
                  christmas_day_start: event[0].value,
                },
              });
            }}
            className="day"
            options={options}
            value={this.state.schedule.christmas_day_start}
            required
          />
          <br />
          <Select
            onChange={(event) => {
              this.setState({
                schedule: {
                  ...this.state.schedule,
                  christmas_day_end: event[0].value,
                },
              });
            }}
            className="day"
            options={options}
            value={this.state.schedule.christmas_day_end}
            required
          />
          <br />
          <input type="submit" value="Set Hours" />
        </form>
      </div>
    );
  }
}

export default withRouter(Schedule);
