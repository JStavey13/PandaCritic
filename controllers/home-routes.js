const router = require('express').Router();
const Food = require('../models/food');

router.get('/', async (req, res) => {
    const foodData = await Food.findAll().catch((err) => { 
        res.json(err);
      });
        const dishes = dishData.map((dish) => dish.get({ plain: true }));
        res.render('all', { dishes });
      });