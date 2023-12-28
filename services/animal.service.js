import AnimalRepository from "../repositories/animal.repository.js"
import ProprietarioRepository from "../repositories/proprietario.repository.js"

const createAnimal = async (animal) => {
  const proprietario = await ProprietarioRepository.getProprietario(animal.proprietarioId)
  if (!proprietario) {
    throw new Error("O id do proprietário informado não existe")
  }

  if (proprietario.nome) {
    animal = await AnimalRepository.insertAnimal(animal)
    await ProprietarioRepository.updateProprietario(nome)
    return animal
  } else {
    throw new Error("O nome desse proprietário não existe")
  }

}

const getAnimais = async (proprietarioId) => {
  if (proprietarioId) {
    return await AnimalRepository.getAnimaisByProprietarioId(proprietarioId)
  }
  return await AnimalRepository.getAnimais()
}

const getAnimal = async (id) => {
  return await AnimalRepository.getAnimal(id)
}

const updateAnimal = async (animal) => {
  return await AnimalRepository.updateAnimal(animal)
};

const deleteAnimal = async (id) => {
  const animal = await AnimalRepository.getAnimal(id)
  if (animal) {
    const proprietario = await ProprietarioRepository.getProprietario(animal.proprietarioId)
    await AnimalRepository.deleteAnimal(id)
    await ProprietarioRepository.updateProprietario(proprietario)
  } else {
    throw new Error("O id do animal informado não existe")
  }
};

export default {
  createAnimal, getAnimais, getAnimal, updateAnimal, deleteAnimal
}