
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
         .then(getDrinkData)}


         function getDrinkData (data) { 
            console.log(data)
            const Drinkdata = data.drinks[0]
            console.log(Drinkdata.strInstructions) 
            const drinkCard = `<div class="card" id="drinkCard" style="width: 18rem;">
            <img src=${Drinkdata.strDrinkThumb} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${Drinkdata.strDrink}</h5>
              
            </div>
          </div>`
           
            DrinkContainer.innerHTML=drinkCard
      
       }
    /*
       const drinkInstrButton = document.getElementById("instructionsButton")
       drinkInstrButton.addEventListener("click",popOut)
       function popout() {

       }
       */