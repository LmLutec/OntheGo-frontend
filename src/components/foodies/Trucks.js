import React from 'react'
import { withRouter } from 'react-router-dom'


const Trucks = props => {

  const allTrucks = props.trucks
  const error = props.error
  let message = ""
  
  function details(truckId){
    props.details(truckId)
    props.history.push("/truck")
  }

  function mainPage(){
    window.history.back()
  }

  function Grab(){

    return allTrucks.map((nestedTrucks) => {
      return nestedTrucks.map((truck, id) => {
        return <div key={id}>
                Food Truck: {truck.name}<br/>
                Food type: {truck.food_type}<br/>
                Street: {truck.street}<br/>
                City: {truck.city}<br/>
                State: {truck.state}<br/>
                Zip code: {truck.zip_code}<br/>
                Phone number: {truck.phone_number}<br/>
                <button onClick={() => {details(truck.id)}}>View Details</button>
              </div>
      })
    })
  }

  if (error){
    message = "There are no foodtrucks in your area. If you think this is a mistake, check the spelling of the City and State"
  }
  else {
    message = Grab()
  }

return (
  <div>
      All trucks 
    <ul>
        {message}
    </ul>
    <button onClick={() => {mainPage()}}>Main Page</button>
  </div>
  )
}

export default withRouter(Trucks)




