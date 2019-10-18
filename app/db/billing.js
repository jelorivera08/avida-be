const { mongoose } = require('./index');

const billingSchema = new mongoose.Schema({
  currentBalance: Number,
  vat: Number,
  totalSales: Number,
  tenantId: String,
  billingDate: Date
});

const billingModel = mongoose.model('Billing', billingSchema);

module.exports = billingModel;
