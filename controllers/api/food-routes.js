const router = require('express').Router();
const Food = require('../../models/Food');

router.post('/', async (req, res) => {
  console.log(req.session.user_id)
  try {
    const foodData = await Food.create({
      food_name: req.body.foodName,
      food_description: req.body.foodDescription,
      restaurant_name: req.body.restaurantName,
      food_rating: req.body.foodRating,
      user_id: req.session.user_id
    });
    
    res.status(200).json(foodData);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.put('/:id', async (req, res) => {

  try {
    const food = await Food.update(
      req.body,
      {
        where: {
          id: req.params.id,
        }
      }
    );

    res.status(200).json(food);
  } catch (err) {
    console.error(err)
    res.status(500).json(err);
  }
});

module.exports = router;
