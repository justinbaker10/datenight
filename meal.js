const mealHeaders = new Headers({
    'x-api-key': "1"
  });
  
  
  const mealBtn = document.getElementById('generateMealBtn')
  const mealContainer = document.getElementById('mealContainer')
  mealBtn.addEventListener("click", clickMealBtn)
    function clickMealBtn () {
      fetch("https://www.themealdb.com/api/json/v1/1/random.php", mealHeaders)
      .then(function(response){
          return response.json()
           
      })
        .then(getMealData)

        function getMealData (data) {
          const mealData = data.meals[0]
          const mealCard = `<div class="card" id="drinkCard" style="width: 18rem;">
            <img src=${mealData.strMealThumb} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${mealData.strMeal}</h5>
              <a href="#" class="btn btn-secondary">Instructions</a>
            </div>
          </div>`
          
          mealContainer.innerHTML = mealCard       
        }
  
    }