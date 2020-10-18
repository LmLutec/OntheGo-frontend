export default function foodiesReducer(state = {
  trucks: []
}, action) {
    
    switch (action.type) {
      case "SEARCH":
        // debugger
        return {...state, trucks: [action.trucks]}
      case "DETAILS":
        return state 
      default:
        return state;
    }
  }