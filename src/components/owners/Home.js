import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Owner from './Owner'

let ownerInfo = {}
let ownerData;

class Home extends Component {

        componentDidMount() {
                fetch("http://localhost:3000/api/v1/profile", {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer: ${localStorage.getItem('jwt_token')}`
                    }
                })
                .then(response => response.json())
                .then(json =>{
                    // this.ownerInfo(json)
                    this.getOwnerData(json)
                    // this.ownerData()
                    // this.ownerInfo()
                })
        }

    getOwnerData = (json) => {
        ownerInfo["firstName"]=(json.owner.first_name)
        ownerInfo["lastName"]=(json.owner.last_name)
        ownerInfo["email"]=(json.owner.email)
    }


    
    // ownerData = () => Object.values(ownerInfo).map(([value,id])=>{
        // console.log(ownerInfo)
        //     console.log(key, value)
            //     return (
            //         <div>{key} : {value}</div>
            //     );
            //   })
        
    
        logout = () => {
            localStorage.clear()
            this.props.history.push("/")
        }

    render(){

       const ownerData = () => {
        //    console.log(ownerInfo["email"])
        return Object.values(ownerInfo).map(([key,value])=>{
                    return (
                        <div>{key} : {value}</div>
                    );
                  })
        }


        return(
            <div>
                <h1>This is Home</h1>
                {ownerData()}
                First Name: <br/><br/>


                <button onClick={this.logout}>Logout</button>
            </div>
                            //  <button onClick={this.logout()}>Logout</button>

        )
    }

}



const owner = JSON.parse(localStorage.getItem('owner'))
// console.log(owner.foodtruck)

export default withRouter(Home)