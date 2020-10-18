import React from 'react'



const MenuItem = props => {
  const item = props.item

  return (
    <div>
      <ul>
              ${item.price} - {item.name} <br/>
              <i>{item.description}</i>
              <br/>
              <button onClick={() => props.delete(item)}> Remove </button>
      </ul>
    </div>
  )
}

export default MenuItem
