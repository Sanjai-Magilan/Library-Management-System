const mongoose = require("mongoose");
const { Schema } = mongoose;
const LibSchema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  author: { type: String, required: true },
  time: {type: Date ,default: Date.now}
});

module.exports = mongoose.model("LibBooks", LibSchema);
