import React, { Component } from 'react'

export default class Owners extends Component{
    
    render(){

        return(
            <div>
                <p>{this.o}</p>
               
            </div>
        )
    }
}

const o = this.props.test.map((owner)=>{
    <p>{owner}</p>
})