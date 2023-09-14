const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PersonSchema = new Schema({
  id: String,
  name: {
    type: String,
    required: true
  },
}, {
  versionKey: false
});

PersonSchema.pre('save', function(next){
  this.id = this._id,
  next()
})
const Person = mongoose.model('Person', PersonSchema);

module.exports = Person;
