import React, { Component } from 'react'


class NoteInput extends Component {

    state = {
        note: {
            date: "",
            message: "",
            foodtruck_id: `${this.props.truck.id}`
        }
    }

    handleChange = (event) => {
        this.setState({
            note: {
            ...this.state.note, 
            [event.target.id] : event.target.value
            }
        })
    }


    handleSubmit = (event) => {
        event.preventDefault()
        this.props.add(this.state)
        this.setState({
            note: {
            date: "", 
            message: ""
            }
        })
    }


    render(){
        return(
            <div>
                <form onSubmit={(event) => {this.handleSubmit(event)}}>
                    <label>Date</label>
                    <input onChange={(event) => {this.handleChange(event)}} type="text" id="date" value={this.state.note.date} /><br/>
                    <label>Message</label>
                    <input onChange={(event) => {this.handleChange(event)}} type="text" id="message" value={this.state.note.message}/><br/>
                    <input type="submit" name="Add Note"/>
                </form>
            </div>
        )
    }
}

export default NoteInput



{/* <form onSubmit={event => {this.handleSubmit(event)}}> 
                    <label>First name</label>
                    <input onChange= { event => {this.handleChange(event)}} type="text" id= "first_name" value={this.state.owner.first_name}/><br/>
                    <label>Last name</label>
                    <input onChange={ event => {this.handleChange(event)}} type="text" id="last_name" value={this.state.owner.last_name} /><br/>
                    <label>Email</label>
                    <input onChange={ event => {this.handleChange(event)}} type="text" id="email" value={this.state.owner.email} /><br/>
                    <label>Password</label>
                    <input onChange={ event => {this.handleChange(event)}} type="password" id="password" value={this.state.owner.password}/><br/>
                    <input type="submit" name="submit"/>
                </form> */}