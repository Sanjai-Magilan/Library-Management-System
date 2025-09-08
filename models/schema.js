const mongoose = require("moongoose");
const { schema } = mongoose;
const LibSchema = new schema({
  id: { type: Number, require: true },
  name: { type: String, require: true },
  author: { type: String, require: true },
});

module.exports = mongoose.module("LibSch", LibSchema);