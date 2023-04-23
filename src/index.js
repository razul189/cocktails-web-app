const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=cocktail"

document.addEventListener("DOMContentLoaded", () => {
    getCocktails()
})

function getCocktails (){
    const ul = .getElementById("show-list")
    fetch ("URL")
        .then (response => response.json())
        .then (data => {
            console.log(data)
        })
}