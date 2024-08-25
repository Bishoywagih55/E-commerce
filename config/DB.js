const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();
const DB =  () => { mongoose.connect( process.env.DB_URI ,  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then((conn) => {
    console.log(`database connection : ${conn.connection.host}`);
})
};
module.exports = DB;