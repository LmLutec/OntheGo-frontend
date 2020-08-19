export function ownersReducer(state = {
    owner: {
    first_name: '',
    last_name: '',
    email: '',
    password: ''  
    }  }, action){
        switch(action.type){
            case 'ADD_OWNER':
                console.log("create fetch to add new owner")
                // return {...state.owner, action.owner }
        }
    }