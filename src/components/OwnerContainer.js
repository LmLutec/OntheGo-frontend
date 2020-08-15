import React, { Component } from 'react'
import OwnerInput from './OwnerInput'


class OwnerContainer extends Component {
    render(){
        return(
            <div>
                Testing connection to App.js
                {/* create route to ownerInput */}
                <OwnerInput/>
            </div>
        )
    }
}

export default OwnerContainer