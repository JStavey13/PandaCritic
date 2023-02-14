const router = require('express').Router();
const Food = require('../models/Food');

router.get('/', async (req, res) => {
    const foodData = await Food.findAll().catch((err) => { 
        res.json(err);
      });
        const foods = foodData.map((food) => food.get({ plain: true }));
        res.render('homepage', { foods });
      });

      router.get('/login', (req, res) => {
      
        if (req.session.logged_in) {
          res.redirect('/');
          return;
        }
      
        res.render('login');
      });

      router.get('/food', async (req, res) => {
        const foodData = await Food.findAll().catch((err) => { 
            res.json(err);
          });
            const foods = foodData.map((food) => food.get({ plain: true }));
            res.render('food', { foods });
          });
    
          router.get('/login', (req, res) => {
          
            if (req.session.logged_in) {
              res.redirect('/');
              return;
            }
          
            res.render('login');
          });

module.exports = router