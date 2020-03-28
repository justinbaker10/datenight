const mealHeaders = new Headers({
    'x-api-key': 'c1a32c83-96de-417d-aeb9-03164ecfe0c4'
  });
  
  
  const mealBtn = document.getElementById('generateMealBtn')
  const mealContainer = document.getElementById('mealContainer')
  mealBtn.addEventListener("click", clickMealBtn)
    function clickMealBtn () {
      fetch("https://api.thecatapi.com/v1/images/search?size=full&mime_types=jpg&format=json&has_breeds=1&order=RANDOM&page=0&limit=1", mealHeaders)
      .then(function(response){
        console.log(response)
          return response.json()
           
      })
        .then(function(data) {
          console.log(data)
          const mealImage = data[0].url
          const mealPic = `<img src=${mealImage}>`    //back tick with ${} means your working with template literal 
                 
          mealContainer.innerHTML = mealPic
        })
  
    }

    //blah blah blahhh