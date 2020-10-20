import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch} from 'react-router-dom'
import Search from '../components/foodies/Search'
import Truck from '../components/foodies/Truck'
import { search, details, addRating } from '../actions/foodieActions'
import Trucks from '../components/foodies/Trucks'
import RatingInput from '../components/foodies/RatingInput'




class FoodieContainer extends Component {
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path="/foodies"> 
                        <Search search={this.props.search}/>
                    </Route> 
                    <Route exact path="/results"> <Trucks trucks={this.props.trucks} details={this.props.details}/></Route>
                    <Route exact path="/truck"><Truck truck={this.props.truck} /></Route>
                    <Route exact path="/new/rating"><RatingInput add={this.props.addRating} truck={this.props.truck} /></Route>
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // debugger
    return { 
        trucks: state.foodies.trucks,
        truck: state.foodies.truck
    }
}

const mapStateToDispatch = (dispatch) => {
    return {
        search: data => dispatch(search(data)),
        details: id => dispatch(details(id)),
        addRating: (rating, truckId) => dispatch(addRating(rating, truckId))
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(FoodieContainer)