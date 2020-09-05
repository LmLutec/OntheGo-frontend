export default function ownersReducer(state = {
    owner: {
    first_name: '',
    last_name: '',
    email: '',
    password: ''  
    }  }, action){
        switch(action.type){
            case 'ADD_OWNER':
                // debugger
                Object.assign({}, state, {
                    owners: {...state, owner: action.owner}
                })
                debugger
        default: 
            return state;
        }
    }