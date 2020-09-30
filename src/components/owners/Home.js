import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Owner from './Owner'


class Home extends Component {

    state = {
        truckName: "",
        foodType: "",
        phoneNumber: "",
        city: "",
        state: "",
        foodtruck: {
            name: "",
            food_type: "",
            phone_number: "",
            city: "",
            state: ""
        },
        clicked: false
    }


    componentDidMount() {
        this.ownerData()
    }

    ownerData(){ 
        fetch("http://localhost:3000/api/v1/profile", {
            method: "GET",
            headers: {
                Authorization: `Bearer: ${localStorage.getItem('jwt_token')}`
            }
        })
        .then(response => response.json())
        .then(json =>   {
            this.setState({
                truckName: json.name,
                foodType: json.food_type,
                phoneNumber: json.phone_number,
                city: json.city,
                state: json.state
            })
        })
    }

    handleChange = (event) => {
        this.setState({
            foodtruck: {
                ...this.state.foodtruck,
                [event.target.id]: event.target.value
            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        // {this.props.addTruck(this.state.foodtruck)}
        // this.props.history.push("/schedule")
    }

    
    editTruck = () => {
        this.setState({
            clicked: true
        })
    }
    
    logout = () => {
        localStorage.clear()
        this.props.history.push("/")
    }



    render(){

        return(
            <div>
                <h1>Welcome back</h1> <br/>
                <section className="truck_info">
                    Food Truck: {this.state.truckName}<br/>
                    Food type: {this.state.foodType}<br/>
                    Phone Number: {this.state.phoneNumber}<br/>
                    City: {this.state.city}<br/>
                    State: {this.state.state}<br/>
                    <button onClick={this.editTruck}>Edit Truck Information</button><br/><br/>

            <form style={{ display: this.state.clicked ? "block" : "none" }} onSubmit={(event) => {this.handleSubmit(event)}}>
                <label>Name</label>
                <input onChange={ event => {this.handleChange(event)}} type="text" id="name" value={this.state.foodtruck.name} /><br/>
                <label>State</label>
                <input onChange={ event => {this.handleChange(event)}} type="text" id="state" value={this.state.foodtruck.state} /><br/>
                <label>City</label>
                <input onChange={ event => {this.handleChange(event)}} type="text" id="city" value={this.state.foodtruck.city} /><br/>
                <label>Food type</label>
                <input onChange= { event => {this.handleChange(event)}} type="text" id="food_type" value={this.state.foodtruck.food_type} /><br/>
                <label>Phone number</label>
                <input onChange= { event => {this.handleChange(event)}} type="text" id="phone_number" value={this.state.foodtruck.phone_number} /><br/>
                <input type="submit" value="Edit Truck"/>
            </form>



                </section>
                
                
                <button onClick={this.logout}>Logout</button>

            </div>
            
                            //  <button onClick={this.logout()}>Logout</button>

        )
    }

}



const owner = JSON.parse(localStorage.getItem('owner'))
// console.log(owner.foodtruck)

export default withRouter(Home)