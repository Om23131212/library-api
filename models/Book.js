const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  isbn: {
    type: String,
    required: true,
    unique: true
  },
  genre: {
    type: String,
    required: true
  },
  publisher: {
    type: String,
    required: true
  },
  publicationYear: Number,
  totalCopies: {
    type: Number,
    min: 1
  },
  availableCopies: Number,
  shelfLocation: String,
  bookType: String,
  status: {
    type: String,
    default: "Available"
  }
});

module.exports = mongoose.model("Book", bookSchema);