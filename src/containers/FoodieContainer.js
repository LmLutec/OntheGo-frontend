import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, NavLink, Redirect, Switch} from 'react-router-dom'
import Search from '../components/foodies/Search'
import Truck from '../components/foodies/Truck'
import { search, details } from '../actions/foodieActions'
import Trucks from '../components/foodies/Trucks'




class FoodieContainer extends Component {
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path="/foodies"> 
                        <Search search={this.props.search}/>
                    </Route> 
                    <Route exact path="/results"> <Trucks trucks={this.props.trucks} details={this.props.details}/></Route>
                    <Route exact path="/truck"><Truck /></Route>
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // debugger
    return { trucks: state.foodies }
}

const mapStateToDispatch = (dispatch) => {
    return {
        search: data => dispatch(search(data)),
        details: id => dispatch(details(id))
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(FoodieContainer)