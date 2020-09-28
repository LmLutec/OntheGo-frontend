export default function foodiesReducer(state = [], action) {
    let idx;
    switch (action.type) {
      case "SEARCH":
        // debugger
        return [...state, action.trucks]
      case "DETAILS":
        return state 
      default:
        return state;
    }
  }