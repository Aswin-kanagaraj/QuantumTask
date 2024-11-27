const mongoose = require('mongoose');
require('dotenv').config();
const db_config = async () => {
  try {
    const uri = process.env.DB_URL
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Error connecting to database:', error);
  }
};

module.exports=db_config;
