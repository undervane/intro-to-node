import { PetType } from "../@types/pet.type";

export class PetsService {

    pets = [
        {
            name: 'Pigu', emoji: '🐧'
        },
        {
            name: 'Bug', emoji: '🐞'
        }
    ] as PetType[]

    getAll(): PetType[]{
        return this.pets
    }

    addPet(pet: PetType){
        this.pets.push(pet)
    }

}