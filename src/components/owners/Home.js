import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Owner from './Owner'

let ownerInfo = {}


class Home extends Component {

    state = {
        firstName: "",
        lastName: "",
        email: ""
    }


        componentDidMount() {
            this.ownerData()
        }

        ownerData(){ 
            fetch("http://localhost:3000/api/v1/profile", {
            method: "GET",
            headers: {
                Authorization: `Bearer: ${localStorage.getItem('jwt_token')}`
            }
        })
        .then(response => response.json())
        .then(json =>   {
            console.log(json)
            debugger
            // this.setState({
            //     firstName: json.owner.first_name,
            //     lastName: json.owner.last_name,
            //     email: json.owner.email
            // })
        })
    }

    
    
    // ownerData = () => Object.values(ownerInfo).map(([value,id])=>{
        // console.log(ownerInfo)
        //     console.log(key, value)
            //     return (
            //         <div>{key} : {value}</div>
            //     );
            //   })
        
    
        logout = () => {
            localStorage.clear()
            this.props.history.push("/")
        }

    render(){

   
        console.log(this.props.owner)
        return(
            <div>
                <h1>Welcome back</h1> <br/>

                First Name: {this.state.firstName}<br/>
                Last Name: {this.state.lastName}<br/>
                Email: {this.state.email}<br/>
                
            


                <button onClick={this.logout}>Logout</button>
            </div>
                            //  <button onClick={this.logout()}>Logout</button>

        )
    }

}



const owner = JSON.parse(localStorage.getItem('owner'))
// console.log(owner.foodtruck)

export default withRouter(Home)