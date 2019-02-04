import { PetType } from "../@types/pet.type";
import { PetsStaticDatabase } from "../static/pets.static";

export class PetsRepository {

    petsDatabase = PetsStaticDatabase

    get(): PetType[]{
        return this.petsDatabase
    }

    findByName(name: string): PetType{
        return this.petsDatabase.find(pet => pet.name === name)
    }

    add(pet: PetType){
        this.petsDatabase.push(pet)
    }

}