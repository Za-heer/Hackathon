const express = require('express');
const dbConnection = require('./Config/dbConnection');
const app = express();
const PORT = process.env.PORT || 4000;

dbConnection();
app.get('/', (req, res) => {
  res.send('simple api hit');
});
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
