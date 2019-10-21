const { mongoose } = require('./index');

const usersSchema = new mongoose.Schema({
  username: String,
  password: String,
  status: String
});

const usersModel = mongoose.model('Users', usersSchema);

module.exports = usersModel;
