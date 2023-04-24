const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=cocktail"

document.addEventListener("DOMContentLoaded", () => {
    getCocktails()
})

// function getCocktails(){
//     const ul = document.getElementById("drink-list")
//     fetch(URL)
//         .then(response => response.json())
//         .then(data => {
//             data.drinks.forEach(drink => {
//                 ul.innerHTML += `<li>${drink.strDrink}</li>`
//             })
//         })
//         .catch(error => console.log(error))
// }

function getCocktails() {
    const ul = document.getElementById("drink-list")
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        data.drinks.forEach(drink => {
          const li = document.createElement("li")
          li.textContent = drink.strDrink
          ul.appendChild(li)
        })
      })
      .catch(error => console.log(error))
  }
  