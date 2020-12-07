export default function ownersReducer(state = {
        owner: "",
        truck: {},
        menu: "",
        food: [],
        schedule: {},
        notes: [],
        ratings: [],
        loggedIn: false,
        errors: []
}, action){
    let idx;
    switch(action.type){
        case "ERROR":
                return {...state, errors: [action.errorMessage]}
        case "ADD_OWNER":
                return {...state,owner: action.owner} 
        case "LOGIN":
                return {...state,owner: action.owner, loggedIn: true}
        case "PROFILE":
                console.log(action.data)
                return {...state, truck: {id: action.data.id, name: action.data.name, food_type: action.data.food_type, phone_number: action.data.phone_number, street: action.data.street, city: action.data.city, state: action.data.state, zip_code: action.data.zip_code}, menu: action.data.menu, food: [action.data.menu.items], schedule: action.data.schedule, notes: [action.data.notes], ratings: [action.data.ratings]}
        case "LOG_TRUCK":
                return {...state,truck: action.truck}
        case "ADD_TRUCK":
                return {...state,truck: action.truck}
        case "EDIT_TRUCK":
                return {...state,truck: action.truck}
        case "ADD_SCHEDULE":
                return {...state,schedule: action.schedule}
        case "EDIT_SCHEDULE":
                return {...state,schedule: action.schedule}
        case "ADD_MENU":
                return {...state, menu: action.menu}
        case "ADD_FOOD":
                return {...state, food: [...state.food, action.item]}
        case "ADD_NOTE":
                return {...state, notes: [...state.notes, action.note]}
        case "DELETE_NOTE":
                idx = state.findIndex(item => item.id === action.id)
                return [...state.slice(0, idx), ...state.slice(idx + 1)]
        case "DELETE_FOOD":
                idx = state.findIndex(item => item.id === action.id)
                return [...state.slice(0, idx), ...state.slice(idx + 1)]
        case "REMOVE_TRUCK":
                idx = state.findIndex(truck => truck.id  === action.id)
                return [...state.slice(0, idx), ...state.slice(idx + 1)]
    default: 
        return state;
    }
}