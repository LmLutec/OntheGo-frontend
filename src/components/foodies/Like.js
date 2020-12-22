import React, { Component } from 'react'


class Like extends Component {
    // likes, truck, addLike

    state = {
        count: this.props.likes
    }

    addLike = (truck) => {
        // this.setState({
        //     count: this.state.count + 1
        // })

        this.props.addLike(truck)
    }

    

    render(){
        return(
            <div>
                {this.props.likes} likes! <br/>
                <button onClick={this.addLike(this.props.truck)}>Like</button>
            </div>
        )
    }
}

export default Like;