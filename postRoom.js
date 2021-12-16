function postRoom(team, access_key) {
    // fetch post request
    fetch("https://webexapis.com/v1/rooms", {
        method: 'POST',
        body:JSON.stringify( team ),
        headers:{
            "Authorization": access_key,
            "Content-Type": "application/json"
        }
    })
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
    })
}