import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'


class EditTruck extends Component {

    state = {
        foodtruck: {
        foodtruck: {
            name: `${this.props.truck.name}`,
            food_type: `${this.props.truck.food_type}`,
            phone_number: `${this.props.truck.phone_number}`,
            street: `${this.props.truck.street}`,
            city: `${this.props.truck.city}`,
            state: `${this.props.truck.state}`,
            zip_code: `${this.props.truck.zip_code}`
        }},
        numberParts: {
        areaCode: '',
        begNum: '',
        lastNum: ''
        }
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
       
           this.props.profile(json)
        
           let areaCode = json.phone_number.slice(0,3)
           let begNum = json.phone_number.slice(3,6)
           let lastNum = json.phone_number.slice(6)
          
               this.setState({
                   numberParts: {
                       ...this.state.numberParts,
                       areaCode: areaCode,
                       begNum: begNum,
                       lastNum: lastNum
                   }
               })
           }
           catch (error) {
               console.log(error)
           }
    }

    componentWillUnmount(){
        window.location.reload()
    }

    handleChange = (event) => {
        this.setState({
            foodtruck: {
                foodtruck: {
                ...this.state.foodtruck.foodtruck,
                [event.target.id]: event.target.value
                }
            }
        })
    }

    handlePhoneNumber = (event) => {
        this.setState({
            numberParts: {
            ...this.state.numberParts,
            [event.target.id] : event.target.value
            }
        })
    }

    handleSubmit = (event) => {
        let number = `${this.state.numberParts.areaCode}` + `${this.state.numberParts.begNum}` + `${this.state.numberParts.lastNum}`
        this.setState({
            foodtruck: {
            foodtruck: {
                ...this.state.foodtruck.foodtruck,
                phone_number: number
            }
        }
        })
        event.preventDefault()
        console.log(this.state)
        const id = this.props.truck.id
        this.props.edit(this.state.foodtruck, id)
        // this.props.history.push("/home")
    }

    home = () => {
        this.props.history.push("/home")
    }

    render(){
        return(
            <div className="edit-truck">
                <h3>Edit one or more fields</h3>
                <form onSubmit={(event) => {this.handleSubmit(event)}}>
                    <label>Name</label>
                    <input onChange={ event => {this.handleChange(event)}} type="text" id="name" value={this.state.foodtruck.foodtruck.name} required /><br/>
                    <label>Street</label>
                    <input onChange={ event => {this.handleChange(event)}} type="text" id="street" value={this.state.foodtruck.foodtruck.street} required/><br/>
                    <label>State</label>
                    <input onChange={ event => {this.handleChange(event)}} type="text" id="state" value={this.state.foodtruck.foodtruck.state} required/><br/>
                    <label>City</label>
                    <input onChange={ event => {this.handleChange(event)}} type="text" id="city" value={this.state.foodtruck.foodtruck.city} required/><br/>
                    <label>Zip code</label>
                    <input onChange={ event => {this.handleChange(event)}} type="text" id="zip_code" value={this.state.foodtruck.foodtruck.zip_code} required/><br/>
                    <label>Food type</label>
                    <input onChange= { event => {this.handleChange(event)}} type="text" id="food_type" value={this.state.foodtruck.foodtruck.food_type} required/><br/>
                    <label>Phone number</label>  
                        (<input onChange={ event => {this.handlePhoneNumber(event)}} type="text" id="areaCode" value={this.state.numberParts.areaCode} style={{ width: "25px" }} required/>)
                    <input onChange={ event => {this.handlePhoneNumber(event)}} type="text" id="begNum" value={this.state.numberParts.begNum} style={{ width: "25px" }} required/>-
                    <input onChange={ event => {this.handlePhoneNumber(event)}} type="text" id="lastNum" value={this.state.numberParts.lastNum} style={{ width: "30px" }} required/><br/>
                    <input type="submit" value="Edit Truck"/>
                </form>

                <button onClick={this.home}>Home</button>
            </div>
        )
    }
}

export default withRouter(EditTruck)