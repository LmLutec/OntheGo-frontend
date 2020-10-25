import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import Home from '../components/owners/Home'
import OwnerInput from '../components/owners/OwnerInput'
import OwnerLogin from '../components/owners/OwnerLogin'
import TruckInput from '../components/owners/TruckInput'
import EditTruck from '../components/owners/EditTruck'
import Schedule from '../components/owners/Schedule'
import EditSchedule from '../components/owners/EditSchedule'
import MenuItemsInput from '../components/owners/MenuItemsInput'
import EditMenu from '../components/owners/EditMenu'
import { addOwner, Login, addTruck, addSchedule, editSchedule, createMenu, addFood, editTruck, addNote, getProfile, deleteFood, deleteNote, deleteProfile } from '../actions/ownerActions'
import NoteInput from '../components/owners/NoteInput'
import RatingsDetails from '../components/owners/RatingsDetails'


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


    IsLoggedIn = () => {
        if (localStorage.getItem('jwt_token')){
            return true
        }
    }

    render(){
        
        return(
            <div>
                    
                    <Switch>
                    <Route exact path="/">
                        {/* <header className="navlink">   */}
                        <NavLink exact to="/owner/new">New Owner</NavLink><br/><br/>
                        <NavLink exact to="/login">Login</NavLink><br/><br/>
                        <NavLink exact to="/foodies">Foodies</NavLink>
                        {/* </header> */}
                    </Route>
                 
                    <Route exact path="/home">
                        <Home owner={this.props.owner} profile={this.props.getProfile} truck={this.props.truck} schedule={this.props.schedule} menu={this.props.menu} food={this.props.food} notes={this.props.notes} deleteFood={this.props.deleteFood} deleteNote={this.props.deleteNote} ratings={this.props.ratings} deleteAcct={this.props.deleteProfile}/> 
                    </Route>
                    <Route exact path="/login"> <OwnerLogin login={this.props.login} profile={this.props.getProfile}/></Route>
                    <Route exact path="/owner/new"><OwnerInput addOwner={this.props.addOwner}/></Route>
                    <Route exact path="/setup"> <TruckInput addTruck={this.props.addTruck} menu={this.props.createMenu} profile={this.props.getProfile}/></Route>
                    <Route exact path="/schedule"> <Schedule addSchedule={this.props.addSchedule} truck={this.props.truck} addMenu={this.props.createMenu}/></Route>
                    <Route exact path="/manage/menu"> <MenuItemsInput addFood={this.props.addFood} menu={this.props.menu} food={this.props.food} profile={this.props.getProfile}/></Route>
                    <Route exact path="/edit/truck"> <EditTruck edit={this.props.editTruck} truck={this.props.truck} profile={this.props.getProfile}/></Route>
                    <Route exact path="/edit/schedule"><EditSchedule schedule={this.props.schedule} edit={this.props.editSchedule} truck={this.props.truck} profile={this.props.getProfile}/></Route>
                    <Route exact path="/edit/menu"><EditMenu menu={this.props.menu} addFood={this.props.addFood} profile={this.props.getProfile} /></Route>
                    <Route exact path="/new/note"><NoteInput add={this.props.addNote} truck={this.props.truck}/></Route>
                    <Route exact path="/truck/ratings"><RatingsDetails ratings={this.props.ratings}/></Route>
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
         schedule: state.owners.schedule,
         notes: state.owners.notes,
         ratings: state.owners.ratings
         }
}

const mapDispatchToProps = (dispatch) => {
    return {
      addOwner: owner => dispatch(addOwner(owner)),
      login: credentials => dispatch(Login(credentials)),
      getProfile: () => dispatch(getProfile()),
      addTruck: truck => dispatch(addTruck(truck)),
      editTruck: (truck, id) => dispatch(editTruck(truck, id)),
      addSchedule: (schedule, truck) => dispatch(addSchedule(schedule, truck)),
      editSchedule: (schedule) => dispatch(editSchedule(schedule)),
      createMenu: truckId => dispatch(createMenu(truckId)),
      addFood: (food, menuId) => dispatch(addFood(food, menuId)),
      deleteFood: (food) => dispatch(deleteFood(food)),
      addNote: (note) => dispatch(addNote(note)),
      deleteNote: (note) => dispatch(deleteNote(note)),
      deleteProfile: (acct) => dispatch(deleteProfile(acct))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(OwnerContainer)

