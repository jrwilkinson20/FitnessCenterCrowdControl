var express = require('express');
var router = express.Router();
var multiply = require('./multiply');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Fitness Center Crowd Control Application' });
});

router.get('/api/multiply', function(req, res, next) {
  var n1 = parseInt(req.query.n1);
  var n2 = parseInt(req.query.n2);
  res.json(multiply.add(n1,n2));
});


module.exports = router;
