import React from 'react'
import { withRouter } from 'react-router-dom'



const RatingDetail = props => {

    const rating = props.rating 

        return(
          <div>
              Food quality: {rating.food_quality} <br/>
              Customer service: {rating.customer_service} <br/>
              Speed of service: {rating.speed_of_service} <br/>
              Prices: {rating.prices} <br/>
              Created: {rating.created_at} <br/>
          </div>

        )
    }  
      
      export default withRouter(RatingDetail)
    