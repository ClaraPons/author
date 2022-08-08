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

app.get('/:id', (req, res) => {

    const author = authors.find((author) => {
        return author.id === Number(req.params.id)
    });

    if(author){
        res.json(`${author.name}, ${author.nationality}`)
    }else{
        res.status('Not found').send(404)
    }
});

app.get('/:id/books', (req, res) => {

    const author = authors.find((author) => {
        return author.id === Number(req.params.id)    
    });

    const books = author.books.join(', ')

    if(books){
        res.json(books)
    }else{
        res.status('Not found').send(404)
    }
});

app.get('/json/:id', (req,res) => {

    const author = authors.find((author) => {
        return author.id === Number(req.params.id)  
    });

    if(author){
        res.json({
            name: author.name,
            nationality: author.nationality
        })
    }else{
        res.status('Not found').send(404)
    }
})

app.get('/json/:id/books', (req, res) => {
    const author = authors.find((author) => {
        return author.id === Number(req.params.id)
    })

    if(author){
    res.json({
        books:author.books
    })
    }else{
        res.status('Not found').send(404)
    }
})


module.exports = app 