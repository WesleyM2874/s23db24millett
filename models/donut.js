const mongoose = require("mongoose");

const secured = (num) => {
    return num >= 1 && num <= 999
}

const donutSchema = mongoose.Schema({
    donut_type: String,
    num: {
        type: Number,
        validate: {
            validator: secured,
            message: "Invalid value for num"
        }
    },
    price: Number,
})

module.exports = mongoose.model("Donut", donutSchema);