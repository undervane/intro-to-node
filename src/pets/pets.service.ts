import { PetType } from "../@types/pet.type";
import { PetsRepository } from "./pets.repository";

export class PetsService {

    petsRepository = new PetsRepository()

    getAll(): PetType[]{
        return this.petsRepository.get()
    }

    getByName(name: string): PetType{
        return this.petsRepository.findByName(name)
    }

    addPet(pet: PetType){
        this.petsRepository.add(pet)
    }

}