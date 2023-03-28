const router = require('express').Router();
const Food = require('../models/Food');
const withAuth = require('../utils/auth')

router.get('/', async (req, res) => {
    const foodData = await Food.findAll().catch((err) => { 
        res.json(err);
      });
        const foods = foodData.map((food) => food.get({ plain: true }));
        res.render('homepage', { foods, logged_in:req.session.logged_in });
      });

      router.get('/login', (req, res) => {
      
        if (req.session.logged_in) {
          res.redirect('/');
          return;
        }
      
        res.render('login');
      });

      router.get('/food', withAuth, async (req, res) => {
        const foodData = await Food.findAll().catch((err) => { 
            res.json(err);
          });
            const foods = foodData.map((food) => food.get({ plain: true }));
            res.render('food', { foods, logged_in: true });
          });

          router.get('/bars', withAuth, async (req, res) => {
            const foodData = await Food.findAll().catch((err) => { 
                res.json(err);
              });
                const foods = foodData.map((food) => food.get({ plain: true }));
                res.render('bars', { foods, logged_in: true });
              });

              router.get('/restaurants', withAuth, async (req, res) => {
                const foodData = await Food.findAll().catch((err) => { 
                    res.json(err);
                  });
                    const foods = foodData.map((food) => food.get({ plain: true }));
                    res.render('restaurants', { foods, logged_in: true });
                  });
    
      router.get('/login', (req, res) => {
          
        if (req.session.logged_in) {
          res.redirect('/');
          return;
        }
          
        res.render('login');
      });

      router.get('/my-reviews', withAuth, async (req, res) => {
        const foodData = await Food.findAll().catch((err) => { 
            res.json(err);
          });
            const foods = foodData.map((food) => food.get({ plain: true }));
            console.log(foods)
            res.render('my-reviews', { foods, logged_in: true });
          });
      
      

      




module.exports = router