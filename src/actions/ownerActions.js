export function addOwnerFetch(){
    const formData = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json'
         },
        body: JSON.stringify(this.state) 
    }

    const owners = fetch("http://localhost:3000/api/v1/owners/", formData)
        // .then(response => console.log(response.json()))
        return {
                  type: 'ADD_OWNERS',
                  owners
                }
}






// export function fetchAstronauts() {
//     const astronauts = fetch('http://api.open-notify.org/astros.json');
//     return {
//       type: 'ADD_ASTRONAUTS',
//       astronauts
//     };
//   };