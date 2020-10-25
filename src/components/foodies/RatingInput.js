import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

let errorMessage = ""

class RatingInput extends Component {

    state = {
        rating: {
            food_quality: "",
            customer_service: "",
            speed_of_service: "",
            prices: ""
        }
    }

    ratingInputValidator = () => {
        if (this.state.rating.includes("")){
            console.log(true)
        }
        // if (this.state.food_quality === "" || this.state.food_quality > 5){
        //     errorMessage = ""
        // }
    }


    handleChange = event => {
        this.setState({
            rating: {
                ...this.state.rating,
                [event.target.id]: event.target.value
            }
        })
    }


    handleSubmit = event => {
        event.preventDefault()
        this.ratingInputValidator()
        console.log(this.props.truck.id)
        this.props.add(this.state.rating, this.props.truck.id)

        this.setState({
            rating: {
                food_quality: "",
                customer_service: "",
                speed_of_service: "",
                prices: ""
            }
        })

        window.history.back()
        // this.props.history.push("/home")
    }

    render(){
        
        return(
            <div>
                Rate Foodtruck below
                <form onSubmit={(event) => {this.handleSubmit(event)}}>
                    <label>On a scale of 1 to 5 (1 = bad, 5 = excellent), rate the following areas</label><br/>
                    Food quality(Freshness and taste)<input onChange={(event) => {this.handleChange(event)}} type="text" id="food_quality" value={this.state.rating.food_quality}/><br/>
                    Speed of Service<input onChange={(event) => {this.handleChange(event)}} type="text" id="speed_of_service" value={this.state.rating.speed_of_service}/><br/>
                    Customer Service<input onChange={(event) => {this.handleChange(event)}} type="text" id="customer_service" value={this.state.rating.customer_service}/><br/>
                    Price (1 = not expensive, 5 = expensive)<input onChange={(event) => {this.handleChange(event)}} type="text" id="prices" value={this.state.rating.prices}/><br/>
                    <input type="submit" value="Add rating"/>
                </form>

                <section className="errors">
                    {errorMessage}
                </section>
            </div>
        )
    }
}

export default withRouter(RatingInput)