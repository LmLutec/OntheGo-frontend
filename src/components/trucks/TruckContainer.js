import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, NavLink, Redirect, Switch} from 'react-router-dom'
import TruckInput from './TruckInput'
import { addTruck, addSchedule } from '../../actions/truckActions'
import Schedule from './Schedule'



class TruckContainer extends Component {
    render(){
        return(
            <div>
                <TruckInput addTruck={this.props.addTruck}/>
                {/* <Route><Schedule addSchedule={this.props.addSchedule}/></Route> */}
                <Route exact path="/truck/new" render={()=> <TruckInput addTruck={this.props.addTruck}/>}></Route>
                <Route exact path="/schedule" render={()=> <Schedule addSchedule={this.props.addSchedule}/>}></Route>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { trucks: state.trucks }
}

const mapStateToDispatch = (dispatch) => {
    return {
        addTruck: truck => dispatch(addTruck(truck)),
        addSchedule: schedule => dispatch(addSchedule(schedule))
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(TruckContainer)