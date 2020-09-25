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
                <h4>Create your schedule. Type "closed" on days you are closed.</h4>
                <form>
                    <input type="text" id="mon_start" value={this.state.schedule.mon_start} placeholder="Monday start time"/>
                </form>
            </div>
        )
    }
}


export default Schedule

