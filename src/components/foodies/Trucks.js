import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { details } from "../../actions/foodieActions";
import Like from "./Like";

class Trucks extends Component {
  state = {
    likes: `${this.props.likes}`,
  };

  details = (truckId) => {
    this.truckDetails(truckId);
  };

  mainPage = () => {
    window.history.back();
  };

  addLike = (truck) => {
    this.props.addLike(truck);
  };

  Grab() {
    const allTrucks = this.props.trucks;

    return allTrucks.map((nestedTrucks) => {
      nestedTrucks.sort((a, b) => (a.likes > b.likes ? -1 : 1));
      return nestedTrucks.map((truck, id) => {
        return (
          <div key={id} className="truck">
            Food Truck: {truck.name}
            <br />
            Food type: {truck.food_type}
            <br />
            Street: {truck.street}
            <br />
            City: {truck.city}
            <br />
            State: {truck.state}
            <br />
            Zip code: {truck.zip_code}
            <br />
            Phone number: {truck.phone_number}
            <br />
            {truck.likes} likes <br />
            <button
              onClick={() => {
                this.details(truck.id);
              }}
            >
              View Details
            </button>
            <button
              onClick={() => {
                this.addLike(truck);
              }}
            >
              Like
            </button>
          </div>
        );
      });
    });
  }

  async truckDetails(truckId) {
    try {
      const response = await fetch(
        `https://alwaysonthego.herokuapp.com/api/v1/foodtrucks/${truckId}`
      );
      const json = await response.json();

      this.props.details(json);
      this.props.history.push("/truck");
    } catch (error) {
      this.props.history.push("/errors");
    }
  }

  render() {
    let error = this.props.error;
    let message = "";

    if (error) {
      message =
        "There are no foodtrucks in your area. If you think this is a mistake, check the spelling of the City and State";
    } else {
      message = this.Grab();
    }

    return (
      <div>
        <section className="truck-container">
          <div>
            <h3>All trucks </h3>
            <ul className="trucks">{message}</ul>
          </div>
          <button
            onClick={() => {
              this.mainPage();
            }}
            className="main-page"
          >
            Main Page
          </button>
        </section>
      </div>
    );
  }
}

// const Trucks = props => {

//   const allTrucks = props.trucks
//   const error = props.error
//   let message = ""
//   let count = 0

//   function details(truckId){
//      truckDetails(truckId)
//   }

//   async function truckDetails(truckId){
//   try {
//     const response = await fetch(`https://alwaysonthego.herokuapp.com/api/v1/foodtrucks/${truckId}`)
//     const json = await response.json()
//     console.log(json)
//     props.details(json)
//     props.history.push("/truck")
//   }
//   catch (error) {
//     // props.history.push("/errors")
//     console.log(error)
// }

// }

//   function mainPage(){
//     window.history.back()
//   }

//   function addLike(truck){
//     props.addLike(truck)
//   }

//   function Grab(){

//     return allTrucks.map((nestedTrucks) => {
//       return nestedTrucks.map((truck, id) => {
//         return <div key={id} className="truck">
//                 Food Truck: {truck.name}<br/>
//                 Food type: {truck.food_type}<br/>
//                 Street: {truck.street}<br/>
//                 City: {truck.city}<br/>
//                 State: {truck.state}<br/>
//                 Zip code: {truck.zip_code}<br/>
//                 Phone number: {truck.phone_number}<br/>
//                 <button onClick={() => {details(truck.id)}}>View Details</button>
//                 {/* <button onClick={() => addLike(truck)}>Like</button> */}
//                 {/* <Like likes={truck.likes} truck={truck} addLike={props.addLike}/> */}
//               </div>
//       })
//     })
//   }

//   if (error){
//     message = "There are no foodtrucks in your area. If you think this is a mistake, check the spelling of the City and State"
//   }
//   else {
//     message = Grab()
//   }

// return (
//   <div>
//     <section className="truck-container">
//       <h3>All trucks </h3>
//     <ul className="trucks">
//         {message}
//     </ul>
//     <button onClick={() => {mainPage()}} className="main-page">Main Page</button>
//     </section>
//   </div>
//   )
// }

export default withRouter(Trucks);
