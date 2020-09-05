export const addOwner = (owner) => {
    return {
                  type: 'ADD_OWNER',
                  owner: owner
            }
  }

// export const addOwner = (data) => {
    // console.log(data)
    // const formData = {
    //     method: 'POST',
    //     headers: { 
    //         'Content-Type': 'application/json'
    //      },
    //     body: JSON.stringify(data) 
    // }

    // const owners = fetch("http://localhost:3000/api/v1/owners/", formData)
    //     .then(response => {
    //         return response.json()
    //     }).then(json => {
            // dispatch({type: 'ADD_OWNER'})
        //     console.log(json)
        // })
        // return {
        //           type: 'ADD_OWNER',
        //           owners
        //         }
// }





// export const fetchCats = () => {
//     return (dispatch) => {
//       dispatch({ type: 'LOADING_CATS'})
//       fetch('https://learn-co-curriculum.github.io/cat-api/cats.json').then(response => {
//         return response.json()
//       }).then(responseJSON => {
//         dispatch({ type: 'ADD_CATS', cats: responseJSON.images })
//       })
//     }
//   }

