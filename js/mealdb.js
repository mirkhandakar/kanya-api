const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    if (searchText == '') {
        alert("Write food name to get result");
    }
    else {
        // console.log(searchText);
        searchField.value = '';

        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`

        // load data
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.meals))
    }

}

const displaySearchResult = meals => {
    console.log(meals.length);
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = ``;
    if (meals.length == 0) {
        const resultNull = document.getElementById('result-null');
        const div = document.createElement('div');
        div.innerHTML = `
        <h5>Please write food name on searchbox to get result</h5>
        `;
        resultNull.appendChild(div);

    }
    else {
        meals.forEach(meal => {
            // console.log(meal);
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
                <div onclick="loadMealDetail(${meal.idMeal})" class="card">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                    </div>
                </div>
            `;
            searchResult.appendChild(div);
        })
    }

}

const loadMealDetail = mealID => {
    // console.log(mealID);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMailDetail(data.meals[0]))

}

const displayMailDetail = meal => {
    console.log(meal);
    const mealdetail = document.getElementById('meal-details');
    const div = document.createElement('div');
    div.innerHTML = `
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                    <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
                </div>
    `;
    mealdetail.appendChild(div);
}