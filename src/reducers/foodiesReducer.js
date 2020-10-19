export default function foodiesReducer(state = {
  trucks: [], truck: ""
}, action) {
    
    switch (action.type) {
      case "SEARCH":
        // debugger
        return {...state, trucks: [action.trucks]}
      case "DETAILS":
        // debugger
        return {...state, truck: action.truck}
      default:
        return state;
    }
  }