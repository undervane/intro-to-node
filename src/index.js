import express from 'express'

const app = express();

const port = 3000

app.get('/hello', (req, res) => {

    const name = 'Sergio'

    res.send(`Hello from server, ${name}!`)

})

app.listen(port, () => console.info(`Server is ready on http://localhost:${port}`))