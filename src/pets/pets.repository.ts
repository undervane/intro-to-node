import { PetType } from "../@types/pet.type";
import { PetsListStatic } from "../static/pets.static";

export class PetsRepository {

    pets = PetsListStatic

    add(pet: PetType){
        this.pets.push(pet)
    }

}