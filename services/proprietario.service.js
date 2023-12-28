import ProprietarioRepository from "../repositories/proprietario.repository.js"
import AnimalRepository from "../repositories/animal.repository.js"

const createProprietario = async (proprietario) => {
  return await ProprietarioRepository.insertProprietario(proprietario)
}

const getProprietarios = async () => {
  return await ProprietarioRepository.getProprietarios()
}

const getProprietario = async (id) => {
  return await ProprietarioRepository.getProprietario(id)
}

const updateProprietario = async (proprietario) => {
  return await ProprietarioRepository.updateProprietario(proprietario)
};

const deleteProprietario = async (id) => {
  const animais = await AnimalRepository.getAnimaisByProprietarioId(id)
  if(animais) {
    throw new Error("Não é possível excluir o proprietário.")
  }
  await ProprietarioRepository.deleteProprietario(id)
};

export default {
  createProprietario, getProprietarios, getProprietario, updateProprietario, deleteProprietario
}