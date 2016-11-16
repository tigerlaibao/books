var express = require('express');
var router = express.Router();

router.all('/**' , function (req, res, next) {
  console.log('Accessing the secret section ...');
  next(); // pass control to the next handler
});

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index.html', 
  	{ title: 'Express', name: 'tj', email: 'tj@vision-media.ca' });
});

router.post('/', function (req, res) {
  res.send('Got a POST request');
});

router.get('/example/b', function (req, res, next) {
  console.log('response will be sent by the next function ...');
  next();
}, function (req, res) {
  console.log('Hello from B');
  res.send('Hello from B!');
});

var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
}

var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
}

router.get('/example/d', [cb0, cb1], function (req, res, next) {
  console.log('response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hello from D!');
});

module.exports = router;
