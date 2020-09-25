import React, { Component } from 'react'


class Schedule extends Component {
    constructor(props){
        super(props)

    this.state = {
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
    }


    render(){
        return(
            <div>
                <h4>Foodtruck Hours</h4>
                <h6>Remember to specify Am/Pm.</h6>
                <form>
                    Monday<input type="text" id="mon_start" value={this.state.schedule.mon_start} placeholder="Open"/>  
                    <input type="text" id="mon_end" value={this.state.mon_end} placeholder="Close"/><br/>
                    Tuesday<input type="text" id="tues_start" value={this.state.schedule.tues_start} placeholder="Open"/>  
                    <input type="text" id="tues_end" value={this.state.tues_end} placeholder="Close"/><br/>
                    Wednesday<input type="text" id="wed_start" value={this.state.schedule.wed_start} placeholder="Open"/>  
                    <input type="text" id="wed_end" value={this.state.wed_end} placeholder="Close"/><br/>
                    Thursday<input type="text" id="thurs_start" value={this.state.schedule.thurs_start} placeholder="Open"/>  
                    <input type="text" id="thurs_end" value={this.state.thurs_end} placeholder="Close"/><br/>
                    Friday<input type="text" id="fri_start" value={this.state.schedule.fri_start} placeholder="Open"/>  
                    <input type="text" id="fri_end" value={this.state.fri_end} placeholder="Close"/><br/>
                    Saturday<input type="text" id="sat_start" value={this.state.schedule.sat_start} placeholder="Open"/>  
                    <input type="text" id="sat_end" value={this.state.sat_end} placeholder="Close"/><br/>
                    Sunday<input type="text" id="sun_start" value={this.state.schedule.sun_start} placeholder="Open"/>  
                    <input type="text" id="sun_end" value={this.state.sun_end} placeholder="Close"/><br/><br/>
                    New Years Day<input type="text" id="new_years_day_start" value={this.state.schedule.new_years_day_start} placeholder="Open"/>  
                    <input type="text" id="new_years_day_end" value={this.state.new_years_day_end} placeholder="Close"/><br/>
                    Thanksgiving Day<input type="text" id="thanksgiving_day_start" value={this.state.schedule.thanksgiving_day_start} placeholder="Open"/>  
                    <input type="text" id="thanksgiving_day_end" value={this.state.thanksgiving_day_end} placeholder="Close"/><br/>
                    Christmas Day<input type="text" id="christmas_day_start" value={this.state.schedule.christmas_day_start} placeholder="Open"/>  
                    <input type="text" id="christmas_day_end" value={this.state.christmas_day_end} placeholder="Close"/><br/>
                    <input type="Submit" value="Set Hours"/>
                </form>
            </div>
        )
    }
}


export default Schedule

