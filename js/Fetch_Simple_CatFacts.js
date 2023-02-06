
var btn = document.getElementById("refresh-btn")
btn.addEventListener("click", refreshFunc)

function refreshFunc(){
    fetch('https://catfact.ninja/fact')
    .then(function(response) {
    return response.json();
    })
    .then(function(data){
       console.log(data);
        document.getElementById('fetchedText').innerText = data.fact;
    })
}











