const { model } = require("mongoose");

// Ye karo (lowercase s):
const HoldingsSchema = require('../schemas/HoldingsSchema');

const HoldingsModel = new model("holding", HoldingsSchema);

module.exports = { HoldingsModel };


// const { model } = require("mongoose");

// const { HoldingsSchema } = require("../Schemas/HoldingsSchema");

// const HoldingsModel = new model("holding", HoldingsSchema);

// module.exports = { HoldingsModel };