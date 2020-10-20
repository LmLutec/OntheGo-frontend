import React from 'react'



let foodQuality = []
let customerService = []
let speedOfService = []
let prices = []


const reducer = (accumulator, currentValue) => (accumulator + currentValue) 


const GetRatings = props => {
   props.ratings.map((nestedRatings) => {
     nestedRatings.map((rating) => {
        foodQuality.push(rating.food_quality)
        customerService.push(rating.customer_service)
        speedOfService.push(rating.speed_of_service)
        prices.push(rating.prices)
    })
  })

const getAverage = (arr) => {
   return arr.reduce(reducer,0) / arr.length
}

  return (
    <div>
      <ul>
            Overall food quality rating: {getAverage(foodQuality)} <br/>
            Overall Customer Service rating: {getAverage(customerService)} <br/>
            Overall Speed of Service: {getAverage(speedOfService)} <br/>
            Overall price scale: {getAverage(prices)} <br/>
      </ul>
    </div>
  )
}

export default GetRatings

