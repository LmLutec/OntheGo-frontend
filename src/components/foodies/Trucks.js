import React from 'react'
import { withRouter } from 'react-router-dom'


const Trucks = props => {
  const allTrucks = props.trucks
  
  function details(truckId){
    props.details(truckId)
    props.history.push("/truck")
  }

  function Grab(){

    return allTrucks.map((nestedTrucks) => {
      return nestedTrucks.map((truck, id) => {
        return <div key={id}>
                Food Truck: {truck.name}<br/>
                Food type: {truck.food_type}<br/>
                Phone number: {truck.phone_number}<br/>
                City: {truck.city}<br/>
                State: {truck.state}<br/><br/>
                <button onClick={() => {details(truck.id)}}>View Details</button>
              </div>
      })
    })
  }

return (
  <div>
      All trucks 
    <ul>
        {Grab()}
    </ul>
  </div>
  )
}

export default withRouter(Trucks)




