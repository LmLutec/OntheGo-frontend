import React, { Component } from 'react'
import MenuItem from './MenuItem'


class EditMenu extends Component {
    state = {
        item: {
            name: "",
            price: ""
        }
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
        this.props.addFood(this.state.item, this.props.menu.id)
        // this.props.history.push("/home")
        // debugger
    }

    // showList = () =>{
    //   this.props.menu.items.map((i) => {
    //     <li>{i}</li>
    //   })
    // }

    goHome = () => {
        this.props.history.push("/home")
    }

    render(){
        const items = this.props.menu.items.map((item, id) => <MenuItem delete={this.props.delete} key={id} item={item}/>)
        return(
            <div>
                <h4>Add menu items</h4>
                <form onSubmit={(event) => {this.handleSubmit(event)}}>
                    <input onChange={(event) => {this.handleChange(event)}} type="text" id="name" value={this.state.item.name} placeholder="Food name"/>
                    <input onChange={(event) => {this.handleChange(event)}} type="text" id="price" value={this.state.item.price} placeholder="Price"/><br/>
                    <input type="submit" value="Add to Menu"/>
                </form>

                <h5>Menu</h5><br/><br/>
                    {items}
            </div>
        )
    }
}

export default EditMenu