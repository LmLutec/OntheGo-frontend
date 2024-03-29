import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Search from "../components/foodies/Search";
import Truck from "../components/foodies/Truck";
import { search, details, addRating, addLike } from "../actions/foodieActions";
import Trucks from "../components/foodies/Trucks";
import RatingInput from "../components/foodies/RatingInput";

class FoodieContainer extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/foodies">
            <Search search={this.props.search} />
          </Route>
          <Route exact path="/results">
            <Trucks
              trucks={this.props.trucks}
              details={this.props.details}
              addLike={this.props.addLike}
              likes={this.props.likes}
              error={this.props.error}
            />
          </Route>

          <Route exact path="/truck">
            <Truck
              truck={this.props.truck}
              schedule={this.props.schedule}
              items={this.props.items}
              ratings={this.props.ratings}
              notes={this.props.notes}
              getInfo={this.props.details}
            />
          </Route>
          <Route exact path="/new/rating">
            <RatingInput add={this.props.addRating} truck={this.props.truck} />
          </Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    trucks: state.foodies.trucks,
    truck: state.foodies.truck,
    schedule: state.foodies.schedule,
    items: state.foodies.items,
    ratings: state.foodies.ratings,
    notes: state.foodies.notes,
    likes: state.foodies.likes,
    error: state.foodies.error,
  };
};

const mapStateToDispatch = (dispatch) => {
  return {
    search: (data) => dispatch(search(data)),
    details: (id) => dispatch(details(id)),
    addRating: (rating, truckId) => dispatch(addRating(rating, truckId)),
    addLike: (truck) => dispatch(addLike(truck)),
  };
};

export default connect(mapStateToProps, mapStateToDispatch)(FoodieContainer);
