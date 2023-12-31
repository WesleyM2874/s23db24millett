var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var donut_controller = require('../controllers/donut');

const secured = (req, res, next) => {
    if (req.user) {
      return next();
    }
    res.redirect("/login");
  }
  
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/donuts', donut_controller.donut_create_post);
// DELETE request to delete Costume.
router.delete('/donuts/:id', donut_controller.donut_delete);
// PUT request to update Costume.
router.put('/donuts/:id', donut_controller.donut_update_put);
// GET request for one Costume.
router.get('/donuts/:id', donut_controller.donut_detail);
// GET request for list of all Costume items.
router.get('/donuts', donut_controller.donut_list);
// GET detail donuts page
router.get('/detail', donut_controller.donut_view_one_Page);
// GET create donut page
router.get('/create', donut_controller.donut_create_Page);
// GET create update page
router.get('/update', secured, donut_controller.donut_update_Page);
// GET delete donut page
router.get('/delete', donut_controller.donut_delete_Page);
module.exports = router;