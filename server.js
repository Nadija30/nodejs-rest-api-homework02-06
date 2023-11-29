const app = require('./app');
const mongoose = require('mongoose');
const DB_HOST =
  'mongodb+srv://Nadezhda:WC9eH5J26uY2yTWQ@cluster0.wrgvu3a.mongodb.net/contacts_reader?retryWrites=true&w=majority';
mongoose.set('strictQuery', true);
mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log('Database connection successful');
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
