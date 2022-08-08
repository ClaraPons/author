const express = require('express');
const app = express();
const port = 8000;

const authorRoutes = require('./routes/Author.js')

app.use('/author', authorRoutes)


app.get('/', (req, res) => {
    const author = "Author API"

    res.json(author)
})

app.listen(port, () =>{
    console.log(`Server started on port ${port}`)
})