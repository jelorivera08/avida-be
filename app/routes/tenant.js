const express = require('express');
const tenantModel = require('../db/tenant');

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, customerNumber, unit, billingId } = req.body;

  const newTenant = new tenantModel({
    name,
    customerNumber,
    unit,
    billingId,
    status: 'ACTIVE'
  });

  newTenant.save((err, data) => {
    res.json({
      status: 200,
      message: 'New tenant created.',
      data
    });
  });
});

router.get('/', async (req, res) => {
  const tenants = await tenantModel.find();

  res.json(tenants);
});

module.exports = router;
