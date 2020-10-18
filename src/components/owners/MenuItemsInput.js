import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'



class MenuItemsInput extends Component {

    state = {
        item: {
            name: "",
            price: "",
            item_type: "",
            description: ""
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
        this.props.addFood(this.state.item, this.props.menu.id)
        this.setState({
            item: {
            name: "", 
            price: "",
            description: "",
            item_type: ""
            }
        })
    }

    // showList = () =>{
    //   console.log(true)
    // }

    goHome = () => {
        this.props.history.push("/home")
    }

    render(){
        // <MenuItem delete={this.props.delete} key={id} item={item}/>)
        return(
            <div>
                <h4>Add menu items</h4>
                <form onSubmit={(event) => {this.handleSubmit(event)}}>
                    <label>Food name</label>
                    <input onChange={(event) => {this.handleChange(event)}} type="text" id="name" value={this.state.item.name} placeholder="Food name"/><br/>
                    <label>Food price</label>
                    <input onChange={(event) => {this.handleChange(event)}} type="text" id="price" value={this.state.item.price} placeholder="Price"/><br/>
                    <label>Food description</label>
                    <input onChange={(event) => {this.handleChange(event)}} type="text" id="description" value={this.state.item.description} placeholder="Description"/><br/>
                    <label>Item type:</label>
                    <input onChange={(event) => {this.handleChange(event)}} type="text" id="item_type" value={this.state.item.item_type} placeholder="Entree, drink, etc"/>
                    <input type="submit" value="Add to Menu"/>
                </form>

                <h5>So far you've added:</h5><br/><br/>
                    {/* {item} */}
                <button onClick={this.goHome}>Home</button>
            </div>
        )
    }

} 


export default withRouter(MenuItemsInput)