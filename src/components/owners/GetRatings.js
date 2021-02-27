import React from 'react'



let foodQuality = []
let customerService = []
let speedOfService = []
let prices = []


const reducer = (accumulator, currentValue) => (accumulator + currentValue) 


const GetRatings = props => {
    props.ratings.map((nestedRatings) => {
      
     return nestedRatings.map((rating) => {
        foodQuality.push(rating.food_quality)
        customerService.push(rating.customer_service)
        speedOfService.push(rating.speed_of_service)
        prices.push(rating.prices)
      })
    })

const getAverage = (arr) => {
   return Math.round(arr.reduce(reducer,0) / arr.length)
}

  return (
    <div>
      <ul className="ratingValues">
          <li className="overallRating">Overall food quality rating: {getAverage(foodQuality)}</li><br/>
          <li className="overallRating">Overall Customer Service rating: {getAverage(customerService)}</li><br/>
          <li className="overallRating">Overall Speed of Service: {getAverage(speedOfService)}</li><br/>
          <li className="overallRating">Overall price scale: {getAverage(prices)}</li><br/>
      </ul>
    </div>
  )
}

export default GetRatings

