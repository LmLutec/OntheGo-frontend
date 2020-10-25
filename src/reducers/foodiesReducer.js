export default function foodiesReducer(state = {
  trucks: [], ratings: [], truck: "", schedule: "", items: [], error: ""
}, action) {
    
    switch (action.type) {
      case "SEARCH":
        return {...state, trucks: [action.trucks], error: action.trucks.message}
      case "DETAILS":
        // debugger
        return {...state, ratings:[...state.ratings, action.truck.ratings], truck: action.truck, schedule: action.truck.schedule, items:[action.truck.menu.items]}
      case "ADD_RATING": 
        return {...state, ratings: [...state.ratings, action.rating]}
      default:
        return state;
    }
  }