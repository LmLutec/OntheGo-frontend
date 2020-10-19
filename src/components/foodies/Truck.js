import React from 'react'
 
const Truck = props => {
  const t = props.truck  

  return (
    <div>
            Truck info 
        <ul>
        <br/>
            Food Truck:{t.name}<br/>
            Food type:{t.food_type}<br/>
            Phone number:{t.phone_number}<br/>
            City:{t.city}<br/>
            State:{t.state}<br/><br/>
        </ul>
       
    </div>
  )
}
 
export default Truck