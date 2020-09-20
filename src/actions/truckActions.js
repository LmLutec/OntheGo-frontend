export const addTruck = (truck) => {
    const owner = JSON.parse(localStorage.getItem('owner'))
    
    // truck.owner_id = localStorage.getItem('owner')
    truck["owner_id"] = owner.id
    console.log(truck)

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