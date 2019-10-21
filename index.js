const express = require('express');
const tenantRoutes = require('./app/routes/tenant');
const usersRoutes = require('./app/routes/users');
const app = express();
const port = 4000;
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/tenants', tenantRoutes);
app.use('/users', usersRoutes);

app.listen(port, () => console.log('sample app listening!!'));
