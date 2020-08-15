import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
import OwnerInput from './OwnerInput'
import OwnerLogin from './OwnerLogin'


class OwnerContainer extends Component {
    render(){
        return(
            <div>
                {/* create route to ownerInput */}
                <Router>
                <NavLink to="/owner/new">New Owner</NavLink>
                <Route exact path="/owner/new" component={OwnerInput}></Route><br/>
                <NavLink to="/login">Login</NavLink>
                <Route exact path="/login" component={OwnerLogin}></Route>
                </Router>
            </div>
        )
    }
}

export default OwnerContainer