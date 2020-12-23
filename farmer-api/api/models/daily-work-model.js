'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var DailyWorkSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the person'
  },
  transaction_type: {
    type:String,
  },
  created_date: {
    type: Date,
  },
  workType: { 
      type: String
  },
  description : {
      type: String
  },
  pay: {
      type: String
  },

  pay_status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('DailyWork', DailyWorkSchema);