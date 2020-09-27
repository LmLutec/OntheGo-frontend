import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

let list;

class MenuItemsInput extends Component {

    state = {
        item: {
            name: "",
            price: ""
        }
    }

    list = []

    handleChange = (event) => {
        this.setState({
            item: {
            ...this.state.item, 
            [event.target.id] : event.target.value
            }
        })
    }


    handleSubmit = (event) => {
        event.preventDefault()
        {this.props.addFood(this.state.item, this.props.menu)}
        this.props.history.push("/home")
        // this.list.push(this.state.item.name)
        // this.list.push(this.state.item.price)
        // debugger
    }

    showList = () =>{
        // debugger
        this.list.map((i) => {
            return i
        })
    }

    goHome = () => {
        this.props.history.push("/home")
    }

    render(){
        return(
            <div>
                <h4>Add menu items</h4>
                <form onSubmit={(event) => {this.handleSubmit(event)}}>
                    <input onChange={(event) => {this.handleChange(event)}} type="text" id="name" value={this.state.item.name} placeholder="Food name"/>
                    <input onChange={(event) => {this.handleChange(event)}} type="text" id="price" value={this.state.item.price} placeholder="Price"/><br/>
                    <input type="submit" value="Add to Menu"/>
                </form>

                <h5>So far you've added:</h5><br/><br/>
                <ul>
                    <li>
                        {this.showList()}
                    </li>
                </ul>
                {/* <button onClick={this.goHome()}>Home</button> */}
            </div>
        )
    }

} 


export default withRouter(MenuItemsInput)