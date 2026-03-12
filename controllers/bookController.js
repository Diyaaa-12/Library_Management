const Book = require("../models/Book");

exports.createBook = async (req, res, next) => {
try {

const book = await Book.create(req.body);

res.status(201).json({
success: true,
data: book
});

} catch (error) {
next(error);
}
};

exports.getBooks = async (req, res, next) => {
try {

const books = await Book.find();

res.status(200).json({
count: books.length,
data: books
});

} catch (error) {
next(error);
}
};

exports.getBookById = async (req, res, next) => {
try {

const book = await Book.findById(req.params.id);

if (!book) {
return res.status(404).json({
message: "Book not found"
});
}

res.status(200).json(book);

} catch (error) {
next(error);
}
};

exports.updateBook = async (req, res, next) => {
try {

const book = await Book.findByIdAndUpdate(
req.params.id,
req.body,
{ new: true, runValidators: true }
);

res.status(200).json(book);

} catch (error) {
next(error);
}
};

exports.deleteBook = async (req, res, next) => {
try {

await Book.findByIdAndDelete(req.params.id);

res.status(200).json({
message: "Book deleted successfully"
});

} catch (error) {
next(error);
}
};

exports.searchBooks = async (req, res, next) => {
try {

const keyword = req.query.title;

const books = await Book.find({
title: { $regex: keyword, $options: "i" }
});

res.status(200).json(books);

} catch (error) {
next(error);
}
};