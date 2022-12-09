const { Schema, model } = require("mongoose");

const InstrumentSchema = Schema({
  id: { type: Number, require: true },
  ref: { type: String, require: true, unique:true },
  name: { type:String, require: true },
  family: { type:String, require: true },
});

module.exports = model('Instrument', InstrumentSchema);