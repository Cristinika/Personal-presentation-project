const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const mealList = document.getElementById('mealList');
const mealDetails = document.getElementById('mealDetails');

// Event listener for search button
searchButton.addEventListener('click', () => {
  const ingredient = searchInput.value.trim();
  if (ingredient !== '') {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
      .then(response => response.json())
      .then(data => {
        if (data.meals === null) {
          displayNoMealsFound();
        } else {
          displayMeals(data.meals);
        }
      })
      .catch(error => {
        console.log(error);
        displayNoMealsFound();
      });
  }
});

// Function to display meals
function displayMeals(meals) {
  mealList.innerHTML = '';
  meals.forEach(meal => {
    const mealItem = document.createElement('div');
    mealItem.classList.add('meal-item');
    mealItem.innerHTML = `
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
      <div class="meal-info" data-meal-id="${meal.idMeal}">
        <h3>${meal.strMeal}</h3>
        <button class="get-recipe" data-meal-id="${meal.idMeal}">Get Recipe</button>
      </div>
    `;
    mealList.appendChild(mealItem);
  });
}



// Function to display "No meals found" message
function displayNoMealsFound() {
  mealList.innerHTML = '<p class="no-meals">No meals found. Please try a different ingredient.</p>';
}

// Event listener for meal details
mealList.addEventListener('click', event => {
  if (event.target.classList.contains('get-recipe')) {
    const mealId = event.target.getAttribute('data-meal-id');
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then(response => response.json())
      .then(data => {
        displayMealDetails(data.meals[0]);
      })
      .catch(error => console.log(error));
  }
});

// Function to display meal details
function displayMealDetails(meal) {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
    } else {
      break;
    }
  }

  mealDetails.innerHTML = `
    <h2>${meal.strMeal}</h2>
    <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
    <h4>Ingredients:</h4>
    <ul>
      ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
    </ul>
    <p>${meal.strInstructions}</p>
  `;
}
// Event listener for meal details
mealList.addEventListener('click', event => {
    if (event.target.classList.contains('get-recipe')) {
      const mealId = event.target.getAttribute('data-meal-id');
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(response => response.json())
        .then(data => {
          displayMealDetailsModal(data.meals[0]);
        })
        .catch(error => console.log(error));
    }
  });

  // Function to display meal details in modal
function displayMealDetailsModal(meal) {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
      } else {
        break;
      }
    }
  
    const modalBody = document.getElementById('mealModalBody');
    modalBody.innerHTML = `
      <h2>${meal.strMeal}</h2>
      <img class="modal-image" src="${meal.strMealThumb}" alt="${meal.strMeal}">
      <h4>Ingredients:</h4>
      <ul>
        ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
      </ul>
      <p>${meal.strInstructions}</p>
    `;
  
    const modal = document.getElementById('mealModal');
    const closeBtn = document.getElementsByClassName('close')[0];
  
    modal.style.display = 'block';
  
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', event => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  }
  