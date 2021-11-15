var express = require('express');
var router = express.Router();
var multiply = require('./multiply');
var math = require('./addperson');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Fitness Center Crowd Control Application' });
});

router.get('/api/multiply', function (req, res, next) {
  var n1 = parseInt(req.query.n1);
  var n2 = parseInt(req.query.n2);
  res.json(multiply.add(n1, n2));
});

// Set up additional routes here
router.get('/maincampus', function (req, res, next) {
  res.render('maincampus', { title: 'Fitness Center Crowd at Mount Carmel' });
});
router.get('/yorkhill', function (req, res, next) {
  res.render('yorkhill', { title: 'Fitness Center Crowd at York Hill', machines: 20 });



  //res.send(counter);
  //var counter = parseInt(req.query.counter);
  //res.json(math.add(counter, 1));
});

//router.get('/api/addperson', function (req, res, next) {
// var counter = parseInt(req.query.counter);
//logger.info('/api/add Used to add ' + counter + 'and 1 person')
// res.json(math.add(counter, 1));
//});

module.exports = router;
