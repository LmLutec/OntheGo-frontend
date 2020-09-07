export const addTruck = (truck) => {
    // console.log(truck)
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
               dispatch({type: 'ADD_TRUCK', owner: json.foodtruck})
        })
    }
}