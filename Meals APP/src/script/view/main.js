const main = () => {
  const searchElement = document.querySelector('#searchElement');
  const buttonSearchElement = document.querySelector('#searchButtonElement');
  const mealListElement = document.querySelector('#mealList');
 
  const onButtonSearchClicked = () => {
    DataSource.searchMeal(searchElement.value)
        .then(renderResult)
        .catch(fallbackResult);
  };
 
  const renderResult = results => {
    mealListElement.innerHTML = '';
    results.forEach(meal => {
      const {name, fanArt, description} = meal;
      const mealElement = document.createElement('div');
      mealElement.setAttribute('class', 'meal');
 
      mealElement.innerHTML = `
        <img class="fan-art-meal" src="${fanArt}" alt="Fan Art">
        <div class="meal-info">
         <h2>${name}</h2>
         <p>${description}</p>
        </div>`;
 
      mealListElement.appendChild(mealElement);
    });
  };
 
  const fallbackResult = message => {
    mealListElement.innerHTML = '';
    mealListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  };
 
  buttonSearchElement.addEventListener('click', onButtonSearchClicked);
};
