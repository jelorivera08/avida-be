const express = require('express');
const internalUsersModel = require('../db/internalUsers');

const router = express.Router();

router.post('/', async (req, res) => {
  const { username, password } = req.body;

  const newInternalUser = new internalUsersModel({
    username,
    password,
    status: 'ACTIVE'
  });

  newInternalUser.save((err, data) => {
    res.json({
      status: 200,
      message: 'New user created.',
      data
    });
  });
});

router.get('/', async (req, res) => {
  const internalUsers = await internalUsersModel.find();

  res.json(internalUsers);
});

module.exports = router;
