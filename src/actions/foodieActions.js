export const search = (search) => {
    
    const formData = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(search)
    }
    return (dispatch) => {
        fetch("https://alwaysonthego.herokuapp.com/api/v1/search/", formData)
        .then(response => {
            return response.json()
        }).then(json => {
            dispatch({type: 'SEARCH', trucks: json })
        })
    }
}


export const details = (json) => {
    return (dispatch) => {
        dispatch({type: 'DETAILS', truck: json})
    }
}

export const addRating = (rating, truckId) => {
    rating["foodtruck_id"] = truckId

    const formData = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(rating)
    }
    return (dispatch) => {
        fetch("https://alwaysonthego.herokuapp.com/api/v1/ratings/", formData)
        .then(response => {
            return response.json()
        }).then(json => {
            console.log(json)
            dispatch({type: 'ADD_RATING', rating: json })
        })
    }
}

export const addLike = (truck) => {
   
    truck.likes = truck.likes + 1

    const formData = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json'
         },
        body: JSON.stringify(truck) 
    }
    return (dispatch) => {
        fetch("https://alwaysonthego.herokuapp.com/api/v1/like/", formData)
        .then(response => {
            return response.json()
        }).then(json => {
        dispatch({type: 'ADD_LIKE', likes: json.likes })
    })
    }
}