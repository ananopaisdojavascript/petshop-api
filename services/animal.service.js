import AnimalRepository from "../repositories/animal.repository.js"
import ProprietarioRepository from "../repositories/proprietario.repository.js"

const createAnimal = async (animal) => {
  if (await ProprietarioRepository.getProprietario(animal.proprietarioId)) {
    return await AnimalRepository.insertAnimal(animal)
  }
  throw new Error("O id do fornecedor informado não existe")
}

const getAnimais = async (proprietarioId) => {
  if(proprietarioId) {
    return await AnimalRepository.getAnimaisByProprietarioId(proprietarioId)
  }
  return await AnimalRepository.getAnimais()
}

const getAnimal = async (id) => {
  return await AnimalRepository.getAnimal(id)
}

const updateAnimal = async (animal) => {
  if (await ProprietarioRepository.getProprietario(animal.proprietarioId)) {
    return await AnimalRepository.updateAnimal(animal)
  }
  throw new Error("O id do fornecedor informado não existe")
};

const deleteAnimal = async (id) => {
  await AnimalRepository.deleteAnimal(id)
};

export default {
  createAnimal, getAnimais, getAnimal, updateAnimal, deleteAnimal
}