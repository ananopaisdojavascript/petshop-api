import AnimalService from "../services/animal.service.js";

const createAnimal = async (request, response, next) => {
  try {
    let animal = request.body
    const areTheFieldsValid = !animal.nome || !animal.tipo || !animal.proprietarioId

    if (areTheFieldsValid) {
      throw new Error("O preenchimento dos campos de nome, tipo e id do proprietário é obrigatório.")
    }
    animal = await AnimalService.createAnimal(animal)
    logger.info(`POST /animal - ${JSON.stringify(animal)}`);
    response.send(animal)
  } catch (error) {
    next(error)
  }
};

const getAnimais = async (request, response, next) => {
  try {
    response.send(await AnimalService.getAnimais(request.query.proprietarioId))
    logger.info("GET /animal")
  } catch (error) {
    next(error)
  }
}

const getAnimal = async (request, response, next) => {
  try {
    response.send(await AnimalService.getAnimal(request.params.id));
    logger.info("GET /animal/:id");
  } catch (error) {
    next(error);
  }
};

const updateAnimal = async (request, response, next) => {
  try {
    let animal = request.body;
    const areTheFieldsValid = !animal.animalId || !animal.nome || !animal.tipo || !animal.proprietarioId

    if (areTheFieldsValid) {
      throw new Error("O preenchimento dos campos de nome, tipo e id do proprietário é obrigatório.")
    }
    animal = await AnimalService.updateAnimal(animal)
    response.send(animal)
    logger.info(`PUT /animal - ${JSON.stringify(animal)}`);
  } catch (error) {
    next(error);
  }
};

const deleteAnimal = async (request, response, next) => {
  try {
    await AnimalService.deleteAnimal(request.params.id)
    response.end();
    logger.info(`DELETE /animal/:id - ${request.params.id}`);
  } catch (error) {
    next(error);
  }
};

export default {
  createAnimal, getAnimais, getAnimal, updateAnimal, deleteAnimal
}