import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, NavLink, Redirect, Switch} from 'react-router-dom'
import Home from '../components/owners/Home'
import OwnerInput from '../components/owners/OwnerInput'
import OwnerLogin from '../components/owners/OwnerLogin'
import TruckInput from '../components/owners/TruckInput'
import Schedule from '../components/owners/Schedule'
import { addOwner, addTruck, addSchedule, createMenu } from '../actions/ownerActions'

// let isLoggedIn;

// const IsLoggedIn = () => {
//     if (localStorage.getItem('jwt_token')){
//         return true
//     }
// }

// function GoHome() {
//     return <Redirect to="/home"/>
// }

class OwnerContainer extends Component {


    render(){
        
        return(
            <div>
                    <header className="navlink">  
                    <NavLink to="/owner/new" className="navlink">New Owner</NavLink><br/><br/>
                    <NavLink to="/login" className="navlink">Login</NavLink> 
                    </header>
                    <Route exact path="/login" component={OwnerLogin}></Route><br/>
                    <Route exact path="/owner/new" render={()=> <OwnerInput addOwner={this.props.addOwner}/>}></Route><br/><br/>
                    <Route exact path="/setup" render={()=> <TruckInput addTruck={this.props.addTruck}/>}></Route>
                    <Route exact path="/schedule" render={()=> <Schedule addSchedule={this.props.addSchedule} truck={this.props.truck} addMenu={this.props.createMenu}/>}></Route>
                <Switch>
                    <Route exact path="/home" component={Home}></Route>
                </Switch>
              
            </div>
        )
    }

    
}



const mapStateToProps = (state) => {
    // debugger
    return {
         owner: state.owners,
         truck: state.owners.truck
         }
}

const mapDispatchToProps = (dispatch) => {
    return {
      addOwner: owner => dispatch(addOwner(owner)),
      addTruck: truck => dispatch(addTruck(truck)),
      addSchedule: (schedule, truck) => dispatch(addSchedule(schedule, truck)),
      createMenu: truckId => dispatch(createMenu(truckId))
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