var Donut = require('../models/donut');
// List of all Costumes
exports.donut_list = function(req, res) {
res.send('NOT IMPLEMENTED: Donut list');
};
// for a specific Costume.
exports.donut_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Donut detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.cdonut_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Donut create POST');
};
// Handle Costume delete form on DELETE.
exports.donut_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Donut delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.donut_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Donut update PUT' + req.params.id);
};
