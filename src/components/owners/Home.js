import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, Redirect} from 'react-router-dom'
import TruckContainer from '../trucks/TruckContainer'


class Home extends Component {
    render(){
        return(
            <div>
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


export default Home