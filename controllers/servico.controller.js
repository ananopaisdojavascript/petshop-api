import ServicoService from "../services/servico.service.js";

const createServico = async(request, response, next) => {
  try {
    let servico = request.body
    const areTheFieldsValid = !servico.descricao || !servico.valor ||  !servico.animalId || !servico.proprietarioId
    if (areTheFieldsValid) {
      throw new Error("O preenchimento dos campos de descrição, valor, id do animal e id do proprietário é obrigatório.")
    }
    servico = await ServicoService.createServico(servico)
    logger.info(`POST /servico - ${JSON.stringify(servico)}`);
    response.send(servico)
  } catch(error) {
    next(error)
  }
}

const getServicos = async (request, response, next) => {
  try {
    response.send(await ServicoService.getServicos(request.query.proprietarioId))
    logger.info("GET /servico")
  } catch (error) {
    next(error)
  }
}

const getServico = async (request, response, next) => {
  try {
    response.send(await ServicoService.getServico(request.params.id));
    logger.info("GET /servico/:id");
  } catch (error) {
    next(error);
  }
};


const updateServico = async(request, response, next) => {
  try {
    let servico = request.body
    const areTheFieldsValid = !servico.servicoId || !servico.descricao || !servico.valor || !servico.animalId || !servico.proprietarioId
    if (areTheFieldsValid) {
      throw new Error("O preenchimento dos campos de descrição, valor, id do animal e id do proprietário é obrigatório.")
    }
    servico = await ServicoService.updateServico(servico)
    logger.info(`PUT /servico - ${JSON.stringify(servico)}`)
    response.send(servico)
  } catch(error) {
    next(error)
  }
}

const deleteServico = async (request, response, next) => {
  try {
    await ServicoService.deleteServico(request.params.id)
    response.end();
    logger.info(`DELETE /servico/:id - ${request.params.id}`);
  } catch (error) {
    next(error);
  }
};

export default {
  createServico, getServicos, getServico, updateServico, deleteServico
}