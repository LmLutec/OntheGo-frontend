import React, { Component } from 'react'

// Add type attribute to item
class MenuItem extends Component {
    render() {
      
        const item = this.props.item
    
        return (
          <div>
            <li>
              {item.name}<button onClick={() => this.props.delete(item)}> Remove </button>
            </li>
          </div>
        );
      }
}

export default MenuItem