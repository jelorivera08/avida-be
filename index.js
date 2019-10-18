const express = require('express');
const tenantRoutes = require('./app/routes/tenant');
const app = express();
const port = 4000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use('/tenants', tenantRoutes);

app.listen(port, () => console.log('sample app listening!!'));
