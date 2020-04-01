
    const DrinkHeaders = new Headers({ 
        'x-api-key': '1' 
        }); 
         
        const DrinkBtn = document.getElementById("generateCocktailBtn") 
        const CocktailContainer = document.getElementById("DrinkContainer") 
        DrinkBtn.addEventListener("click",clickDrinkBtn) 
        function clickDrinkBtn() { 
        
            fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php", DrinkHeaders) 
            .then(function(response) { 
                console.log("response is good")
            return response.json() 
        })
         .then(function(data) { 
         console.log(data)
         const Drinkdata = data.drinks[0]
         console.log(Drinkdata.strInstructions) 
         const DrinkName = `<h2>${Drinkdata.strDrink}</h2>`
         const DrinkInstruc = `<p>${Drinkdata.strInstructions}</p>`
         const DrinkPicture = ` <img src=${Drinkdata.strDrinkThumb}> ` 
        
         DrinkContainer.innerHTML=DrinkName+DrinkPicture+DrinkInstruc
    })}
