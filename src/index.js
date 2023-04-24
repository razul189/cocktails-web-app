const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=cocktail"

document.addEventListener("DOMContentLoaded", () => {
    getCocktails()
})

function getCocktails() {
    const ul = document.getElementById("show-list");
    fetch("URL")
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
}

// fetch(URL)
//     .then(response => {
//         console.log(response);
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => console.log(error));