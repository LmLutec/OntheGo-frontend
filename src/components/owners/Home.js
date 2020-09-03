import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, Redirect} from 'react-router-dom'
import OwnerContainer from './OwnerContainer'


class Home extends Component {
    render(){
        return(
            <div>
                <p>
                <OwnerContainer/>
                </p>
                {/* <Router>
                    <NavLink to="/owner">Truck Owners</NavLink>
                    <Route exact path="/owner" component={OwnerContainer}></Route><br/>
                </Router> */}
            </div>
        )
    }

}


export default Home