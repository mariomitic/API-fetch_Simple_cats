
function showFact() {

fetch('https://catfact.ninja/fact')  
.then(function(response) {
return response.json();
})
.then(function(data){
   //console.log(data);
    document.getElementById('fetchedText').innerText = data.fact;

})

}









