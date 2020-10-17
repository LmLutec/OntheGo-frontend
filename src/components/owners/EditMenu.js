import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'


class EditMenu extends Component {
    state = {
        item: {
            name: "",
            price: "",
            item_type: ""
        }
    }

    componentDidMount(){
        this.props.profile()
    }
    
    componentDidUpdate(){
        this.props.profile()
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
        this.setState({
            item: {
            name: "", 
            price: "",
            item_type: ""
            }
        })
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
        // const items = this.props.menu.items.map((item, id) => <MenuItem delete={this.props.delete} key={id} item={item}/>)
        return(
            <div>
                <h4>Add menu items</h4>
                <form onSubmit={(event) => {this.handleSubmit(event)}}>
                    <input onChange={(event) => {this.handleChange(event)}} type="text" id="name" value={this.state.item.name} placeholder="Food name"/>
                    <input onChange={(event) => {this.handleChange(event)}} type="text" id="price" value={this.state.item.price} placeholder="Price"/><br/>
                    <input onChange={(event) => {this.handleChange(event)}} type="text" id="item_type" value={this.state.item.item_type} placeholder="Entree, drink, etc"/>
                    <input type="submit" value="Add to Menu"/>
                </form>

                <h5>Menu</h5><br/><br/>
                    {/* {items} */}

                <button onClick={this.goHome}>Home</button>
            </div>
        )
    }
}

export default withRouter(EditMenu)