const express = require('express');
const internalUsersModel = require('../db/internalUsers');

const router = express.Router();

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await internalUsersModel.findOne({ username, password });

  if (user) {
    return res.json({
      status: 200,
      message: 'Log in OK.',
      payload: user
    });
  } else {
    return res.send({
      status: 200,
      message: 'User not found. '
    });
  }
});

module.exports = router;
