const mongoose = require('mongoose');

mongoose.connect('mogodb://localhost/noderest');
mongoose.Promise = global.Promise;

module.exports = mongoose;
