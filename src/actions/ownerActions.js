// export const addOwner = (owner) => {
//     return {
//                   type: 'ADD_OWNER',
//                   owner: owner
//             }
//   }

export const addOwner = (owner) => {
    console.log(owner)
    const formData = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json'
         },
        body: JSON.stringify(owner) 
    }
    return (dispatch) => {
        dispatch({ type: 'ADD_OWNER'})
        fetch("http://localhost:3000/api/v1/owners/", formData)
        .then(response => {
            return response.json()
    }).then(json => {
        console.log(json)
               dispatch({type: 'ADD_OWNER', owner: json})
        })
        // return {
        //           type: 'ADD_OWNER',
        //           owners
        //         }
}
}






