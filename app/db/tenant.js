const { mongoose } = require('./index');

const tenantSchema = new mongoose.Schema({
  name: String,
  unit: String,
  billingId: String,
  tower: String,
  floor: String,
  customer: String,
  address: String,
  ownerName: String,
  status: String
});

const tenantModel = mongoose.model('Tenant', tenantSchema);

module.exports = tenantModel;
