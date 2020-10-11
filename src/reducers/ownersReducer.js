export default function ownersReducer(state = {
        owner: "",
        truck: {},
        menu: "",
        food: [],
        schedule: {}
}, action){
    // debugger
    let idx;
    switch(action.type){
        case "ADD_OWNER":
                return {...state,owner: action.owner} 
        case "LOGIN":
                return {...state,owner: action.owner}
        case "PROFILE":
                // debuggers
                return {...state, truck: {id: action.data.id, name: action.data.name, food_type: action.data.food_type, phone_number: action.data.phone_number, city: action.data.city, state: action.data.state}, menu: action.data.menu, schedule: action.data.schedule}
        case "LOG_TRUCK":
                return {...state,truck: action.truck}
        case "ADD_TRUCK":
                return {...state,truck: action.truck}
        case "EDIT_TRUCK":
                return {...state,truck: action.truck}
        case "ADD_SCHEDULE":
                return {...state,schedule: action.schedule}
        case "ADD_MENU":
                return {...state, menu: action.menu}
        case "ADD_FOOD":
                return {...state, food: [...state.food, action.item]}
        case "REMOVE_TRUCK":
                idx = state.findIndex(truck => truck.id  === action.id)
                return [...state.slice(0, idx), ...state.slice(idx + 1)]
    default: 
        return state;
    }
}