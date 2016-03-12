var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  //Code goes in here
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    min: 8
  },
  email: {
    type: String,
    required: true,
    match: [/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i, 'bad password']
  }
});

var User = mongoose.model('User', UserSchema);
module.exports = User;