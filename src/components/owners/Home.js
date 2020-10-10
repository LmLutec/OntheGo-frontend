import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import EditTruck from './EditTruck'


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
                id: json.id,
                truckName: json.name,
                foodType: json.food_type,
                phoneNumber: json.phone_number,
                city: json.city,
                state: json.state
            })
            // this.props.addTruck(json.id)
        })
    }

    
    editTruck = () => {
        console.log(this.props.truck())
        // return <EditTruck id={this.state.id}/>
     this.props.history.push("/edit/truck")
    }
    
    logout = () => {
        localStorage.clear()
        this.props.history.push("/")
    }



    render(){

        return(
            <div>
                <h1>Welcome back</h1> <br/>
{/* 
                <section className="owner_info">

                </section> */}



                <section className="truck_info">
                    Food Truck: {this.state.truckName}<br/>
                    Food type: {this.state.foodType}<br/>
                    Phone Number: {this.state.phoneNumber}<br/>
                    City: {this.state.city}<br/>
                    State: {this.state.state}<br/>
                    <button onClick={this.editTruck}>Edit Truck Information</button><br/><br/>

            
               


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