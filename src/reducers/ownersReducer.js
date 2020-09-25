export default function ownersReducer(state = [], action){
    let idx;
    switch(action.type){
        case 'ADD_OWNER':
                return [...state, action.owner] 
        case "ADD_TRUCK":
                return [...state, action.foodtruck];
        case "REMOVE_TRUCK":
                idx = state.findIndex(truck => truck.id  === action.id)
                return [...state.slice(0, idx), ...state.slice(idx + 1)];
    default: 
        return state;
    }
}