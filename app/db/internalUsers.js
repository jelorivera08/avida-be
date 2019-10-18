const { mongoose } = require('./index');

const internalUsersSchema = new mongoose.Schema({
  username: String,
  password: String,
  status: String
});

const internalUsersModel = mongoose.model('Tenant', internalUsersSchema);

module.exports = internalUsersModel;
