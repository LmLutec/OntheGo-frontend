import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import MenuItem from './MenuItem'



class Home extends Component {

    state = {
        // id: "",
        truckName: "",
        foodType: "",
        phoneNumber: "",
        city: "",
        state: "",
        clicked: false
    }

    componentDidMount(){
        this.props.profile()
    }
    
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


    render(){
    console.log(this.props.notes)

        const renderItems = () => {
            return this.props.food.map((items) => {
               return items.map((i, id) => <MenuItem delete={this.props.delete} key={id} item={i}/>)
            })
            
         }
    

        // const menu = this.props.menu
    
        
        // function toSee (){
        //     for (const i in menu){
        //         console.log(menu[i])
        //         return <MenuItem item={menu[i]} />
        //     }
        // }
    
    
           
        // this.props.menu.map((i) => console.log(i))
    //    const obj = this.props.menu.items 

    // for (const value in obj){
    //     return(   <MenuItem name={obj[value].name} price={obj[value]} item_type={obj[value]}/>
    //     )
    //     }
    // this.props.menu.items.map((i) => console.log(i))
    // menu.map((item, id) => {
    //     return item 
    // })
    // console.log(items)
    // <MenuItem delete={this.props.delete} key={id} item={item}/>)
 
        return(
        
            <div>
                <h1>Welcome back</h1> <br/>
{/* 
                <section className="owner_info">

                </section> */}



                <section className="truck_info">
                    Food Truck: {this.props.truck.name}<br/>
                    Food type: {this.props.truck.food_type}<br/>
                    Phone Number: {this.props.truck.phone_number}<br/>
                    City: {this.props.truck.city}<br/>
                    State: {this.props.truck.state}<br/>
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
                    
                        {/* {toSee()} */}
                    
                    {renderItems()}
                    <button onClick={this.editMenu}>Edit Menu</button>
                </section>

                <section className="add_notes">
                    <button onClick={this.addNote}>Add note</button>
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