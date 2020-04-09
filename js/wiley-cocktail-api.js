
    const DrinkHeaders = new Headers({ 
        'x-api-key': '1' 
        }); 
         

        const DrinkBtn = document.getElementById("wineAndDine") 
        const CocktailContainer = document.getElementById("mealContainer2") 

        DrinkBtn.addEventListener("click",clickDrinkBtn) 
        function clickDrinkBtn() { 
        
            fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php", DrinkHeaders) 
            .then(function(response) { 
                console.log("response is good")
            return response.json() 
        })
         .then(getDrinkData)}


         function getDrinkData (data) { 
            console.log(data)
            const Drinkdata = data.drinks[0]

            const drinkCard = `
            <div class='card' id="drinkCard">
            <img src=${Drinkdata.strDrinkThumb} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${Drinkdata.strDrink}</h5>
              <h6>Mix your own drink:</h6>
              <p>${Drinkdata.strInstructions}</p>
            </div>
            </div>`
            $('#drinkContainer2').html(drinkCard)
      
       }

