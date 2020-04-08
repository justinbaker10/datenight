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

                console.log(currentMeal)
                
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
                console.log(currentDrink)
                })
            }

        //Network request to get the list of drinks by name, to populate selector.
       axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
            .then(function (response) {
               
                let drinkResponse = response.data.drinks
                console.log(drinkResponse, 'this is drinks by name')

                drinkResponse.forEach(function (el) {
                    let drinkName = el.strCategory
                    $('#drinkNameSelector').append(`<option value='${drinkName}'>${drinkName}</option>`)
                    console.log(drinkName)
                })

            })

        //Network request to get the list of drinks by alcohol, to populate selector.
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
        .then(function (response) {
           
            let drinkResponse = response.data.drinks
            console.log(drinkResponse, 'this is drinks by alcohol')

            drinkResponse.forEach(function (el) {
                let drinkAlcohol = el.strIngredient1
                $('#drinkAlcoholSelector').append(`<option value='${drinkAlcohol}'>${drinkAlcohol}</option>`)
                console.log(drinkAlcohol)
            })

        })


    
    $('#drinkNameSelector').change(function (evt) {

        const defaultOpt = $('#drinkAlcoholSelector').find('.default')
        $('#drinkAlcoholSelector').val(defaultOpt.val())

        let drinkSearch = $('#drinkNameSelector').val()

        console.log(drinkSearch, 'This is drinkSearch')
                
        renderDrinkTitle(drinkSearch)

        function renderDrinkTitle (drink){
            
            $('#drinkTitleContainer').html('')

            $('#drinkTitleContainer').append(`
                    <div class="col-sm-12" id='genDrinkSearchTitle'>
                        <p id='searchTitle'>NICE! Here are some ${drink} to choose from!</p>
                    </div>
            `)
        
        }

        // jQuery Scroll Function 
        $('html, body').animate({
            scrollTop: $("#genDrinkSearchTitle").offset().top
        }, 1000);
    
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=" + drinkSearch)
            .then(function (response) {
            
            let drinks = response.data.drinks

            console.log(response.data, "this is the Response")
            console.log(drinks, "this is the DRINKS")
            renderDrinks(drinks)
            return drinks
            })

        evt.preventDefault()
    })

    $('#drinkAlcoholSelector').change(function (evt) {

        const defaultOpt = $('#drinkNameSelector').find('.default')
        $('#drinkNameSelector').val(defaultOpt.val())

        let drinkSearch = $('#drinkAlcoholSelector').val()

        console.log(drinkSearch, 'This is drinkSearch')
                
        renderDrinkTitle(drinkSearch)

        function renderDrinkTitle (drink){
            
            $('#drinkTitleContainer').html('')

            $('#drinkTitleContainer').append(`
                    <div class="col-sm-12" id='genDrinkSearchTitle'>
                        <p id='searchTitle'>NICE! Here are some ${drink} to choose from!</p>
                    </div>
            `)


            
        }

        // jQuery Scroll Function 
        $('html, body').animate({
            scrollTop: $("#genDrinkSearchTitle").offset().top
        }, 1000);


        // Network Request for drinks by Ingredients (Alcohol)
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drinkSearch)
            .then(function (response) {
            
            let drinks = response.data.drinks

            console.log(response, "this is the Response~~~~~")
            console.log(drinks, "this is the Alcohol")
            renderDrinks(drinks)
            return drinks
            })

        evt.preventDefault()
    })


    // Starts Meals network calls

    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(function (response) {
            
            let catResponse = response.data.categories
            console.log(catResponse, 'this is categories')

            catResponse.forEach(function (el) {
                let categories = el.strCategory
                $('#categorySelector').append(`<option value='${categories}'>${categories}</option>`)
                console.log(el.strCategory)
            })

        })

        axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list.php')
        .then(function (response) {
            
            let areaResponse = response.data.meals
            console.log(areaResponse, 'this is area')

            areaResponse.forEach(function (el) {
                let area = el.strArea
                $('#areaSelector').append(`<option value='${area}'>${area}</option>`)
                console.log(el.strArea)
            })

        })


            //Function to capture value of 'foodSearch' field
    $('#categorySelector').on('change', function (evt) {

        const defaultOpt = $('#areaSelector').find('.default')
        $('#areaSelector').val(defaultOpt.val())
       
        let categoryVal = this.value
                        
        renderMealTitle(categoryVal)

        function renderMealTitle (title){
           
            $('#mealTitleContainer').html('')

            $('#mealTitleContainer').append(`
                    <div class="col-sm-12" id='genMealSearchTitle'>
                        <p id='searchTitle'>Great Choice! Here are some ${title} meals to choose from!</p>
                    </div>
            `)
        
        }

        console.log(categoryVal, " is what I typed in to Lets Eat Search")


        // jQuery Scroll Function 
        $('html, body').animate({
            scrollTop: $("#genMealSearchTitle").offset().top
        }, 1000);
        
        

        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + categoryVal)
        .then(function (response) {
            console.log(response, "this is RESPONNNSEEE")
        
            var meals = response.data.meals

            console.log(response.data, "this is the Response")
            // console.log(meals.length, "this is the MEALS")
            renderMeals(meals)
            
            return meals
                
        })
        evt.preventDefault()
    })


    $('#areaSelector').on('change', function (evt) {

        const defaultOpt = $('#categorySelector').find('.default')
        $('#categorySelector').val(defaultOpt.val())

        let areaSelectorVal = this.value
        
        console.log(areaSelectorVal)
                    
        renderMealTitle(areaSelectorVal)

        function renderMealTitle (title){
            
            $('#mealTitleContainer').html('')

            $('#mealTitleContainer').append(`
                    <div class="col-sm-12" id='genMealSearchTitle'>
                        <p id='searchTitle'>Great Choice! Here are some ${title} meals to choose from!</p>
                    </div>
            `)
        
        }        
        console.log(areaSelectorVal, " is what I typed in to Lets Eat Search")

         // jQuery Scroll Function 
         $('html, body').animate({
            scrollTop: $("#genMealSearchTitle").offset().top
        }, 1000);


        // Gets meals filtered by Area
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?a=" + areaSelectorVal)
            .then(function (response) {
                console.log(response, "this is RESPONNNSEEE")
            
                var meals = response.data.meals
                console.log(response.data, "this is the Response")
                renderMeals(meals)
                return meals
                
            })
        evt.preventDefault()
    })

})
    
        