$(document).ready(function (evt) {
        console.log('Document Loaded') 
    

    // Renders meals and clears previous meals
    function renderMeals (items) {

                console.log(items, "renderMeals funct started")
                
                $('#mealContainer').html('')
               
                
                items.map( function buildSingleMeal (currentMeal) { 
            
                $('#mealContainer').append(`

                        <div class="col-sm-3" id='container'>
                            <div class="card" >
                                <div class="card-body">
                                    <img class="card-img-top" src="${currentMeal.strMealThumb}" alt="Card image cap">
                                    <h5 class="card-title">${currentMeal.strMeal}</h5>
                                    <p class="card-text">${currentMeal.idMeal}</p>
                                <div>
                            </div>
                        </div>
                    `)

                })
    }

    function renderDrinks (drinks) {

                console.log(drinks, "renderMeals funct started")
                
                $('#drinkContainer').html('')
                
                drinks.map( function buildSingleDrink (currentDrink) { 
                
                    $('#drinkContainer').append(`
                        
                        <div class="col-sm-3" id='container'>
                            <div class="card" >
                                <div class="card-body">
                                    <img class="card-img-top" src="${currentDrink.strDrinkThumb}" alt="Card image cap">
                                    <h5 class="card-title">${currentDrink.strDrink}</h5>
                                    <p class="card-text">${currentDrink.idDrink}</p>
                                <div>
                            </div>
                        </div>
                    `)
                })
    }
    
    function writeLocalStorage (searchResultLength) {
        console.log(searchResultLength, 'THIS IS WEIRD')
        
        let value = JSON.stringify(searchResultLength)
       
        window.localStorage.setItem('searchItem', value)
        

    }

    //Capture drink name selector field and send it into to the results title header. 
    $('#drinkNameSelector').change(function (evt) {

        const defaultOpt = $('#drinkAlcoholSelector').find('.default')
        $('#drinkAlcoholSelector').val(defaultOpt.val())

        let drinkSearch = $('#drinkNameSelector').val()

        let searchResultLength = window.localStorage.getItem('searchItem')

        renderDrinkTitle(drinkSearch, searchResultLength)

        
        

        function renderDrinkTitle (drink, length) {
            
            $('#drinkTitleContainer').html('')
            $('#mealContainer2').html('')
            $('#drinkContainer2').html('')

            $('#drinkTitleContainer').append(`
                    <div class="col-sm-12" id='genDrinkSearchTitle'>
                        <p id='searchTitle'>NICE! Here are ${length} ${drink} to choose from!</p>
                    </div>
            `)
        }

         // jQuery Scroll Function         
         function scroll (length) {

            if (length > 4) {
        
                $('html, body').animate({
                    scrollTop: $("#genDrinkSearchTitle").offset().top
                }, 1000);
            }
        }
        
        function writeLocalStorage (searchResultLength) {
            console.log(searchResultLength, 'THIS IS WEIRD')
            
            let value = JSON.stringify(searchResultLength)
           
            window.localStorage.setItem('searchItem', value)
            
    
        }

        axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=" + drinkSearch)
            .then(function (response) {
            console.log(response.data, "this is the Response of drinks")
            let drinks = response.data.drinks
            renderDrinks(drinks)
            scroll(drinks.length)
            writeLocalStorage(drinks.length)
            })

            var test555 = function test (el) {
                return el }

        evt.preventDefault()
    })

     //Network request to get the list of drinks by name, to populate selector.
     axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
     .then(function (response) {
        
         let drinkResponse = response.data.drinks
         
         drinkResponse.forEach(function (el) {
             let drinkName = el.strCategory
             $('#drinkNameSelector').append(`<option value='${drinkName}'>${drinkName}</option>`)
             })

     })


    //Capture drink alcohol selector field and send it into to the results title header. 
    $('#drinkAlcoholSelector').change(function (evt) {

        const defaultOpt = $('#drinkNameSelector').find('.default')
        $('#drinkNameSelector').val(defaultOpt.val())

        let drinkSearch = $('#drinkAlcoholSelector').val()
        let searchResultLength = window.localStorage.getItem('searchItem')
        renderDrinkTitle(drinkSearch, searchResultLength)

        function renderDrinkTitle (drink, length){
            
            $('#drinkTitleContainer').html('')
            $('#mealContainer2').html('')
            $('#drinkContainer2').html('')

            $('#drinkTitleContainer').append(`
                    <div class="col-sm-12" id='genDrinkSearchTitle'>
                        <p id='searchTitle'>NICE! Here are ${length} ${drink} to choose from!</p>
                    </div>
            `)
        }

         // jQuery Scroll Function         
         function scroll (length) {

            if (length > 4) {        
                $('html, body').animate({
                    scrollTop: $("#genDrinkSearchTitle").offset().top
                }, 1000);
            }
        }
        
        // Network Request for drinks by Ingredients (Alcohol)
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drinkSearch)
            .then(function (response) {
            console.log(response, "This is the response for drink Ingredients")
            let drinks = response.data.drinks
            let drinkLength = drinks.length
            renderDrinks(drinks)
            scroll(drinkLength)
            return drinks
            })
            
        evt.preventDefault()
    })

    //Network request to get the list of drinks by alcohol, to populate selector.
    axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
        .then(function (response) {
           
            let drinkResponse = response.data.drinks
            console.log(drinkResponse, 'this is drinks by alcohol')

            drinkResponse.forEach(function (el) {
                let drinkAlcohol = el.strIngredient1
                $('#drinkAlcoholSelector').append(`<option value='${drinkAlcohol}'>${drinkAlcohol}</option>`)
            })

        })


  
 
    //Capture category selector field and send it into to the results title header. 
    $('#categorySelector').on('change', function (evt) {        

        const defaultOpt = $('#areaSelector').find('.default')
        $('#areaSelector').val(defaultOpt.val())
       
        let categoryVal = this.value
        
        let searchResultLength = window.localStorage.getItem('searchItem')

        renderMealTitle(categoryVal, searchResultLength)
                    
        
        // jQuery Scroll Function to move the page to the results of the selector that has changed.          
        function scroll (length) {
            
            if (length > 4) {        
                $('html, body').animate({
                    scrollTop: $("#genMealSearchTitle").offset().top
                }, 1000);
            }            
        }
        

        function renderMealTitle (category, length) {
                      
            $('#mealTitleContainer').html('')
            $('#mealContainer2').html('')
            $('#drinkContainer2').html('')

            $('#mealTitleContainer').append(`
                    <div class="col-sm-12" id='genMealSearchTitle'>
                        <p id='searchTitle'>Great Choice! Here are ${length} ${category} meals to choose from!</p>
                    </div>
            `)
        
        }

        // Takes category selector field and concatinates it to the network request URL. Returns promise with array of meals
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + categoryVal)
        .then(function (response) {
            // console.log(response, "this is RESPONNNSEEE")
            let meals = response.data.meals
            let mealLength = meals.length
            console.log(mealLength, 'WHHHATTT IS THISSSS')
            renderMeals(meals)
            scroll(mealLength)
            writeLocalStorage(mealLength)

            })

        evt.preventDefault()
    })

    //Category selection list to populate the "Choose by Selection" selector
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(function (response) {
            
            let catResponse = response.data.categories
            console.log(catResponse, 'this is categories')

            catResponse.forEach(function (el) {
                let categories = el.strCategory
                $('#categorySelector').append(`<option value='${categories}'>${categories}</option>`)
            })

        })

     //Capture area selector field and send it into to the results title header. 
    $('#areaSelector').on('change', function (evt) {

        const defaultOpt = $('#categorySelector').find('.default')
        $('#categorySelector').val(defaultOpt.val())

        let areaSelectorVal = this.value
        
        renderMealTitle(areaSelectorVal)

        function renderMealTitle (title) {
            
            $('#mealTitleContainer').html('')
            $('#mealContainer2').html('')
            $('#drinkContainer2').html('')

            $('#mealTitleContainer').append(`
                    <div class="col-sm-12" id='genMealSearchTitle'>
                        <p id='searchTitle'>Great Choice! Here are some ${title} meals to choose from!</p>
                    </div>
            `)
        
        }        
        
         // jQuery Scroll Function to move the page to the results of the selector that has changed.         
         function scroll (length) {

            if (length > 4) {
        
                $('html, body').animate({
                    scrollTop: $("#genMealSearchTitle").offset().top
                }, 1000);
                
            }
        }


        // Takes area selector field and concatinates it to the network request URL. Returns promise with array of meals by area.
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?a=" + areaSelectorVal)
            .then(function (response) {
                console.log(response, "this is RESPONSE")
                var meals = response.data.meals
                let mealLength = meals.length
                scroll(mealLength)
                renderMeals(meals)
                return meals
                
            })
        evt.preventDefault()
    })

    // Area selection list to populate the "Choose by Area" selector
    axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list.php')
    .then(function (response) {
        
        let areaResponse = response.data.meals
        // console.log(areaResponse, 'this is area')

        areaResponse.forEach(function (el) {
            let area = el.strArea
            $('#areaSelector').append(`<option value='${area}'>${area}</option>`)
            
        })

    })

})
    
        