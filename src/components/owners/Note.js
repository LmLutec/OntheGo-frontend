import React from 'react'
import { withRouter } from 'react-router-dom'



const Note = props => {
  const note = props.note

  const home = (note) => {
    props.deleteNote(note)
    props.history.push("/home")
    window.location.reload()
  }

  return (
    <div>
      <ul className="note">
              <p>{note.date}</p>
              <i>{note.message}</i>
              <br/>
              <button onClick={() => home(note)}> Remove </button> 
      </ul>
    </div>
  )
}

export default withRouter(Note)