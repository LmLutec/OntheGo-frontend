export const addOwner = (owner) => {
    
    const formData = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json'
         },
        body: JSON.stringify({owner: owner}) 
    }
    return (dispatch) => {
        dispatch({ type: 'ADD_OWNER'})
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
        dispatch({ type: 'ADD_TRUCK'})
        fetch("http://localhost:3000/api/v1/foodtrucks/", formData)
        .then(response => {
            return response.json()
    }).then(json => {
               dispatch({type: 'ADD_TRUCK'})
        })
    }
}

export const addSchedule = (schedule) => {
    schedule["foodtruck_id"] = ""

    const formData = {
        method: 'POST',
        headrs: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(schedule)
    }
    return (dispatch) => {
        dispatch({ type: 'ADD_SCHEDULE'})
        fetch("http://localhost:3000/api/v1/schedules/", formData)
        .then(response => {
            return response.JSON()
        }).then(json => {
            console.log(json)
        })
    }
}







