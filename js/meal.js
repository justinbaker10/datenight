$(document).ready(function () {

  const mealHeaders = new Headers({
      'x-api-key': "1"
    })
    
    
    const mealBtn = document.getElementById('wineAndDine')
    const mealContainer = document.getElementById('mealContainer')
    mealBtn.addEventListener("click", clickMealBtn)
      function clickMealBtn () {
  
        $('#mealTitleContainer').html('')
        $('#mealContainer').html('')
        
        fetch("https://www.themealdb.com/api/json/v1/1/random.php", mealHeaders)
        .then(function(response){
            return response.json()
             
        })
          .then(function(data) {
            console.log(data,"CL Data")
            const mealData = data.meals[0]
            /*const mealName = `<h2 id="dish">${mealData.strMeal}</h2>`
            const mealPic = `<img src=${mealData.strMealThumb}>`
            const mealInstruct = `<p id="instructions">${mealData.strInstructions}</p>`
            mealContainer.innerHTML = mealName + mealPic + mealInstruct */
            const mealCard = `<div class="card" id="drinkCard" style="width: 18rem;">
            <img src=${mealData.strMealThumb} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${mealData.strMeal}</h5>`
              
              mealContainer.innerHTML=mealCard
            
              
          })
          
      }
  })