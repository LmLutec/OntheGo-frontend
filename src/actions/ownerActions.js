export const addOwner = (owner) => {
    
    const formData = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json'
         },
        body: JSON.stringify({owner: owner}) 
    }
    return (dispatch) => {
        fetch("http://localhost:3000/api/v1/owners/", formData)
        .then(response => {
            return response.json()
    }).then(json => {
               dispatch({type: 'ADD_OWNER', owner: json.owner})
               localStorage.setItem("jwt_token", json.jwt)
               localStorage.setItem("owner", JSON.stringify(json.owner)) 
        })
    } 
}

export const Login = (credentials) => {
    const data = { 
        method: "POST",
        headers: { "Content-Type" : "application/json" },
        body: JSON.stringify(credentials)
        }
        return(dispatch) => {
        fetch("http://localhost:3000/api/v1/login/", data)
            .then(response => {
                return response.json()
        }).then(json => {
                dispatch({type: 'LOGIN', owner: json.owner})
                   localStorage.setItem("jwt_token", json.jwt)
                   localStorage.setItem("owner", JSON.stringify(json.owner)) 
        }) 
      
        }
}

export const getProfile = () => {
    return(dispatch) => {
    fetch("http://localhost:3000/api/v1/profile", {
            method: "GET",
            headers: {
                Authorization: `Bearer: ${localStorage.getItem('jwt_token')}`
            }
        })
        .then(response => response.json())
        .then(json =>   {
            // debugger
            dispatch({type: 'PROFILE', data: json})
        })
    }
}



export const addTruck = (truck) => {
    const owner = JSON.parse(localStorage.getItem('owner'))

    truck["owner_id"] = owner.id

    const formData = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json'
         },
        body: JSON.stringify(truck) 
    }
    return (dispatch) => {
        fetch("http://localhost:3000/api/v1/foodtrucks/", formData)
        .then(response => {
            return response.json()
    }).then(json => {
               dispatch({type: 'ADD_TRUCK', truck: json.id})
        })
    }
}


export const editTruck = (truck,id) => {
    console.log(id)
    truck.foodtruck["id"] = id 

    const formData = {
        method: 'PATCH',
        headers: { 
            'Content-Type': 'application/json'
         },
        body: JSON.stringify(truck) 
    }

    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/foodtrucks/${truck}`, formData)
        .then(response => {
            return response.json()
    }).then(json => {
               dispatch({type: 'EDIT_TRUCK', truck: json.id})
        })
    }
    
} 


export const createMenu = (truckId) => {
    // debugger
    const formData = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({menu: {foodtruck_id: truckId }})
    }
    // debugger
    return (dispatch) => {
        fetch("http://localhost:3000/api/v1/menus/", formData)
        .then(response => {
            return response.json()
        }).then(json => {
            // debugger
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
        fetch("http://localhost:3000/api/v1/schedules/", formData)
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
        fetch(`http://localhost:3000/api/v1/schedules/${schedule.id}`, formData)
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
        fetch("http://localhost:3000/api/v1/items/", formData)
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
        fetch(`http://localhost:3000/api/v1/items/${food.id}`, formData)
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
        fetch(`http://localhost:3000/api/v1/notes/${note.id}`, formData)
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
        fetch("http://localhost:3000/api/v1/notes/", formData)
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
        fetch(`http://localhost:3000/api/v1/owners/${acct.owner.id}`, formData)
        // .then(response => {
        //     return response.json()
        // }).then(json => {
        //     dispatch({type: 'DELETE_NOTE'})
        // })
    }
}
