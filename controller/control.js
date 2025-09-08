const LibSch = require("../models/schema");
module.exports = {
  // GET ALL
  GetAll: async (req, res) => {
    const books = await LibSch.find();
    res.status(200).send(books);
  },

  //ADD BOOk
  AddBook: async (req, res) => {
    try {
      const lastbook = await LibSch.findOne().sort({ id: -1 });
      const nextId = lastbook ? lastbook.id + 1 : 1;
      const book = new LibSch({ ...req.body, id: nextId });
      await book.save();
      res.status(201).send(book);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  // DELETE BY ID
  DeleteBook: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const Delbook = await LibSch.deleteOne({ id: id });
      if (Delbook.deletedCount != 0) {
        res.status(200).send(Delbook);
      } else {
        res.status(404).send("Book not found");
      }
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  },
  // DELETE BY NAME
  DeleteByName: async (req, res) => {
    try {
      const name = req.params.name;
      const Delbook = await LibSch.deleteOne({ name: name });
      if (Delbook.deletedCount != 0) {
        res.status(200).send(Delbook);
      } else {
        res.status(404).send("Book not found");
      }
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  },
};
