import express from 'express'

const app = express();

var person = { name: 'Sergio' }

app.get('/hello', (req, res) => {

    res.send(`Hello from server, ${person.name}!`)

})

const port = 3000

app.listen(port, () => console.info(`Server is ready on http://localhost:${port}`))