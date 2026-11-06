# Library Management API

A REST API for managing a library catalogue, built with Node.js, Express and MongoDB. It covers full CRUD, title search and centralised error handling.

## Book model

`title` · `author` · `isbn` · `genre` · `publisher` · `publicationYear` · `totalCopies` · `availableCopies` · `shelfLocation` · `bookType` · `status`

## Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/books` | Add a book |
| GET | `/api/books` | List all books |
| GET | `/api/books/search?title=` | Case-insensitive title search |
| GET | `/api/books/:id` | Get one book |
| PUT | `/api/books/:id` | Update a book |
| DELETE | `/api/books/:id` | Delete a book |

## Structure

```
server.js                 app entry
config/db.js              MongoDB connection
controllers/              request handlers
middleware/               central error handler
models/Book.js            Mongoose schema
routes/bookRoutes.js      routes
```

## Run locally

```bash
npm install
cp .env.example .env      # set MONGO_URI
node server.js            # http://localhost:5000
```

## Stack

Node.js · Express · MongoDB · Mongoose
