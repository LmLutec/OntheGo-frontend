import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class Schedule extends Component {

    state = {
        schedule: {
            mon_start: "",
            mon_end: "",
            tues_start: "",
            tues_end: "",
            wed_start: "",
            wed_end:"",
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
            christmas_day_end: ""
        }
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
        let id = this.props.truck
        this.props.addSchedule(this.state.schedule, id)
        this.props.addMenu(id)
        this.props.history.push("/manage/menu")
    }

    render(){

        return(
            <div>
                <h4>Foodtruck Hours</h4>
                <h6>Remember to specify Am/Pm.</h6>
                <form onSubmit={(event) => {this.handleSubmit(event)}}>
                    Monday<input onChange={ event => {this.handleChange(event)}} type="text" id="mon_start" value={this.state.schedule.mon_start} placeholder="Open" required/>  
                    <input onChange={ event => {this.handleChange(event)}} type="text" id="mon_end" value={this.state.schedule.mon_end} placeholder="Close" required/><br/>
                    Tuesday<input onChange={ event => {this.handleChange(event)}} type="text" id="tues_start" value={this.state.schedule.tues_start} placeholder="Open" required/>  
                    <input onChange={ event => {this.handleChange(event)}} type="text" id="tues_end" value={this.state.schedule.tues_end} placeholder="Close" required/><br/>
                    Wednesday<input onChange={ event => {this.handleChange(event)}} type="text" id="wed_start" value={this.state.schedule.wed_start} placeholder="Open" required/>  
                    <input onChange={ event => {this.handleChange(event)}} type="text" id="wed_end" value={this.state.schedule.wed_end} placeholder="Close" required/><br/>
                    Thursday<input onChange={ event => {this.handleChange(event)}} type="text" id="thurs_start" value={this.state.schedule.thurs_start} placeholder="Open" required/>  
                    <input onChange={ event => {this.handleChange(event)}} type="text" id="thurs_end" value={this.state.schedule.thurs_end} placeholder="Close" required/><br/>
                    Friday<input onChange={ event => {this.handleChange(event)}} type="text" id="fri_start" value={this.state.schedule.fri_start} placeholder="Open" required/>  
                    <input onChange={ event => {this.handleChange(event)}} type="text" id="fri_end" value={this.state.schedule.fri_end} placeholder="Close" required/><br/>
                    Saturday<input onChange={ event => {this.handleChange(event)}} type="text" id="sat_start" value={this.state.schedule.sat_start} placeholder="Open" required/>  
                    <input onChange={ event => {this.handleChange(event)}} type="text" id="sat_end" value={this.state.schedule.sat_end} placeholder="Close" required/><br/>
                    Sunday<input onChange={ event => {this.handleChange(event)}} type="text" id="sun_start" value={this.state.schedule.sun_start} placeholder="Open" required/>  
                    <input onChange={ event => {this.handleChange(event)}} type="text" id="sun_end" value={this.state.schedule.sun_end} placeholder="Close" required/><br/><br/>
                    New Years Day<input onChange={ event => {this.handleChange(event)}} type="text" id="new_years_day_start" value={this.state.schedule.new_years_day_start} placeholder="Open" required/>  
                    <input onChange={ event => {this.handleChange(event)}} type="text" id="new_years_day_end" value={this.state.schedule.new_years_day_end} placeholder="Close" required/><br/>
                    Thanksgiving Day<input onChange={ event => {this.handleChange(event)}} type="text" id="thanksgiving_day_start" value={this.state.schedule.thanksgiving_day_start} placeholder="Open" required/>  
                    <input onChange={ event => {this.handleChange(event)}} type="text" id="thanksgiving_day_end" value={this.state.schedule.thanksgiving_day_end} placeholder="Close" required/><br/>
                    Christmas Day<input onChange={ event => {this.handleChange(event)}} type="text" id="christmas_day_start" value={this.state.schedule.christmas_day_start} placeholder="Open" required/>  
                    <input onChange={ event => {this.handleChange(event)}} type="text" id="christmas_day_end" value={this.state.schedule.christmas_day_end} placeholder="Close" required/><br/>
                    <input type="submit" value="Set Hours"/>
                </form>
            </div>
        )
    }
}


export default withRouter(Schedule)

