import { Router } from "express";

export const PetController = Router()

var person = {name: 'Sergio'}

PetController.get('/hello', (req, res) => {

    const name = 'Sergio'

    res.send(`Hello from server, ${name}!`)
})

PetController.post('/name', (req, res) => {

    let name = req.body.name

    if (!name){
        res.send('Name is required')
        return;
    }

    person.name = name

    res.send(`Name changed to ${name}`)

})