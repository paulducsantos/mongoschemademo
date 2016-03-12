var mongoose = require('mongoose');
var bcrypt = require('bcrypt')
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  //Code goes in here
  username: {
    type: String,
    trim: true,
    required: true
  },
  password: {
    type: String,
    required: true,
    min: 8
  },
  email: {
    type: String,
    trim: true,
    required: true,
    match: [/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i, 'bad password']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

var User = mongoose.model('User', UserSchema);
module.exports = User;