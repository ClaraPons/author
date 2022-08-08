const express = require("express");
const app = express()


let authors = [
    {
        id: 1,
        name: "Lawrence Nowell",
        nationality: "UK",
        books: ["Beowulf"]
    },
    {
        id: 2,
        name: "William Shakespeare",
        nationality: "UK",
        books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
    },
    {
        id: 3,
        name: "Charles Dickens",
        nationality: "US",
        books: ["Oliver Twist", "A Christmas Carol"]
    },
    {
        id: 4,
        name: "Oscar Wilde",
        nationality: "UK",
        books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
    },
]

app.get('/', (req, res) => {
    console.log("test")
    const author = "Author API"

    res.json(author)
})

app.get('/author/:id', (req, res) => {

    const author = authors.find((author) => {
        return author.id === Number(req.params.id)
    });

        res.json(`${author.name}, ${author.nationality}`)
});

app.get('/author/:id/books', (req, res) => {

    const author = authors.find((author) => {
        return author.id === Number(req.params.id)    
    });

    const books = author.books.join(', ')

        res.json(books)
});


app.get('/json/authors/:id', (req,res) => {

    const author = authors.find((author) => {
        return author.id === Number(req.params.id)  
    });

    res.json({
        name: author.name,
        nationality: author.nationality
    })
})

app.get('/json/authors/:id/books', (req, res) => {
    const author = authors.find((author) => {
        return author.id === Number(req.params.id)
    })

    res.json({
        books:author.books
    })
})


module.exports = app 