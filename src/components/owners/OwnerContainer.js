import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, Redirect, Switch} from 'react-router-dom'
import OwnerInput from './OwnerInput'
import OwnerLogin from './OwnerLogin'
import { connect } from 'react-redux'
import { addOwner } from '../../actions/ownerActions'
import Owners from './Owners'


class OwnerContainer extends Component {
    render(){
        return(
            <div>
                {/* create route to ownerInput */}
                <Owners test={this.props.owners}/>
                <Router>
                    <NavLink to="/owner/new">New Owner</NavLink>
                    <Route exact path="/owner/new" component={OwnerInput}/><br/>
                    {/* <Route exact path="/owner/new" render={()=> <OwnerInput new={this.props.addOwner}/>}></Route><br/> */}
                    <NavLink to="/login">Login</NavLink>
                    <Route exact path="/login" component={OwnerLogin}></Route><br/>
                </Router> 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { owners: state.owners }
}

const mapDispatchToProps = (dispatch) => {
    return {
      addOwner: data => dispatch(addOwner(data))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(OwnerContainer)

