import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, NavLink, Redirect, Switch} from 'react-router-dom'
import Search from '../components/foodies/Search'
import { search } from '../actions/foodieActions'



class FoodieContainer extends Component {
    render(){
        return(
            <div>
                <Search search={this.props.search}/>
                {/* <TruckInput addTruck={this.props.addTruck}/> */}
                {/* <Route><Schedule addSchedule={this.props.addSchedule}/></Route> */}
                {/* <Route exact path="/truck/new" render={()=> <TruckInput addTruck={this.props.addTruck}/>}></Route>
                <Route exact path="/schedule" render={()=> <Schedule addSchedule={this.props.addSchedule}/>}></Route> */}

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { trucks: state.trucks }
}

const mapStateToDispatch = (dispatch) => {
    return {
        search: data => dispatch(search(data))
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(FoodieContainer)