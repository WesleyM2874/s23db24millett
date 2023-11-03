var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('board', { title: 'Board Display', query: req.query });
});

module.exports = router;
