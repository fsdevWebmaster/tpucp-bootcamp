const express = require("express");
const app = express();
app.use(express.json());

const {connectToMongo} = require("./database");
const { getInstruments, 
        getFamily,
        updateInstrument, 
        deleteInstrument} = require("./controllers/mainController");


app.get('/instruments', getInstruments);
app.get('/family', getFamily);
app.put('/update-instrument', updateInstrument);
app.delete('/delete-instrument', deleteInstrument);

connectToMongo((result) => {
  app.listen(3000, () => {
    console.log('Mongodb connected.');
  });
});
