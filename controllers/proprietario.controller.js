import ProprietarioService from "../services/proprietario.service.js";

const createProprietario = async (request, response, next) => {
  try {
    let proprietario = request.body
    const areTheFieldsValid = !proprietario.nome || !proprietario.telefone 

    if (areTheFieldsValid) {
      throw new Error("O preenchimento dos campos de nome e telefone é obrigatório.")
    }
    proprietario = await ProprietarioService.createProprietario(proprietario)
    logger.info(`POST /proprietario - ${JSON.stringify(proprietario)}`);
    response.send(proprietario)
  } catch (error) {
    next(error)
  }
};

const getProprietarios = async (_request, response, next) => {
  try {
    response.send(await ProprietarioService.getProprietarios())
    logger.info("GET /proprietario")
  } catch (error) {
    next(error)
  }
}

const getProprietario = async (request, response, next) => {
  try {
    response.send(await ProprietarioService.getProprietario(request.params.id));
    logger.info("GET /proprietario/:id");
  } catch (error) {
    next(error);
  }
};

const updateProprietario = async (request, response, next) => {
  try {
    let proprietario = request.body;
    const areTheFieldsValid = !proprietario.proprietarioId || !proprietario.nome || !proprietario.telefone 

    if (areTheFieldsValid) {
      throw new Error("O preenchimento dos campos de nome e telefone é obrigatório.")
    }
    proprietario = await ProprietarioService.updateProprietario(proprietario)
    response.send(proprietario)
    logger.info(`PUT /proprietario - ${JSON.stringify(proprietario)}`);
  } catch (error) {
    next(error);
  }
};

const deleteProprietario = async (request, response, next) => {
  try {
    await ProprietarioService.deleteProprietario(request.params.id)
    response.end();
    logger.info(`DELETE /proprietario/:id - ${request.params.id}`);
  } catch (error) {
    next(error);
  }
};

export default {
  createProprietario, getProprietarios, getProprietario, updateProprietario, deleteProprietario
}