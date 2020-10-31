const mongoose = require("mongoose")

const budgetSchema = mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
      },
      budget: {
        type: Number,
        required: true,
      },
      color: {
        type: String,
        minlength:7,
        required: true,
      },
    }, {collection : 'budget'}
  );
  
  module.exports = mongoose.model("budget", budgetSchema);