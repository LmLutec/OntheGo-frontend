import React, { Component } from 'react'
import OwnerInput from './OwnerInput'
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';


class OwnerContainer extends Component {
    render(){
        return(
            <div>
                {/* create route to ownerInput */}
                <Router>
                <NavLink to="/owner/new">New Owner</NavLink>
                <Route exact path="/owner/new" component={OwnerInput}></Route>
                </Router>
                {/* <OwnerInput/> */}
            </div>
        )
    }
}

export default OwnerContainer