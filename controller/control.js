const LibSch = require("../models/schema");
module.exports = {
  // GET ALL
  GetAll: async (req, res) => {
    const books = await LibSch.find();
    if (books) {
      res.status(200).send(books);
    } else {
      res.status(404).res("no books available");
    }
  },

  //GET BY NAME
  GetByName: async (req, res) => {
    try {
      const name = req.params.name;
      const getbook = await LibSch.findOne({ name: name });
      if (getbook) {
        res.status(200).send(getbook);
      } else {
        res.status(404).send("Book not found");
      }
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  },

  //GET BY ID
  GetById: async (req, res) => {
    try {
      const id = req.params.id;
      const getbook = await LibSch.findOne({ id: id });
      if (getbook) {
        res.status(200).send(getbook);
      } else {
        res.status(404).send("Book not found");
      }
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  },

  //SORT BY AUTHOR
  SortByAuthor: async (req, res) => {
    try {
      const author = req.params.author;
      const allBooks = await LibSch.find();
      allBooks.sort((a, b) => {
        if (a.author === author && b.author !== author) return -1;
        if (a.author !== author && b.author === author) return 1;
        return 0;
      });
      if (allBooks) {
        res.status(200).send(allBooks);
      } else {
        res.status(404).send("Author not found");
      }
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
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
      res.status(500).send({ error: error.message });
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
      res.status(500).send({ error: error.message });
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
      res.status(500).send({ error: error.message });
    }
  },

  // UPDATE BY ID
  update: async (req, res) => {
    const id = req.params.id;
    const updates = req.body;
    try {
      const book = await LibSch.findOneAndUpdate({ id: id }, updates, {
        new: true,
      });

      if (!book) return res.status(404).send("book not found");

      res.status(200).send(book);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  },
};
