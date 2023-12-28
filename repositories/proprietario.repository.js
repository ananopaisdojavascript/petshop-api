import Proprietario from "../models/proprietario.model.js"

const insertProprietario = async (proprietario) => {
  try {
    return await Proprietario.create(proprietario)
  } catch(error) {
    throw Error
  }
}

const getProprietarios = async () => {
  try {
    return await Proprietario.findAll()
  } catch (error) {
    throw error
  } 
}

const getProprietario = async(id) => {
  try {
    return await Proprietario.findByPk(id)
  } catch (error) {
    throw error
  } 
}

const updateProprietario = async (proprietario) => {
  try {
    await Proprietario.update(proprietario, {
      where: {
        proprietarioId: proprietario.proprietarioId
      }
    })
    return getProprietario(proprietario.proprietarioId)
  } catch (error) {
    throw error
  } 
}

const deleteProprietario = async (id) => {
  try {
    await Proprietario.destroy({
      where: {
        proprietarioId: id
      }
    })
  } catch (error) {
    throw error
  } 
}

export default {
  insertProprietario, getProprietarios, getProprietario, updateProprietario, deleteProprietario
}