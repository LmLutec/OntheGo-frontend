import React from 'react'
import { withRouter } from 'react-router-dom'


const MenuItem = props => {
  const item = props.item

  const home = (item) => {
    props.deleteFood(item)
    props.history.push("/home")
      window.location.reload()
  }
  

  return (
    <div>
      <ul>
              ${item.price} - {item.name} <br/>
              <i>{item.description}</i>
              <br/>
              <button onClick={() => home(item)}> Remove </button>
      </ul>
    </div>
  )
}

export default withRouter(MenuItem)
