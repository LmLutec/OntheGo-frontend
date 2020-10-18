import React, { Component } from 'react'


class MenuItem extends Component {
    render() {
      
        const item = this.props.item
        
        // })
    // debugger
        return (
          <div>
            <ul>
              ${item.price} - {item.name} <br/>
              <i>{item.description}</i>
              <br/>
              <button onClick={() => this.props.delete(item)}> Remove </button>
            </ul>
          </div>
        )
      }
}

export default MenuItem