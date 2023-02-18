const mongoose = require('mongoose');

const dbConnection = () => {
  try {
    mongoose
      .connect(
        'mongodb+srv://zaheer:zaheer123@cluster0.zkj9tsa.mongodb.net/test',
      )
      .then(res => {
        console.log('connected');
      })
      .catch(err => {
        console.log(err);
      });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = dbConnection;
