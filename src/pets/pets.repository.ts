import { PetType } from "../@types/pet.type";
import { PetsStaticDatabase } from "../static/pets.static";

export class PetsRepository {

    petsDatabase = PetsStaticDatabase

    get(): PetType[]{
        return this.petsDatabase
    }

    add(pet: PetType){
        this.petsDatabase.push(pet)
    }

}