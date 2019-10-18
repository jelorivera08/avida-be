const { mongoose } = require('./index');

const paymentSchema = new mongoose.Schema({
  currentBalance: Number,
  vat: Number,
  totalSales: Number,
  tenantId: String,
  billingDate: Date
});

const paymentModel = mongoose.model('Payment', paymentSchema);

module.exports = paymentModel;
