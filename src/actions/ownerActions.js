export const getErrors = (error) => {
    return (dispatch)  => {
        dispatch({type: 'ERROR', errorMessage: error})
    }
}

export const addOwner = (owner) => {
    return (dispatch) => {
               dispatch({type: 'ADD_OWNER', owner: owner})
    } 
}


export const Login = (credentials) => {
        return(dispatch) => {
                dispatch({type: 'LOGIN', owner: credentials.owner})
    }
}

export const getProfile = () => {
    return(dispatch) => {
    fetch("https://alwaysonthego.herokuapp.com/api/v1/profile/", {
            method: "GET",
            headers: {
                Authorization: `Bearer: ${localStorage.getItem('jwt_token')}`
            }
        })
        .then(response => response.json())
        .then(json =>   {
            if(json){

                dispatch({type: 'PROFILE', data: json})
            }
            if(json.message){
                dispatch({type: 'ERROR', errorMessage: json.message}) 
            }
        })
        .catch(err => { 
            dispatch({type: 'ERROR', errorMessage: err.message});
        })
    }
}

export const addTruck = (truck) => {
    return (dispatch) => {
                dispatch({type: 'ADD_TRUCK', truck: truck.id})
    }
}

export const editTruck = (truck,id) => {
    
    truck.foodtruck["id"] = id 

    const formData = {
        method: 'PATCH',
        headers: { 
            'Content-Type': 'application/json'
         },
        body: JSON.stringify(truck) 
    }

    return (dispatch) => {
        fetch("https://alwaysonthego.herokuapp.com/api/v1/foodtrucks/", formData)
        .then(response => {
            return response.json()
    }).then(json => {
               dispatch({type: 'EDIT_TRUCK', truck: json.id})
        })
    }
} 


export const createMenu = (truckId) => {
    const formData = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({menu: {foodtruck_id: truckId }})
    }
    return (dispatch) => {
        fetch("// https://alwaysonthego.herokuapp.com/api/v1/menus/", formData)
        .then(response => {
            return response.json()
        }).then(json => {
            dispatch({type: 'ADD_MENU', menu: json.id})
        })
    }
}

export const addSchedule = (schedule, truck) => {
    schedule["foodtruck_id"] = truck
    const formData = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({schedule: schedule})
    }
    return (dispatch) => {
        fetch("https://alwaysonthego.herokuapp.com/api/v1/schedules/", formData)
        .then(response => {
            return response.json()
        }).then(json => {
            dispatch({type: 'ADD_SCHEDULE', schedule: json.data})
        })
    }
}

export const editSchedule = (schedule, id) => {
    schedule["foodtruck_id"] = id

    const formData = {
        method: 'PATCH',
        headers: { 
            'Content-Type': 'application/json'
         },
        body: JSON.stringify(schedule) 
    }

    return (dispatch) => {
        fetch(`https://alwaysonthego.herokuapp.com/api/v1/schedules/${schedule.id}`, formData)
        .then(response => {
            return response.json()
    }).then(json => {
               dispatch({type: 'EDIT_SCHEDULE', schedule: json})
        })
    }
}

export const addFood = (food, menuId) => {
    
    food["menu_id"] = menuId
    
    const formData = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({item: food})
    }
    return (dispatch) => {
        fetch("https://alwaysonthego.herokuapp.com/api/v1/items/", formData)
        .then(response => {
            return response.json()
        }).then(json => {
            dispatch({type: 'ADD_FOOD', food: json.item})
        })
    }
}


export const deleteFood = (food) => {
    
    const formData = {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({item: food})
    }
    return (dispatch) => {
        fetch(`https://alwaysonthego.herokuapp.com/api/v1/items/${food.id}`, formData)
        .then(response => {
            return response.json()
        }).then(json => {
            dispatch({type: 'DELETE_FOOD'})
        })
    }
}


export const deleteNote = (note) => {
    const formData = {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(note)
    }
    return (dispatch) => {
        fetch(`https://alwaysonthego.herokuapp.com/api/v1/notes/${note.id}`, formData)
        .then(response => {
            return response.json()
        }).then(json => {
            dispatch({type: 'DELETE_NOTE'})
        })
    }
}



export const addNote = (note) => {
    const formData = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(note)
    }
    return (dispatch) => {
        fetch("https://alwaysonthego.herokuapp.com/api/v1/notes/", formData)
        .then(response => {
            return response.json()
        }).then(json => {
            dispatch({type: 'ADD_NOTE', note: json})
        })
    }
}


export const deleteProfile = (acct) => {
    
    const formData = {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(acct)
    }
    return (dispatch) => {
        fetch(`https://alwaysonthego.herokuapp.com/api/v1/owners/${acct.owner.id}`, formData)
        
    }
}
