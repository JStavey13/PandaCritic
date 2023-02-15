const router = require('express').Router();
const Food = require('../../models/Food');

router.post('/', async (req, res) => {
  try {
    const foodData = await Food.create({
      food_name: req.body.food_name,
      food_description: req.body.food_description,
      food_rating: req.body.food_rating,
      restaurant_name: req.body.restaurant_name
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
