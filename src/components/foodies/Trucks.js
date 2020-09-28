import React from 'react'
import { Component } from 'react'
import Truck from './Truck'
 
class Trucks extends Component {       
    
render(){

const all = this.props.trucks

function Grab(){
    return all.map((a) => {
      return a.map((n, id) => <Truck data={n} key={id}/>)
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
}
export default Trucks