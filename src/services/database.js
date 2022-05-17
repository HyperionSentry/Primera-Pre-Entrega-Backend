const mongoose = require('mongoose');


const connectionString = 'mongodb+srv://fcaballero:mnbASD123.@cluster0.vmrk8.mongodb.net/?retryWrites=true&w=majority'

const initMongoDB = async () => {
  try {
    console.log('CONECTANDO A MI DB');
    console.log(connectionString)
    await mongoose.connect(connectionString);

    console.log('YA ESTOY CONECTADO');
  } catch (error) {
    console.log(`ERROR => ${error}`);
    return error;
  }
};

module.exports = initMongoDB; 