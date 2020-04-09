$(document).ready(function () {

  const mealHeaders = new Headers({
      'x-api-key': "1"
    })
    
    
    const mealBtn = document.getElementById('wineAndDine')
    const mealContainer = document.getElementById('mealContainer2')
    mealBtn.addEventListener("click", clickMealBtn)
      function clickMealBtn () {
  
        $('#mealTitleContainer').html('')
        $('#mealContainer2').html('')
        
        fetch("https://www.themealdb.com/api/json/v1/1/random.php", mealHeaders)
        .then(function(response){
            return response.json()
             
        })
          .then(function(data) {
            console.log(data,"CL Data")
            const mealData = data.meals[0]
            const mealCard = `<div class="col-sm-6" id="mealCard" style="width: 18rem;">
            <img src=${mealData.strMealThumb} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${mealData.strMeal}</h5>
              <p>${mealData.strInstructions}</p>`
              
              mealContainer2.innerHTML=mealCard
            
              
          })
          
      }
  })
  