var Donut = require('../models/donut');

// for a specific Costume.
exports.donut_detail = async function (req, res) {
    try {
        theDonuts = await Donut.find();
        res.send(theDonuts);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
    //res.send('NOT IMPLEMENTED: Donut detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.donut_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Donut();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.donut_type = req.body.donut_type;
    document.num = req.body.num;
    document.price = req.body.price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Costume delete form on DELETE.
exports.donut_delete = async function (req, res) {
    console.log("Delete " + req.params.id);
    try {
        result = await Donut.findByIdAndDelete(req.params.id);
        console.log("Removed " + result);
        res.send(result);
    } catch(err){
        res.status(500);
        res.send(`{"error": Error deleting ${err}}`);
    }
};
// Handle Costume update form on PUT.
exports.donut_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Donut.findById(req.params.id)
        // Do updates of properties
        if (req.body.donut_type)
            toUpdate.donut_type = req.body.donut_type;
        if (req.body.num) toUpdate.num = req.body.num;
        if (req.body.price) toUpdate.price = req.body.price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}failed`);
    }
    //res.send('NOT IMPLEMENTED: Donut update PUT' + req.params.id);
};

// List of all Costumes
exports.donut_list = async function (req, res) {
    try {
        theDonuts = await Donut.find();
        res.send(theDonuts);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.donut_view_all_Page = async function (req, res) {
    try {
        theDonuts = await Donut.find();
        res.render('donuts', { title: 'Donut Search Results', results: theDonuts });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
}

// Handle a show one view w/ id specified by query
exports.donut_view_one_Page = async function (req, res){
    console.log("single view for id " + req.query.id);
    try {
        result = await Donut.findById(req.query.id);
        res.render('donutdetail', { title: 'Donut Detail', toShow: result });
    }
    catch (err) {
        res.status(500);
        res.send(`error: '${err}'`);
    }
}

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.donut_create_Page = function (req, res){
    console.log("create view");
    try {
        res.render('donutcreate', { title: 'Donut Create' });
    }
    catch (err) {
        res.status(500);
        res.send(`{'error': '${err}'}`)
    }
}

// Handle building the view for updating a donut
// query provides the id
exports.donut_update_Page = async function (req, res){
    console.log("update view for item " + req.query.id);
    try {
        let result = await Donut.findById(req.query.id);
        res.render('donutupdate', { title: 'Donut Update', toShow: result });
    } catch(err){
        res.status(500);
        res.send(`{'error': '${err}'}`);
    }
}

// Handle a delete one view w/ id from query
exports.donut_delete_Page = async function (req, res){
    console.log("delete view for id" + req.query.id);
    try {
        result = await Donut.findById(req.query.id);
        res.render('donutdelete', { title: 'Donut delete', toShow: result });
    } catch(err) {
        res.status(500);
        res.send(`{'error': '${err}'}`);
    }
}