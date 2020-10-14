import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, NavLink, Redirect, Switch} from 'react-router-dom'
import Home from '../components/owners/Home'
import OwnerInput from '../components/owners/OwnerInput'
import OwnerLogin from '../components/owners/OwnerLogin'
import TruckInput from '../components/owners/TruckInput'
import EditTruck from '../components/owners/EditTruck'
import Schedule from '../components/owners/Schedule'
import EditSchedule from '../components/owners/EditSchedule'
import MenuItemsInput from '../components/owners/MenuItemsInput'
import EditMenu from '../components/owners/EditMenu'
import { addOwner, Login, addTruck, addSchedule, editSchedule, createMenu, addFood, editTruck, logTruck, getProfile, deleteFood } from '../actions/ownerActions'
import MenuItem from '../components/owners/MenuItem'

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
                    
                    <Switch>
                    <Route exact path="/">
                        <header className="navlink">  
                        <NavLink exact to="/owner/new" className="navlink">New Owner</NavLink><br/><br/>
                        <NavLink exact to="/login" className="navlink">Login</NavLink> 
                        <NavLink exact to="/foodies" className="navlink">Foodies</NavLink>
                        </header>
                    </Route>
                    <Route exact path="/home"> <Home owner={this.props.owner} logtruck={this.props.logTruck} truck={this.props.truck} schedule={this.props.schedule} menu={this.props.menu}/></Route>
                    <Route exact path="/login"> <OwnerLogin login={this.props.login} profile={this.props.getProfile}/></Route>
                    <Route exact path="/owner/new"><OwnerInput addOwner={this.props.addOwner}/></Route>
                    <Route exact path="/setup"> <TruckInput addTruck={this.props.addTruck} menu={this.props.createMenu}/></Route>
                    <Route exact path="/schedule"> <Schedule addSchedule={this.props.addSchedule} truck={this.props.truck} addMenu={this.props.createMenu}/></Route>
                    <Route exact path="/manage/menu"> <MenuItemsInput addFood={this.props.addFood} menu={this.props.menu} food={this.props.food}/></Route>
                    <Route exact path="/edit/truck"> <EditTruck edit={this.props.editTruck} truck={this.props.truck} profile={this.props.getProfile}/></Route>
                    <Route exact path="/edit/schedule"><EditSchedule schedule={this.props.schedule} edit={this.props.editSchedule} truck={this.props.truck}/></Route>
                    <Route exact path="/edit/menu"><EditMenu menu={this.props.menu} addFood={this.props.addFood} /></Route>
                    {/* <MenuItem delete={this.props.delete}/> */}
                    </Switch>
            </div>
        )
    }

    
}



const mapStateToProps = (state) => {
    return {
         owner: state.owners,
         truck: state.owners.truck,
         menu: state.owners.menu,
         food: state.owners.food,
         schedule: state.owners.schedule
         }
}

const mapDispatchToProps = (dispatch) => {
    return {
      addOwner: owner => dispatch(addOwner(owner)),
      login: credentials => dispatch(Login(credentials)),
      getProfile: () => dispatch(getProfile()),
      addTruck: truck => dispatch(addTruck(truck)),
      editTruck: (truck, id) => dispatch(editTruck(truck, id)),
      logTruck: truck => dispatch(logTruck(truck)),
      addSchedule: (schedule, truck) => dispatch(addSchedule(schedule, truck)),
      editSchedule: (schedule) => dispatch(editSchedule(schedule)),
      createMenu: truckId => dispatch(createMenu(truckId)),
      addFood: (food, menuId) => dispatch(addFood(food, menuId)),
      deleteFood: (food) => dispatch(deleteFood(food))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(OwnerContainer)

