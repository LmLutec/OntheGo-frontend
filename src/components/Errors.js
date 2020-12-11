import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

let message;

class Errors extends Component {
    
  state = {
    errors: false
  }

  componentWillUnmount(){
    window.location.reload()
  }


main = () => {
  this.props.history.push("/")
  localStorage.clear()
}


getErrors(){
  return JSON.stringify(this.props.errors[0]) || this.props.errors
}

checkForErrors() {
  if (!this.props.errors){
    message = "loading"
    console.log(this.props.errors)
  }
  else {
    message = this.getErrors()
    console.log(this.props.errors)
  }
}
  

    render() {
      this.checkForErrors()
        return (
        <div>
            {message}
          <br/>
          <button onClick={this.main}>Main Page</button>
        </div>
        )
      }
   
    
}

  export default withRouter(Errors);