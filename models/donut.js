const mongoose = require("mongoose");
const donutSchema = mongoose.Schema({
    donut_type: String,
    num: String,
    price: Number,
})

module.exports = mongoose.model("Donut", donutSchema);