import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, Redirect} from 'react-router-dom'
import TruckContainer from '../trucks/TruckContainer'


class Home extends Component {
    state = {
        completeProfile: false
        }


    getProfile(){
        fetch("http://localhost:3000/api/v1/profile", {
            method: "GET",
            headers: {
                Authorization: `Bearer: ${localStorage.getItem('jwt_token')}`
            }
        })
        .then(response => response.json())
        .then(json =>{
            if (json.foodtruck.schedule && json.foodtruck.menu){
                this.setState({
                    completeProfile: true
                })
            }
            // this.setState({
            //     owner: json,

            // })
            // this.Profile(json)
        })
    }


    render(){
        return(
            <div>
                <h1>This is Home</h1>
                {this.getProfile()}
                <Router>
                    <NavLink to="/truck/new">New Truck</NavLink>
                    <Route exact path="/truck/new" render={()=> <TruckContainer/>}></Route><br/><br/>
                </Router>
                {/* <Router>
                    <NavLink to="/owner">Truck Owners</NavLink>
                    <Route exact path="/owner" component={OwnerContainer}></Route><br/>
                </Router> */}
            </div>
        )
    }

}



const owner = JSON.parse(localStorage.getItem('owner'))
console.log(owner.foodtruck)

export default Home