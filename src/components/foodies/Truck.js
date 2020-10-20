import React from 'react'
import { withRouter } from 'react-router-dom'
 
const Truck = props => {
  const t = props.truck  
console.log(t)
  function Rate(){
    props.history.push("/new/rating")
  }

  function goBack(){
    window.history.back()
  }


  return (
    <div>
            Truck info 
        <ul>
            Food Truck:{t.name}<br/>
            Food type:{t.food_type}<br/>
            Phone number:{t.phone_number}<br/>
            City:{t.city}<br/>
            State:{t.state}<br/><br/>
            <button onClick={() => {goBack()}}>Back to results</button><br/>
            <button onClick={() => {Rate()}}>Rate Foodtruck</button>
        </ul>

    </div>
  )
}
 
export default withRouter(Truck)