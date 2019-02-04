import { PetType } from "../@types/pet.type";
import { PetsRepository } from "./pets.repository";

export class PetsService {

    petsRepository = new PetsRepository()

    getAll(): PetType[]{
        return this.petsRepository.get()
    }

    addPet(pet: PetType){
        this.petsRepository.add(pet)
    }

}