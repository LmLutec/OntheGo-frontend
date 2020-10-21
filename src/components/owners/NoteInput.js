import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'


class NoteInput extends Component {

    state = {
        note: {
            date: "",
            message: "",
            foodtruck_id: `${this.props.truck.id}`
        }
    }

    componentWillUnmount(){
        window.location.reload()
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
        this.props.history.push("/home")
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

export default withRouter(NoteInput)



