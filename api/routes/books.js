const express = require("express");
const router = express.Router();
const Book = require("../models/BookSchema");

//post book add(product)
router.post("/", async (req, res) => {
  const book = new Book(req.body);
  try {
    const saveBook = await book.save();
    res.status(200).json(saveBook);
  } catch (e) {
    res.status(500).send(e);
  }
});
//get products
router.get("/:id",async(req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.status(200).json(book);
  } catch (e) {
    res.status(500).send(e);
  }
});

//update
router.put("/:id", async (req, res) => {
  const book = await Book.findById(req.params.id);
  try {
    if (book.username === req.body.username) {
      try {
        const updateBook = await Book.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          {
            new: true,
          }
        );
        res.status(200).json(updateBook);
      } catch (e) {
        res.status(500).send(e);
      }
    } else {
      res.status(401).json(`You are only allowed to update product`);
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete("./:id", async (req, res) => {
  const book = await Book.findById(req.params.id);
  try {
    if (book.username === req.body.username) {
      try {
        const deleteBook = Book.delete();
        res.status(200).json(deleteBook);
      } catch (e) {
        res.setHeader(500).send(e);
      }
    } else {
      res.status(401).json(`You can only delete your product!`);
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

//get all products
router.get("/", async (req, res) => {
  const catName = req.query.cat;
  try {
    let book;
    if (catName) {
      book = await Book.find({
        category: {
          $in: [catName],
        },
      });
    } else {
      book = await Book.find({});
    }
    res.status(200).json(book);
  } catch (e) {
    res.status(404).send(e);
  }
});

module.exports=router;