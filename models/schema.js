const mongoose = require("mongoose");
const { Schema } = mongoose;
const LibSchema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  author: { type: String, required: true },
  time: {
    type: Date,
    default: () => new Date(Date.now() + 5.5 * 60 * 60 * 1000),
  },
});

module.exports = mongoose.model("LibBooks", LibSchema);
