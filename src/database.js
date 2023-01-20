const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://localhost/smsdb', {

}).then(db => console.log("Db is connected"))
.catch(err => console.log(err))