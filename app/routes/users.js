const express = require('express');
const usersModel = require('../db/internalUsers');

const router = express.Router();

router.post('/create', async (req, res) => {
  const { username, password } = req.body;

  const newInternalUser = new usersModel({
    username,
    password,
    status: 'ACTIVE'
  });

  newInternalUser.save((err, payload) => {
    res.json({
      status: 200,
      message: 'New user created.',
      payload
    });
  });
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const payload = await usersModel.findOne({ username, password });

  if (payload) {
    res.json({
      status: 200,
      message: 'Log in successfuly.',
      payload
    });
  } else {
    res.json({
      status: 400,
      message: 'Error login encountered.'
    });
  }
});

router.get('/', async (req, res) => {
  const users = await usersModel.find();

  res.json(users);
});

module.exports = router;
