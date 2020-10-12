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
            dispatch({type: 'PROFILE', data: json})
            // this.props.addTruck(json.id)
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

export const logTruck = (truck,id) => {
    return(dispatch) => {
        dispatch({type: 'LOG_TRUCK', truck: truck})
    }
}
// work on this action

export const createMenu = (truckId) => {
    const formData = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({menu: {foodtruck_id: truckId }})
    }
    return (dispatch) => {
        fetch("http://localhost:3000/api/v1/menus/", formData)
        .then(response => {
            return response.json()
        }).then(json => {
            dispatch({type: 'ADD_MENU', menu: json.menu})
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





