import ServicoRepository from "../repositories/servico.repository.js"
import ProprietarioRepository from "../repositories/proprietario.repository.js"

const createServico = async (servico) => {
  if (await ProprietarioRepository.getProprietario(servico.proprietarioId)) {
    return await ServicoRepository.insertServico(servico)
  }
  throw new Error("O id do proprietario informado não existe")
}

const getServicos = async (proprietarioId) => {
  if(proprietarioId) {
    return await ServicoRepository.getServicosByProprietarioId(proprietarioId)
  }
  return await ServicoRepository.getServicos()
}

const getServico = async (id) => {
  return await ServicoRepository.getServico(id)
}

const updateServico = async (servico) => {
  if (await ProprietarioRepository.getProprietario(servico.proprietarioId)) {
    return await ServicoRepository.updateServico(servico)
  }
  throw new Error("O id do proprietario informado não existe")
};

const deleteServico = async (id) => {
  await ServicoRepository.deleteServico(id)
};

export default {
  createServico, getServicos, getServico, updateServico, deleteServico
}