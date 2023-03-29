const foodFormHandler = async (event) => {
    event.preventDefault();
  
    const foodName = document.querySelector('#food_name').value.trim();
    const foodDescription = document.querySelector('#food_description').value.trim();
    const restaurantName = document.querySelector('#restaurant_name').value.trim();
    const foodRating = document.querySelector('#food_rating').value.trim();
  
    if (foodName || foodDescription || restaurantName || foodRating) {
      const response = await fetch('/api/foods', {
        method: 'POST',
        body: JSON.stringify({ foodName, foodDescription, restaurantName, foodRating }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };
  const form = document.querySelector('.new-food-form');
  const media = document.querySelector('.media-container');
  
  form.style.float = 'left';
  media.style.flex.wrap = 'right';
  
  document
  .querySelector('.new-food-form')
  .addEventListener('submit', foodFormHandler);