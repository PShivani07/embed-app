function getRoom(options, access_key) {
    fetch('https://webexapis.com/v1/rooms', {
            method: 'GET',
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
        // for(var i=0; i<data.items.length; i++) {
        //     space.innerHTML += `<p> Room id: ${data.items[i].id} </p>
        //     <p> Title of the page: ${data.items[i].title} </p>`
        // }
        for(var i=0; i<data.items.length; i++) {
            var opt = document.createElement('option');
            opt.innerHTML = data.items[i].title;
            opt.value = data.items[i].title;
            options.appendChild(opt);
        }
    })
}