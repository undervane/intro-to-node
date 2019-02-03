import { Router } from "express";
import { PetsService } from "./pets.service";

export const PetController = Router()

const petsService = new PetsService()

PetController.get('/', (req, res) => {

    let pets = petsService.getAll()

    res.send(pets)
})

PetController.post('/', (req, res) => {

    let pet = req.body

    if (!pet){
        res.send('Pet is required')
        return;
    }

    petsService.addPet(pet)

    res.send('Added new pet')

})