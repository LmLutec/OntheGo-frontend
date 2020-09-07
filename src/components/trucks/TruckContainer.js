import React, { Component } from 'react'
import { connect } from 'react-redux'
import TruckInput from './TruckInput'
import { addTruck } from '../../actions/truckActions'



class TruckContainer extends Component {
    render(){
        return(
            <div>
                <TruckInput new={this.props.addTruck}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { trucks: state.trucks }
}

const mapStateToDispatch = (dispatch) => {
    return {
        addTruck: truck => dispatch(addTruck(truck))
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(TruckContainer)