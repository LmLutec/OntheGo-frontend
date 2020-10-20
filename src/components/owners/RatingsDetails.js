import React from 'react'
import RatingDetail from './RatingDetail'



const RatingDetails = props => {

function grabEach (){
    return props.ratings.map((ratings) => {
      return ratings.map((rating, id) =>  <RatingDetail rating={rating} key={id}/>)
    })
}
  
function back (){
  window.history.back()
}

    return(
      <div>
          All Ratings
        <ul>
            {grabEach()}
        </ul>
        <button onClick={() => back()}>Back</button>
      </div>
    )
}  
  
  export default RatingDetails


