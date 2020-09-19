import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom'
import OwnerInput from './OwnerInput'
import OwnerLogin from './OwnerLogin'
import { connect } from 'react-redux'
import { addOwner } from '../../actions/ownerActions'
// import TruckContainer from '../trucks/TruckContainer'
import Home from './Home'
// import Owners from './Owners'


class OwnerContainer extends Component {
    render(){
        return(
            <div>
                <Router>
                    <NavLink to="/owner/new">New Owner</NavLink><br/><br/>
                    <NavLink to="/login">Login</NavLink> 
                    <Route exact path="/owner/new" render={()=> <OwnerInput addOwner={this.props.addOwner}/>}></Route><br/><br/>
                    <Route exact path="/login" component={OwnerLogin}></Route><br/>
                </Router>
                 {/* <OwnerInput addOwner={this.props.addOwner} /><br/> */}
                {/* <OwnerLogin login={this.props.login} profile={<Home/>}/> */}
                
        
                {/* <Owners test={this.props.owners}/> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { owners: state.owners }
}

const mapDispatchToProps = (dispatch) => {
    return {
      addOwner: owner => dispatch(addOwner(owner))
    //   login: owner => dispatch(loginFetch(owner))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(OwnerContainer)


{/* create route to ownerInput */}
                {/* <Owners test={this.props.owners}/>
                <OwnerInput new={this.props.addOwner}/> */}
                {/* <OwnerLogin/> */}
                {/* <Switch>
                    <br/><br/>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/owner/new">
                        <OwnerInput />
                    </Route> */}
                    {/* <NavLink to="/owner/new">New Owner</NavLink>
                    <Route exact path="/owner/new" render={()=> <OwnerInput new={this.props.addOwner}/>}></Route><br/><br/> */}
                    {/* <NavLink to="/login">Login</NavLink>
                    <Route exact path="/login" component={OwnerLogin}></Route><br/>
                    <Route exact path="/truck/new" render={()=> <TruckContainer/>}/>
                </Switch>   */}