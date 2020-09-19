export const addOwner = (owner) => {
    
    const formData = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json'
         },
        body: JSON.stringify({owner: owner}) 
    }
    return (dispatch) => {
        debugger
        dispatch({ type: 'ADD_OWNER'})
        fetch("http://localhost:3000/api/v1/owners/", formData)
        .then(response => {
            return response.json()
    }).then(json => {
        debugger
               dispatch({type: 'ADD_OWNER', owner: json.owner})
        })
    }
}

// export const loginFetch = (credentials) => {
//     const data = { 
//         method: "POST",
//         headers: { "Content-Type" : "application/json" },
//         body: JSON.stringify(credentials)
//         }

//         return (dispatch) => {
//             dispatch({ type: 'LOGIN'})
//             fetch("http://localhost:3000/api/v1/login/", data)
//             .then(response => {
//                 return response.json()
//         }).then(json => {
//                 console.log(json)
//                    dispatch({type: 'LOGIN', payload: json.owner})
//                    // localStorage.setItem("jwt_token", json.jwt)
//             })
//         }


// }





