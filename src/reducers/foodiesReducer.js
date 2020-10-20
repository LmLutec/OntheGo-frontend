export default function foodiesReducer(state = {
  trucks: [], ratings: [], truck: ""
}, action) {
    
    switch (action.type) {
      case "SEARCH":
        return {...state, trucks: [action.trucks]}
      case "DETAILS":
        return {...state, truck: action.truck}
      case "ADD_RATING": 
        return {...state, ratings: [...state.ratings, action.rating]}
      default:
        return state;
    }
  }