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
          const mealName = `<h2>${mealData.strMeal}</h2>`
          const mealPic = `<img src=${mealData.strMealThumb}>`  
          const mealInstruct = `<p>${mealData.strInstructions}</p>`    
          mealContainer.innerHTML = mealName + mealPic + mealInstruct
          
        })
  
    }

    //.then(function(data) {
      // console.log(data)
      // const mealImage = data[0].url
      // const mealPic = `<img src=${mealImage}>`    //back tick with ${} means your working with template literal 

      //  mealContainer.innerHTML = mealPic