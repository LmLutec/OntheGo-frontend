import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

let message;

class Errors extends Component {
    
  state = {
    errors: false
  }


main = () => {
  this.props.history.push("/")
  localStorage.clear()
}


getErrors(){
  return JSON.stringify(this.props.errors[0])
}

checkForErrors() {
  if (!this.props.errors){
    message = "loading"
  }
  else{
    message = this.getErrors()
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