const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  // change to index route
  res.render('index');
});

module.exports = router;
