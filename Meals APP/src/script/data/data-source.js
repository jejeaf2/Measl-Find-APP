class DataSource {
  static searchMeal(keyword) {
    return new Promise((resolve, reject) => {
      const filteredMeals = meals.filter(meal => meal.name.toUpperCase().includes(keyword.toUpperCase()));
      
      if (filteredMeals.length) {
        resolve(filteredMeals);
      } else {
        reject(`${keyword} is not found`);
      }
    });
  }
}

