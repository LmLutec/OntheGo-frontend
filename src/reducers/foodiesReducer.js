export default function foodiesReducer(state = {
  trucks: [], ratings: [], truck: "", schedule: "", items: [], notes: [], likes: "" , error: ""
}, action) {
    
    switch (action.type) {
      case "SEARCH":
        return {...state, trucks: [action.trucks], error: action.trucks.message}
      case "DETAILS":
        return {...state, ratings:[...state.ratings, action.truck.ratings], truck: action.truck, schedule: action.truck.schedule, items:[action.truck.menu.items], notes:[action.truck.notes]}
      case "ADD_RATING": 
        return {...state, ratings: [...state.ratings, action.rating]}
      case "ADD_LIKE":
        return {...state, likes: action.likes}
      default:
        return state;
    }
  }