import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import MenuItem from './MenuItem'
import Note from './Note'
import GetRatings from './GetRatings'

class Home extends Component {

    state = {
        deleteProf: false,
        data: null
    }

 componentDidMount(){
     this.fetchProfile()
 }

 async fetchProfile(){
     try {
        const data =  {
                method: "GET",
                headers: {
                    Authorization: `Bearer: ${localStorage.getItem('jwt_token')}`
                }
            }
        const response = await fetch("https://alwaysonthego.herokuapp.com/api/v1/profile", data)
        const json = await response.json()
        console.log(json)
        this.props.profile(json)
            this.setState({
                data: json
            })
        }
        catch (error) {
            console.log(error)
        }
 }

    profile = () => {

        // const renderItems = () => {
        //     return this.props.food.map((items) => {
        //         return items.map((i, id) => <MenuItem deleteFood={this.props.deleteFood} key={id} item={i}/>)
        //     })
                
        // }
    
        const renderNotes = () => {
            return this.props.notes.map((allnotes) => {
                return allnotes.map((n, id) => <Note deleteNote={this.props.deleteNote} key={id} note={n}/>)
                })
            } 

        return(
            <div>
                <h1>Welcome back</h1>

                <section className="truck_info">
                    <h3>Food Truck</h3>
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
                    <h3>Schedule</h3>
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

                <section className="menu_info full-menu">
                    <h3>Menu</h3>
                    {/* {renderItems()} */}
                    <button onClick={this.editMenu} className="home_edit_menu">Edit Menu</button>
                </section>
                <section className="add_notes" >
                    <h3>Notes</h3>
                    {renderNotes()}
                </section>
                <button onClick={this.addNote}>Add note</button><br/>

                <section className="ratings" style={{display: this.props.ratings.length > 1 ? 'block' : 'none' }}>
                    <h3>Ratings</h3>
                    <GetRatings ratings={this.props.ratings}/>
                    <button onClick={this.allRatings}>See all ratings</button>
                </section>

                <button onClick={this.logout}>Logout</button><br/><br/><br/>

                <section className="delete_confirmation">
                    <div style={{display: this.state.deleteProf === false ? 'none' : 'block'}}>
                        Are you sure you want to delete your account? Account will be permanently deleted.
                            <button onClick={this.delete}>Yes</button>
                            <button onClick={this.dontDelete}>No</button>
                    </div>
                    <button onClick={this.deleteProfileConf}>DELETE ACCOUNT</button>
                </section>
        </div>
        
        )}
    

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
    
    allRatings = () => {
        this.props.history.push("/truck/ratings")
    }

    logout = () => {
        localStorage.clear()
        this.props.history.push("/")
        window.location.reload()
    }

    deleteProfileConf = () => {
        if (this.state.deleteProf === false){
            this.setState({
                deleteProf: true
            })
        }
        else {
            this.setState({
                deleteProf: false
            })
        }
    }

    delete = () => {
        this.props.deleteAcct(this.props.owner)
        this.props.history.push("/")
        localStorage.clear()
        window.location.reload()
    }

    dontDelete = () => {
        this.setState({
            deleteProf: false
        })
    }


    render(){
        
        if(this.state.data === null){
            return <div>Loading...</div>
        }


        return(
            
            <div className="profile" >
                {this.profile()}
            </div>
            

        )
    }

}


export default withRouter(Home)

// //  https://alwaysonthego.herokuapp.com/api/v1/profile/
// http://localhost:3000/api/v1/profile/