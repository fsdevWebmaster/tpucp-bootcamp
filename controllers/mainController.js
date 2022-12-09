const instrument = require("../models/instrument");

const deleteInstrument = (req, res) => {
  instrument.findOneAndDelete(req.body, (err, result) => {
    if (result === null) {
      return res.status(204).json({
        msg: 'Instrument does not exists.'
      });
    }
    return res.status(200).json({
      result
    });
  });
}

const updateInstrument = (req, res) => {
  const{ref, name} = req.body;
  instrument.findOneAndUpdate({ref}, {name}, {}, (err, result) => {
    if (err) {
      console.log('put error:', err);
    }
    if (!result) {
      const newInstrument = new instrument(req.body);
      newInstrument.save();
      res.status(201).json({
        newInstrument: {ref, name}
      });
    }
    else {
      res.status(200).json({
        updatedInstrumen: {ref, name}
      });
    }
  });
}

const getFamily = (req, res) => {
  const {family} = req.query;
  instrument.find({})
    .where('family').equals(family)
    .exec((err, family) => {
      if (err) {
        res.status(404).send("Not found.");
      }
      res.status(200).json({
        family
      });
    });
}

const getInstruments = (req, res) => {
  instrument.find({}, (err, result) => {
    if (err) {
      res.status(404).json({
        msg: 'Not found'
      });
    }
    res.status(200).json({
      instruments: result
    });
  });
}

const newInstrument = (req, res) => {
  try {
    const addingInstrument = new instrument(req.body);
    addingInstrument.save();
  
    res.status(201).json({
      newInstrument: req.body
    });      
  } catch (error) {
    throw "Error addin instrument."
    res.status(500).json({
      Error: error
    });
  }

}

module.exports = {
  newInstrument,
  getInstruments,
  getFamily,
  updateInstrument,
  deleteInstrument
}