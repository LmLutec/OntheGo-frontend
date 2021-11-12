import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, NavLink, Switch } from "react-router-dom";
import Home from "../components/owners/Home";
import OwnerInput from "../components/owners/OwnerInput";
import OwnerLogin from "../components/owners/OwnerLogin";
import TruckInput from "../components/owners/TruckInput";
import EditTruck from "../components/owners/EditTruck";
import Schedule from "../components/owners/Schedule";
import EditSchedule from "../components/owners/EditSchedule";
import MenuItemsInput from "../components/owners/MenuItemsInput";
import EditMenu from "../components/owners/EditMenu";
import {
  getErrors,
  addOwner,
  Login,
  getProfile,
  addTruck,
  editSchedule,
  createMenu,
  addFood,
  editTruck,
  addNote,
  deleteFood,
  deleteNote,
  deleteProfile,
} from "../actions/ownerActions";
import NoteInput from "../components/owners/NoteInput";
import RatingsDetails from "../components/owners/RatingsDetails";
import Errors from "../components/Errors";
import "../styles/OwnerContainer.css";

// addSchedule={this.props.addSchedule} from schedule component
// removed addSchedule
class OwnerContainer extends Component {
  IsLoggedIn = () => {
    if (localStorage.getItem("jwt_token")) {
      return true;
    }
  };

  render() {
    return (
      <div className="main">
        <Switch>
          <Route exact path="/">
            <div className="links">
              <NavLink exact to="/owner/new" className="link truckOwners">
                New Owner
              </NavLink>

              <NavLink exact to="/login" className="link truckOwners">
                Login
              </NavLink>

              <NavLink exact to="/foodies" className="link foodies">
                Foodies
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 9H9V2H7V9H5V2H3V9C3 11.12 4.66 12.84 6.75 12.97V22H9.25V12.97C11.34 12.84 13 11.12 13 9V2H11V9ZM16 6V14H18.5V22H21V2C18.24 2 16 4.24 16 6Z"
                    fill="black"
                  />
                </svg>
              </NavLink>
            </div>
          </Route>

          <Route exact path="/home">
            <Home
              loggedIn={this.props.loggedIn}
              owner={this.props.owner}
              profile={this.props.getProfile}
              truck={this.props.truck}
              schedule={this.props.schedule}
              menu={this.props.menu}
              food={this.props.food}
              notes={this.props.notes}
              deleteFood={this.props.deleteFood}
              deleteNote={this.props.deleteNote}
              ratings={this.props.ratings}
              deleteAcct={this.props.deleteProfile}
              errors={this.props.errors}
            />
          </Route>
          <Route exact path="/errors">
            <Errors errors={this.props.errors} />
          </Route>
          <Route exact path="/login">
            {" "}
            <OwnerLogin
              login={this.props.login}
              profile={this.props.getProfile}
              getErrors={this.props.getErrors}
            />
          </Route>
          <Route exact path="/owner/new">
            <OwnerInput
              addOwner={this.props.addOwner}
              getErrors={this.props.getErrors}
            />
          </Route>
          <Route exact path="/setup">
            {" "}
            <TruckInput
              getErrors={this.props.getErrors}
              addTruck={this.props.addTruck}
              menu={this.props.createMenu}
              profile={this.props.getProfile}
              deleteProfile={this.props.deleteProfile}
            />
          </Route>
          <Route exact path="/schedule">
            {" "}
            <Schedule
              truck={this.props.truck}
              addMenu={this.props.createMenu}
            />
          </Route>
          <Route exact path="/manage/menu">
            {" "}
            <MenuItemsInput
              addFood={this.props.addFood}
              menu={this.props.menu}
              food={this.props.food}
              deleteFood={this.props.deleteFood}
              profile={this.props.getProfile}
            />
          </Route>
          <Route exact path="/edit/truck">
            {" "}
            <EditTruck
              edit={this.props.editTruck}
              truck={this.props.truck}
              profile={this.props.getProfile}
            />
          </Route>
          <Route exact path="/edit/schedule">
            <EditSchedule
              schedule={this.props.schedule}
              edit={this.props.editSchedule}
              truck={this.props.truck}
              profile={this.props.getProfile}
            />
          </Route>
          <Route exact path="/edit/menu">
            <EditMenu
              menu={this.props.menu}
              addFood={this.props.addFood}
              profile={this.props.getProfile}
              deleteFood={this.props.deleteFood}
            />
          </Route>
          <Route exact path="/new/note">
            <NoteInput add={this.props.addNote} truck={this.props.truck} />
          </Route>
          <Route exact path="/truck/ratings">
            <RatingsDetails ratings={this.props.ratings} />
          </Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // debugger
  return {
    owner: state.owners,
    truck: state.owners.truck,
    menu: state.owners.menu,
    food: state.owners.food,
    schedule: state.owners.schedule,
    notes: state.owners.notes,
    ratings: state.owners.ratings,
    loggedIn: state.owners.loggedIn,
    errors: state.owners.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getErrors: (error) => dispatch(getErrors(error)),
    addOwner: (owner) => dispatch(addOwner(owner)),
    login: (credentials) => dispatch(Login(credentials)),
    getProfile: (acct) => dispatch(getProfile(acct)),
    addTruck: (truck) => dispatch(addTruck(truck)),
    editTruck: (truck, id) => dispatch(editTruck(truck, id)),
    //   addSchedule: (schedule, truck) => dispatch(addSchedule(schedule, truck)),
    editSchedule: (schedule) => dispatch(editSchedule(schedule)),
    createMenu: (truckId) => dispatch(createMenu(truckId)),
    addFood: (food, menuId) => dispatch(addFood(food, menuId)),
    deleteFood: (food) => dispatch(deleteFood(food)),
    addNote: (note) => dispatch(addNote(note)),
    deleteNote: (note) => dispatch(deleteNote(note)),
    deleteProfile: (acct) => dispatch(deleteProfile(acct)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OwnerContainer);
