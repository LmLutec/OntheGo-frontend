export default function ownersReducer(state = {
        owner: "",
        truck: "",
        schedule: {}
}, action){
    // debugger
    let idx;
    switch(action.type){
        case "ADD_OWNER":
                return {...state,owner: action.owner} 
        case "ADD_TRUCK":
                return {...state,truck: action.truck}
        case "ADD_SCHEDULE":
                return {...state,schedule: action.schedule}
        case "REMOVE_TRUCK":
                idx = state.findIndex(truck => truck.id  === action.id)
                return [...state.slice(0, idx), ...state.slice(idx + 1)];
    default: 
        return state;
    }
}