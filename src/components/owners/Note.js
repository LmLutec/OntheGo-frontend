import React from 'react'



const Note = props => {
  const note = props.note
  return (
    <div>
        Note
      <ul>
              <p>{note.date}</p>
              <i>{note.message}</i>
              <br/>
              <button onClick={() => props.delete(note)}> Remove </button> 
      </ul>
    </div>
  )
}

export default Note