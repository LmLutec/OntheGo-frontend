import React, { Component } from 'react'

export default class Owners extends Component{
    
    render(){
        debugger
        const getOwners = this.props.test
        // .map((owner) => {
            // console.log(owner)
        // })
        return(
            <div>
               {this.getOwners}
            </div>
        )
    }
}

