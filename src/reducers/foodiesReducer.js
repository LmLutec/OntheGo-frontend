export default function foodiesReducer(state = {
    trucks: []
}, action) {
    let idx;
    switch (action.type) {
      case "SEARCH":
        return {...state,trucks: action.trucks}
   
      default:
        return state;
    }
  }