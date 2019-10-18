var mongoose = require('mongoose');
mongoose.connect(
  'mongodb+srv://jelo:A9bc839993@cluster0-voope.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const db = mongoose.connection;

db.on('error', () => console.log('error found in db connection'));

db.once('open', () => {
  console.log('db is working');
});

module.exports = { mongoose };
