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
                <Search search={this.props.search}/>


                <Route exact path="/results" render={() => <Trucks trucks={this.props.trucks} details={this.props.details}/>}></Route>
                <Route exact path="/truck" render={() => <Truck/>}></Route>
                {/* <Results trucks={this.props.trucks}/> */}
                {/* <TruckInput addTruck={this.props.addTruck}/> */}
                {/* <Route><Schedule addSchedule={this.props.addSchedule}/></Route> */}
                {/* <Route exact path="/truck/new" render={()=> <TruckInput addTruck={this.props.addTruck}/>}></Route>
                <Route exact path="/schedule" render={()=> <Schedule addSchedule={this.props.addSchedule}/>}></Route> */}

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