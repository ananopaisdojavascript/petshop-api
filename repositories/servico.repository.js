import Servico from "../models/servico.model.js"
import Proprietario from "../models/proprietario.model.js"
import Animal from "../models/animal.model.js"

const insertServico = async (servico) => {
  try {
    return await Servico.create(servico)
  } catch (error) {
    throw error
  }
}

const getServicos = async () => {
  try {
    return await Servico.findAll({
      include: [
        {
          model: Proprietario
        },
        {
          model: Animal
        }
      ]
    })
  } catch (error) {
    throw error
  }
}

const getServico = async (id) => {
  try {
    return await Servico.findByPk(id)
  } catch (error) {
    throw error
  }
}

const getServicosByProprietarioId = async (proprietarioId) => {
  try {
    return await Servico.findAll({
      where: {
        proprietarioId: proprietarioId
      },
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

const updateServico = async (servico) => {
  try {
    await Servico.update(servico, {
      where: {
        servicoId: servico.servicoId
      }
    })
    return getServico(servico.servicoId)
  } catch (error) {
    throw error
  }
}

const deleteServico = async (id) => {
  try {
    await Servico.destroy({
      where: {
        servicoId: id
      }
    })
  } catch (error) {
    throw error
  }
}

export default {
  insertServico,
  getServicos,
  getServico,
  getServicosByProprietarioId,
  updateServico,
  deleteServico
}