function sendMessages(media, access_key) {
    fetch("https://webexapis.com/v1/messages", {
            method: 'POST',
            body:JSON.stringify( media ),
            headers:{
                "Authorization": access_key,
                "Content-Type": "application/json"
            }
        })
        .then(function(response){
            return response.json()
        })
}