export default function ownersReducer(state = {
    owner: {
    first_name: '',
    last_name: '',
    email: '',
    password: ''  
    }  }, action){
        switch(action.type){
            case 'ADD_OWNER':
                return Object.assign({}, state, {
                    owner: [...state.owner,action.owner]
                })
        }
    }