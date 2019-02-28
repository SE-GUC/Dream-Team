const express = require('express')
const router = express.Router()

// We will be connecting using database 
const Book = require('../../models/Book')

// temporary data created as if it was pulled out of the database ...
const books = [
   
    new Book('A walk to remember', 'Nicholas Sparks', 50, 1990)
];

router.get('/', (req, res) => res.json({ data: books }))

module.exports = router