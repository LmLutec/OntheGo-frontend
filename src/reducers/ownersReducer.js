export default function ownersReducer(state = {
    owners: []  }, action){
        switch(action.type){
            case 'ADD_OWNER':
                return { ...state, owners: [...state.owners, action.owner] }
        default: 
            return state;
        }
    }