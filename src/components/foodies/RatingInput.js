import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class RatingInput extends Component {

    state = {
        rating: {
            food_quality: "5",
            customer_service: "5",
            speed_of_service: "5",
            prices: "5"
        }
    }

    handleChange = event => {
        debugger
        this.setState({
            rating: {
                ...this.state.rating,
                [event.target.id]: event.target.value
            }
        })
    }


    handleSubmit = event => {
        event.preventDefault()
        
        this.props.add(this.state.rating, this.props.truck.id)
// debugger
        this.setState({
            rating: {
                food_quality: "",
                customer_service: "",
                speed_of_service: "",
                prices: ""
            }
        })

        this.props.history.push("/")
    }

    goBack = () => {
        window.history.back()
    }

    render(){
        
        return(
            <div>
                Rate {this.props.truck.name}
                <form onSubmit={(event) => {this.handleSubmit(event)}}>
                    <label>Rate the following areas</label><br/>
                    Food quality(Freshness and taste)
                    <select onChange={(event) => {this.handleChange(event)}} value={this.state.rating.food_quality} id="food_quality">
                    <option value="1">Food was cold/not fresh and was not flavorful</option>
                    <option value="2">Luke warm/cold food with little to no flavor</option>
                    <option value="3">Warm food, seasoned well</option>
                    <option value="4">Hot food, could use more flavor</option>
                    <option value="5">Food was hot, fresh, and flavorful</option>
                    </select><br/>
                    Speed of Service
                    <select onChange={(event) => {this.handleChange(event)}} value={this.state.rating.speed_of_service} id="speed_of_service">
                    <option value="1">There was a long wait to order OR I had to wait over 30 minutes for my order</option>
                    <option value="2">There was a long wait to order OR I had to wait over 20 minutes for my order</option>
                    <option value="3">Including waiting in line to order and waiting for order to cook, I spent around 20 minutes here</option>
                    <option value="4">Including waiting in line to order and waiting for order to be compleleted, I spent around 15 minutes here</option>
                    <option value="5">Including waiting in line to order and waiting for order to be compleleted, I spent less than 15 minutes here</option>
                    </select><br/>
                    Customer Service
                    <select onChange={(event) => {this.handleChange(event)}} value={this.state.rating.customer_service} id="customer_service">
                    <option value="1">The employee(s) was rude and not helpful</option>
                    <option value="2">The employee(s) seemed disengaged with minimal eye contact and little interest(had to keep repeating order and etc.)</option>
                    <option value="3">The employee(s) was not rude, was not very engaging, but paid attention to my order(received my order correctly without having constant repeats)</option>
                    <option value="4">The employee(s) was friendly and helpful for the most part</option>
                    <option value="5">The employee(s) were very helpful and/or friendly</option>
                    </select><br/>
                    Prices
                    <select onChange={(event) => {this.handleChange(event)}} value={this.state.rating.prices} id="prices">
                    <option value="1"> more than $30 a meal</option>
                    <option value="2">around $25 a meal</option>
                    <option value="3">around $20 a meal</option>
                    <option value="4">under $15 per meal</option>
                    <option value="5">Under $10 per meal</option>
                    </select><br/>
                    
                    <input type="submit" value="Add rating"/>
                </form>

                <button onClick={this.goBack}>Go back</button>
              
            </div>
        )
    }
}

export default withRouter(RatingInput)