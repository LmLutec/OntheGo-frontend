import React from 'react'
import { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Truck from './Truck'
 
// let Details;

class Trucks extends Component {   
    


render(){

const trucks = this.props.trucks
// const details = this.props.details

// function handleSubmit(id){
//     debugger
    // this.props.details(id)
// }

function Grab(){

    return trucks.map((nestedTrucks) => {
      return nestedTrucks.map((truck, id) => {
        return <div key={id}>
                Food Truck: {truck.name}<br/>
                Food type: {truck.food_type}<br/>
                Phone number: {truck.phone_number}<br/>
                City: {truck.city}<br/>
                State: {truck.state}<br/><br/>
                {/* <button onClick={details}>Details</button> */}
                {/* onclick needs to render truck show page */}
              </div>
       
      })
    })
}

    

  return (


    <div>
            All trucks  
            
            {Grab()}
    </div>
  )
  }
}
export default withRouter(Trucks)

