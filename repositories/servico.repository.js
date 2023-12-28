import sequelize from "./db.js"
import Servico from "../models/servico.model.js"

const insertServico = async(servico) => {
  try {
    return await Servico.create(servico)
  } catch(error) {
    throw error
  }
}

export default {
  insertServico
}