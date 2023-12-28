import Animal from "../models/animal.model.js"
import Proprietario from "../models/proprietario.model.js"

const insertAnimal = async (animal) => {
  try {
    return await Animal.create(animal)
  } catch (error) {
    throw Error
  }
}

const getAnimais = async () => {
  try {
    return await Animal.findAll({
      include: [
        {
          model: Proprietario
        }
      ]
    })
  } catch (error) {
    throw error
  }
}

const getAnimal = async (id) => {
  try {
    return await Animal.findByPk(id, {
      include: {
        model: Proprietario
      }
    })
  } catch (error) {
    throw error
  }
}

const getAnimaisByProprietarioId = async (proprietarioId) => {
  try {
    return await Animal.findAll(
      {
        where: {
          proprietarioId: proprietarioId
        },
        include: {
          model: Proprietario
        }
      }
    )
  } catch (error) {
    throw error
  }
}

const updateAnimal = async (animal) => {
  try {
    await Animal.update(animal,
      {
        nome: animal.nome,
        tipo: animal.tipo,
        proprietarioId: animal.proprietarioId
      },
      {
        where: {
          animalId: animal.animalId
        }
      })
    return await getAnimal(animal.animalId)
  } catch (error) {
    throw error
  }
}

const deleteAnimal = async (id) => {
  try {
    await Animal.destroy({
      where: {
        animalId: id
      }
    })
  } catch (error) {
    throw error
  }
}

export default {
  insertAnimal, getAnimais, getAnimal, getAnimaisByProprietarioId, updateAnimal, deleteAnimal
}