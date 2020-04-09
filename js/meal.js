$(document).ready(function () {

  const mealHeaders = new Headers({
      'x-api-key': "1"
    })
    
    
    const mealBtn = document.getElementById('wineAndDine')
    const mealContainer = document.getElementById('mealContainer2')
    mealBtn.addEventListener("click", clickMealBtn)
      function clickMealBtn () {
  
        $('#mealTitleContainer').html('')
        $('#drinkTitleContainer').html('')
        $('#mealContainer').html('')
        $('#drinkContainer').html('')


       fetch("https://www.themealdb.com/api/json/v1/1/random.php", mealHeaders)
        .then(function(response){
            return response.json()
             
        })
          .then(function(data) {
            console.log(data,"CL Data")
            const mealData = data.meals[0]
            const mealCard = `
            <div class='card' id="drinkCard">
            <img src=${mealData.strMealThumb} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title" id='this'>${mealData.strMeal}</h5>
              <h6>Try Our Receipe:</h6>
              <p>${mealData.strInstructions}</p>
            </div>
            </div>`

            $('#mealContainer2').html(mealCard)
            
            //Scroll 
            $('html, body').animate({
              scrollTop: $("#this").offset().top
            }, 1000);
            
              
          })
          
      }
      
  })