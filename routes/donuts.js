var express = require('express');
const donut_controlers= require('../controllers/donut');
var router = express.Router();
let results = [
  { donutType: 'Glazed', numberOfDonuts: 2, xPrice: 4.0 },
  { donutType: 'Frosted', numberOfDonuts: 5, xPrice: 7.0 },
  { donutType: 'Cream', numberOfDonuts: 1, xPrice: 1.0 }
];
/* GET costumes */
router.get('/', donut_controlers.donut_view_all_Page );
//router.get('/update', donut_controlers.donut_update_Page);


//var express = require('express');
//var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
 

  res.render('donuts', { title: 'Search Results: Donuts', results: results });
});*/

module.exports = router;
