import express from 'express'
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json())

var person = { name: 'Sergio' }

app.get('/hello', (req, res) => {

    res.send(`Hello from server, ${person.name}!`)
    
})

app.post('/name', (req, res) => {

    let name = req.body.name

    if (!name){
        res.send('Name is required')
        return;
    }

    person.name = name

    res.send(`Name changed to ${person.name}`)

})

const port = 3000

app.listen(port, () => console.info(`Server is ready on http://localhost:${port}`))