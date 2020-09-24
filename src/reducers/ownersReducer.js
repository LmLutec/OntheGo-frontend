export default function ownersReducer(state = [], action){
    
    switch(action.type){
        case 'ADD_OWNER':
            return [...state, action.owner] 
    default: 
        return state;
    }
}