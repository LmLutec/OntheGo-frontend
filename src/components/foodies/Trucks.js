import React from 'react'
import { withRouter } from 'react-router-dom'


const Trucks = props => {

  const allTrucks = props.trucks
  const error = props.error
  let message = ""
  
  async function details(truckId){
    try {
      const response = await fetch(`https://alwaysonthego.herokuapp.com/api/v1/foodtrucks/${truckId}`)
      const json = await response.json()
      props.details(json)
      props.history.push("/truck")
    }
    catch (error) {
      // props.history.push("/errors")
      console.log(error)
  }
    
  }

  function mainPage(){
    window.history.back()
  }


  function Grab(){

    return allTrucks.map((nestedTrucks) => {
      return nestedTrucks.map((truck, id) => {
        return <div key={id} className="truck">
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
    <section className="truck-container">
      <h3>All trucks </h3>
    <ul className="trucks">
        {message}
    </ul>
    <button onClick={() => {mainPage()}} className="main-page">Main Page</button>
    </section>
  </div>
  )
}

export default withRouter(Trucks)




