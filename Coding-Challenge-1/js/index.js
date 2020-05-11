const API_URL = "https://pokeapi.co/api/v2/ability/";

function getNameOrId(){
    let nameOrId = document.getElementById('query').value;
    fetch(`https://pokeapi.co/api/v2/ability/${nameOrId}`)
    .then(response =>{
        console.log(response.body);
        return response;
    })
    .then(response2 =>{
        console.log(response2.json());
        return response2;
    });

    console.log(nameOrId);
}







function init(){

let pokeForm = document.querySelector('.js-search-form');
pokeForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    getNameOrId();
});
// console.log("working");

}

init();