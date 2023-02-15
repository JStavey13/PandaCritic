const foodFormHandler = async (event) => {
    event.preventDefault();
  
    const foodName = document.querySelector('#food_name').value.trim();
    const foodDescription = document.querySelector('#food_description').value.trim();
    const restaurantName = document.querySelector('#restaurant_name').value.trim();
  
    if (foodName || foodDescription || restaurantName) {
      const response = await fetch('/api/foods', {
        method: 'POST',
        body: JSON.stringify({ foodName, foodDescription, restaurantName }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/my-reviews');
      } else {
        alert(response.statusText);
      }
    }
  };

  document
  .querySelector('.new-food-form')
  .addEventListener('submit', foodFormHandler);