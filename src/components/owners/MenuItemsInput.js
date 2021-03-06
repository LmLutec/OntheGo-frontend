import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import Select from "react-dropdown-select";
import MenuItem from './MenuItem'

let list = []



class MenuItemsInput extends Component {

    state = {
        item: {
            name: "",
            price: "",
            item_type: "Beverage",
            description: ""
        }
    }



    componentWillUnmount(){
        window.location.reload()
    }

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
        
        list.push(this.state.item)

        this.props.addFood(this.state.item, this.props.menu)
        this.setState({
            item: {
            name: "", 
            price: "",
            description: "",
            item_type: ""
            }
        })
    }

    goHome = () => {
        this.props.history.push("/home")
    }

    render(){

        let renderItems = list.map((i, id) => <MenuItem key={id} item={i} deleteFood={this.props.deleteFood}/>)

        return(
            <div className="menu-input">
                <h4>Add menu items</h4>
                <form onSubmit={(event) => {this.handleSubmit(event)}}>
                    <label>Food name</label>
                    <input onChange={(event) => {this.handleChange(event)}} type="text" id="name" value={this.state.item.name}/><br/>
                    <label>Food price</label>
                    <input onChange={(event) => {this.handleChange(event)}} type="text" id="price" value={this.state.item.price}/><br/>
                    <label>Food description</label>
                    <input onChange={(event) => {this.handleChange(event)}} type="textarea" id="description" value={this.state.item.description}/><br/>
                    <label>Item type:</label>
                    <select onChange={(event) => {this.handleChange(event)}} value={this.state.item.item_type} id="item_type">
                    <option value="Beverage">Beverage</option>
                    <option value="Dessert">Dessert</option>
                    <option value="Salad">Salad</option>
                    <option value="Entree">Entree</option>
                    <option value="Sandwich">Sandwich</option>
                    <option value="Side">Side</option>
                    </select>
                    <input type="submit" value="Add to Menu"/>
                </form>

                <h5>So far you've added:</h5><br/><br/>
                    {renderItems}
                <button onClick={this.goHome}>Home</button>
            </div>
        )
    }

} 











export default withRouter(MenuItemsInput)