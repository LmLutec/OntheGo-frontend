import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import MenuItem from './MenuItem'
import Note from './Note'
import GetRatings from './GetRatings'



class Home extends Component {

 
    
    // componentWillMount(){
    //     this.props.profile()
    // }
    
    // componentDidMount(){
    //     this.props.profile()
    // }
    // componentDidUpdate(){
    //     this.props.profile()
    // }

    editTruck = () => {
     this.props.history.push("/edit/truck")
    }

    editSchedule = () => {
        this.props.history.push("/edit/schedule")
    }

    editMenu = () => {
        this.props.history.push("/edit/menu")
    }

    addNote = () => {
        this.props.history.push("new/note")
    }
    
    logout = () => {
        localStorage.clear()
        this.props.history.push("/")
    }



//  numbers.reduce(myFunc);




    render(){
        const renderItems = () => {
            return this.props.food.map((items) => {
               return items.map((i, id) => <MenuItem deleteFood={this.props.deleteFood} key={id} item={i}/>)
            })
            
         }

         const renderNotes = () => {
            return this.props.notes.map((allnotes) => {
                return allnotes.map((n, id) => <Note deleteNote={this.props.deleteNote} key={id} note={n}/>)
             })
         }

         function myFunc(total, num) {
            return total - num;
          }
 
        return(
        
            <div>
                <h1>Welcome back</h1> <br/>
{/* 
                <section className="owner_info">

                </section> */}



                <section className="truck_info">
                    Food Truck: {this.props.truck.name}<br/>
                    Food type: {this.props.truck.food_type}<br/>
                    Street: {this.props.truck.street}<br/>
                    City: {this.props.truck.city}<br/>
                    State: {this.props.truck.state}<br/>
                    Zip code: {this.props.truck.zip_code}<br/>
                    Phone Number: {this.props.truck.phone_number}<br/>
                    <button onClick={this.editTruck}>Edit Truck Information</button><br/><br/>
                </section>

                <section className="schedule_info">
                    Monday: {this.props.schedule.mon_start} to {this.props.schedule.mon_end} <br/>
                    Tuesday: {this.props.schedule.tues_start} to {this.props.schedule.tues_end} <br/>
                    Wednesday: {this.props.schedule.wed_start} to {this.props.schedule.wed_end} <br/>
                    Thursday: {this.props.schedule.thurs_start} to {this.props.schedule.thurs_end} <br/>
                    Friday: {this.props.schedule.fri_start} to {this.props.schedule.fri_end} <br/>
                    Saturday: {this.props.schedule.sat_start} to {this.props.schedule.sat_end} <br/>
                    Sunday: {this.props.schedule.sun_start} to {this.props.schedule.sun_end} <br/><br/>
                    New Years Day: {this.props.schedule.new_years_day_start} to {this.props.schedule.new_years_day_end}<br/>
                    Thanksgiving Day: {this.props.schedule.thanksgiving_day_start} to {this.props.schedule.thanksgiving_day_end}<br/>
                    Christmas Day: {this.props.schedule.thanksgiving_day_start} to {this.props.schedule.thanksgiving_day_end}<br/>
                    <button onClick={this.editSchedule}>Edit Schedule</button>
                </section>
           
                <section className="menu_info">
                    
                    
                    {renderItems()}
                    <button onClick={this.editMenu}>Edit Menu</button>
                </section>

                <section className="add_notes">
                {renderNotes()}
                    <button onClick={this.addNote}>Add note</button>
                </section>

                <section>
                    <GetRatings ratings={this.props.ratings}/>
                </section>

                
                <button onClick={this.logout}>Logout</button>

            </div>
            
                            //  <button onClick={this.logout()}>Logout</button>

        )
    }

}



// const owner = JSON.parse(localStorage.getItem('owner'))
// console.log(owner.foodtruck)

export default withRouter(Home)