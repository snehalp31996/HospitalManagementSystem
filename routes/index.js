/**
 * @author Snehal Patil
 * @date 12/08/2021
 * @since  0.0.1
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;