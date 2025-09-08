const mongoose = require("mongoose");
const { Schema } = mongoose;
const LibSchema = new Schema({
  id: { type: Number, require: true },
  name: { type: String, require: true },
  author: { type: String, require: true },
});

module.exports = mongoose.model("LibBooks", LibSchema);
