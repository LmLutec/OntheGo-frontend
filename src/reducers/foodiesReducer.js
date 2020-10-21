export default function foodiesReducer(state = {
  trucks: [], ratings: [], truck: "", schedule: "", items: []
}, action) {
    
    switch (action.type) {
      case "SEARCH":
        return {...state, trucks: [action.trucks]}
      case "DETAILS":
        // debugger
        return {...state, ratings:[...state.ratings, action.truck.ratings], truck: action.truck, schedule: action.truck.schedule, items:[action.truck.menu.items]}
      case "ADD_RATING": 
        return {...state, ratings: [...state.ratings, action.rating]}
      default:
        return state;
    }
  }