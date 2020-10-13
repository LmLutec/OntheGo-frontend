import React, { Component } from 'react'


class MenuItem extends Component {
    render() {
      
        const item = this.props.item
        debugger
        return (
          <div>
            <li>
              {item.name}<button onClick={() => this.props.delete(item)}> X </button>
            </li>
          </div>
        );
      }
}

export default MenuItem