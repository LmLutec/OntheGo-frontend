import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Select from "react-dropdown-select";


class EditSchedule extends Component {
    state = {
        schedule: {
            id: `${this.props.schedule.id}`,
            mon_start: `${this.props.schedule.mon_start}`,
            mon_end: `${this.props.schedule.mon_end}`,
            tues_start: `${this.props.schedule.tues_start}`,
            tues_end: `${this.props.schedule.tues_end}`,
            wed_start: `${this.props.schedule.wed_start}`,
            wed_end:`${this.props.schedule.wed_end}`,
            thurs_start: `${this.props.schedule.thurs_start}`,
            thurs_end: `${this.props.schedule.thurs_end}`,
            fri_start: `${this.props.schedule.fri_start}`,
            fri_end: `${this.props.schedule.fri_end}`,
            sat_start: `${this.props.schedule.sat_start}`,
            sat_end: `${this.props.schedule.sat_end}`,
            sun_start: `${this.props.schedule.sun_start}`,
            sun_end: `${this.props.schedule.sun_end}`,
            new_years_day_start: `${this.props.schedule.new_years_day_start}`,
            new_years_day_end: `${this.props.schedule.new_years_day_end}`,
            thanksgiving_day_start: `${this.props.schedule.thanksgiving_day_start}`,
            thanksgiving_day_end: `${this.props.schedule.thanksgiving_day_end}`,
            christmas_day_start: `${this.props.schedule.christmas_day_start}`,
            christmas_day_end: `${this.props.schedule.christmas_day_end}`
        }
    }

    componentWillUnmount(){
        window.location.reload()
    }

    handleChange = (event) => {
        this.setState({
            schedule: { 
                ...this.state.schedule,
                [event.target.id]: event.target.value
            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let id = this.props.truck.id
        this.props.edit(this.state, id)
        this.props.history.push("/home")
    }

    home = () => {
        this.props.history.push("/home")
    }

    render(){
        return(
            <div className="edit-schedule">
                <h4>Foodtruck Hours</h4>
                <h6>Remember to specify Am/Pm.</h6>
                <form onSubmit={(event) => {this.handleSubmit(event)}}>
                    Monday
                    <Select onChange={event => {this.setState({ schedule: {...this.state.schedule, 'mon_start': event[0].value}})}} options={options} value={this.state.schedule.mon_start} required/><br/>
                    <Select onChange={event => {this.setState({ schedule: {...this.state.schedule, 'mon_end': event[0].value}})}} options={options} value={this.state.schedule.mon_end} required/><br/>
                    Tuesday  
                    <Select onChange={event => {this.setState({ schedule: {...this.state.schedule, 'tues_start': event[0].value}})}} options={options} value={this.state.schedule.tues_start} required/><br/>
                    <Select onChange={event => {this.setState({ schedule: {...this.state.schedule, 'tues_end': event[0].value}})}} options={options} value={this.state.schedule.tues_end} required/><br/>
                    Wednesday
                    <Select onChange={event => {this.setState({ schedule: {...this.state.schedule, 'wed_start': event[0].value}})}} options={options} value={this.state.schedule.wed_start} required/><br/>
                    <Select onChange={event => {this.setState({ schedule: {...this.state.schedule, 'wed_end': event[0].value}})}} options={options} value={this.state.schedule.wed_end} required/><br/>
                    Thursday
                    <Select onChange={event => {this.setState({ schedule: {...this.state.schedule, 'thurs_start': event[0].value}})}} options={options} value={this.state.schedule.thurs_start} required/><br/>
                    <Select onChange={event => {this.setState({ schedule: {...this.state.schedule, 'thurs_end': event[0].value}})}} options={options} value={this.state.schedule.thurs_end} required/><br/>
                    Friday
                    <Select onChange={event => {this.setState({ schedule: {...this.state.schedule, 'fri_start': event[0].value}})}} options={options} value={this.state.schedule.fri_start} required/><br/> 
                    <Select onChange={event => {this.setState({ schedule: {...this.state.schedule, 'fri_end': event[0].value}})}} options={options} value={this.state.schedule.fri_end} required/><br/>
                    Saturday
                    <Select onChange={event => {this.setState({ schedule: {...this.state.schedule, 'sat_start': event[0].value}})}} options={options} value={this.state.schedule.sat_start} required/><br/> 
                    <Select onChange={event => {this.setState({ schedule: {...this.state.schedule, 'sat_end': event[0].value}})}} options={options} value={this.state.schedule.sat_end} required/><br/>
                    Sunday
                    <Select onChange={event => {this.setState({ schedule: {...this.state.schedule, 'sun_start': event[0].value}})}} options={options} value={this.state.schedule.sun_start} required/><br/>
                    <Select onChange={event => {this.setState({ schedule: {...this.state.schedule, 'sun_end': event[0].value}})}} options={options} value={this.state.schedule.sun_end} required/><br/>
                    New Years Day
                    <Select onChange={event => {this.setState({ schedule: {...this.state.schedule, 'new_years_day_start': event[0].value}})}} options={options} value={this.state.schedule.new_years_day_start} required/><br/>
                    <Select onChange={event => {this.setState({ schedule: {...this.state.schedule, 'new_years_day_end': event[0].value}})}} options={options} value={this.state.schedule.new_years_day_end} required/><br/>
                    Thanksgiving Day
                    <Select onChange={event => {this.setState({ schedule: {...this.state.schedule, 'thanksgiving_day_start': event[0].value}})}} options={options} value={this.state.schedule.thanksgiving_day_start} required/><br/>
                    <Select onChange={event => {this.setState({ schedule: {...this.state.schedule, 'thanksgiving_day_end': event[0].value}})}} options={options} value={this.state.schedule.thanksgiving_day_end} required/><br/>
                    Christmas Day
                    <Select onChange={event => {this.setState({ schedule: {...this.state.schedule, 'christmas_day_start': event[0].value}})}} options={options} value={this.state.schedule.christmas_day_start} required/><br/>
                    <Select onChange={event => {this.setState({ schedule: {...this.state.schedule, 'christmas_day_end': event[0].value}})}} options={options} value={this.state.schedule.christmas_day_end} required/><br/>
                    <input type="submit" value="Edit Hours"/>
                </form><br/><br/>
                <button onClick={this.home}>Home</button>


            </div>
        )
    }
}

export default withRouter(EditSchedule)