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
               dispatch({type: 'ADD_TRUCK', truck: json.foodtruck.data.id})
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







