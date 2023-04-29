const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=cocktail"

document.addEventListener("DOMContentLoaded", () => {
    getCocktails()
    document.getElementById('cocktails').addEventListener('click', getCocktails)
})

function getCocktails(){
    const ul = document.getElementById("drink-list")
    const info = document.getElementById('info')
    info.innerHTML = ""
    ul.innerHTML = ""
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            data.drinks.forEach(drink => {
                ul.innerHTML += `<li><a href="#" data-id="${drink.idDrink}">${drink.strDrink}</a></li>`
            })
            clickableLink()
        })
        .catch(error => console.log(error))
}

const clickableLink = () => {
    const cocktails= document.querySelectorAll("a")
    cocktails.forEach((drink) => {
        drink.addEventListener("click", displayDrink)
        drink.addEventListener("mouseover", () => {
            info.innerHTML = "Delicious recipe upon clicking"
          })
          drink.addEventListener("mouseout", () => {
            info.innerHTML = ""
          })
    })
}

const displayDrink = (event) => {
    const info = document.getElementById("info")
    const ul = document.getElementById("drink-list")
    ul.innerHTML = ""
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${event.target.dataset.id}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        info.innerHTML = `<h1>${data.drinks[0].strDrink}</h1><br>
        <img src="${data.drinks[0].strDrinkThumb}" alt="${data.drinks[0].strDrink}">
        <h2>Ingredients:</h2>
        <ul>
            ${getIngredientsList(data.drinks[0])}
        </ul>
        <h2>Instructions:</h2>
        <p>${data.drinks[0].strInstructions}</p>`
    })
}

