var Donut = require('../models/donut');

exports.donut_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Donut list');
};
// for a specific Costume.
exports.donut_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Donut detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.donut_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Donut();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.donut_type = req.body.donut_type;
    document.num = req.body.num;
    document.price = req.body.price;
    try{
        let result = await document.save();
        res.send(result);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
    };
// Handle Costume delete form on DELETE.
exports.donut_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Donut delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.donut_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Donut update PUT' + req.params.id);
};

// List of all Costumes
exports.donut_list = async function(req, res) {
    try{
        theDonuts = await Donut.find();
        res.send(theDonuts);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.donut_view_all_Page = async function(req, res) {
    try{
        theDonuts = await Donut.find();
        res.render('donuts', { title: 'Donut Search Results', results: theDonuts });
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
}
