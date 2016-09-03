var mongoose     = require('mongoose'),
      schema     = mongoose.Schema;

var tempSchema  = new schema({
  value:   String, 
  key:     String,
  created: Date
});

module.exports = mongoose.model('temp', tempSchema);