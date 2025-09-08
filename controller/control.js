const LibSch = require("../models/schema");
module.exports = {
  GetAll: async (req, res) => {
    const books = await LibSch.find();
    res.status(200).send(books);
  },
};
