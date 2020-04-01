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
        .then(function(data) {
          const mealData = data.meals[0]
          const mealName = `<h2 id="dish">${mealData.strMeal}</h2>`
          const mealPic = `<img src=${mealData.strMealThumb}>`
          const mealInstruct = `<p id="instructions">${mealData.strInstructions}</p>`
          mealContainer.innerHTML = mealName + mealPic + mealInstruct        
        })
  
    }